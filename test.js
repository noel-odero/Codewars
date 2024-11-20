// // let str = "1 2 3 4 5"
// // // console.log(parseInt(str.split(' ')))
// // console.log(str.split(' ').map(Number)) // [1, 2, 3, 4, 5]



// // let name = {
// //     firstName: "John",
// //     lastName:  "Doe",
// //     printFullName: function(city, country) {
// //         console.log(this.firstName + " " + this.lastName + "from " + city + ", " + country);
// //     }


// // }

// // name.printFullName() // John Doe
// // let name2 = {
// //     firstName: "Jane",
// //     lastName:  "Doe",
// // }
// // // function borrowing
// // name.printFullName.apply(name2, ["Nairobi", "Kenya"]) // Jane Doe


// // // bind method
// // let printMyName = printFullName.bind(name2, "Nairobi", "Kenya")
// // console.log(printMyName)

// // let arr = [10, 2, 30, 4, 35, 27];
// // // arr.reverse();
// // // console.log(arr);
// // // write a function that takes an array and returns a new array with the elements doubled using forEach()

// // function double(arr) {
// //     return arr.reduce((acc, initial) => acc + initial)

// // }





// // let obj = { name: 'John' };
// // // let newPrototype = { age: 30 };
// // // Object.setPrototypeOf(obj, newPrototype);
// // console.log(obj); // 30

// // Write a function that accepts a string containing a list of phone numbers in the format (XXX) XXX-XXXX, and returns an array of valid phone numbers. Use a regular expression to validate the format of each phone number and use exec() to extract matching phone numbers.
// // function extractPhoneNumber(str) {
// //     let phoneNumbers = [];
// //     let phonePattern = /\(\d{3}\) \d{3}-\d{4}/g;
// //     let match;
// //     while (match = phonePattern.exec(str)) {
// //         phoneNumbers.push(match[0]);
// //     }
// //     return phoneNumbers;
// // }
// // let phoneNumbers = extractPhoneNumber('(123) 456-7890 (123) 456-7890');
// // console.log(phoneNumbers); // ['(123) 456-7890', '(123) 456-7890']


// // write a function that uses list() to print an array of numbers from 1 to 10
// // function printNumbers() {
// // //     let numbers = Array.from({ length: 10 }, (_, index) => index + 1);
// // //     console.log(numbers);
// // // }

// // // define a function
// // // const myFunction = () => {
// // //     return(this);
// // //   };

// // //   // call it
// // //   console.log(myFunction());

// // let employee = {
// //   eid: "E102",
// //   ename: "Jack",
// //   eaddress: "New York",
// //   salary: 50000
// // }

// // console.log("Employee=> ", employee);
// // let newEmployee = employee;    // Shallow copy
// // console.log("New Employee=> ", newEmployee);

// // console.log("---------After modification----------");
// // newEmployee.ename = "Beck";
// // console.log("Employee=> ", employee);
// // console.log("New Employee=> ", newEmployee);
// // Name of the employee as well as
// // newEmployee is changed.


// // Write a function insertCharAfterWords that takes a sentence and a special character as arguments. The function should return a new sentence with the special character inserted after every 3 words.

// // function insertCharAfterWords(sentence, char) {
// //     let words = sentence.split(' ');
// //     let newSentence = '';
// //     for (let i = 0; i < words.length; i++) {
// //         newSentence += words[i];
// //         if ((i + 1) % 3 === 0) {
// //             newSentence += char;
// //         }
// //         newSentence += ' ';
// //     }
// //     return newSentence.trim();
// // }
// // let sentence = 'This is a test sentence';
// // let newSentence = insertCharAfterWords(sentence, '*');
// // console.log(newSentence); // This is a* test sentence


// // function insertCharAfterWords (sentence, char) {
// //   let words = sentence.split(' ');
// //   let newSentence = '';
// //   for(let i = 0; i<words.length; i++){
// //     newSentence += words[i];
// //     if((i + 1) % 3 === 0  ) {
// //       newSentence += char
// //     }
// //     newSentence += ' '
// //   }
// //   return newSentence

// // }

// // let sentence = 'This is a test sentence for testing';
// // let newSentence = insertCharAfterWords(sentence, '*');
// // console.log(newSentence);

// // console.log(parseInt("12.3fdggfd"), parseFloat("12.3fdggfd"), Number("123fdggfd"))

// // Write a function that takes in an array of strings, then reverses each string in that array and returns an array of the reversed versions of strings in descending order.

// // input: ["apple", "banana", "cherry"]
// // output: ["yrrehc", "elppa", "ananab"]

// // function reversedOrdered (arr) {
// //   let reversedStr = []
// //  for(let i=0; i<arr.length; i++){
// //   reversedStr.push(arr[i].split("").reverse().join(""))
// //  }
// //    return reversedStr.sort((a,b) => b.localeCompare(a))
// // }

// // let arr = ["hello", "world", "test"]
// // console.log(reversedOrdered(arr))




// // const obj = { x: 10 };
// // const clone = { ...obj };
// // clone.x = 20;
// // console.log(obj.x);
// // console.log(clone.x); // 20
// // console.log(obj === clone); // false

// //

// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.






// function firstNonRepeatingLetter(s) {
//   let str = s.toLowerCase()
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//       return s[i]
//     }
//   }
//   return ''
// }

// console.log(firstNonRepeatingLetter('stress')) // t

// Write a function deepEqual(a, b)  that checks if two values are deeply equal. The function should handle primitive types and objects but not arrays or functions

// function deepEqual(a, b) {
//     return JSON.stringify(a) === JSON.stringify(b)
// }
// console.log(deepEqual(5, '5')); // false
// console.log(deepEqual({ x: 1 }, { x: 1 })); // true
// console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); // false

// Create a function named divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime’

// function divisors(n) {
//     let divisors = [];
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             divisors.push(i);
//         }
//     }
//     return divisors.length ? divisors : `${n} is prime`;

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 console.log(arr.slice(0, -1))