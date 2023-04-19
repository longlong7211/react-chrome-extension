export async function getData(key: string) {
    const token = await chrome.storage.local.get([key]);
    return token.gemmaToken;
}