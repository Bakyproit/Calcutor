
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

console.log(newBack) ;

const color = ["#d3cdcd","#eeeeee"];

boxToggle.addEventListener("click",function () {
    newBack.style.background = "#d3cdcd" ;
});
boxToggle.addEventListener("click",function () {
    bgResult.style.background = "#d3cdcd" ;
});