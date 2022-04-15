let NumDeJugadas = parseInt(prompt("¿Cuantas veces quieres jugar?", 3));
console.log(NumDeJugadas)

//Ingresar el nombre al Juego
document.getElementById("nombreJugador");
nombreJugador.innerHTML = 'Jugador';

var piedra = 0;
var papel  = 1;
var tijera = 2;

var empate   = 0;
var ganador  = 1;
var perdedor = 2;

var piedraBtn  = document.getElementById("piedraBtn");
var papelBtn   = document.getElementById("papelBtn");
var tijeraBtn  = document.getElementById("tijeraBtn");

var opcionJugador = document.getElementById("opcionJugador");
var opcionMaquina = document.getElementById("opcionMaquina");

var numJugador = 0;
var numMaquina = 0;

var puntajeJugador = document.getElementById("puntajeJugador");
var puntajeMaquina = document.getElementById("puntajeMaquina");

var reset = document.getElementById("JugarDeNuevo")



//------> Botones de piedra, papel y tijeras que escoje el jugador
piedraBtn.addEventListener('click', function(){
    opcionJugador.src = "assets/img/piedra.svg" 
    play(piedra);
});

papelBtn.addEventListener('click', function(){
    opcionJugador.src = "assets/img/papel.svg"
    play(papel);
});

tijeraBtn.addEventListener('click', function(){
    opcionJugador.src = "assets/img/tijera.svg"
    play(tijera);
});




//------> Número al azar que escojerá la máquina y se mostrara en pantalla con una IMG
function play(opcionJugador){
    var maquina   = Math.floor(Math.random() * 3);
    var resultado = calcularResultado(opcionJugador, maquina);

    opcionMaquina.src = "assets/img/" + maquina + ".svg";

    switch(resultado){
        
        case empate:
            document.getElementById("resultadoCachipun").innerHTML = "Empatados" + " " + "<i class='fas fa-grin-beam-sweat'></i>";
            break;
        case ganador:
            document.getElementById("resultadoCachipun").innerHTML = "Ganaste!" + " " + "<i class='fas fa-grin-hearts'></i>";
            puntajeJugador.innerHTML = numJugador;
            break;
        case perdedor:
            document.getElementById("resultadoCachipun").innerHTML = "Perdiste!" + " " + "<i class='fas fa-poo'></i>";
            puntajeMaquina.innerHTML = numMaquina;
            break;
    }

    console.log(numJugador);

    if(numJugador == NumDeJugadas){
        alert('Ganaste! :D')
    }if(numMaquina == NumDeJugadas){   
        alert('Perdiste XD')
    }else if(numJugador == NumDeJugadas && numMaquina === NumDeJugadas ){
        alert('Empatados :/')
    }
};


//--------> Comparación para definir al ganador
function calcularResultado(opcionJugador, maquina){
    
    if(opcionJugador === maquina){
        return empate;
    }else if(opcionJugador === piedra){
        
        if(maquina === papel){
            numMaquina++
            return perdedor;
        };
        if(maquina === tijera){
            numJugador++
            return ganador;
        }

    }else if(opcionJugador === papel){

        if(maquina === tijera){
            numMaquina++
            return perdedor;
        };
        if(maquina === piedra){
            numJugador++
            return ganador;
        } 

    }else if(opcionJugador === tijera){

        if(maquina === piedra){
            numMaquina++
            return perdedor;
        };
        if(maquina === papel){
            numJugador++
            return ganador;
        };
    }  
};

//Reset
reset.addEventListener('click', function(){
    location.reload();
});







    
    
    
















