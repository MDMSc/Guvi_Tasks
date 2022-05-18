// Print odd numbers in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

(function () {
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] % 2 === 0)) {
            console.log(arr[i]);
        }
    }
})();

let odds = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        if (!(arr[i] % 2 === 0)) {
            console.log(arr[i]);
        }
    }
}
odds(arr);

// Convert all the strings to title caps in a string array

let str = ["one", "two", "three", "four"];

(function () {
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].toLowerCase();
        console.log(str[i].charAt(0).toUpperCase() + str[i].slice(1));
    }
})();

let toTitleCaps = function (str) {
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].toLowerCase();
        console.log(str[i].charAt(0).toUpperCase() + str[i].slice(1));
    }
}
toTitleCaps(str);

// Sum of all numbers in an array

let num = [1, 2, 3, 4, 5, 6];

(function () {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    console.log(sum);
})();

let displaySum = function () {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    console.log(sum);
}
displaySum();

// Return all the prime numbers in an array

let prime = [];

(function () {
    prime.push(2);

    for (let i = 3; i < 100; i++) {
        let check = true;
        for (let j = 2; j <= i / 2; j++) {
            if ((i % j) == 0) {
                check = false;
            }
        }
        if (check == true) {
            prime.push(i);
        }
    }
    console.log(prime);
})();

let prime1 = [];
let isPrime = function () {
    prime1.push(2);

    for (let i = 3; i < 100; i++) {
        let check = true;
        for (let j = 2; j <= i / 2; j++) {
            if ((i % j) == 0) {
                check = false;
            }
        }
        if (check == true) {
            prime1.push(i);
        }
    }
    return prime1;
}

let primes = isPrime();
console.log(primes);

// Return all the palindromes in an array

const arr1 = ["abcdcba", 12278, 1221, "cat"];

(function () {
    let palArr = [];
    let start;
    let end;
    let ind;
    for(let i=0; i<arr1.length; i++){
        const el = String(arr1[i]);
        start = 0;
        end = el.length - 1;
        ind = true;

        while(start < end){
            if(el[start] === el[end]){
                start++;
                end--;
            }else{
                ind = false;
                break;
            }
        }
        if(ind == true){
            palArr.push(el);
        }
    }
    console.log(palArr);
})();

const isPalin = function(arr1){
    let palArr = [];
    let start;
    let end;
    let ind;
    for(let i=0; i<arr1.length; i++){
        const el = String(arr1[i]);
        start = 0;
        end = el.length - 1;
        ind = true;

        while(start < end){
            if(el[start] === el[end]){
                start++;
                end--;
            }else{
                ind = false;
                break;
            }
        }
        if(ind == true){
            palArr.push(el);
        }
    }
    console.log(palArr);
}

isPalin(arr1);


// Return median of two sorted arrays of the same size

const sortedArr1 = [1, 12, 15, 26, 38];
const sortedArr2 = [2, 13, 17, 30, 45];

(function(){
    let i=0;
    let j=0;
    let m1, m2;
    let n = sortedArr1.length;
    for(let count=0; count<=n; count++){
        if(i==n){
            m1 = m2;
            m2 = sortedArr2[0];
            break;
        }else if(j==n){
            m1 = m2;
            m2 = sortedArr1[0];
            break;
        }

        if(sortedArr1[i] <= sortedArr2[j]){
            m1 = m2;
            m2 = sortedArr1[i];
            i++;
        } else{
            m1 = m2;
            m2 = sortedArr2[j];
            j++;
        }
    }
    console.log((m1+m2)/2);
})();

const medianFunc = function(){
    let i=0;
    let j=0;
    let m1, m2;
    let n = sortedArr1.length;
    for(let count=0; count<=n; count++){
        if(i==n){
            m1 = m2;
            m2 = sortedArr2[0];
            break;
        }else if(j==n){
            m1 = m2;
            m2 = sortedArr1[0];
            break;
        }

        if(sortedArr1[i] <= sortedArr2[j]){
            m1 = m2;
            m2 = sortedArr1[i];
            i++;
        } else{
            m1 = m2;
            m2 = sortedArr2[j];
            j++;
        }
    }
    console.log((m1+m2)/2);
}
medianFunc();


// Remove duplicates from an array

const dupArr = ["a", "b", "c", "d", "b", "c"];

(function(){
    let uniqueArr = [ ...new Set(dupArr) ];
    console.log(uniqueArr);
})();

const remDup = function(dupArr){
    let uniqueArr = [ ...new Set(dupArr) ];
    console.log(uniqueArr);
}
remDup(dupArr);

// Rotate an array by k times

const origArr = [1, 2, 3, 4, 5];
const k = 3;

(function(){
    let rotateArr = [ ...origArr ];
    for(let i=1; i<=k; i++){
        rotateArr.unshift(rotateArr.pop());
    }
    console.log(rotateArr);
})();

const doRotate = function(){
    let rotateArr = [ ...origArr ];
    for(let i=1; i<=k; i++){
        rotateArr.unshift(rotateArr.pop());
    }
    console.log(rotateArr);
}
doRotate();


