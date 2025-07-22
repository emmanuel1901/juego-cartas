function repartir(){
    let tablero=document.getElementById("tablero");
    let carta=document.createElement("img");
    let indice=Math.floor(Math.random()*52) + 1;
    carta.src="imagenes/cartas/Carta"+indice+".jpg";
    tablero.appendChild(carta);
}