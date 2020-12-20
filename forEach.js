
let names = ['juan', 'maria', 'ana', 'paulina'];

for (let i = 0; i < names.length; i++) { // it's much faster
    console.log(names[i]);    
}

console.log('--------------------');

names.forEach(function(name) { // it's easier to understand
    console.log(name);
})