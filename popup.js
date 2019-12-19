'use strict';

let closer = document.getElementById('closer');

closer.onclick = function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let url = tabs[0].url;
    if (url.includes("compose")) {
      chrome.tabs.executeScript(
        { file: "content.js" });
    }
  });
};