"use strict";

if (typeof module !== 'undefined') {
    module.exports = image2base64;
}

function validUrl (url) {
    return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi.test(url);
}

function validTypeImage (image) {
    return /(\.(jpg)|\.(png)|\.(jpeg))/gi.test(image);
}

function base64ToBrowser (buffer) {
    return window.btoa([].slice.call(new Uint8Array(buffer)).map((bin) => String.fromCharCode(bin)).join(""));
}

function base64ToNode (buffer) {
    return buffer.toString("base64");
}

function readFileAndConvert (param) {
    const fs = require("fs");
    const path = require("path");
    
    if (fs.statSync(param).isFile()) {
        return base64ToNode(fs.readFileSync(path.resolve(param)).toString("base64"));
    }
    return null;
}

function image2base64(urlOrImage, param) {
    if (typeof window !== 'undefined' && ('document' in window && 'navigator' in window)) {
        if (!('fetch' in window && 'Promise' in window)) {
            console.log('[*] It\'s image2base64 not compatible with your browser.');
            return Promise.reject('[*] It\'s image2base64 not compatible with your browser.');
        }
        return fetch(urlOrImage, param || {}).then((response) => response.arrayBuffer()).then(base64ToBrowser);
    } else {
        if (validUrl(urlOrImage)) {
            const fetch = require("node-fetch");
            return fetch(urlOrImage).then((response) => response.arrayBuffer()).then(base64ToNode);
        } else {
            if (validTypeImage(urlOrImage)) {
                return Promise.resolve(readFileAndConvert(urlOrImage));
            } else {
                return Promise.reject('[*] Occurent some error... [validTypeImage] == false');
            }
        }
    }
}
