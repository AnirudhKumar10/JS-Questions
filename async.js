async function calculator(num1, num2){
    let answer

    function myAdder(num1, num2) {
        setTimeout(function(){
            //assume a time taking operation
            answer = num1 + num2
            return new Promise(resolve(answer))
        }, 3000);
    }

    answer = await myAdder(num1, num2);
    console.log(answer)
}

calculator(5,5)
