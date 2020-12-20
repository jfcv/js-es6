
let myObj = {
    name: 'John',
    age: 27,
    married: true,
    childrenNames: ['Ann','Nick']
};

console.log(myObj);

let myData = JSON.stringify(myObj);

console.log(myData);

let myParsedObj = JSON.parse(myData);

console.log(myParsedObj);