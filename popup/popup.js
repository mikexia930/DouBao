window.onload = () => {
  window.open(chrome.extension.getURL('main/index.html'))
};

//document.getElementById('a12').addEventListener('click', () => {
//  chrome.runtime.sendMessage({greeting: "hello"});
//})

