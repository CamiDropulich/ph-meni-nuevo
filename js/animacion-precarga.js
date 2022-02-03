window.addEventListener("load", () =>{
    setTimeout(finalizarCarga, 1000);
}, false);

function finalizarCarga(){
    document.getElementById("preloader").style.marginTop = -100 + "vh";
}