// ==UserScript==
// @name         Force Enable WhatsApp Web Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       rizallaros
// @match        https://web.whatsapp.com/
// @grant        none
// ==/UserScript==

if ( document.readyState === "ready" || document.readyState === "complete" ) {
    document.body.classList.add("dark");
} else {
    document.onreadystatechange = function () {
    if ( document.readyState == "complete" ) {
        document.body.classList.add("dark");
    }
  }
}
