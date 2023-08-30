let input = document.querySelector(".input");
let items = document.querySelectorAll("#button");
let result = document.getElementById('result');
let clear = document.getElementById("clear");
let opearator = document.querySelectorAll("#operator"); 
let del = document.getElementById("del")
let stop = false;

//xử lý nhấp chuột
function inputNumber(){
    if(stop){
        input.textContent += items;
         
     } else{
         input.textContent += items;
         
     }
}

items.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        items = e.target.textContent;
        inputNumber () 
    });
}); 

//xử lý nhấp chuột
opearator.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        opearator = e.target.textContent;
        let currentString = input.textContent;
        if(currentString === "+" || currentString === "-" || currentString === "*" || currentString === "÷"){
            input.textContent += opearator;

        } else {
            input.textContent += opearator;
        }
        
    })
})

clear.addEventListener("click", () =>{
    input.textContent = "";
})
del.addEventListener("click", () => {
    input.textContent = input.textContent.slice(0,-1)
    
})


result.addEventListener("click", () => {  
   
  let inputString = input.innerHTML;
  let numbers = inputString.split(/\+|\-|\*|\//g);
  let operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

   

  let divide = operators.indexOf("/");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("/");
  }

  let multiply = operators.indexOf("*");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("*");
  }

  let subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  let add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers;
})

