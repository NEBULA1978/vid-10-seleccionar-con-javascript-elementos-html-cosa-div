window.onload=inicio;
function inicio(){
    document.getElementById("cosa").onclick=cambio_color;
    document.getElementById("cosa").onclick=cambio_color2;
}

function cambio_color(){
    var x=document.getElementById("cosa").style;
    x.color="red";
    x.backgroundColor="blue";
    x.border="4px dotted green";
}
function cambio_color2(){
    var x=document.getElementById("cosa").style;
    x.color="red";
    x.backgroundColor="blue";
    x.border="4px dotted green";
}