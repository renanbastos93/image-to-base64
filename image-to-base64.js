"use strict";
const imageToBase64 = (url, param) => {
    return new Promise(
        (resolve, reject) => {
            fetch(
                url,
                param || {}
            ).then(
                (response) => {
                    return response.buffer();
                }
            )
            .then(
                (body) => {
                    resolve(
                        body.toString('base64')
                    );
                }
            );
        }
    );
};
