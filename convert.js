const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const test = fs.readdirSync(`./v1`);
let firstFile = "./v1";

for(let file of test) {
  console.log(file)
  if(file.endsWith('.html')) { 
    firstFile += '/' + file
    break
  }
}

let a = fs.readFileSync(firstFile, "utf-8");

dom = new JSDOM(a);

let docment = dom.window.document;
let table = docment.querySelectorAll('.table')[0];
let row = docment.querySelectorAll('.tr');

console.log(docment)
// console.log(row)
text = "| ";
columnNum = 0;

row.forEach((element, rowIndex) => {
  element.childNodes.forEach((p) => {
    text += p.innerHTML !== undefined ? `${ p.innerHTML.replace("<p>", "").replace("</p>", "").replace("\n","")} |`: ""
    if(p.innerHTML !== undefined) columnNum++ ;
  })

  if(element.childNodes[1].className === "th"){
    text += `\n`
    while(columnNum > 0){
      text += `| --- `
      columnNum--
    }
    text += `|`
  }
  text += rowIndex === row.length - 1 ? "" : `\n| `;
});

console.log(text);