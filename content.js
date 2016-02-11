chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tabs) {
	if (changeInfo.status == "complete") { // tab is ready
		chrome.tabs.executeScript(tabId, {file: "scanForTrump.js", runAt: "document_end"}, function (response) {});
	}
});