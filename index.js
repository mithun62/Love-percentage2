

var btn = document.querySelector(".btn")
var refresh= document.querySelector(".refresh")

btn.addEventListener("click", handleFunc)
var name1 = document.querySelector(".name1")
var name2 = document.querySelector(".name2")
var msg = document.querySelector(".message")

function handleFunc() {
  
  var percentage = Math.floor(Math.random()*100+1)


  if (name1 == "" || name2 == "") {
    alert("Please fill this input Field")
  }else if(name1.value.length <3 || name2.value.length <3){
    alert("Must be 3 character ")
  }
  else {
    msg.innerText=`(${name1.value} + ${name2.value}) Love percentage is ${percentage}%`
    name1.setAttribute("readonly",true)
    name2.setAttribute("readonly",true)
    btn.style.visibility="hidden"
    refresh.style.visibility="visible"
  }
}


refresh.addEventListener("click",refreshFunc)
function refreshFunc(){
  name1.value=""
  name2.value=""
  refresh.style.visibility="hidden"
  btn.style.visibility="visible"
  name1.removeAttribute("readonly")
  name2.removeAttribute("readonly")
  message.innerText=""
}
