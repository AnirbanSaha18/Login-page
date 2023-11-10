let input = document.querySelector("#password");
let input1 = document.querySelector("#confirm");
let from = document.querySelector('form');
let btn = document.querySelector('button');
let box = document.querySelectorAll('.box');
let reset=document.querySelector("#reset");
from.addEventListener('change', function(event){
    event.preventDefault();
})
input.addEventListener('keyup', valid);
function valid(event) {
//     console.log(event.key);
//     console.log(event.keyCode);
if(event.keyCode == 32){
    alert('Space is not allowed');
    input.value="";
}
}
btn.addEventListener("click",function(event){
    if(input.value.length<8){
        alert("Password must be 8 characters");
    }
    else if (input1.value != "" && input1.value == input.value){
        alert("form Submitted");
    }
    else{
        alert("Feel the Confirm Password");
    }
    event.preventDefault();
    

});
input1.addEventListener("change",function(){
    // console.log(input1.value);
    if(input1.value != input.value){
        alert("password doesn't match");
        input1.value="";
    }
});
reset.addEventListener('click',function(event){
    // event.preventDefault();
    box.value="";

})
    
        


