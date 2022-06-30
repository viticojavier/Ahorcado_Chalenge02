crearTeclado();

function crearTeclado () {
    // Obtener div contenedor del teclado
    const contenedorTeclado = document.querySelector(".lista-letras");

    // Letras del teclado
    const letrasTeclado = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    // Asignar teclas al teclado
    for (let i = 0; i < letrasTeclado.length; i++)
    {
        // Crear contenedor de la tecla
        const contenedorTecla = document.createElement("li");

        // Agregando la clase con su identificador
        contenedorTecla.classList.add('letra')
        contenedorTecla.textContent = letrasTeclado[i];

        // Agregando el ID con su identificador
        contenedorTecla.innerHTML = letrasTeclado[i];
        contenedorTecla.id = letrasTeclado[i];

        contenedorTeclado.appendChild(contenedorTecla);
    }
}

// EJEMPLO DEL TECLADO A CREAR:
//     <ul class="lista-letras">  Por aqui se realiza la busqueda para crearlo
//         <li class="letra" id="A">A</li>
//         <li class="letra" id="B">B</li>
//         <li class="letra" id="C">C</li>
//         <li class="letra" id="D">D</li>
//         <li class="letra" id="E">E</li>
//         <li class="letra" id="F">F</li>
//         <li class="letra" id="G">G</li>
//         <li class="letra" id="H">H</li>
//         <li class="letra" id="I">I</li>
//         <li class="letra" id="J">J</li>
//         <li class="letra" id="K">K</li>
//         <li class="letra" id="L">L</li>
//         <li class="letra" id="M">M</li>
//         <li class="letra" id="N">N</li>
//         <li class="letra" id="Ñ">Ñ</li>
//         <li class="letra" id="O">O</li>
//         <li class="letra" id="P">P</li>
//         <li class="letra" id="Q">Q</li>
//         <li class="letra" id="R">R</li>
//         <li class="letra" id="S">S</li>
//         <li class="letra" id="T">T</li>
//         <li class="letra" id="U">U</li>
//         <li class="letra" id="V">V</li>
//         <li class="letra" id="W">W</li>
//         <li class="letra" id="X">X</li>
//         <li class="letra" id="Y">Y</li>
//         <li class="letra" id="Z">Z</li>
//     </ul>
