const numbers1 = [1,2,3,4];
const numbers2 = [5,6,7,8];

let numbers3 = [];

numbers3 = numbers3.concat(numbers1);

numbers3.push(67);

numbers3 = numbers3.concat(numbers2);

console.log(numbers3);

let numbers4 = [...numbers1, ...numbers2]; // spread operator ! -> easy peasy

console.log(numbers4);

let str1 = ['juan','ana','laura','maria'];
let str2 = str1;
let str3 = [...str1];

str1.push('jorge');

console.log(str2); //this proves str2 a pointer to str1 because prints the same as str1
console.log(str3);

function sum(x,y,z) {
    return x+y+z;
}

let numbers = [10,20,30];

console.log(sum.apply(null, numbers));

console.log(sum(...numbers)); // spread-operator in action ! -> easy