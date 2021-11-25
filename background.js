chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('request', request);
  console.log(chrome.extension);
  window.open(chrome.extension.getURL('main/index.html'))
});
