canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color= "black";
width= 5;
lmx="";
lmy="";
mouse_event="";
canvas.addEventListener("mousedown",mymd);

function mymd(e){
    mouse_event="md";
    color=document.getElementById("pcolor").value;
    width=document.getElementById("pwidth").value;
}
canvas.addEventListener("mouseup",mymu);
function mymu(e){
    mouse_event="mu";

}
canvas.addEventListener("mouseleave",myml);
function myml(e){
    mouse_event="ml";
}
canvas.addEventListener("mousemove",mymm);
function mymm(e){
    cmousex=e.clientX-canvas.offsetLeft;
    cmousey=e.clientY-canvas.offsetTop;
     if(mouse_event=="md"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(lmx,lmy);
        ctx.lineTo(cmousex,cmousey);
        ctx.stroke();

     }
     lmx=cmousex;
     lmy=cmousey;
}
ltx="";
lty="";
if(screen.width<992)
{
    canvas.width=screen.width-70;
    canvas.height=screen.height-300;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",myts);

function myts(e){
    ltx=e.touches[0].clientX-canvas.offsetLeft;
    lty=e.touches[0].clientY-canvas.offsetTop;
    color=document.getElementById("pcolor").value;
    width=document.getElementById("pwidth").value;

}

canvas.addEventListener("touchmove",mytm);
function mytm(e){
    ctouchx=e.touches[0].clientX-canvas.offsetLeft;
    ctouchy=e.touches[0].clientY-canvas.offsetTop;
     
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(ltx,lty);
        ctx.lineTo(ctouchx,ctouchy);
        ctx.stroke();

     
     ltx=ctouchx;
     lty=ctouchy;
}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
