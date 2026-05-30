chrome.action.onClicked.addListener(function(tab) {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"]
    });
});

chrome.commands.onCommand.addListener(function(command) {
    if (command === "clone-tab") {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (tabs.length === 0) return;
            const currentTab = tabs[0];
            const url = currentTab.url;
            if (url && (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://"))) {
                chrome.tabs.create({ url: url, active: true });
            }
        });
    }
});