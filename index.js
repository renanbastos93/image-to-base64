"use strict";

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const imageToBase64 = param => {

    return new Promise(
        (resolve, reject) => {
            
            let valid = param.match(/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi);
            
            if(!valid){
                
                if(param.match(/(\.(jpg)|\.(png)|\.(jpeg))/gi)){
                    
                    if(fs.statSync(param).isFile()){
                        resolve(
                            fs.readFileSync(
                                path.resolve(param)
                            ).toString('base64')
                        );
                    }else{
                        reject(null);
                    }

                }else{
                    reject(null);
                }

            }else{

                fetch(
                    param
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
        }
    );
    
};

module.exports = exports = imageToBase64;