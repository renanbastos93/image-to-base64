# image-to-base64
Generate a image to base64, you can make this using a path or url.

## About
It was think for supplement any situation, as for example save one string in database, too send the string to front-end increment one tag `<img />`

## Getting Start
First you should make one clone of the repository or install via NPM, later call it for where will to use.
```bash
npm i -S image-to-base64
```
After:
```js
const image2base64 = require('image-to-base64');
image2base64("path/to/file.jpg")
    .then(
        (response) => {
            console.log(response); //cGF0aC90by9maWxlLmpwZw==
        }
    )
    .catch(
        (error) => {
            console.log(error); //Exepection error....
        }
    )
```
Is good remember that you can set one url of the image as parameter.

### LICENTE
 MIT