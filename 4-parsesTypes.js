//its the right way to declare a variable
let stringNumber = "1";
//it works, but its deprecated
var stringNumber2 = "1";
//its the way to declare a constante variable
const stringNumber3 = "1";

console.log(stringNumber + stringNumber2);
console.log(parseInt(stringNumber) + parseInt(stringNumber2));

const arrayCity = new Array(
    'Bom Jardim',
    '23 degree',
    'cloudy',
    'windy'
);

console.log(arrayCity);
arrayCity.push('seen 3 seconds ago');
console.log(arrayCity);