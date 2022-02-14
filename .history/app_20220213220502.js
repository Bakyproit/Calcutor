
let result = document.getElementById("result") ;
function numShow(num){
    result.value += num ;
}
function clearAll(){
    result.value = "" ;
}
function del() {
    result.value = result.value.slice(0,-1);
}
function calcutor(){
    let x = result.value ;
    let y = eval(x) ;
    result.value = y ;
}


const one = document.getElementById("one") ; 
const two = document.getElementById("two") ; 
const three = document.getElementById("three") ; 

// console.log(one) ;
one.addEventListener("click" , function(){
    const body = document.querySelector("body") ; 
    const crile = document.getElementById("crile") ;

    body.classList.remove("active2") ; 
    body.classList.remove("active3") ; 
    crile.style.left = "8%" ;
    
});

two.addEventListener("click" , function(){
    const body = document.querySelector("body") ;
    const crile = document.getElementById("crile") ;

    body.classList.add("active2") ; 
    body.classList.remove("active3") ;  
    crile.style.left = "40%" ;
});
three.addEventListener("click" , function(){
    const body = document.querySelector("body") ; 
    const crile = document.getElementById("crile") ;
    // const newBack = document.querySelector("#newBack");
    // const toggle = document.getElementById("toggle") ;
    // const result = document.querySelector("#result");

    body.classList.add("active3") ;
    body.classList.remove("active2") ; 
    crile.style.left = "74%" ;
    // newBack.style.background = "hsl(268, 71%, 12%)" ;
    // toggle.style.background = "hsl(268, 71%, 12%)" ;
    // result.style.background = "hsl(268, 71%, 12%)" ;
    
});



