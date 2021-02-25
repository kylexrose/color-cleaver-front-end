const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

let color1 = getInput(1);
let color2 = getInput(2);

if(!color1){
    console.log("Please enter at least one color")
}else if(!color2){
    if (isValidSecondary(color1)){
        console.log(colorDeconstructor(color1))
    }else{
        console.log("Please enter a valid secondary color.")
    }
}else if (isValidPrimary(color1) && isValidPrimary(color2) && color1 !== color2){
        console.log(colorCombinator(color1, color2))
}else console.log("Please enter two different valid primary colors.")

