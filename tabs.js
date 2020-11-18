let firstTab = {
    index : 1,
    url : 'https://calendar.google.com/',
    active : true,
    pinned : false
};

let secondTab = {
    index : 1,
    url : 'http://www.trello.com',
    active : false,
    pinned : false
};

let thirdTab = {
    index : 1,
    url : 'http://www.slack.com',
    active : false,
    pinned : false
};

let fourthTab = {
    index : 1,
    url : 'http://www.gmail.com',
    active : false,
    pinned : false
};

let fifthTab = {
    index : 1,
    url : 'http://www.drive.google.com',
    active : false,
    pinned : false
};

let tabsOpener = document.getElementById('tabsOpener');

tabsOpener.onclick = function(element) {
    chrome.tabs.create(firstTab);
    chrome.tabs.create(secondTab);
    chrome.tabs.create(thirdTab);
    chrome.tabs.create(fourthTab);
    chrome.tabs.create(fifthTab);
};