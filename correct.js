"use strict";

function firstWord(a, b) {
    // returns the first word in a given text.

    // your code here
    return a.match(/^\w*/)[0];
}

// These "asserts" using for self-checking and not for auto-testing
console.log(firstWord('hello world'));
console.log(firstWord('hello, world'));