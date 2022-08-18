## Hoisting

**Hoisting** means lifting up something by any means. Typically in Javascript, hoisting refers to lifting up / moving the variable declarations to top of its current scope.

#### # Why does hoisting happens in JS ?

It occurs due to working mechanism of Javascript. Most of the people think that js is interpreated language but thats not true. Javascript accualty compiles the code even before a single line of is excecuted. 

During the compilation phase the variable declaration hoisted and each of the variable are allocated memory with default placedholder **"undefined"**. The type of variable is decided dynamically i.e, untill the variable is intiallized with a value the type remains undefined.

**Note:** Javascript only hoists the variable declaration only, and assignment of value or intialization kept in-place.

#### # Example

    console.log(a);  // undefined
    
    var a = 10;

In this example the JS engine does not throws any error as it aware of the variable **a**, which already happened in the compilation phase and undefined is return, the complier assigned the value undefined to it.  When the code reaches the line 2, variable **a** is intiallised with value **10**, and type i.e, number binded to it.
