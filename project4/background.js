// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
//  // No tabs or host permissions needed!
//  console.log('Turning ' + tab.url + ' red!');
////  chrome.tabs.executeScript({
////    code: 'document.body.style.backgroundColor="red"'
////  });
  
  chrome.tabs.insertCSS({
    file: 'main.css'
  });
  
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'main.js'
	});
});