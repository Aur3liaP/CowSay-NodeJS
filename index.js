const information = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : (`Je suis ${information.name} et je suis en ${information.campus}`)

}));
