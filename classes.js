
// ES5

function PersonES5(firstname,lastname,age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

// prototype function
PersonES5.prototype.aboutPerson = function() {
    console.log([`My name is ${this.firstname} ${this.lastname} and I am ${this.age} years old.`]);
}

// prototypical inheritance
function DeveloperES5(firstname,lastname,age,experience,projects) {
    PersonES5.call(this,firstname,lastname,age);
    this.experience = experience;
    this.projects = projects;
}

// prototypical inheritance
DeveloperES5.prototype = Object.create(PersonES5.prototype);

DeveloperES5.prototype.aboutDev = function() {
    console.log([`My name is ${this.firstname} ${this.lastname} and I am ${this.age} years old with ${this.experience} years of experience and I have participated in ${this.projects} projects.`]);   
}

const nickES5 = new PersonES5('Juan','Kurt',24);

const alexDev = new DeveloperES5('Alex','Smith',29,10,5);

console.log(nickES5);

console.log(alexDev);

nickES5.aboutPerson();

alexDev.aboutPerson();

alexDev.aboutDev();

console.log('--------------------------');





//ES6

class PersonES6 {
    constructor(firstname,lastname,age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    aboutPerson() {
        console.log([`My names is ${this.firstname} ${this.lastname} and I am ${this.age} years old.`]);
    }
}

class DeveloperES6 extends PersonES6 {
    constructor(firstname,lastname,age,experience,projects) {
        super(firstname,lastname,age);
        this.experience = experience;
        this.projects = projects;
    }
    aboutDev() {
        console.log([`My name is ${this.firstname} ${this.lastname} and I am ${this.age} years old with ${this.experience} years of experience and I have participated in ${this.projects} projects.`]);
    }
}

const nickES6 = new PersonES6('Nick','Smith',28);

const bobDev = new DeveloperES6('Bob','James',40,15,7);

console.log(nickES6);

nickES6.aboutPerson();

bobDev.aboutDev();

// inheritance
bobDev.aboutPerson();