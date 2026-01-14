console.log("Hello World!");
// Making Comments
// Single-line comment (ctrl + /)
/* Multiple line comments (ctrl + shift + /)
	Here you can write
	more comments
	no matter how 
	long wohoooo!
*/

console.log("My name is ...");

//Variables
/*
	camelCase (JS norm)
	PascalCase - still works
	snake_case - python
	small letters - still works

	Syntax:
	keywords (let/const) variableName(customizable) = value(data types);
*/

/*
	List of Data types
	1. String = any words as long as it is inside ""/''
	2. Number = numbers 
	3. Boolean = true or false
	4. null = no value and thats it. (depressed)
	5. undefined = (confused) it starts with no value but can still transform to another value
	6. Object = mimics real world has property and value {} (object literals)
	7. Array = a list separated by comma [] (array literals)
*/

// Variable Initialization
let myPet = "Kong";
console.log(myPet);

myPet = "Siomai";
console.log(myPet);

let footballteam = 11;
console.log(footballteam);

// Not advisable
let x = "Nikkie";
let y = "Malacanang";

console.log(x);
console.log(y);

let isSingaporeBig = false;
console.log(isSingaporeBig);

let isWinter = null;
console.log(isWinter);

//Variable Declaration
let breakfast;
console.log(breakfast);

breakfast = "Tapsilog";
console.log(breakfast);

const lunch = "Sinigang";
console.log(lunch);

// error
// lunch = "Adobo";
// console.log(lunch);

/*
	6. Object = mimics real world has property and value {} (object literals)
	7. Array = a list separated by comma [] (array literals)
*/

const b598 = ["Solomon", "Edryl", "Lord", "Kyle"];
console.log(b598);

//Not advisable
const mixed = ["Girl", false, 83, null, myPet];
console.log(mixed);


const weeklySchedule = {
	Monday: "Wash Dishes",
	Tuesday: "Clean room",
	Wednesday: "Read a book",
	Thursday: "Practice Coding",
	Friday: "Go out with friends",
	Saturday: "Family Day",
	Sunday: "Rest Day"
};

console.log(weeklySchedule);

let person = {
	fullName: "Juan Dela Cruz",
	age: 35,
	isMarried: false,
	contact: ['09123456789', '81234567'],
	address: {
		houseNumber: '123',
		city: "Manila"
	}
}
console.log(person);