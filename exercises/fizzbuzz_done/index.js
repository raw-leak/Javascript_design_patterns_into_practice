// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// iteration

// function fizzBuzz(n) {
    // for (let i = 0; i <= n; i++) {

    //     if (!(i % 5) && !(i % 3))
    //         return "FizzBuzz"
    //     else if (!(i % 3))
    //         return "Fizz"
    //     else if (!(i % 5))
    //         return "Buzz"
    //     else
    //         return i

    // }

// }

// from n to 0 (recursive)

// function fizzBuzz(n) {

//     if (!(n % 5) && !(n % 3))
//         console.log("FizzBuzz")
//     else if (!(n % 3))
//         console.log("Fizz")
//     else if (!(n % 5))
//         console.log("Buzz")
//     else
//         console.log(n)

//     if (n > 1)
//         fizzBuzz(n - 1)

// }

// from 1 to n (recursive)

function fizzBuzz(n) {

    if (n > 1) fizzBuzz(n - 1)

    if (!(n % 5) && !(n % 3))
        console.log("fizzbuzz")
    else if (!(n % 3))
        console.log("fizz")
    else if (!(n % 5))
        console.log("buzz")
    else
        console.log(n)

}

module.exports = fizzBuzz;
