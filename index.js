

//---------------------------------OTRO EJERCICIO-----------------------------------------------
 alert("Bienvenidos a la preventa de entradas para el concierto de Eminem")
 alert ("A continuación, ingrese solo el número de la fecha a la cual desea asistir")

  let fechaUno = "24";
  let fechaDos = "25";


 for (let i = 0; i <= 10; i++){
     let fecha = prompt("Ingrese a que fecha desea ir (24 o 25 de Febrero de 2023)");
    
     if (fecha === "24"){
         alert(`Usted a elegido la fecha ${fechaUno} de Febrero de 2023, Bienvenid@!`);
         break;
     }
     if (fecha === "25"){
         alert (`Usted a elegido la fecha ${fechaDos} de Febrero de 2023, Bienvenid@`);
         break;
     }
     else (fecha != "24" || fecha != "25"); {
         alert("Usted no ha ingresado una fecha correcta");
     }
   
 }
//--------------------------------------- OTRO EJERCICIO--------------------------------------------


let precioEntradas = 15000;
let cantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas que desea (máximo 3 por persona)"));
let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas que desea (3 ó 6)"));
let descuento = 400;

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
const iva = x => x * 0.21;

let resultado = resta(dividir(suma( multiplicar(precioEntradas, cantidadEntradas), iva(precioEntradas)), cuotas), descuento);
alert(`Usted debe pagar ${cuotas} cuotas de $${resultado}`);

