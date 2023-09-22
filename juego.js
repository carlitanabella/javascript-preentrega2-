/**
 * objetivos del proyecto
 * -estructura html
 * -funciones
 * -objetos
 * -arrays
 * -algun metodo (funciones orden superior)
 */

class Item {
    constructor(nombre, puntos, imagen, vida) {
      this.nombre = nombre;
      this.puntos = puntos;
      this.imagen = imagen;
      this.vida = vida;
    }
  }

const caramelo = new Item("Caramelo", 100, "caramelo.png",0);
const bomba = new Item("Bomba", -100, "bomba.png",(-1));

  // Array para ir metiendo puntos que ganemos

const puntos = [];
const vidas = [];

  // oportunidades probar

  let vida = 3;


  //elem DOM
  const lasvidas = document.querySelector("#vidas span");
  const lospuntos = document.getElementById("puntos");

  // 
function sumar(itemjuego) {
    if (vida + itemjuego.vida >= 1) {
        vidas.push(itemjuego);
        vida = vida + itemjuego.vida;
        actualizarHTML();
        console.log("vidas:, vida");

    } 
    else {
        alert(`¡Perdiste! Podes volver a intentarlo. ¡Suerte!`);
        window.location.reload();
  }
}

let punto = 0;
  
function sumarpuntos(itemdeljuego) {


    if (punto + itemdeljuego.puntos <= 700 ) { 
        puntos.push(itemdeljuego);
       punto = punto + itemdeljuego.puntos;
       actualizarHTML();
       console.log("puntos:, punto");
        
   }
   }


//


function actualizarHTML() {




lospuntos.innerHTML = "";
    for (const itemdeljuego of puntos) {
        // const indice = lospuntos.indexof(itemdeljuego);
        const li = `<li><img src="img/${itemdeljuego.imagen}" alt="${itemdeljuego.imagen}"/></li>`;
        lospuntos.innerHTML += li;


    }

lasvidas.innerHTML = "";
    for (const itemjuego of vidas) {
        // const indice = lasvidas.indexof(itemjuego);
        const li = `<li> <img src="img/${itemjuego.imagen}" alt="${itemjuego.imagen}"/></li>`;
        lasvidas.innerHTML += li;
    }



    lasvidas.innerText = vida;
    lospuntos.innerText = punto;
    
}


