# image-to-base64
 Generate a image to base64, you can make this using a path or url.
 
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status](https://travis-ci.org/renanbastos93/image-to-base64.svg?branch=master)](https://travis-ci.org/renanbastos93/image-to-base64)

[npm-image]: https://img.shields.io/npm/v/image-to-base64.svg
[npm-url]: https://npmjs.org/package/image-to-base64
[downloads-image]: https://img.shields.io/npm/dm/image-to-base64.svg
[downloads-url]: https://npmjs.org/package/image-to-base64

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

#### For to use on browser
 You can make import with a tag `script` for you to use. So see the example:
```html
<script src="node_modules/image-to-base64/image-to-base64.js"></script>
```
After you can to use conforme the example above of the Node.JS, but you must use URL.

##### Example web
```js
image2base64("https://whatever-image/")
    .then(
        (response) => {
            console.log(response); //data:image/jpeg;base64,iVBORw0KGgoAAAANSwCAIA...
        }
    )
    .catch(
        (error) => {
            console.log(error); //Exepection error....
        }
    )
```

### LICENSE
 [MIT](https://opensource.org/licenses/MIT)
