window.addEventListener("load", navegacion, false);

// Variables globales de control ------------------------------
var clicks = 0;

// Ejecutar menú lateral --------------------------------------
function navegacion(){
    document.getElementById("nav-btn-menu").addEventListener("click", menuLateral, false);
}

// Menú lateral -----------------------------------------------
function abrirMenuLateral(){
    clicks++;
    document.getElementById("nav-btn-container").style.marginTop = 0 + "vh";
    setTimeout(() => {
        document.getElementById("nav-btn-container").style.marginLeft = 0 + "vw";
    }, 250);

    document.getElementById("barra1").style.marginTop = 22 + "px";
    document.getElementById("barra1").style.transform = "rotate(-45deg)";

    document.getElementById("barra2").style.marginTop = -5 + "px";
    document.getElementById("barra2").style.transform = "rotate(45deg)";
}

function cerrarMenuLateral(){
    clicks++;
    document.getElementById("nav-btn-container").style.marginLeft = -100 + "vw";
    setTimeout(() => {
        document.getElementById("nav-btn-container").style.marginTop = -100 + "vh";
    }, 250);

    document.getElementById("barra1").style.marginTop = 15 + "px";
    document.getElementById("barra1").style.transform = "rotate(0deg)";

    document.getElementById("barra2").style.marginTop = 10 + "px";
    document.getElementById("barra2").style.transform = "rotate(0deg)";
}

function menuLateral(){
    if(clicks % 2 == 0){
        abrirMenuLateral();
    }
    else{
        cerrarMenuLateral();
    }
}