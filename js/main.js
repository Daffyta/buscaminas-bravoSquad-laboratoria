var boton = document.getElementById('boton');
boton.addEventListener("click",eliminarBoton);

function eliminarBoton() {
  this.style.display = "none";
  document.getElementById('celdaVacia').style.backgroundColor = "#00bfff";
}
