let Data = {}; // とりま格納する変数
let sumSuperChat = 0;
let countElement = document.querySelector('#label-text');
let youtubeURL = window.parent.document.location.href;
let superChatCount = () => {
    let box = [...document.querySelectorAll('div#header-content-primary-column')];
    box.forEach((element) => {
        let timeStamp = element.nextElementSibling.innerText;
        let boxText = element.innerText.split(/\n/);
        let handleName = boxText[0];
        let money = boxText[1].replace(/^[^￥].+/, '0').replace(/,/g, '').replace(/￥(\d+)/g, '$1');
        let primaryKey = timeStamp + '_' + handleName;

        try {
            chrome.runtime.sendMessage({
                primaryKey: primaryKey, money: money, url: youtubeURL
            }, (res) => {
                countElement.innerHTML = "￥" + res.sumSuperChat.toLocaleString();
                return true;
            });
        } catch (ex) {
            console.log(ex);
        }
    });
}

let executeCount = () => {
    setInterval(superChatCount, 1000);
}

executeCount();
