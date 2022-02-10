
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
// const bgBar   = document.getElementsById("bgBar");


function newBackground() {
    newBack.style.background = "#fff" ;
}