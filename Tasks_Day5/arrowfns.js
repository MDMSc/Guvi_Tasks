// Print odd numbers in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let odds = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] % 2 === 0)) {
            console.log(arr[i]);
        }
    }
}
odds(arr);

// Convert all the strings to title caps in a string array

let str = ["one", "two", "three", "four"];

let toTitleCaps = str => {
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].toLowerCase();
        console.log(str[i].charAt(0).toUpperCase() + str[i].slice(1));
    }
}
toTitleCaps(str);

// Sum of all numbers in an array

let num = [1, 2, 3, 4, 5, 6];

let displaySum = _ => {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    console.log(sum);
}
displaySum();

// Return all the prime numbers in an array

let prime = [];
let isPrime = _ => {
    prime.push(2);
    let check;

    for (let i = 3; i < 100; i++) {
        check = true;
        for (let j = 2; j <= i / 2; j++) {
            if ((i % j) == 0) {
                check = false;
            }
        }
        if (check == true) {
            prime.push(i);
        }
    }
    return prime;
}

let primes = isPrime();
console.log(primes);

// Return all the palindromes in an array

const arr1 = ["abcdcba", 12278, 1221, "cat"];

const isPalin = arr1 => {
    let palArr = [];
    let start;
    let end;
    let ind;
    for (let i = 0; i < arr1.length; i++) {
        const el = String(arr1[i]);
        start = 0;
        end = el.length - 1;
        ind = true;

        while (start < end) {
            if (el[start] === el[end]) {
                start++;
                end--;
            } else {
                ind = false;
                break;
            }
        }
        if (ind == true) {
            palArr.push(el);
        }
    }
    console.log(palArr);
}

isPalin(arr1);

