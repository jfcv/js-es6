
const multiply = function(x, y) {
    let z = x * y;
    return z;
}

console.log(multiply(5,6));

const multShort = (x,y) => x * y;

console.log(multShort(5,6));

const objects = () => ({name: 'John'}); //you must use the '()' to invoke the return in this func

console.log(objects());