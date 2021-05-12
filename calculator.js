
class Calculator{
    constructor(){
        this.result = ""
        this.total = ""
    }
    
    calculate(){
        try{
            this.total=eval(this.result);
            var screen2=document.getElementById("primaryScreen");
            screen2.innerText= `ans = ${this.total}`
        }catch(e){
            var screen2=document.getElementById("primaryScreen");
            screen2.innerText= `error`;
            // setTimeout('this.resetCalculator',5000);
        }
    }
    resetCalculator(){
        this.result="";
        // this.updateScreen();

    }
    setNum(value){
        this.result += value;
    }
    updateScreen(){
        var screen=document.getElementById("secondry-screen");
        screen.innerText =  this.result || 0
    }
    backSpace(){
        this.result=this.result.slice(0,-1);
        this.updateScreen();
    }
    // clearScreen(){
    //     var screen=document.getElementById("secondry-screen");
    //     screen.innerHTML=`0`
    // }
}

const calculator=new Calculator();

const numKeyClickHandler= (num) =>{
    calculator.setNum(num);
    calculator.updateScreen();
}
const resetKeyClickHandler = () =>{
    calculator.resetCalculator();
    calculator.updateScreen();

    var screen2=document.getElementById("primaryScreen");
            screen2.innerText= ``;
}

const resultClickHandler = () =>{
    calculator.calculate();
}

const undoClickHandler =() =>{
    calculator.backSpace();
}

const dayTheme = ()=>{
    const daytheme= document.getElementById("day");
    daytheme.innerHTML=`<link rel="stylesheet" href="./calculatorday.css"/>`
}
const nightTheme= ()=>{
    const daytheme= document.getElementById("day");
    daytheme.innerHTML=`<link rel="stylesheet" href="./calculatornight.css"/>`
}
