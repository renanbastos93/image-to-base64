"use strict";

function validUrl (url) {
    return new RegExp("(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?", "gi").test(url);
}

function validTypeImage (image) {
    return new RegExp("(\.(jpg)|\.(png)|\.(jpeg))", "gi").test(image);
}

function base64ToBrowser (buffer) {
    return window.btoa([].slice.call(new Uint8Array(buffer)).map((bin) => String.fromCharCode(bin)).join(""));
}

function base64ToNode (buffer) {
    return buffer.toString("base64");
}

function readFileAndConvert (param) {
    if (fs.statSync(param).isFile()) {
        return base64ToNode(fs.readFileSync(path.resolve(param)).toString("base64"));
    }
    return null;
}

function image2base64(urlOrImage, param) {
    if(validUrl(urlOrImage)) {
        if (typeof window !== 'undefined' && ('document' in window && 'navigator' in window)) {
            if (!('fetch' in window && 'Promise' in window)) {
                console.log('[*] It\'s image2base64 not compatible with your browser.');
                return;
            }
            return fetch(urlOrImage, param || {}).then((response) => response.arrayBuffer()).then(base64ToBrowser);
        } else {
            const fs = require("fs");
            const path = require("path");
            const fetch = require("node-fetch");

            return fetch(urlOrImage, param || {}).then((response) => response.arrayBuffer()).then(base64ToNode)
        }
    } else {
        if (validTypeImage(urlOrImage)) {
            const fs = require("fs");
            const path = require("path");
            const fetch = require("node-fetch");
            
            return Promise.resolve(readFileAndConvert(urlOrImage()));
            
        } else {
            return Promise.reject('[*] Occurent some error... [validTypeImage] == false');
        }
    }
}




