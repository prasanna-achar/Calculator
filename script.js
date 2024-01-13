const Display = document.getElementById("display");
const getNumbers = document.querySelectorAll(".Numbers");
const getOperator = document.querySelectorAll(".Operators");

Display.disabled = true;
let num1="";
let num2= "";
let operator = "";

getNumbers.forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
       if(operator == ""){
        if(num1 == ""){
            num1 = numberBtn.value;
        }else{
            num1 = num1 + numberBtn.value;
        }
        Display.value = `\n ${num1}`;
        getOperator.forEach((operation) => {
            operation.addEventListener("click", ()=>{
                operator = operation.value;
                Display.value = `${num1} \n ${operator}`;
            })
        })
       }else{
        if(num2 == ""){
            num2 = numberBtn.value;
        }else{
            num2 = num2 + numberBtn.value;
        }
        Display.value = `${num1}\n${operator}\t${num2}`;
       }
    });
});

let calculate = document.querySelector("#Assign");

calculate.addEventListener("click", () => {
    let solution;

    switch(operator){
        case "+":
            solution = parseFloat(num1)+ parseFloat(num2);
            break;
        case "-":
            solution = parseFloat(num1) - parseFloat(num2);
            break;
        case "*":
            solution = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            solution = parseFloat(num1) / parseFloat(num2);
            break;
        case "%":
            solution = parseFloat(num1) % parseFloat(num2);
            break;
    }
    num2 = "";
    solution = String(solution);
    num1 = solution;
    Display.value = `${num1}`
});

document.querySelector("#deleteAll").addEventListener("click", () =>{
    Display.value = "";
    num1 = "";
    num2 = "";
    operator = "";
});

document.querySelector("#deleteOne").addEventListener("click", () =>{
    if(num2 == ""){
        if(operator == ""){
            num1 = num1.slice(0, -1);
            Display.value = `\n ${num1}`;
        }else{
            operator = "";
            Display.value = `${num1}\n ${operator}`;
        }
    }else{
        num2 = num2.slice(0, -1);
        Display.value = `${num1}\n${operator}\t${num2}`;
    }
});
