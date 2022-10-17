const diceo=document.querySelector(".diceo");
const dicet=document.querySelector(".dicet");
let box=document.querySelectorAll(".box button");
let btn=document.getElementById("btn");
let totaldice;
let dicerolled=false;
let remain=[0,1,2,3,4,5,6,7,8,9];
let choices=[];
let result=0;
let yeet;
let clickagain=false;

box.forEach(option => {
    option.addEventListener("click",function(){
     if(dicerolled==true)
     {

         clickagn();
         let x=parseInt(option.value);
         let y=option;
            checkotn(x,y);
        }
        else
        {
            alert("please roll the dice first");
        }
    })
});

function game(y){
            choices.push(y);
            remain.splice((y),1);
            console.log(remain);
                for(let i=0;i<choices.length;i++)
                {
                    result+=choices[i];
                }
                if(result<totaldice)
                {
                        alert("click again");
                        clickagain=true;
                        
                }
               
                else{
                    check();
                    remove();
                    clickagain=false;
                    dicerolled=false;
                }
                console.log("choices",choices); 
                console.log("result",result); 
            
            
            
        }

        function checkotn(z,w)
{
    if(totaldice<z)
    {
        alert("the value is more than the dice");
    }
    else{
        w.disabled=true;
        w.classList.add("clicked");
        console.log("option value",z);
        game(z);
    }
}

        function clickagn(){
            if(clickagain==true)
            {
                result=0;
            }
        }



function check(){
    if(result!==totaldice && dicerolled==true)
    {
        btn.disabled=true;
    }
    else if(result==totaldice)
    {
        dicerolled==false;
        alert("roll again");
        result=0;
        btn.disabled=false;

    }
} 
function roll(){
    
     if(dicerolled==false)
     {

         let d_one=Math.floor(Math.random()*6)+1;
         let d_two=Math.floor(Math.random()*6)+1;
         
         diceo.src="/img"+"/"+"d"+d_one+".png";
         dicet.src="/img"+"/"+"d"+d_two+".png";
         totaldice=d_one+d_two;
         console.log("total dice",totaldice);
         dicerolled=true;
        }
}   


function remove(){
   
    while(choices.length>0)
    {
        choices.pop();
    }
}



