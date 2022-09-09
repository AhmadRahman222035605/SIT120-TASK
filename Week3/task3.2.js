const stringArray = ["Ahmad", "John", "Alex", "Nathan"];
const numberArray = [6, 12, 5, 4, 2];

console.log(stringArray);
console.log(numberArray);


//find method 
console.log(stringArray.find((string1) => string1 === 'Ahmad'));

//findIndex method
console.log(stringArray.findIndex((string1) => string1 === 'John'));

//push method 
console.log(numberArray.push(8));
console.log(numberArray);

//pop method
console.log(numberArray.pop());
console.log(numberArray);

//sort method
console.log(numberArray.sort());


