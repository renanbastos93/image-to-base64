const image2base64 = require('./../');

image2base64('http://bit.ly/2hfduaO')
.then(
    a => console.log(a)
)
.catch(
    x => console.log(x)
);