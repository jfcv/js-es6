

const a = (x,y,...rest) => {
    let PREV_VALUE = x + y;
    let total = rest.reduce((previous,number) => { //O(n)
        return previous + number;
    }, PREV_VALUE);
    console.log(total);
};

a(10,20,30,40);

const family = (lastname, ...names) => {
    names.forEach(name => {
        console.log(`${name} ${lastname}`);
    });
};

let names = ['Nick','Jane','Bob','Jessica'];

family('Smith',...names);