// ==UserScript==
// @name        invi-redirect
// @namespace   https://github.com/bachig26
// @match       http*://youtu.be/*
// @match       http*://*.youtube.com/*
// @match       http*://*.youtube-nocookie.com/*
// @grant       GM_getValue
// @grant       GM_setValue
// @version     1.0
// @author      bachig26
// @description Unofficial and Simple invidious-redirect userscript
// @homepageURL https://github.com/bachig26/bachig26.github.io
// @downloadURL https://github.com/bachig26/bachig26.github.io/raw/main/invi-redirect.user.js
// @license      GPL-3.0 License
// @run-at document-start
// ==/UserScript==

// Sets default values
const configDefaultValues = [
    ["invidiousEndpoint", "https://redirect.invidious.io/"],
	["preferredYoutubeFrontend", "invidious"],
	["redirectYoutube", true]
];


for (let val of configDefaultValues) {
    if (GM_getValue(val[0]) === undefined) {
        GM_setValue(val[0], val[1]);
    }
}

// Gets config settings
const invidiousEndpoint = GM_getValue("invidiousEndpoint", "https://redirect.invidious.io/");
const preferredYoutubeFrontend = GM_getValue("preferredYoutubeFrontend", "invidious");

const redirectYoutube = GM_getValue("redirectYoutube", true);

const host = window.location.hostname;
const path = window.location.pathname;
const href = window.location.href;

switch (host) {
    case "youtu.be":
    case "youtube.com":
    case "www.youtube.com":
    case "www.youtube-nocookie.com":
        if (redirectYoutube) {
            window.location.replace(`${invidiousEndpoint}${preferredYoutubeFrontend}/${path}`);
        }
}