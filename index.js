"use strict";

const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const image2base64 = (param) => {

    return new Promise(
        (resolve, reject) => {
            
            let valid = new RegExp("(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?", "gi");

            if(valid.test(param) === true){
                let validTypeImage = new RegExp("(\.(jpg)|\.(png)|\.(jpeg))", "gi");
                if(validTypeImage.test(param)){
                    
                    if(fs.statSync(param).isFile() === true){
                        resolve(fs.readFileSync(path.resolve(param)).toString("base64"));
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
                        resolve(body.toString("base64"));
                    }
                );

            }
        }
    );
    
};

module.exports = exports = image2base64;
