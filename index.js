const fs = require('fs');
const p = require('path');


let file = fs.readFileSync(p.join(__dirname, "data.json"))
let content = file.toString()
let obj = JSON.parse(content)
console.log(obj.length)

// let firDiv = document.getElementById('first')
// console.log(firDiv)