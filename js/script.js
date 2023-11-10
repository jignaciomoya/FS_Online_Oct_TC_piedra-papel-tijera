const contadorUsuario = document.getElementById('contador-usuario');// estas dos primeras lineas son mias
const contadorOrdenador = document.getElementById('contador-ordenador');
const opciones = ['piedra', 'papel', 'tijera']; // no se me habría ocurrido usar un array, 
//habria usado antes variables independientes usando el dataset de cada boton

function obtenerEleccionOrdenador() { // completamente no cosecha mia, estudiado luego eso si
    const opciones2 = ['piedra', 'papel', 'tijera'];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opciones2[indiceAleatorio];
}

document.querySelectorAll('.boton-jugada').forEach(function(boton) { // hasta el forEach era mio
    boton.addEventListener('click', function() {
        const eleccionUsuario = this.dataset.jugada;
        const eleccionOrdenador = obtenerEleccionOrdenador();

        if (eleccionUsuario === eleccionOrdenador) { // Esta parte de dinámica del juego es mia
            
        } else if (
            (eleccionUsuario === 'piedra' && eleccionOrdenador === 'tijera') ||
            (eleccionUsuario === 'papel' && eleccionOrdenador === 'piedra') ||
            (eleccionUsuario === 'tijera' && eleccionOrdenador === 'papel')
        ) {
            contadorUsuario.textContent = (parseInt(contadorUsuario.textContent) + 1).toString(); //no es mio pero esta comprendido

        } else {
            contadorOrdenador.textContent = (parseInt(contadorOrdenador.textContent) + 1).toString();
        }

    });
});

