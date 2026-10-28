
const entradaNumero = document.getElementById("numero");
const salidaNumero = document.getElementById("salida"); 

entradaNumero.addEventListener("input", function () {
  let numero = Number(entradaNumero.value);

  if (numero === 15) {
    salidaNumero.textContent = "¡Felicidades, ya sabes cuál es mi número favorito!!! 🎉";
  } 
  else if (numero > 15) {
    salidaNumero.textContent = "Más abajo";
  } 

  else if (numero < 15) {
    salidaNumero.textContent = "Más arriba";
  } 
  else {
    salidaNumero.textContent = "";
  }
});

const gustos = document.getElementById("gustos");
const texto = document.getElementById("texto");
const imagen = document.getElementById("imagen");

gustos.addEventListener("change", function () {
  const valor = gustos.value;

if(valor === "Motivacion") {
  texto.textContent = "David Goggins ";
  imagen.src = "https://i.pinimg.com/736x/17/98/8c/17988c00e27b01ee67560ead73186ebe.jpg";
  imagen.style.display = "block";
}  else if (valor === "Futbol") {
  texto.textContent = "Jaguares ";
  imagen.src = "https://i.pinimg.com/736x/be/e6/76/bee67612d21b97da3debee6448fd9f14.jpg";
  imagen.style.display = "block"
}
  else if (valor === "Entretenimiento") {
    texto.textContent = "Los perros criollos";
    imagen.src = "https://i.pinimg.com/736x/42/52/75/425275f7c4dd418443f55e141feec676.jpg";
    imagen.style.display = "block";
}
  else if (valor === "Caballos") {
    texto.textContent = "Paso fino",
    imagen.src = "https://img.lalr.co/cms/2017/10/25012207/paso_fino.jpg";
    imagen.style.display = "block";
  } 
  else {
    texto.textContent = "";
    imagen.style.display = "none";
  }
});



// ----- Botón -----
const boton = document.getElementById("boton");

boton.addEventListener("click", function () {
  alert("Bueno, primero que todo profe usted es un mostro. Gracias a usted me he motivado a mejorar, gracias por todo lo enseñado, voy a trabar duro para se Usted es gran ejemplo para seguir creciendo "
    
  );
});

