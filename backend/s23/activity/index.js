// Noemi Baculi

let firstName = "Noemi ";
let lastName = "Baculi";
let age = 28;
let hobbies = ["Cooking", "Painting", "Running"];
let workAddress = {
    houseNumber: 126,
    street: "Jay Street",
    city: "Davao City ",
    state: "DC"
};

let fullName = firstName + " " + lastName;
let intro = "Hi! My name is " + fullName;
let str = "Twice";
let num = 27;
let bool = true;
let arr = ["Dahyun", "Chaeyoung", "Mina"];
let obj = { twice: "Dahyun" };


let currentAge = true;

let profile = {
    username: "ming22_",
    fullName: "Noemi Baculi",
    age: 28,
    isActive: false
};

let deposits = [2000, 4000, 600, 100, true, {}, [1, 2, 3]];
let expenses = [1000, 2000, 500, 210];
let isAdmin = "yes";

const interestRate = 30;
const loginKey = "EcommerceAPI";
const bankCode = "BANK123";

let bankBalance = 500;

bankBalance = bankBalance + 100;


console.log("Hello World");
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(workAddress);
console.log(fullName);
console.log(intro);
console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof arr);
console.log(typeof obj);
console.log("My real name is " + realName);
console.log("My current age is: " + currentAge);
console.log("My Full Profile: ");
console.log(profile);
console.log("Your deposits: " + deposits);
console.log("Your expenses: " + expenses);
console.log("Is the current user an admin?: " + isAdmin);
console.log("The current interest rate: " + interestRate);
console.log("The current login key is: " + loginKey);
console.log("Bank code: " + bankCode);
console.log("Updated bank balance: " + bankBalance);


try {
    module.exports = {
        firstName: typeof firstName !== 'undefined' ? firstName : null,
        lastName: typeof lastName !== 'undefined' ? lastName : null,
        email: typeof email !== 'undefined' ? email : null,
        age: typeof age !== 'undefined' ? age : null,
        hobbies: typeof hobbies !== 'undefined' ? hobbies : null,
        workAddress: typeof workAddress !== 'undefined' ? workAddress : null,
        fullName: typeof fullName !== 'undefined' ? fullName : null,
        intro: typeof intro !== 'undefined' ? intro : null,
        str: typeof str !== 'undefined' ? str : null,
        num: typeof num !== 'undefined' ? num : null,
        bool: typeof bool !== 'undefined' ? bool : null,
        arr: typeof arr !== 'undefined' ? arr : null,
        obj: typeof obj !== 'undefined' ? obj : null,
        realName: typeof realName !== 'undefined' ? realName : null,
        currentAge: typeof currentAge !== 'undefined' ? currentAge : null,
        friends: typeof friends !== 'undefined' ? friends : null,
        profile: typeof profile !== 'undefined' ? profile : null,
        deposits: typeof deposits !== 'undefined' ? deposits : null,
        expenses: typeof expenses !== 'undefined' ? expenses : null,
        isAdmin: typeof isAdmin !== 'undefined' ? isAdmin : null,
        interestRate: typeof interestRate !== 'undefined' ? interestRate : null,
        loginKey: typeof loginKey !== 'undefined' ? loginKey : null,
        bankCode: typeof bankCode !== 'undefined' ? bankCode : null,
        bankBalance: typeof bankBalance !== 'undefined' ? bankBalance : null
    };
} catch (err) {}