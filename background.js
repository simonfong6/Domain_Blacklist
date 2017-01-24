chrome.runtime.onMessage.addListener(function(request, sender) {
    chrome.tabs.remove(sender.tab.id);
});
