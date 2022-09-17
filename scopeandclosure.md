
# Closures

Closures are nothing but just the,  reference to outer lexical environment outsides the outer execution context (parent's execution context), which is formed when functions bundled together (enclosed). 

### # Understand with an example 

    function foo() {
    	let a = 10
    	function bar() {
    		console.log(a)
       }
    	bar()
    }
    
    foo()

Here,  the 

![broken_image](./assets/img/closure_1.png)

![broken_image](./assets/img/closure_2.png)
