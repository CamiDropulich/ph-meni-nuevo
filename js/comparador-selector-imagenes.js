window.addEventListener("load", comparadorImagenes, false);

// Variables y constantes de control de animación ------
const anchoContenedorBarraMovil = 425;
const anchoImagenComparador = 375;
const anchoBarraMovil = 50;
const xMin = (window.innerWidth / 2) - (anchoContenedorBarraMovil / 2) + (anchoBarraMovil / 4);
const xMax = xMin + anchoImagenComparador;
const margenInicialContenedorBarra = ((window.innerWidth / 2) - (anchoContenedorBarraMovil / 2) - (anchoBarraMovil / 4));
var estaPresionado = false;

// Barra móvil -----------------------------------------
function comparadorImagenes(){
    document.getElementById("barra-movil-contenedor").style.marginLeft = margenInicialContenedorBarra + "px";
    document.getElementById("barra-movil").style.marginLeft = ((anchoContenedorBarraMovil / 2) - (anchoBarraMovil / 2)) + "px";

    eventosBarra();
    posicionarComparador();
}

// Eventos ---------------------------------------------
function eventosBarra(){
    if("ontouchstart" in document.documentElement){
        document.getElementById("barra-movil").addEventListener("touchstart", mousePresionado, false);
        document.getElementById("barra-movil").addEventListener("touchend", mouseSoltado, false);
        document.getElementById("barra-movil").addEventListener("touchmove", cambiarPosicionBarraMovil, false);

        document.getElementById("barra-movil-contenedor").addEventListener("touchstart", mousePresionado, false);
        document.getElementById("barra-movil-contenedor").addEventListener("touchend", mouseSoltado, false);
        document.getElementById("barra-movil-contenedor").addEventListener("touchmove", cambiarPosicionBarraMovil, false);
    }
    else{
        document.getElementById("barra-movil").addEventListener("mousedown", mousePresionado, false);
        document.getElementById("barra-movil").addEventListener("mouseup", mouseSoltado, false);
        document.getElementById("barra-movil").addEventListener("mousemove", cambiarPosicionBarraMovil, false);

	document.documentElement.addEventListener("mouseup", mouseSoltado, false);
        document.documentElement.addEventListener("mousemove", cambiarPosicionBarraMovil, false);

        document.getElementById("barra-movil-contenedor").addEventListener("mousedown", mousePresionado, false);
        document.getElementById("barra-movil-contenedor").addEventListener("mouseup", mouseSoltado, false);
        document.getElementById("barra-movil-contenedor").addEventListener("mousemove", cambiarPosicionBarraMovil, false);
    }
}

function posicionarComparador(){
    document.getElementById("comparador-imagenes").style.marginLeft = ((window.innerWidth - anchoContenedorBarraMovil) / 2) + (anchoBarraMovil / 4) + "px";
    document.getElementById("indicador").style.marginLeft = (anchoImagenComparador / 2) + "px";
    document.getElementById("imagen-original").style.width = (anchoImagenComparador / 2) + "px";
}

// Mouse presionado y mouse soltado --------------------
function mousePresionado(){
    estaPresionado = true;
}

function mouseSoltado(){
    estaPresionado = false;
}

// Mover la barra móvil según posición del mouse -------
function cambiarPosicionBarraMovil(evt){
    if("ontouchstart" in document.documentElement){
        if(estaPresionado){
            if(evt.targetTouches[0].pageX > xMin && evt.targetTouches[0].pageX < xMax){
                document.getElementById("indicador").style.marginLeft = (evt.targetTouches[0].pageX - xMin - 1) + "px";
                document.getElementById("imagen-original").style.width = (evt.targetTouches[0].pageX - xMin) + "px";
                document.getElementById("txt-original").style.width = (evt.targetTouches[0].pageX - xMin) + "px";
                document.getElementById("barra-movil").style.marginLeft = ((evt.targetTouches[0].pageX - margenInicialContenedorBarra) - (anchoBarraMovil / 2)) + "px";
            }
        }
    }
    else{
        if(estaPresionado){
            if(evt.clientX > xMin && evt.clientX < xMax){
                document.getElementById("indicador").style.marginLeft = (evt.clientX - xMin - 1) + "px";
                document.getElementById("imagen-original").style.width = (evt.clientX - xMin) + "px";
                document.getElementById("txt-original").style.width = (evt.clientX - xMin) + "px";
                document.getElementById("barra-movil").style.marginLeft = ((evt.clientX - margenInicialContenedorBarra) - (anchoBarraMovil / 2)) + "px";
            }
        }
    }
}

// Lista de imágenes del comparador --------------------
const imagenesOriginales = [];
imagenesOriginales[0] = "./imagenes/comparador/foto-01-original.jpg";
imagenesOriginales[1] = "./imagenes/comparador/foto-02-original.jpg";
imagenesOriginales[2] = "./imagenes/comparador/foto-03-original.jpg";
imagenesOriginales[3] = "./imagenes/comparador/foto-04-original.jpg";

const imagenesEditadas = [];
imagenesEditadas[0] = "./imagenes/selector/foto-01-editada.jpg";
imagenesEditadas[1] = "./imagenes/selector/foto-02-editada.jpg";
imagenesEditadas[2] = "./imagenes/selector/foto-03-editada.jpg";
imagenesEditadas[3] = "./imagenes/selector/foto-04-editada.jpg";

// Cambiar imagen del comparador -----------------------
function cambiarImagenComparador(x){
    document.getElementById("imagen-original").style.backgroundImage = "url(" + imagenesOriginales[x - 1] + ")";
    document.getElementById("imagen-editada").style.backgroundImage = "url(" + imagenesEditadas[x - 1] + ")";

    document.getElementById("indicador").style.marginLeft = (anchoImagenComparador / 2) + "px";
    document.getElementById("imagen-original").style.width = (anchoImagenComparador / 2) + "px";
    document.getElementById("txt-original").style.width = (anchoImagenComparador / 2) + "px";
    document.getElementById("barra-movil").style.marginLeft = ((anchoContenedorBarraMovil / 2) - (anchoBarraMovil / 2)) + "px";
}