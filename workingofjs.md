# Working Mechanism of JS Engine

JavaScript is a lightweight, single-threaded, synchronous and interpreted, just-in time compiled language. The working mechanism of js is as simple but people get mix it up. So, before jumping straight into understanding the code execution we must understand few terminologies that we use across this article.

**Scope**: It can be defined as the set rules that govern whether a memory block (**variable**) is **visible** or **available** to the    **current context of execution** or not. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

**Lexical Environment**: It's the internal js engine construct that holds **identifier-variable mapping**. So basically one can that is just a lookup-object which is prepared based on the scope or the rules defined by ECMAScript. A lexical environment also holds a reference to a **parent lexical environment**.

**Execution context:** It is the internal javascript construct to track execution of a function or the global code. The js engine maintains a stack data structure - **execution context stack** or **call stack**, which contains these contexts and the **global execution context** stays at the bottom of this stack.

The above terms are very closely related but are distinct from each other. To sum up, based on set the rules of the current scope, a lexical environment is prepared and then is associated with a execution context. The JS engine maintains the execution context and refers the lexical environment to identify the variable.

### # Example

    var a = 10
    
    console.log(a)

The above code is simple and will log 10 in console. But let understand the code in much more depth and find what's really going behind the scenes.

The JS Engine has two parts, **compiler** and **executer**. Consider the above example now, during the compilation the code scan is scan and look-up table i.e, lexical environment is prepared along with a execution context. Since the scope governing the code is the global scope. The execution context is also called **global execution context**,  and lexical environment associated with it is called **global lexical environment**.

Now coming back to code the compiler scanned the code from top to bottom and  created a lexical environment and added a variable **a** to it, along with all the apis (**dom**, **timer**, **console** **etc**.) supplied by the **browser**. The line 1, still not executed but a memory is reserved for it, with a placeholder **"undefined"**.

After the compiler is done, the executer executed a line 1 and encounters a assignment 10 to  the memory block named a. Then goes to line 2 and looks for the memory block in the lookup table,  and log the value present in it. 

Lets try playing around same two line code. 

#### # Move the `console.log` to top of page

    console.log(a)
    
    var a = 10

Now we may think that the code will throw a error now. But remember the compiler which prepared the lexical environment and reserved memory block for a with value undefined ? This is phenomenon is called [hoisting](https://github.com/AnirudhKumar10/JS-Questions/blob/master/hoisting.md). 

#### # Remove  `var a = 10`

    console.log(a) // ReferenceError

Since the line was removed,  the executer couldn't find any variable **a** in its lexical environment and throws an Error.

### # Some more examples

    var a = 10
    
    function foo() {
    	var a = 20
    	console.log(a)  // 20
    }
    
    foo()
    
    console.log(a) // 10

Its obvious that the last line prints 10 in console. But why 20 is printed ? Introducing local/function scope, there is another memory block named **a** which is defined inside the local scope of function **foo**. 

Let's try another example,
    
    var a = 10
    
    {
    	var a = 20
    	console.log(a)  // 10
    }
    
    console.log(a) // 10

Do you think here 10 will be printed twice ? No,  20 is printed twice over here. But why ? The variable **a** defined inside the block shadows variable a defined at line 1. So, lets understand that variable declared with `var` is local **scoped** or **global** scoped.

One more example, 
    
    let a = 10
    
    {
    	let a = 20
    	console.log(a)  // 20
    }
    
    console.log(a) // 10

This code also gives out the same output 20 10. Summing variable declared with `let` is **blocked** scoped introduced in the new ES6 syntaxes.

You can know more about referring the article [scope](https://github.com/AnirudhKumar10/JS-Questions/blob/master/scopeandclosure.md).
