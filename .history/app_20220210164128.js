
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



const newBack = document.getElementById("newBack"); 
const newBackResult = document.getElementsByClassName("app__result");
const bgBar   = document.getElementsByClassName("toggle__bar");
const bgreturn = document.getElementsByClassName("botton-return");
const bgButton = document.getElementsByClassName("button");

console.log(bgBar) ;

const color = ["#d3cdcd","#eeeeee",];


function newBackground() {
    newBack.style.background =  ;
}
function newBackground() {
    newBackResult.style.background ="#eee" ;
}