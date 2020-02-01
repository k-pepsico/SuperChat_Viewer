window.addEventListener('load', async () => {
    // document.querySelector('button.url').addEventListener('click', () => {
    await chrome.tabs.executeScript(null, { code: `superchat.js` });
    // });
});