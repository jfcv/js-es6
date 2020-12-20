
const person = {
    firstname: 'Juan',
    lastname: 'Cuadros',
    age: 24,
}

const {age, firstname, lastname} = person; //the order doesn't matter : the property name does

console.log(age, firstname, lastname);

const aboutMe = ({age, firstname, lastname}) => {
    console.log(`I'm ${firstname} ${lastname} and I'm ${age} years old.`);
}

aboutMe(person);