// EXERCISE:
// You can write all the code natively (for cycles and such) or you can use some advanced functions which JS arrays provides in case you see them fit
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// There can be multiple solutions to each task, solve it as you see fit.
// You will work with array `numbers` which will be generated by code (code below) in every task.
// Write these functions:

// This block generates array with random length with values between 1-100
export let numbers = [];
const length = Math.ceil(Math.random() * 10) + 5;
for (let i = 0; i < length; i = i + 1) {
  numbers.push(Math.ceil(Math.random() * 100));
}

// a) Function which will print to console a whole array
export const printArray = (numbers) => {
    console.log("a)")
  for (let n of numbers) {
    console.log(n)
  }
 
};
printArray(numbers)

// b) Function which will print to console the length of array
export const printLength = (numbers) => {
  // Your code:
    console.log("b)")
    console.log(numbers.length)
};
printLength(numbers)

// c) Function which will print to console the first element of array
export const printFirstItem = (numbers) => {
    // Your code:
    console.log("c)")
    if (numbers.length > 0)
        console.log(numbers[0])
    else
        console.log("numbers nema prvni item")

};
printFirstItem(numbers)

// d) Function which will print to console the last element
export const printLastItem = (numbers) => {
    // Your code:
    console.log("d)")
    if (numbers.length > 0)
        console.log(numbers[numbers.length - 1])
    else
        console.log("kratky array az moc haha")

};
printLastItem(numbers)

// e) Function which will print to console the largest number (You can check Math functions)
export const printLargestItem = (numbers) => {
    // Your code:
    console.log("e)")
    if (numbers.length === 0) {
        console.warn("prazdny array")
        return
    }
    let largest = numbers[0]
    for (let n of numbers) {
        if (n > largest)
            largest = n
    }
    console.log(`největší číslo je ${largest}`)
    console.log(`největší je ${Math.max(...numbers)}`)

};
printLargestItem(numbers)

// f) Function which will print to console the smallest number (You can check Math functions)
export const printSmallestItem = (numbers) => {
    // Your code:
    console.log("f)")
    if (numbers.length === 0) {
        console.warn("prazdny array")
        return
    }

    let largest = numbers[0]
    for (let n of numbers) {
        if (n < largest)
            largest = n
    }
    console.log(`nejmenší číslo je ${largest}`)
    console.log(`nejmenší je taky ${Math.min(...numbers)}`)
};
printSmallestItem(numbers)

// g) Function which will print to console the sum of all numbers in array (You can check reduce function)
export const printSum = (numbers) => {
    // Your code:
    let sum = 0
    console.log("g)")
    for (let n of numbers) {
        sum += Number(n)
    }
    console.log(`suma je ${sum}`)
    console.log(`suma je taky ${numbers.reduce((partialSum, a) => partialSum + a, 0)}`)
};
printSum(numbers)

// h) Function which will print to console the difference between the largest and the smallest number (You can check Math functions)
export const printSALDifference = (numbers) => {
    // Your code:
    console.log("h)")
    console.log(`nejvyssi je ${Math.max(...numbers)}`)
    console.log(`nejmensi je ${Math.min(...numbers)}`)
    console.log(`rozdil je ${Math.max(...numbers) - Math.min(...numbers)}`)
};

// i) Function which will print to console the average of all numbers (You can check reduce function)
export const printAverage = (numbers) => {
    // Your code:
    console.log("i)")
    console.log(`průměr je ${numbers.reduce((previous, current) => previous + current) / numbers.length}`)

};
printAverage(numbers)

// j) Function which will print to console the index of largest number (You can check Math functions)
export const printLargestsIndex = (numbers) => {
    // Your code:
    console.log("j)")
    console.log(`vsechny ${numbers}`)
    console.log(`index nejvyssiho ${numbers.indexOf(Math.max(...numbers))}`)
};
printLargestsIndex(numbers)

// k) Function which will print to console the even numbers (not the array of even numbers),
// if array doesn't contain any even number, show text "Even number isn't in array"
export const printEvenNums = (numbers) => {
    // Your code:
    console.log("k)")
    console.log("all:")
    console.log(numbers)
    let even = numbers.filter(n => n % 2 === 0)
    console.log("even")
    if (even.length === 0) {
        console.log("Even number isn't in array")
    } else {
        console.log(even)
    }
};
printEvenNums(numbers)

// l) Function which will multiple by 2 every number in array and print the array to console
// Example: printNumsMultipliedBy2([1,2,3]) -> [2,4,6]
export const printNumsMultipliedBy2 = (numbers) => {
    // Your code:
    console.log("l)")
    console.log("previous:")
    console.log("\t" + numbers)
    console.log("later:")
    console.log("\t" + numbers.map(n => n * 2))
};
printNumsMultipliedBy2(numbers)