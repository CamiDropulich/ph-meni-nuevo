window.addEventListener("load", banner, false);

// Variables de control de animación ------------
const velocidadAnimacionBanner = 3000;
const imagenesBanner = new Array(9);

// Cargar eventos y llamar a funciones ----------
function banner(){
    cargarImagenesBanner();
    asignarFondosBanner();
    eventosBanner();
    animacionOpacidadBanner();
}

function eventosBanner(){
    if(window.innerWidth > 720){
        document.getElementById("eventos-3").addEventListener("mouseover", animarEventosPC, false);
        document.getElementById("eventos-3").addEventListener("mouseleave", animarPosicionPredeterminadaPC, false);
        
        document.getElementById("deportes-3").addEventListener("mouseover", animarDeportesPC, false);
        document.getElementById("deportes-3").addEventListener("mouseleave", animarPosicionPredeterminadaPC, false);
        
        document.getElementById("retratos-3").addEventListener("mouseover", animarRetratosPC, false);
        document.getElementById("retratos-3").addEventListener("mouseleave", animarPosicionPredeterminadaPC, false);
    }
    else{
        document.getElementById("eventos-3").addEventListener("mouseover", animarEventosMovil, false);
        document.getElementById("eventos-3").addEventListener("mouseleave", animarPosicionPredeterminadaMovil, false);
        
        document.getElementById("deportes-3").addEventListener("mouseover", animarDeportesMovil, false);
        document.getElementById("deportes-3").addEventListener("mouseleave", animarPosicionPredeterminadaMovil, false);
        
        document.getElementById("retratos-3").addEventListener("mouseover", animarRetratosMovil, false);
        document.getElementById("retratos-3").addEventListener("mouseleave", animarPosicionPredeterminadaMovil, false);
    }
}

// Cargar imágenes en el vector -----------------
function cargarImagenesBanner(){
    for(let f = 0; f < imagenesBanner.length; f++){
        imagenesBanner[f] = "./imagenes/banner/banner" + (f + 1) + ".jpg";
    }
}

// Asignar fondos -------------------------------
function asignarFondosBanner(){
    for(let f = 0; f < document.getElementsByClassName("banner-retratos").length; f++){
        document.getElementsByClassName("banner-eventos")[f].style.backgroundImage = "url(" + imagenesBanner[f] + ")";
        document.getElementsByClassName("banner-deportes")[f].style.backgroundImage = "url(" + imagenesBanner[f + 3] + ")";
        document.getElementsByClassName("banner-retratos")[f].style.backgroundImage = "url(" + imagenesBanner[f + 6] + ")";
    }
}

// Ejecutar animaciones de opacidad -------------
var estaEnAnimacion = false;

function animacionOpacidadBanner(){
    let aparecer = false;
    const bannerClasificaciones = ["eventos", "deportes", "retratos"];
    let contadorDesaparecidas = 0;
    let contadorAparecidas = 0;
    let contador = 3;

    setInterval(function(){
        if(!aparecer && !estaEnAnimacion){
            animarDesvanecimientoBanner(bannerClasificaciones[contadorDesaparecidas], contador);
            contadorDesaparecidas++;
            
            if(contadorDesaparecidas == 3){
                contadorDesaparecidas = 0;
                contador--;
                setTimeout(reproduccionAutomaticaBanner, 1000);
                
                if(contador == 1){
                    contador++;
                    aparecer = true;
                }
            }
        }
        else{
            if(aparecer && !estaEnAnimacion){
                animarAparicionBanner(bannerClasificaciones[contadorAparecidas], contador);
                contadorAparecidas++;
                
                if(contadorAparecidas == 3){
                    contadorAparecidas = 0;
                    contador++;
                    setTimeout(reproduccionAutomaticaBanner, 1000);
                    
                    if(contador > 3){
                        contador--;
                        aparecer = false;
                    }
                }
            }
        }
    }, velocidadAnimacionBanner);
}

// Animaciones de desvanecimiento y aparición ---
function animarDesvanecimientoBanner(x, y){
    document.getElementById(x + "-" + y).style.opacity = 0;
}

function animarAparicionBanner(x, y){
    document.getElementById(x + "-" + y).style.opacity = 1;
}

// Animación de reprodcción automática ----------
function reproduccionAutomaticaBanner(){
    if(window.innerWidth > 720 && !estaEnAnimacion){
        setTimeout(animarEventosPC, 0);
        setTimeout(animarDeportesPC, 2000);
        setTimeout(animarRetratosPC, 4000);
        setTimeout(animarPosicionPredeterminadaPC, 6000);
    }
    else{
        if(!estaEnAnimacion){
            setTimeout(animarEventosMovil, 0);
            setTimeout(animarDeportesMovil, 2000);
            setTimeout(animarRetratosMovil, 4000);
            setTimeout(animarPosicionPredeterminadaMovil, 6000);
        }
    }
}

// Volver a la reproduccion automática ----------
function volverReproduccionAutomaticaBanner(){
    let contador = 0;
    let intervalo = setInterval(function(){
        if(estaEnAnimacion){
            contador++;

            if(contador >= 5){
                if(window.innerWidth > 720){
                    animarPosicionPredeterminadaPC();
                }
                else{
                    animarPosicionPredeterminadaMovil();
                }
                clearInterval(intervalo);
            }
        }
        else{
            if(!estaEnAnimacion){
                clearInterval(intervalo);
            }
        }
    }, 1000);
}

// Animaciones al estar sobre elementos ---------
// Pantallas MAYORES a 720 px -
function animarEventosPC(){
    for(let f = 0; f < document.getElementsByClassName("banner-eventos").length; f++){
        document.getElementsByClassName("banner-eventos")[f].style.clipPath = "polygon(0% 0%, 0% 100%, 80% 100%, 80% 0%)";
        document.getElementsByClassName("banner-eventos")[f].setAttribute = ("style", "-webkit-clip-path: polygon(0% 0%, 0% 100%, 80% 100%, 80% 0%)");
        document.getElementsByClassName("banner-deportes")[f].style.clipPath = "polygon(100% 0%, 100% 100%, 90% 100%, 90% 0%)";
        document.getElementsByClassName("banner-deportes")[f].setAttribute = ("style", "-webkit-clip-path: polygon(100% 0%, 100% 100%, 90% 100%, 90% 0%)");
        document.getElementsByClassName("banner-retratos")[f].style.clipPath = "polygon(81% 0%, 90% 0%, 90% 100%, 81% 100%)";
        document.getElementsByClassName("banner-retratos")[f].setAttribute = ("style", "-webkit-clip-path: polygon(81% 0%, 90% 0%, 90% 100%, 81% 100%)");
    }

    document.getElementById("banner-bordes").style.clipPath = "polygon(80% 0%, 91% 0%, 91% 100%, 80% 100%)";
    document.getElementById("banner-bordes").setAttribute = ("style", "-webkit-clip-path: polygon(80% 0%, 91% 0%, 91% 100%, 80% 100%)");
    estaEnAnimacion = true;
    volverReproduccionAutomaticaBanner();
}

function animarDeportesPC(){
    for(let f = 0; f < document.getElementsByClassName("banner-deportes").length; f++){
        document.getElementsByClassName("banner-eventos")[f].style.clipPath = "polygon(0% 0%, 0% 100%, 10% 100%, 10% 0%)";
        document.getElementsByClassName("banner-eventos")[f].setAttribute = ("style", "-webkit-clip-path: polygon(0% 0%, 0% 100%, 10% 100%, 10% 0%)");
        document.getElementsByClassName("banner-deportes")[f].style.clipPath = "polygon(100% 0%, 100% 100%, 20% 100%, 20% 0%)";
        document.getElementsByClassName("banner-deportes")[f].setAttribute = ("style", "-webkit-clip-path: polygon(100% 0%, 100% 100%, 20% 100%, 20% 0%)");
        document.getElementsByClassName("banner-retratos")[f].style.clipPath = "polygon(10% 0%, 19% 0%, 19% 100%, 10% 100%)";
        document.getElementsByClassName("banner-retratos")[f].setAttribute = ("style", "-webkit-clip-path: polygon(10% 0%, 19% 0%, 19% 100%, 10% 100%)");
    }
    
    document.getElementById("banner-bordes").style.clipPath = "polygon(9% 0%, 20% 0%, 20% 100%, 9% 100%)";
    document.getElementById("banner-bordes").setAttribute = ("style", "-webkit-clip-path: polygon(9% 0%, 20% 0%, 20% 100%, 9% 100%)");
    estaEnAnimacion = true;
    volverReproduccionAutomaticaBanner();
}

function animarRetratosPC(){
    for(let f = 0; f < document.getElementsByClassName("banner-retratos").length; f++){
        document.getElementsByClassName("banner-eventos")[f].style.clipPath = "polygon(0% 0%, 0% 100%, 10% 100%, 10% 0%)";
        document.getElementsByClassName("banner-eventos")[f].setAttribute = ("style", "-webkit-clip-path: polygon(0% 0%, 0% 100%, 10% 100%, 10% 0%)");
        document.getElementsByClassName("banner-deportes")[f].style.clipPath = "polygon(100% 0%, 100% 100%, 90% 100%, 90% 0%)";
        document.getElementsByClassName("banner-deportes")[f].setAttribute = ("style", "-webkit-clip-path: polygon(100% 0%, 100% 100%, 90% 100%, 90% 0%)");
        document.getElementsByClassName("banner-retratos")[f].style.clipPath = "polygon(10% 0%, 90% 0%, 90% 100%, 10% 100%)";
        document.getElementsByClassName("banner-retratos")[f].setAttribute = ("style", "-webkit-clip-path: polygon(10% 0%, 90% 0%, 90% 100%, 10% 100%)");
    }
    
    document.getElementById("banner-bordes").style.clipPath = "polygon(9% 0%, 91% 0%, 91% 100%, 9% 100%)";
    document.getElementById("banner-bordes").setAttribute = ("style", "-webkit-clip-path: polygon(9% 0%, 91% 0%, 91% 100%, 9% 100%)");
    estaEnAnimacion = true;
    volverReproduccionAutomaticaBanner();
}

function animarPosicionPredeterminadaPC(){
    for(let f = 0; f < document.getElementsByClassName("banner-retratos").length; f++){
        document.getElementsByClassName("banner-eventos")[f].style.clipPath = "polygon(0.6% 0.6%, 0.6% 100%, 50% 100%, 0.6% 0.6%)";
        document.getElementsByClassName("banner-eventos")[f].setAttribute = ("style", "-webkit-clip-path: polygon(0.6% 0.6%, 0.6% 100%, 50% 100%, 0.6% 0.6%)");
        document.getElementsByClassName("banner-deportes")[f].style.clipPath = "polygon(99.4% 0.6%, 99.4% 100%, 50% 100%, 99.4% 0.6%)";
        document.getElementsByClassName("banner-deportes")[f].setAttribute = ("style", "-webkit-clip-path: polygon(99.4% 0.6%, 99.4% 100%, 50% 100%, 99.4% 0.6%)");
        document.getElementsByClassName("banner-retratos")[f].style.clipPath = "polygon(1% 0%, 99% 0%, 50% 98%, 50% 98%)";
        document.getElementsByClassName("banner-retratos")[f].setAttribute = ("style", "-webkit-clip-path: polygon(1% 0%, 99% 0%, 50% 98%, 50% 98%)");
    }
    
    document.getElementById("banner-bordes").style.clipPath = "polygon(0.6% 0.6%, 100% 0.6%, 50% 99.4%, 50% 99.4%)";
    document.getElementById("banner-bordes").setAttribute = ("style", "-webkit-clip-path: polygon(0.6% 0.6%, 100% 0.6%, 50% 99.4%, 50% 99.4%)");
    estaEnAnimacion = false;
}

// Pantallas MENORES a 720 px -
function animarEventosMovil(){
    for(let f = 0; f < document.getElementsByClassName("banner-retratos").length; f++){
        document.getElementsByClassName("banner-eventos")[f].style.clipPath = "polygon(0% 0%, 100% 0%, 100% 80%, 0% 80%)";
        document.getElementsByClassName("banner-eventos")[f].setAttribute = ("style", "-webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 80%)");
        document.getElementsByClassName("banner-deportes")[f].style.clipPath = "polygon(0% 100%, 100% 100%, 100% 90%, 0% 90%)";
        document.getElementsByClassName("banner-deportes")[f].setAttribute = ("style", "-webkit-clip-path: polygon(0% 100%, 100% 100%, 100% 90%, 0% 90%)");
        document.getElementsByClassName("banner-retratos")[f].style.clipPath = "polygon(0% 81%, 0% 90%, 100% 90%, 100% 81%)";
        document.getElementsByClassName("banner-retratos")[f].setAttribute = ("style", "-webkit-clip-path: polygon(0% 81%, 0% 90%, 100% 90%, 100% 81%)");
    }
    
    document.getElementById("banner-bordes").style.clipPath = "polygon(0% 80%, 0% 91%, 100% 91%, 100% 80%)";
    document.getElementById("banner-bordes").setAttribute = ("style", "-webkit-clip-path: polygon(0% 80%, 0% 91%, 100% 91%, 100% 80%)");
    estaEnAnimacion = true;
    volverReproduccionAutomaticaBanner();
}

function animarDeportesMovil(){
    for(let f = 0; f < document.getElementsByClassName("banner-retratos").length; f++){
        document.getElementsByClassName("banner-eventos")[f].style.clipPath = "polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)";
        document.getElementsByClassName("banner-eventos")[f].setAttribute = ("style", "-webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)");
        document.getElementsByClassName("banner-deportes")[f].style.clipPath = "polygon(0% 100%, 100% 100%, 100% 20%, 0% 20%)";
        document.getElementsByClassName("banner-deportes")[f].setAttribute = ("style", "-webkit-clip-path: polygon(0% 100%, 100% 100%, 100% 20%, 0% 20%)");
        document.getElementsByClassName("banner-retratos")[f].style.clipPath = "polygon(0% 10%, 0% 19%, 100% 19%, 100% 10%)";
        document.getElementsByClassName("banner-retratos")[f].setAttribute = ("style", "-webkit-clip-path: polygon(0% 10%, 0% 19%, 100% 19%, 100% 10%)");
    }
    
    document.getElementById("banner-bordes").style.clipPath = "polygon(0% 9%, 0% 20%, 100% 20%, 100% 9%)";
    document.getElementById("banner-bordes").setAttribute = ("style", "-webkit-clip-path: polygon(0% 9%, 0% 20%, 100% 20%, 100% 9%)");
    estaEnAnimacion = true;
    volverReproduccionAutomaticaBanner();
}

function animarRetratosMovil(){
    for(let f = 0; f < document.getElementsByClassName("banner-retratos").length; f++){
        document.getElementsByClassName("banner-eventos")[f].style.clipPath = "polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)";
        document.getElementsByClassName("banner-eventos")[f].setAttribute = ("style", "-webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)");
        document.getElementsByClassName("banner-deportes")[f].style.clipPath = "polygon(0% 100%, 100% 100%, 100% 90%, 0% 90%)";
        document.getElementsByClassName("banner-deportes")[f].setAttribute = ("style", "-webkit-clip-path: polygon(0% 100%, 100% 100%, 100% 90%, 0% 90%)");
        document.getElementsByClassName("banner-retratos")[f].style.clipPath = "polygon(0% 10%, 0% 90%, 100% 90%, 100% 10%)";
        document.getElementsByClassName("banner-retratos")[f].setAttribute = ("style", "-webkit-clip-path: polygon(0% 10%, 0% 90%, 100% 90%, 100% 10%)");
    }
    
    document.getElementById("banner-bordes").style.clipPath = "polygon(0% 9%, 0% 91%, 100% 91%, 100% 9%)";
    document.getElementById("banner-bordes").setAttribute = ("style", "-webkit-clip-path: polygon(0% 9%, 0% 91%, 100% 91%, 100% 9%)");
    estaEnAnimacion = true;
    volverReproduccionAutomaticaBanner();
}

function animarPosicionPredeterminadaMovil(){
    for(let f = 0; f < document.getElementsByClassName("banner-retratos").length; f++){
        document.getElementsByClassName("banner-eventos")[f].style.clipPath = "polygon(0% 0.6%, 100% 0.6%, 100% 50%, 100% 50%)";
        document.getElementsByClassName("banner-eventos")[f].setAttribute = ("style", "-webkit-clip-path: polygon(0% 0.6%, 100% 0.6%, 100% 50%, 100% 50%)");
        document.getElementsByClassName("banner-deportes")[f].style.clipPath = "polygon(0% 99.4%, 100% 99.4%, 100% 50%, 100% 50%)";
        document.getElementsByClassName("banner-deportes")[f].setAttribute = ("style", "-webkit-clip-path: polygon(0% 99.4%, 100% 99.4%, 100% 50%, 100% 50%)");
        document.getElementsByClassName("banner-retratos")[f].style.clipPath = "polygon(0% 1%, 0% 99%, 98% 50%, 98% 50%)";
        document.getElementsByClassName("banner-retratos")[f].setAttribute = ("style", "-webkit-clip-path: polygon(0% 1%, 0% 99%, 98% 50%, 98% 50%)");
    }
    
    document.getElementById("banner-bordes").style.clipPath = "polygon(0% 0%, 0% 100%, 100% 50%, 100% 50%)";
    document.getElementById("banner-bordes").setAttribute = ("style", "-webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 50%, 100% 50%)");
    estaEnAnimacion = false;
}