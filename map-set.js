
//map -> new data structure : it uses keys & values : its keys could be anytype 

const mapData = new Map();

mapData.set('key', 'obj');
mapData.set('name', 'john');

console.log(
    mapData,
    mapData.has('key'),
    mapData.get('key')
);

mapData.forEach((value,key) => {
    console.log(value,key);
});

console.log('------------------------');

//set -> it stores just unique values

const newSet = new Set(['john',10,true,'ary']);

for (let value of newSet) {
    console.log(value);
}