'use strict';

let professional = document.getElementById('professional');
let impersonal = document.getElementById('impersonal');

professional.onclick = function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let url = tabs[0].url;
    if (url.includes("compose")) {
      chrome.tabs.sendMessage(tabs[0].id, {type:"professional"});
    }
  });
};

impersonal.onclick = function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let url = tabs[0].url;
    if (url.includes("compose")) {
      chrome.tabs.sendMessage(tabs[0].id, {type:"impersonal"})
    }
  });
};