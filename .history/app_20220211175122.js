
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



// const boxToggle = document.querySelector(".app__title-theme-box-toggle"); 
// const newBack = document.querySelector("#newBack"); 

// boxToggle.onclick = function() {
//     newBack.style.background = "#d3cdcd" ;
// };

const one = document.getElementById("one") ; 
const two = document.getElementById("two") ; 
const three = document.getElementById("three") ; 

// console.log(one) ;
one.addEventListener("click" , function(){
    const body = document.querySelector("body") ; 
    body.classList.remove("active2") ; 
    body.classList.remove("active3") ; 
    const toggle = document.getElementById("crile") ;
    toggle.style.left = "40%" ;
});

two.addEventListener("click" , function(){
    const body = document.querySelector("body") ;
    const toggle = document.getElementById("crile") ;
    body.classList.add("active2") ; 
    body.classList.remove("active3") ; 
    const toggle = document.getElementById("crile") ;
    toggle.style.left = "40%" ;
});
three.addEventListener("click" , function(){
    const body = document.querySelector("body") ; 
    body.classList.add("active3") ;
    
});



