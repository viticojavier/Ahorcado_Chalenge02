// 330 PALABRAS DISTINTAS
let palabraRandom = ["ABIERTO","ABRAZAR","ABRIDOR","ABRUPTO","ACUARIO","AFEITAR","ALAMBRE","ALCOHOL","ALEGRIA","ALERGIA","ALGODON","ALGORITMO","ALIANZA","ALTAVOZ","AMERICA","ANTIGUO","APESTAR","APLAUSO","APOSTAR","ARBUSTO","ARCHIVO","ARITMETICA","ARQUERO","ARREGLO","ARTERIA","ARTIFICIAL","ASCENSO","ATRAPAR","AUMENTO","AVANZAR","AVENIDA","AVIADOR","AXIOMA","BABUINO","BAJAMAR","BALANZA","BALSAMO","BANDERA","BARBERO","BARCAZA","BARRERA","BATERIA","BEISBOL","BILLETE","BIOTOPO","BISONTE","BLOCKCHAIN","BLOQUEO","BOOLEANO","BOSTEZO","BREBAJE","BRILLAR","BUCLE","BURBUJA","CABALLO","CABARET","CADENA","CAFEINA","CALCULADORA","CAMBIAR","CAMPEON","CAMPING","CANCION","CANGURO","CANJEAR","CANTERA","CAPSULA","CARACOL","CARICIA","CARRERA","CARTERA","CELULAR","CEREBRO","CERRADO","CHAMPAN","CIENCIA","CLASE","COCINAR","CODIGO","COLUMNA","COMEDIA","COMPRAR","COMPUTADORA","CONDICION","CONFUSO","CONSOLA","CONSTANTE","CORDERO","CORTINA","COSTURA","CRIPTOMONEDA","CRISTAL","CRUCERO","CUCHARA","DEFECTO","DEMONIO","DEPORTE","DERECHO","ESARROLLADOR","DESECHO","DETALLE","DIENTES","DIRIGIR","DISFRAZ","DOMINAR","DOMINIO","DORMIDO","EDREDON","ELEMENTO","EMOCION","EMPRESA","EMPUJAR","ENERGIA","ENFERMO","ENTIDAD","ENTRADA","ENTREGA","ENVIADO","EROSION","ESCALAR","ESCLUSA","ESCOCES","ESCRITO","ESGRIMA","ESPACIO","ESPERAR","ESPINAS","ESPIRAL","ESPONJA","ESTABLE","ESTADIO","ESTATUA","ESTILO","ESTRENO","ETIQUETA","EXPERTO","FABRICA","FAMILIA","FIESTAS","FOOTING","FORMATO","FORMULA","FRANCES","FRANCIA","FRENESI","FUNCION","FUNDIDO","GALAXIA","GALERIA","GALLETA","GEMELOS","GIGANTE","GIRANDO","GLAMOUR","GOLPEAR","GRANADA","GRASOS","GUARDAR","GUARDIA","HARDWARE","HIERBAS","HIPERTEXTO","HUEVERA","IDENTIFICADOR","IGLESIA","IMPRESORA","IMPULSO","INTELIGENCIA","INTERNET","INVASOR","IRLANDA","ITERACION","JACKPOT","JAMAICA","JAPONES","JAVASCRIPT","JUEGO","JUGADOR","KARAOKE","LASER","LAVANDA","LECCION","LECHUZA","LENGUAJE","LEYENDA","LIMPIAR","LISTA","LISTADO","LOGICA","LONDRES","MAQUINA","MARCADO","MASCARA","MASCOTA","MATEMATICA","MEDITAR","MEMORIA","MENSAJE","MEZCLA","MIEMBRO","MILITAR","MINERIA","MODERNO","MOLESTO","MONITOR","MONTAJE","MONTAÑA","MONTURA","MORTERO","MOUSE","MUESTRA","NADADOR","NADANDO","NARANJA","NARCISO","NAVEGADOR","NAVIDAD","NOMENCLATURA","NOTEBOOK","NUCLEO","NUMERO","OBJETO","OFICIAL","OFICINA","OPERACION","ORGULLO","OXIGENO","PAGINA","PAISAJE","PALABRA","PALACIO","PALMERA","PAÑUELO","PAQUETE","PARLANTE","PARTIDA","PATINAR","PEDIGRI","PELIGRO","PERIODO","PILDORA","PINCHAR","PISCINA","PIZARRA","PLANEAR","PLANTAS","PODERES","PODRIDO","POKEMON","POLICIA","PORTERO","PRECISO","PRESION","PRIVADO","PROCESADOR","PROGRAMACION","PROXIMO","QUIEBRA","RAPIDEZ","RAZONAR","REBAJAR","RECORTE","RECURSO","REDONDO","REGENTE","RELLENO","REMEDIO","REMOVER","REPARAR","REPLETO","RESCATE","RESULTADO","REUNION","RIQUEZA","ROBOT","RODILLA","RODILLO","RUPTURA","SALARIO","SALIDA","SALVAJE","SEGUNDO","SEMANTICA","SEMBRAR","SEMILLA","SENTIDO","SINTAXIS","SISTEMA","SOFTWARE","SOLTERO","SONREIR","SONRISA","SUJETAR","TALENTO","TAPARSE","TARJETA","TECLADO","TECLEAR","TECNOLOGIA","TEMBLAR","TENSION","TERNERO","TERRENO","TIMIDEZ","TIRADOR","TITULAR","TOBOGAN","TORTITA","TOSTADA","TRABAJO","TRANSFERENCIA","TRENZAR","TROCEAR","TURISMO","UKELELE","VACANTE","VALIOSO","VALOR","VALORAR","VAMPIRO","VENTANA","VESTIDO","VIENTRE","VINCULO","VOCALES","VOLANTE","VOLUMEN","ZANGANO","ZARCILLO","ZEPELIN"];

let filtro;
let palabraSecreta;
let letrasPalabraSecreta;
let intentosRestantes;
let intentosRestantesHTML = document.querySelector(".intentos-restantes");
let letrasTeclado = document.querySelector(".lista-letras").childNodes;
let camposPalabra = document.querySelector(".palabra");
let campoLetra;

let botonNuevaPalabra = document.querySelector(".nueva-palabra");
botonNuevaPalabra.addEventListener('click', function() {
    filtro = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    palabraSecreta = palabraRandom[Math.floor(Math.random() * palabraRandom.length)];
    letrasPalabraSecreta = 0;
    intentosRestantes = 8;
    intentosRestantesHTML.innerHTML = "Intentos restantes: " + intentosRestantes;
    botonRendirse.classList.remove("botonOff");
    
    letrasTeclado.forEach(element => {
        element.className = "letra";
    });
    
    while(camposPalabra.firstChild) {
        camposPalabra.removeChild(camposPalabra.lastChild);
    }    

    for(let i = 0; i < palabraSecreta.length; i++) {
        campoLetra = document.createElement("span");
        campoLetra.classList.add("campo-letras");
        camposPalabra.appendChild(campoLetra);
    }
    dibujarBaseHorca();
});

let botonRendirse = document.querySelector(".rendirse");
botonRendirse.addEventListener('click', function() {
    intentosRestantesHTML.innerHTML = "NOO, me mataste !! <br> 😱😳";
    for(let i = 0; i < palabraSecreta.length; i++) {
        camposPalabra.childNodes[i].innerHTML = palabraSecreta[i];
        camposPalabra.childNodes[i].className = "palabra-ahorcado-mal";
    }
    inhabilitar();
    dibujarAhorcado();
});

function inhabilitar() {
    botonRendirse.classList.add("botonOff");
    filtro = "";
    letrasTeclado.forEach(element => {
        element.className = "letra-bloqueada";
    });
}

function mostrarPalabraSecreta() {
    for(let i = 0; i < palabraSecreta.length; i++) {
        if(letrasPalabraSecreta == palabraSecreta.length) {
            camposPalabra.childNodes[i].className = "palabra-ahorcado-bien";
            intentosRestantesHTML.innerHTML = "Me Salvaste, Muchas Gracias <br> 🤗🤗🤗";
            inhabilitar();
            dibujarSalvado();
        }
        if(intentosRestantes == 0) {
            camposPalabra.childNodes[i].innerHTML = palabraSecreta[i];
            camposPalabra.childNodes[i].className = "palabra-ahorcado-mal";
            intentosRestantesHTML.innerHTML = "Fui ahorcado <br> 😰🥺";
            inhabilitar();
            dibujarAhorcado();
        }
    }
}

function introducirLetras(key) {    
    let idLetra = "#" + key;
    let keyLetra = document.querySelector(idLetra);

    if(palabraSecreta.includes(key)) {
        for(let i = 0; i < palabraSecreta.length; i++) {
            if(key == palabraSecreta[i]) {
                letrasPalabraSecreta++;
                camposPalabra.childNodes[i].innerHTML = palabraSecreta[i];
                keyLetra.className = "letra-correcta";
            }            
        }    
    } else {
        intentosRestantes--;
        intentosRestantesHTML.innerHTML = "Intentos restantes: " + intentosRestantes;
        keyLetra.className = "letra-incorrecta";
        dibujarCanvas(intentosRestantes);
    }
    mostrarPalabraSecreta();
}

let keyLetra = document.querySelectorAll(".letra");
    keyLetra.forEach(letra => {
    letra.addEventListener('click', function(event) {
        let key = event.target.textContent;
        introducirLetras(key);
    });
});

let teclaPresionada = document.querySelector("html");

teclaPresionada.addEventListener("keydown", function(event) {
    let key = event.key.toUpperCase();
    if(filtro.includes(key)) {
        introducirLetras(key);
        filtro = filtro.replace(key, '');
    }
});