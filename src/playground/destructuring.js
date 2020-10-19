const person = {
    name: 'Manasi',
    age: 21,
    location: {
        city: 'Vadodara',
        temp: 27
    }
};
const {name, age} = person;
const {city, temp} = person.location;
console.log(`${name} is ${age}.`);
if(city && typeof temp === 'number'){
    console.log(`It's ${temp} in ${city}.`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};
const {name: publisherName = 'Self-Publish'} = book.publisher;
console.log(`${publisherName} is the name of the publisher.`);

const address = ['C/2 Kumkum Duplex', 'Vadodara', 'Gujarat', '390023'];
const [house, cityname, state = 'New York', zip] = address;
console.log(`I'm from ${cityname}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const[itemname, small, medium, large] = item;
console.log(`A medium ${itemname} costs ${medium}.`);
