// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var min = 1;
var max = 5;
var current = min;

function loadSoundcloud() {
  window.open("http://www.soundcloud.com","_new");
//}

//function updateIcon() {
  chrome.browserAction.setIcon({path:"play.png"});
  current++;

  if (current > max)
    current = min;
}

//onclose listener change icon back
chrome.browserAction.onClicked.addListener(loadSoundcloud || updateIcon);
updateIcon();
//loadSoundcloud();
