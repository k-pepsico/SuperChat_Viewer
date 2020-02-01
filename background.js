let Data = {};
let sumSuperChat = {};

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        console.log(sender);
        if (request.url in Data) {

        } else {
            Data[request.url] = {};
            sumSuperChat[request.url] = 0;
        }

        if (request.primaryKey in Data[request.url]) {

        } else {
            Data[request.url][request.primaryKey] = request.money;
            sumSuperChat[request.url] += parseInt(request.money);
        }
        sendResponse({ sumSuperChat: sumSuperChat[request.url] });
        return true;
    }
);
