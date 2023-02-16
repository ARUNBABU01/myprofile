var a = 10;
function abc(){
    console.log(a);
    var a = 20;
    console.log(a);
}
console.log(a);
abc();

When the code above is executed, the output would be:

10
undefined
20

Explanation:

var a = 10 declares a global variable a with a value of 10.
When the abc function is called, the first console.log(a) logs undefined, because the var a = 20 declaration inside the function creates a local variable a that shadows the global variable with the same name. The JavaScript interpreter hoists the declaration to the top of the function scope, but the assignment of 20 is still done where it is written in the code.
The second console.log(a) logs 20, because a now refers to the local variable inside the abc function.
Finally, when the code returns to the global scope, the console.log(a) logs 10, because a again refers to the global variable with that name.

