
let { output } = require('./Assingments.json');

for(let course of output){
    for(let work of course){
        console.log(work.title);
    }
}