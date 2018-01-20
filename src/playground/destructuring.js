// const person = {
//   name: 'Maycon',
//   age: 26,
//   location: {
//     city: 'Marialva',
//     temp: 25
//   }
// };

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}`);
// const {city, temp: temperature} = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);

//
// Array Destructuring
//

const address = ['325 Rua Braz Izzo', 'Maringa', 'Paraná', '8699000'];
const [, city, state = 'Mato Grosso'] = address;
console.log(`You are in ${city} - ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$3.50', '$4.00'];
const [coffee, , price] = item;
console.log(`A medium ${coffee} costs ${price}`);


