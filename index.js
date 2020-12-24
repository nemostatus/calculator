
function information(number){
document.getElementById("main").value= document.getElementById("main").value + number
}

function calc(){
    let el =document.getElementById("main")
    let display =document.getElementById("display")
display.innerHTML+= eval(el.value)
el.value = "" //clears input once calculated
  
}

function test(){
   console.log("test")
   document.getElementById("main").value = ""
   let display =document.getElementById("display")
   display.innerHTML=''
}

