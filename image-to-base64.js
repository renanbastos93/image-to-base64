"use strict";

const image2base64 = (url, param) => {
    return new Promise(
        (resolve, reject) => {

            let valid = new RegExp("(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?", "gi");

            if(valid.test(param) === true){

                fetch(
                    url,
                    param || {}
                ).then(
                    (response) => response.arrayBuffer()
                )
                .then(
                    (buffer) => {
                        return window.btoa(
                            [].slice.call(
                                new Uint8Array(buffer)
                            ).map(
                                (bin) => String.fromCharCode(bin)
                            ).join("")
                        );
                    }
                )
                .then(
                    (body) => {
                        resolve(body);
                    }
                ).catch(reject);

            }else{

                reject(null);

            }
        }
    );
};
