const ans = document.querySelector('.result');

const button = document.querySelector('.cal');


var sgpa=document.querySelector("#sgpa");
var cgpa=document.querySelector("#cgpa");

let final=0;
let s2=0,theory,lab;




function show(){
    if(Number(sgpa.value)==0 && Number(cgpa.value)==0 && Number(cgpa.value)<=10 && Number(cgpa.value)<=10){
        ans.innerText="Enter Valid marks";
    }
    else 
        {
            s2=(Number(cgpa.value)+Number(sgpa.value))/2;
            ans.innerText="CGPA: "+s2;
            
    }
}