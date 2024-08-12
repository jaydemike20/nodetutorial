// module exports
// const generateRandomNumber = require('./utils');

// const {generateRandomNumber, celciusToFahrenheit} = require('./utils');

// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log(`Celcius to fahrenheit: ${celciusToFahrenheit(0)}`)


import getPosts, { getPostsLength }  from "./postController.js";

console.log(getPosts())

console.log(`Posts Length: ${getPostsLength()}`);

// https://youtu.be/32M1al-Y6Ag?si=UjbfvDCjcJo9KWr_&t=2622