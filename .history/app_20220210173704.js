
let result = document.getElementById("result") ;
function numShow(num){
    result.value += num ;
}
function clearAll(){
    result.value = "" ;
}
function del() {
    result.value = result.value.slice(0,-1);
    // 
}
function calcutor(){
    let x = result.value ;
    let y = eval(x) ;
    result.value = y ;
}



const boxToggle = document.querySelector(".app__title-theme-box-toggle"); 
const newBack = document.querySelector("#newBack"); 
// const buttonDel = document.querySelector("button-del");
// const bgBar   = document.getElementsByClassName("toggle__bar");
const bgResult = document.getElementsByClassName("app__result-output");
// const bgButton = document.getElementsByClassName("button");

console.log(bgResult) ;


boxToggle.addEventListener("click",function () {
    newBack1();
    newBack2()
});

function newBack1(){
    newBack.style.background = "#d3cdcd" ;
}
function newBack2(){
    bgResult.style.background = "#d3cdcd" ;
}
