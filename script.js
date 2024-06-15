const button = document.querySelector('.cal');
const ans = document.querySelector('.result');

//marks
var m2=document.querySelector("#M2");
var ph=document.querySelector("#ph");
var bme=document.querySelector("#bme");
var bee=document.querySelector("#bee");
var ei=document.querySelector("#ei");
var psp=document.querySelector("#psp");

//lab marks
var beel=document.querySelector("#beel");
var pblm=document.querySelector("#pblm");
var m2l=document.querySelector("#m2l");
var phl=document.querySelector("#phl");


let phgrad=0;
let m2grad=0;
let bmegrad=0;
let beegrad=0;
let pspgrad=0;
let eigrad=0;
let m2lgrad=0;
let beelgrad=0;
let pblmgrad=0;
let phlgrad=0;
let cred=22;




function show(){
  if(m2.value<=100 && ph.value<=100 && bme.value<=100 && bee.value<=100 && ei.value<=100 && psp.value<=100 && beel.value<=25 && pblm.value<=25 && m2l.value<=25 &&phl.value<=25){
  if(m2.value>=90){
    m2grad=10;c
  }
  else if(m2.value>=85 && m2.value<90){
    m2grad=9;
  }
  else if(m2.value>=75 && m2.value<85){
    m2grad=8;
  }
  else if(m2.value>=65 && m2.value<75){
    m2grad=7;
  }
  else if(m2.value>=55 && m2.value<65){
    m2grad=6;
  }
  else if(m2.value>=45 && m2.value<55){
    m2grad=5;
  }
  else if(m2.value>=40 && m2.value<45){
    m2grad=4;
  }
  else{
    m2grad=0;
  }
  //for physics
  if(ph.value>=90){
    phgrad=10;
  }
  else if(ph.value>=85 && ph.value<90){
    phgrad=9;
  }
  else if(ph.value>=75 && ph.value<85){
    phgrad=8;
  }
  else if(ph.value>=65 && ph.value<75){
    phgrad=7;
  }
  else if(ph.value>=55 && ph.value<65){
    phgrad=6;
  }
  else if(ph.value>=45 && ph.value<55){
    phgrad=5;
  }
  else if(ph.value>=40 && ph.value<45){
    phgrad=4;
  }
  else{
    phgrad=0;
  }

  //for bme
  if(bme.value>=90){
    bmegrad=10;
  }
  else if(bme.value>=85 && bme.value<90){
    bmegrad=9;
  }
  else if(bme.value>=75 && bme.value<85){
    bmegrad=8;
  }
  else if(bme.value>=65 && bme.value<75){
    bmegrad=7;
  }
  else if(bme.value>=55 && bme.value<65){
    bmegrad=6;
  }
  else if(bme.value>=45 && bme.value<55){
    bmegrad=5;
  }
  else if(bme.value>=40 && bme.value<45){
    bmegrad=4;
  }
  else{
    bmegrad=0;
  }

  //for ei
  if(ei.value>=90){
    eigrad=10;
  }
  else if(ei.value>=85 && ei.value<90){
    eigrad=9;
  }
  else if(ei.value>=75 && ei.value<85){
    eigrad=8;
  }
  else if(ei.value>=65 && ei.value<75){
    eigrad=7;
  }
  else if(ei.value>=55 && ei.value<65){
    eigrad=6;
  }
  else if(ei.value>=45 && ei.value<55){
    eigrad=5;
  }
  else if(ei.value>=40 && ei.value<45){
    eigrad=4;
  }
  else{
    eigrad=0;
  }

  //for bee
  if(bee.value>=90){
    beegrad=10;
  }
  else if(bee.value>=85 && bee.value<90){
    beegrad=9;
  }
  else if(bee.value>=75 && bee.value<85){
    beegrad=8;
  }
  else if(bee.value>=65 && bee.value<75){
    beegrad=7;
  }
  else if(bee.value>=55 && bee.value<65){
    beegrad=6;
  }
  else if(bee.value>=45 && bee.value<55){
    beegrad=5;
  }
  else if(bee.value>=40 && bee.value<45){
    beegrad=4;
  }
  else{
    beegrad=0;
  }

  //for psp
  if(psp.value>=90){
    pspgrad=10;
  }
  else if(psp.value>=85 && psp.value<90){
    pspgrad=9;
  }
  else if(psp.value>=75 && psp.value<85){
    pspgrad=8;
  }
  else if(psp.value>=65 && psp.value<75){
    pspgrad=7;
  }
  else if(psp.value>=55 && psp.value<65){
    pspgrad=6;
  }
  else if(psp.value>=45 && psp.value<55){
    pspgrad=5;
  }
  else if(psp.value>=40 && psp.value<45){
    pspgrad=4;
  }
  else{
    pspgrad=0;
  }
  //convert 25 to 100 marks for lab

  let pblmmarks=(pblm.value/25)*100;
  let m2lmarks=(m2l.value/25)*100;
  let phlmarks=(phl.value/25)*100;
  let beelmarks=((beel.value)/25)*100;

  //for bee lab
  if(beelmarks>=90){
    beelgrad=10;
  }
  else if(beelmarks>=85 && beelmarks<90){
    beelgrad=9;
  }
  else if(beelmarks>=75 && beelmarks<85){
    beelgrad=8;
  }
  else if(beelmarks>=65 && beelmarks<75){
    beelgrad=7;
  }
  else if(beelmarks>=55 && beelmarks<65){
    beelgrad=6;
  }
  else if(beelmarks>=45 && beelmarks<55){
    beelgrad=5;
  }
  else if(beelmarks>=40 && beelmarks<45){
    beelgrad=4;
  }
  else{
    beelgrad=0;
  }

  //for m2 lab
  if(m2lmarks>=90){
    m2lgrad=10;
  }
  else if(m2lmarks>=85 && m2lmarks<90){
    m2lgrad=9;
  }
  else if(m2lmarks>=75 && m2lmarks<85){
    m2lgrad=8;
  }
  else if(m2lmarks>=65 && m2lmarks<75){
    m2lgrad=7;
  }
  else if(m2lmarks>=55 && m2lmarks<65){
    m2lgrad=6;
  }
  else if(m2lmarks>=45 && m2lmarks<55){
    m2lgrad=5;
  }
  else if(m2lmarks>=40 && m2lmarks<45){
    m2lgrad=4;
  }
  else{
    m2lgrad=0;
  }

  //for pblm
  if(pblmmarks>=90){
    pblmgrad=10;
  }
  else if(pblmmarks>=85 && pblmmarks<90){
    pblmgrad=9;
  }
  else if(pblmmarks>=75 && pblmmarks<85){
    pblmgrad=8;
  }
  else if(pblmmarks>=65 && pblmmarks<75){
    pblmgrad=7;
  }
  else if(pblmmarks>=55 && pblmmarks<65){
    pblmgrad=6;
  }
  else if(pblmmarks>=45 && pblmmarks<55){
    pblmgrad=5;
  }
  else if(pblmmarks>=40 && pblmmarks<45){
    pblmgrad=4;
  }
  else{
    pblmgrad=0;
  }

  //for physics lab
  if(phlmarks>=90){
    phlgrad=10;
  }
  else if(phlmarks>=85 && phlmarks<90){
    phlgrad=9;
  }
  else if(phlmarks>=75 && phlmarks<85){
    phlgrad=8;
  }
  else if(phlmarks>=65 && phlmarks<75){
    phlgrad=7;
  }
  else if(phlmarks>=55 && phlmarks<65){
    phlgrad=6;
  }
  else if(phlmarks>=45 && phlmarks<55){
    phlgrad=5;
  }
  else if(phlmarks>=40 && phlmarks<45){
    phlgrad=4;
  }
  else{
    phlgrad=0;
  }

  
  let totalgrad=m2grad+phgrad+bmegrad+beegrad+eigrad+pspgrad+pblmgrad+phlgrad+beelgrad+m2lgrad;
  let anws=(3*m2grad+3*phgrad+3*bmegrad+3*beegrad+2*eigrad+4*pspgrad+1*pblmgrad+1*phlgrad+1*beelgrad+1*m2lgrad)/22;
    ans.innerText=anws;
}
else{
  ans.innerText="Please enter correct marks";
}
}

