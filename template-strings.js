const name =  'John';

let age = 28;

let profession = 'instructor';

function personES5() {
    console.log('My name is ' + name + ',\n I\'m ' + age + ' years old and I\'m ' + profession);
}

personES5();

function personES6() {
    return `My name is ${name}, 
    I'm ${age} years old and I'm ${profession}`;
}

//personES6();

function experience(company1, company2) {
    console.log(`${personES6()}. I have ${company1 + company2} years of experience in programming.`);
}

experience(4,7);