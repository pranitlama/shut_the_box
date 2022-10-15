// const roll=document.querySelector(".btn");
const diceo=document.querySelector(".diceo");
const dicet=document.querySelector(".dicet");
let totaldice;
const num=[1,2,3,4,5,6,7,8,9];
let dicerolled=false;








function roll(){
    dicerolled=true;
    let d_one=Math.floor(Math.random()*6)+1;
    let d_two=Math.floor(Math.random()*6)+1;

    diceo.src="/img"+"/"+"d"+d_one+".png";
    dicet.src="/img"+"/"+"d"+d_two+".png";
    totaldice=d_one+d_two;
    console.log(totaldice);

}   
