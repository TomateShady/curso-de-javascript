

//---------------------------------OTRO EJERCICIO-----------------------------------------------
 alert("Bienvenidos a la preventa de entradas para el Nuevo Festival de Cine")
 alert ("A continuación, ingrese solo el número de la fecha a la cual desea asistir")

let fechaUno = 24;
let fechaDos = 25;
let array1 = [];
let array2 = [];

 for (let i = 0; i <= 10; i++){
     let fecha = parseInt(prompt("Ingrese a que fecha desea ir (24 o 25 de Febrero de 2023)"));
     array1.push(fecha);

     if (fecha === fechaUno){
         alert(`Usted ha elegido la fecha ${fechaUno} de Febrero de 2023, Bienvenid@!`);
         break;
     }
     else if (fecha === fechaDos){
         alert (`Usted ha elegido la fecha ${fechaDos} de Febrero de 2023, Bienvenid@`);
         break;
     }
     else (fecha != fechaUno && fecha != fechaDos); {
         alert("Usted no ha ingresado una fecha correcta");
         break;
     }
   
 } 

 for (i = 0; i <= 10; i++){
    let cantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas que desea (máximo 3 por persona)"));
    array2.push(cantidadEntradas);

    if (cantidadEntradas === 1 && cantidadEntradas ===2 && cantidadEntradas ===3){
       alert(`Usted ha seleccionado ${cantidadEntradas} entrada/s`);
       break;
    }
    else
    break;
}
alert(`Usted ha elegido el ${array1} de Febrero con entrada para ${array2} personas`);


let cantidadEntradas = array2;
let precioEntradas = 10000;
let descuento = 400;
let cuotas = parseInt(prompt("Ingrese en la cantidad de cuotas que desea abonar (3, 6 o 12)"));

 const suma = (a, b) => a + b;
 const resta = (a, b) => a - b;
 const multiplicar = (a, b) => a * b;
 const dividir = (a, b) => a / b;
 const iva = x => x * 0.21;

 let resultado = resta(suma( multiplicar(precioEntradas, cantidadEntradas), iva(precioEntradas)), descuento);
 let resultadoCuotas = dividir(resta(suma( multiplicar(precioEntradas, cantidadEntradas), iva(precioEntradas)), descuento), cuotas);


 alert(`Ticket: fecha:${array1} de Febrero de 2023, entradas: ${array2}, total a Pagar: $${resultado} en ${cuotas} cuotas de $${resultadoCuotas} pesos argentinos`)


console.log(array1, array2);
