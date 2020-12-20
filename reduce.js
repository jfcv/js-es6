
let numbers = [100, 200, 300];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];   
}

console.log(sum);
console.log('-----------------');

let PRE_VALUE = 300;
let total = numbers.reduce(function(previous,number) {
    return previous + number;
}, PRE_VALUE);

console.log(total);
console.log('-----------------');

let firstnames = ['John','Jane','Mary'];
let lastnames = ['Smith','Dow','Brim'];

let fullnames = firstnames.reduce(function(previous, firstname, index) {
    previous.push(firstname + ' ' + lastnames[index]);
    return previous;
}, []);

console.log(fullnames);
console.log('-----------------');
