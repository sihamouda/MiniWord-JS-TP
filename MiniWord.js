var btn=document.querySelector("#button");
btn.onclick= function (e){
    e.preventDefault();
    
    var color=document.querySelector("#color");
    var width=document.querySelector("#width");
    var font=document.querySelector("#font");
    
    document.querySelector("p").style.color=color;
    document.querySelector("p").style.fontsize=width+'px';
    document.querySelector("p").style.font=font;
    
};