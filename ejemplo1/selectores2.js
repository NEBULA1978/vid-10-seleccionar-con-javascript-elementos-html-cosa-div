window.onload = inicio;

var estadoInicial = true;

function inicio() {
    document.getElementById("cosa").onclick = cambio_color;
}

function cambio_color() {
    var x = document.getElementById("cosa").style;
    // var x = document.querySelector("#cosa").style;

    // var x = document.getElementsByName("cosa")[0];
    // Aunque técnicamente es posible seleccionar por nombre, no es la forma común de seleccionar elementos por ID.



    if (estadoInicial) {
        // Cambiar a colores alternos, centrar, reducir el tamaño y ajustar el color de fondo
        x.color = "red";
        x.backgroundColor = "lightblue"; // Puedes ajustar el color según tus preferencias
        x.border = "4px dotted green";
        x.textAlign = "center";
        x.lineHeight = "50vh"; // Reducir la altura para que la caja sea más pequeña
        x.fontSize = "2rem"; // Puedes ajustar el tamaño según tus necesidades
    } else {
        // Volver al estado inicial y centrar
        x.color = ""; // Puedes establecer el color a su valor original si lo conoces
        x.backgroundColor = "";
        x.border = "";
        x.textAlign = "center";
        x.lineHeight = "100vh";
        x.fontSize = ""; // Vuelve al tamaño original
    }

    // Cambiar el estado para la próxima vez
    estadoInicial = !estadoInicial;
}

// function cambio_color2(){
//     var x=document.getElementById("cosa").style;
//     x.color="red";
//     x.backgroundColor="blue";
//     x.border="4px dotted green";
// }