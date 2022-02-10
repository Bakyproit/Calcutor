
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
const bgResult = document.getElementsByClassName("app__result-output");
const toggleCheck = document.getElementsByClassName("toggle__checkbox");
const toggleCheck = document.getElementsByClassName("toggle__checkbox");


console.log(toggleCheck) ;
toggleCheck.onclick = function() {
    // newBack.style.transform = "translateX(50%)" ;
};

boxToggle.onclick = function() {
    newBack.style.background = "#d3cdcd" ;
    // newBack.style.transform = "translateX(50%)" ;
};


