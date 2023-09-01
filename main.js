let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.getElementById("instrucciones");
let contenedorPuntosUsuario = document.getElementById("puntos-usuario");
let contenedorPuntosPC = document.getElementById("puntos-computadora");
let mensaje = document.getElementById("mensaje");
let contenedorGanaPunto = document.getElementById("gana-punto");
let elegiTuArma = document.getElementById("elegi-tu-arma");

let contenedorEleccionUsuario = document.getElementById("eleccion-usuario");
let contenedorEleccionPC = document.getElementById("eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton =>{
    boton.addEventListener("click", iniciarTurno)
});

function iniciarTurno(e){
    
    let eleccionPC = Math.floor(Math.random() *3);
    let eleccionUsuario = e.currentTarget.id;

    if(eleccionPC === 0){
        eleccionPC = "Piedra🗿"
    }else if(eleccionPC === 1){
        eleccionPC = "Papel📄"
    }else if(eleccionPC === 2){
        eleccionPC = "Tijera✂️"
    }

    if(
        (eleccionUsuario === "Piedra🗿" && eleccionPC === "Tijera✂️") ||
        (eleccionUsuario === "Papel📄" && eleccionPC === "Piedra🗿") ||
        (eleccionUsuario === "Tijera✂️" && eleccionPC === "Papel📄")
    ){
        ganaUsuario();
    }else if(
        (eleccionPC === "Piedra🗿" && eleccionUsuario === "Tijera✂️") ||
        (eleccionPC === "Papel📄" && eleccionUsuario === "Piedra🗿") ||
        (eleccionPC === "Tijera✂️" && eleccionUsuario === "Papel📄")
    ){
        ganaPC();
    }else{
        empate();
    };

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;


    if(puntosUsuario === 5 || puntosPC === 5){

        if(puntosUsuario === 5){
            instrucciones.innerText = "Ganaste el juego! 🥳";
        };

        if(puntosPC === 5){
            instrucciones.innerText = "La computadora ganó! 😢";
        };

        elegiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    };
};

function ganaUsuario(){
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "Ganaste un punto! 👽";
};

function ganaPC(){
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "La computadora ganó un punto! 🤐";
};

function empate(){
    contenedorGanaPunto.innerText = "Empate! 😵";
};

function reiniciarJuego(){
    reiniciar.classList.add("disabled");
    elegiTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosPC = 0;
    puntosUsuario = 0;

    contenedorPuntosPC.innerText = puntosPC;
    contenedorPuntosUsuario.innerText = puntosUsuario;

    instrucciones.innerText = "El primero en llegar a 5 puntos gana."
}