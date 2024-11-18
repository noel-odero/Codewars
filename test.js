// let str = "1 2 3 4 5"
// // console.log(parseInt(str.split(' ')))
// console.log(str.split(' ').map(Number)) // [1, 2, 3, 4, 5]



// let name = {
//     firstName: "John",
//     lastName:  "Doe",
//     printFullName: function(city, country) {
//         console.log(this.firstName + " " + this.lastName + "from " + city + ", " + country);
//     }


// }

// name.printFullName() // John Doe
// let name2 = {
//     firstName: "Jane",
//     lastName:  "Doe",
// }
// // function borrowing
// name.printFullName.apply(name2, ["Nairobi", "Kenya"]) // Jane Doe


// // bind method
// let printMyName = printFullName.bind(name2, "Nairobi", "Kenya")
// console.log(printMyName)

// let arr = [10, 2, 30, 4, 35, 27];
// // arr.reverse();
// // console.log(arr);
// // write a function that takes an array and returns a new array with the elements doubled using forEach()

// function double(arr) {
//     return arr.reduce((acc, initial) => acc + initial)

// }





// let obj = { name: 'John' };
// // let newPrototype = { age: 30 };
// // Object.setPrototypeOf(obj, newPrototype);
// console.log(obj); // 30

// Write a function that accepts a string containing a list of phone numbers in the format (XXX) XXX-XXXX, and returns an array of valid phone numbers. Use a regular expression to validate the format of each phone number and use exec() to extract matching phone numbers.
function extractPhoneNumber(str) {
    let phoneNumbers = [];
    let phonePattern = /\(\d{3}\) \d{3}-\d{4}/g;
    let match;
    while (match = phonePattern.exec(str)) {
        phoneNumbers.push(match[0]);
    }
    return phoneNumbers;
}
let phoneNumbers = extractPhoneNumber('(123) 456-7890 (123) 456-7890');
console.log(phoneNumbers); // ['(123) 456-7890', '(123) 456-7890']
