var btn=document.querySelector("#button");
btn.onclick= function (e){
    e.preventDefault();
    let color=document.querySelector("#color");
    let width=document.querySelector("#width");
    let font=document.querySelector("#font");
    let paragraph=document.querySelector("p");
       
    paragraph.setAttribute("style","color: "+color.value+"; font-size: "+width.value+"px; font: "+font.value+";");
    
};