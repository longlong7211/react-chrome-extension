import { broadCastMessage, sendMessageToTab } from './utils/backgroundCustomSendMessage';
import { MessageType } from '../types/enum';

chrome.contextMenus.removeAll();

chrome.contextMenus.create({
    id: "gemmaContextMenuPage",
    title: 'Add Gem',
    contexts: ['page']
});

chrome.contextMenus.create({
    id: "gemmaContextMenuImage",
    title: 'Add Photo Gem',
    contexts: ['image']
});


chrome.contextMenus.onClicked.addListener((info, tabs) => {
    let port = chrome.tabs.connect(tabs.id, {});
    port.postMessage({ openPreview: true, info: info, tabs: tabs });
    port.onMessage.addListener((msg) => {
        if (msg.addGem == "done") {
            broadCastMessage({ data: tabs, type: MessageType.UPDATEGEM }, true);
        }

    });
});

chrome.storage.onChanged.addListener(
    () => {
        chrome.storage.local.get(["gemmaToken"]).then((result) => {
            chrome.runtime.sendMessage({ gemmaTokenChange: result.gemmaToken });
        });
    }
)

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    if (message.type == MessageType.UPDATEGEM) {
        broadCastMessage({ type: MessageType.UPDATEGEM }, true);
    }
    if (message.type == MessageType.LOGIN) {
        await sendMessageToTab(tab.id, { type: MessageType.LOGIN }, undefined);
    }
})