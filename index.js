
function information(number){
document.getElementById("main").value= document.getElementById("main").value + number
}

function calc(){
    let el =document.getElementById("main")
   console.log(eval(el.value))
  
}