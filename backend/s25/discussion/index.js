console.log("Hello World!");
// [FUNCTION]
/*Functions in javascript are lines/blocks of codes that tell our device/application to perform a certain task when called/invoked
Functions are mostly created to create complicated tasks to run several lines of code in succession
They are also used to prevent repeating lines/blocks of codes that perform the same task/function

/*
Syntax:
    function functionName() {
        code block (statement)
    }
*/

//Function Declaration 
/* 
A function definition (also called a function declaration, or function statement) consists of the function keyword. 
*/ 

function sayhello(){
	console.log("Hello Everyone"); 

	// invoking a function

}

sayhello(); 
console.log(sayhello()); 


function displayCarInfo(){
	console.log("Brand: Toyota");
	console.log("Type: Sedan "); 
	console.log ("Price:1.5M"); 
}

displayCarInfo (); 
{   }


const globalVariable = "I'm a global variable"; 
function displayGlobal(){
	console.log(globalVariable);
}


globalVariable(); 
console.log(globalVariable);

/* 
2. Local Scope - 

*/ 

function localFunction(){
	const localFunction = "I'm a local variable" ; 
	console.log (localVariable);
}

localFunction (); 
console.log(localVariable);


{ 
const blockVariable = "I'm a block = scoped variable"; 
console.log(blockVariable);

 }

 function returnFullname (){ 

 	return "Harry"+" "+ "Potter"; 
 	console.log ("Naruto Uzumaki"); 
}

 	returnFullname
        

