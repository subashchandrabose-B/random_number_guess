
const inp=document.getElementById("num")
const out=document.getElementById("res")
var points=3;

function get(){
    const vari=inp.value
    const vari1=Number (vari)
    console.log(vari1)
    if(vari1>10 || vari1===0){
        errortype()
    }
    else{
        calculation(vari1)
    }
}
errortype=()=>{
    out.textContent="You entered wrong number"
    out.style.width="300px"
    out.style.fontSize="20px"
    const notifi=confirm(" YOU ENTERED IVALID DATA If you want to continue enter the number Again")
    if(!notifi){
        window.location.href="index.html";
    }
}
calculation=(playerchoice)=>{
    const computerchoice=Math.floor((Math.random()*10)+1)
    if(playerchoice==computerchoice){
        win()
        notifywin()
    }
    else{
        loose()
    }
}
win=()=>{
    points=3;
    out.style.width="300px"
    out.textContent=`You Got Me Now your point is ${ points}`
}
notifywin=()=>{
    const notifi=confirm(" YOU WIN If you want to continue enter the number Again")
    if(!notifi){
        window.location.href="index.html";
    }
}
loose=()=>{
    points=points-1;
    out.textContent=`You Are Wrong Now your point is ${points}`
    out.style.width="300px"
    const notifi=confirm("YOU LOOSE If you want to continue enter the number Again")
    pointscalc(points)
    if(!notifi){
        window.location.href="index.html"
    }
}
pointscalc=(points1)=>{
    if(points1===0){
        window.location.href="end.html";
    }
}
    
