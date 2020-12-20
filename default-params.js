// ES5 way
function personES5(firstname,lastname,profession) {
    if (firstname === undefined) {
        firstname = 'John';
    }
    if (lastname === undefined) {
        lastname = 'Kow';
    }

    profession = profession || 'Astronaut';

    console.log(`I'm a ${firstname} ${lastname} 
    and I am a ${profession}`);
}

personES5('John');
personES5('John','Doe','Scientist');

function personES6(firstname = 'Amy', lastname = 'Kurt', profession = 'Actress') {
    console.log(`I'm a ${firstname} ${lastname} 
    and I am a ${profession}`);
}

personES6();
personES6('Anet','Serpa','Pilot');
