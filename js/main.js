var boton = document.getElementById('boton');
boton.addEventListener("click",eliminarBoton);


//este boton me vacia las celdas y las colorea con un nuevo backgroundColor
function eliminarBoton() {
  this.style.display = "none";
  document.getElementById('celdaVacia').style.backgroundColor = "#00bfff";
}

// var celdasV1=document.getElementById("celdasVacias1");
// var celdasV2=document.getElementById("celdasVacias2");
// var numeritos=document.getElementsByClassName("numero");
//
// celdasV1.addEventListener("click",colorCeldas);
// celdasV2.addEventListener("click",colorCeldas);
// function colorCeldas() {
//        var padre=this.parentNode;
//    this.style.display = "none";
//    padre.style.backgroundColor = "#00BFFF "
// }
// Prueba fer