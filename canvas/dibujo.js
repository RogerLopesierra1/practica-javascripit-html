var texto = document.getElementById( "texto_lineas" );
var boton = document.getElementById( "botoncito" );
boton.addEventListener("click", dibujarPorClick );

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d")


function dibujarLinea(color, xi, yi, xf, yf) {
    
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarPorClick() 
{
    var lineas = parseInt(texto.value);
    var i = 0;
    var yi, xf;
    var espacio = 300/lineas;

    while( i < lineas) {
        yi = espacio*i;
        xf = espacio*(i + 1);
        dibujarLinea( "grey", 0, yi, xf, 300 );    
        i++;
    }

    dibujarLinea("grey", 1, 1, 1, 299);
    dibujarLinea("grey", 0, 299, 300, 299);    
}











