const ans = document.querySelector('.result');
const ans1 = document.querySelector('.res');
const ans2 = document.querySelector('.res1');
const button = document.querySelector('.cal');


var sgpa=document.querySelector("#sgpa");
var cgpa=document.querySelector("#cgpa");

let final=0;
let s2=0,theory,lab;




function show(){
    if(Number(sgpa.value)>Number(cgpa.value)){
        ans.innerText="CGPA should be greater than your last sem SGPA";
    }
    else if((Number(sgpa.value)+10)/2<=10 && (Number(sgpa.value)+10)/2>=Number(cgpa.value) )
        {
            s2=Number(cgpa.value)*2-Number(sgpa.value);

            theory=s2*10-10;
            lab=s2*10/4-2;
            ans.innerText="SGPA Required: "+s2+"\nMinimum marks required:";
            ans1.innerText="Theory:"+theory;
            ans2.innerText="Labs:"+lab;
            
    }
    else{
        final=(Number(sgpa.value)+10)/2;
        ans.innerText="Sorry your SGPA of the sem is low you can get maximum of "+final+" CGPA if you score 10 SGPA in current sem ";
    }
}