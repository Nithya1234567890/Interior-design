
let hamburger=document.getElementById('hamburger');
let hamburger1=document.getElementById('hamburger1');
let toggle=document.getElementById('toggle');
hamburger.onclick=()=>{
    hamburger.style.display="none";
    hamburger1.style.display="block";
    toggle.style.display="flex";
    toggle.style.right="0px";
}
hamburger1.onclick=()=>{
    hamburger1.style.display="none";
    hamburger.style.display="block";
    toggle.style.display="none";
}