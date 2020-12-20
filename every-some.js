let persons = [
    {name: 'John', age: 8},
    {name: 'Mary', age: 10},
    {name: 'Nick', age: 25},
    {name: 'Jane', age: 40},
];

let everyPerson = true;
let onlySomePersons = false;

for (let i = 0; i < persons.length; i++) {
    if (persons[i].age < 18) {
        everyPerson = false;
        onlySomePersons = true;
    }    
}

console.log('Every person can vote - ' + everyPerson);
console.log('Only some persons can vote - ' + onlySomePersons);

let everyCounter = 0;
let every = persons.every(function(person) {
    console.log(++everyCounter + ' - ' + (person.age >= 18) ); // && operator: just 1 false & it's done 
    return person.age >= 18;
});

let someCounter = 0;
let some = persons.some(function(person) {
    console.log(++someCounter + ' - ' + (person.age >= 18) ); // OR operator: just 1's true & it's done
    return person.age >= 18;
})


console.log(every);
console.log(some);

