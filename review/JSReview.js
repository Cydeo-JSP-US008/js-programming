
let number;

console.log(number); // undefined
console.log(number * 10); // NaN

number = "JavaScript";

console.log(number);

number = true;

console.log(number);

console.log( typeof number);

number = 100;

console.log(typeof number);

console.log("---------------------------------------");

let actualResult = "100";

let expectedResult = 100;

console.log(actualResult == expectedResult); // true ==  ignores the data type
console.log(actualResult === expectedResult); // false  === does not ignore the data type


let actualTitle = "CYDEO";
let expectedTitle = "cydeo";

console.log(actualTitle.toLowerCase() == expectedTitle.toLowerCase());
console.log(actualTitle.toLowerCase() === expectedTitle.toLowerCase());


console.log("---------------------------------------");

let browserName = "cydeo";

if(browserName === "chrome"){
    console.log("Chrome is selected");
}else if(browserName === "firefox"){
    console.log("firefox is selected");
}else{
    console.log("invalid browser");
}

console.log("---------------------------------------");

switch(browserName){
    case "chrome":
        console.log("Chrome is selected");
        break;

    case "firefox":
        console.log("firefox is selected");
        break;

    default:
        console.log("invalid browser");
}

console.log("---------------------------------------");

for(let i = 1; i <= 20; i++){
    console.log(i);
}

console.log("---------------------------------------");

let str = "JavaScript"

for(let c of str){
    console.log(c);
}

/*
for(String each : dataStructure)
*/


console.log("---------------------------------------");

let s = "abc123de56789ghijklmnop"

s = s.replace(/\d+/g, '');

console.log(s);

console.log("---------------------------------------");

let actualText = "Self Enrollment Portal";
let expectedText = "self enrollment portal";

console.log( actualText.toLowerCase() === expectedText.toLowerCase());

console.log(`Expected text is ${expectedText}, and the actual text is ${actualText}`);

console.log("---------------------------------------");

let elements = [50, 60, 70, 80, 90, 20];

// console.log(elements[0]);
for(let each of elements){
    console.log(each);
}

console.log("-----------------------------");

// use for loop to print each elements of the array in reverse order.
 for(let i = elements.length - 1; i >= 0; i--){
    console.log(elements[i]);
}

console.log("-----------------------------");

/*
Create a function that takes a string,
The function reverses the string with a loop
Then the fuction returns the reversed string.
*/

function reverseString(str){
    let reversedStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log("---------------------------------------");
function countDistinctSubstrings(str) {
    let n = str.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        let seen = new Set();
        for (let j = i; j < n; j++) {
            if (seen.has(str[j])) break;
            seen.add(str[j]);
            count++;
        }
    }
    return count;
}

console.log(countDistinctSubstrings("gfg"));