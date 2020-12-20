const numbers = [2,4,6,8,10];

const doubles = numbers.map(number => number * 2);

console.log(doubles);

var personES5 = {
    firstname: 'Nick',
    lastname: 'Doe',
    sayFullName: function() {
        var that = this; // it needs to define here because if not it wouldn't catch the right scope..
        return function() {
            console.log(that);
            console.log(that.firstname + ' ' + that.lastname);
        }
    }
}

personES5.sayFullName()();

const personES6 = {
    firstname: 'John',
    lastname: 'Dim',
    sayFullName() {
        return () => {
            console.log(this); // it'll get the right scope .. the object properties consequently
            console.log(`${this.firstname} ${this.lastname}`);
        }
    }
}

personES6.sayFullName()();