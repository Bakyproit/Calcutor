
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
const newBack = document.querySelector(".app__content"); 
const newBackResult = document.q
const bgBar   = document.getElementsByClassName("toggle__bar");
const bgreturn = document.getElementsByClassName("botton-return");
const bgButton = document.getElementsByClassName("button");

console.log(bgBar) ;

const color = ["#d3cdcd","#eeeeee"];

boxToggle.addEventListener("click",function () {
    // newBack.style.background = color[0] ;
    newBackResult.style.background = color[1] ;
});

