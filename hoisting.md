## Hoisting

**Hoisting** means to lift up something by any means. Typically in Javascript, hoisting refers to lifting up / moving the variable declarations to top of its current scope.

#### # Why does hoisting happens in JS ?

It occurs due to working mechanism of Javascript. Most of the people think that js is interpreated language but thats not true. Javascript accualty compiles the code even before a single line of it is excecuted. 

During the compilation phase the variable declaration are hoisted and each of the variable are allocated memory space with default placedholder **"undefined"**. The type of variable is decided dynamically i.e, untill the variable is intiallized with a value the type remains undefined.

**Note:** Javascript hoists the variable declaration only, and assignment of value or intialization kept in-place. Also, hoisting is **per-scope phenomenon**.

#### # Example

    console.log(a);  // undefined
    
    var a = 10;

In this example the JS engine does not throws any error as it aware of the variable **a**, which already happened in the compilation phase and undefined is return, the complier assigned the value undefined to it.  When the code reaches the line 2, variable **a** is intiallised with value **10**, and type i.e, number binded to it.
		
#### # How does hoisting works different variable declarations ?

**var**  by default if hoisted to the top of its current excection context. Variables declared with var is intialized with **"undefined"**. 

    console.log(a); // returns undefned from hoisted declarations and not 10
    
    var a = 10; // initialization and declaration.
    
    console.log(a); // returns 10 after the initialization is executed
 
 <br />
 
 **let** & **const**  are also hoisted but not intialized with any value and throws error. The variables are said to be in **temporal deadzone**, i.e, cannot access them untill intialized.

    console.log(a); // ReferenceError
    
    let a = 10; // initialization
  
<br />

**functions** are also hoisted in the same manner as variable.

    print() // can use the funtion before its declared
    
    functions print() {
       console.log("hi")
    }

<br />

**Note:-**
  
Only the function declaration is hoisted and not expression.
     
    foo() // TypeError
	bar() // ReferenceError

	var foo = function bar() { 
	   console.log("hi")
	 }

The following code can be interpreted more accurately as: 

    var foo;
    
    foo() // TypeError
    bar() // ReferenceError
    
    foo = function () { 
	   var bar = ...self... 
       console.log("hi")
    }
 
 Both functions and variables are hoisted, but the functions are hoisted first, and then variables.


    foo(); // 1 
    
    var foo; 
    
    // This expression is ignored though is declared before, as the foo called before the expression
    foo = function() { 
    	console.log(2)
    }
    
    function foo() { 
    	console.log(1) 
    } 


