let persons = [
    {name: 'Mary', gender: 'female'},
    {name: 'John', gender: 'male'},
    {name: 'Jane', gender: 'female'},
    {name: 'Bob', gender: 'male'},
]

let name = persons.find(function(person) {
    return person.name === 'Mary';
})

console.log(persons);
console.log(name);