const mouseshape=document.querySelector(".mouse-shape");
const mousedot=document.querySelector(".mouse-dot");
const mouseshapefn=(x,y)=> {
    mouseshape.style.cssText=`top: ${y}px; left: ${x}px; opacity:1` ;
    mousedot.style.cssText=`top: ${y}px; left: ${x}px; opacity:1`;
};

document.body.addEventListener("mousemove",(a)=>{
    let x = a.clientX;
    let y= a.clientY;

    mouseshapefn(x,y);

});
document.body.addEventListener("mouseleave",()=>{
    mouseshape.style.opacity="0";
    mousedot.style.opacity="0";

});
