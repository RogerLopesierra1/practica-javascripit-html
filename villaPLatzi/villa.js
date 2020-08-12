var vp = document.getElementById("villa_platzy");
var papel = vp.getContext("2d");


var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cantidad = aleatorio(5, 25);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener( "load", cargarFondo );

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
    fondo.cargaOK = true;
    cargar();
}
function cargarVacas()
{
    vaca.cargaOK = true;
    cargar();
}


function cargar()
{
    if (fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK)
    {   
        for( var i = 0; i<cantidad; i++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor( Math.random()*(maxi-min+1) ) + min;
    return resultado;
}