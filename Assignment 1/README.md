##  Question One
Arrange the following names in alphabetical order:

["Zara", "Alice", "Michael", "Bob", "Christine"]

    names=["Zara", "Alice", "Bob", "Christine"];
    names.sort();
    console.log(names);


## Question Two
Write a function in JavaScript to check if a given password contains repetitive numbers 

(e.g., 111, 222, 333, etc.).

    function hasRepetitiveNumbers(password) {
    if (typeof password !== 'string') return false;
    let count = 0;
    let prevDigit = '';
    
    for (let char of password) {
        if (char === prevDigit && char == !NAN) {
            count++;
            if (count >=1) return true;
        } else {
            count = 0;
            prevDigit = char;
        }
    }
    return false;
    }
    console.log(hasRepetitiveNumbers("pass123111"));
    console.log(hasRepetitiveNumbers("secure456password"));

## Question 3

Write a function that reverses a string

    function reverseString(s) {
    let res = [];
    for (let i = s.length - 1; i >= 0; i--) {
        res.push(s[i]);
    }
    return res.join('');
    }
    var s = "Samuel123welcome";
    console.log(reverseString(s));

## Question 4
Write a function in JavaScript to check if a given string is a pangram.

Example:
Input: "The quick brown fox jumps over the lazy dog" 

    function checkPangram(str) {
    const set = new Set();
    for (let ch of str) {
        if (ch >= "a" && ch <= "z") {
            set.add(ch);
        }
    }
    return set.size === 26;
    }
    let str="The quick brown fox jumps over the lazy dog";
    if (checkPangram(str) == true)
    console.log(str + "\n True, It is a Pangram");
    else
    console.log(
        str + "\n False, It is not a Pangram"
    );

