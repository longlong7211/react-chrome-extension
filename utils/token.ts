export async function getToken() {
    const token = await chrome.storage.local.get(['gemmaToken']);
    return token.gemmaToken;
}

export async function hasToken() {
    const token = await chrome.storage.local.get(['gemmaToken']);
    return token.gemmaToken ? true : false;
}

export async function deleteToken() {
    chrome.storage.local.remove(['gemmaToken'], function () {
        const error = chrome.runtime.lastError;
        if (error) {
            console.error(error);
        }
    });
}
export async function getUserLocal() {
    const token = await chrome.storage.local.get(['gemmaUser']);
    return { username: token.gemmaUser };
}