function test1(){
var a = 10;
function abc(){
    console.log(a);
    var a = 20;
    console.log(a);
}
console.log(a);
abc();
}

test1()

module.exports = {test1}