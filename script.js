let display = document.getElementById('display');
let buttons =document.querySelectorAll('.buttons>button');
let clearBtn = document.getElementById('CE');
let equal = document.getElementById('=');
let pi = document.getElementById('pi');
let Ans = document.getElementById('Ans');

let del = document.getElementById('del');



let append = function (val){
  display.value += val;
}


clearBtn.addEventListener ("click" , ()=>{
    display.value = "";
})


let Answer;
equal.addEventListener("click", ()=>{
    try{
        Answer = eval(display.value);
        display.value = Answer;
    }catch(error){
        display.value = "Error";
    }
});

del.addEventListener("click", ()=>{ 
    display.value = display.value.slice(0, -1);
})

Ans.addEventListener("click", ()=>{
    //handle the repeating error
    if (display.value == "") {
        display.value += Answer;
    }
});


pi.addEventListener("click", ()=>{ 
    display.value += Math.PI.toFixed(4);
});


let e = document.getElementById('e');
e.addEventListener("click", ()=>{
     let CheckValue = Math.E.toFixed(4);
     //Not good but trying to handle the repeating error
      if (display.value == "2.7183") {
        return
    }else{
        display.value += Math.E.toFixed(4);
    }
});


let factorial = document.getElementById('facto');
factorial.addEventListener("click", () => {
    let num = parseInt(display.value); // Convert input to a number

    if (isNaN(num) || num < 0) {
        display.value = "Error"; // Handle invalid input
        return;
    }

    //Factorial Code
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    display.value = result;
});