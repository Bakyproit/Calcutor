
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
    // const newBack = document.querySelector("#newBack");
    // const toggle = document.getElementById("toggle") ;
    // const result = document.querySelector("#result");
    body.classList.add
    body.classList.remove("active2") ; 
    body.classList.remove("active3") ; 
    crile.style.left = "8%" ;
    // newBack.style.background = "hsl(223, 31%, 20%)" ;
    // toggle.style.background = "hsl(223, 31%, 20%)" ;
    // result.style.background = "hsl(224, 36%, 15%)" ;
});

two.addEventListener("click" , function(){
    const body = document.querySelector("body") ;
    const crile = document.getElementById("crile") ;
    // const newBack = document.querySelector("#newBack");
    // const toggle = document.getElementById("toggle") ;
    // const result = document.querySelector("#result");

    body.classList.add("active2") ; 
    body.classList.remove("active3") ; 
    crile.style.left = "40%" ;
    // newBack.style.background = "hsl(0, 5%, 81%)" ;
    // toggle.style.background = "hsl(0, 5%, 81%)" ;
    // result.style.background = "hsl(0, 0%, 93%)" ;
});
three.addEventListener("click" , function(){
    const body = document.querySelector("body") ; 
    const crile = document.getElementById("crile") ;
    // const newBack = document.querySelector("#newBack");
    // const toggle = document.getElementById("toggle") ;
    // const result = document.querySelector("#result");

    body.classList.add("active3") ;
    crile.style.left = "74%" ;
    // newBack.style.background = "hsl(268, 71%, 12%)" ;
    // toggle.style.background = "hsl(268, 71%, 12%)" ;
    // result.style.background = "hsl(268, 71%, 12%)" ;
    
});



