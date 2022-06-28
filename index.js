
// for (let i = 0; i <=10; i++){
//      let nombre = prompt("Ingrese su nombre")
//  if(i == 10){
//          alert(`Lo sentimos ${nombre}, no hay mas vacantes`);
//          break;
//      }
//      let mensaje = (`Bienvenido ${nombre}, tu numero asignado es ${i}`);
//      alert(mensaje);
// }
//------------------------------------OTRO EJERCICIO---------------------------------------------
// for (let i = 0; i <= 10; i++){
//     let nombre = prompt("Ingrese su nombre para entrar en la fila");
//     if (i == 10){
//         alert(`Lo sentimos ${nombre}, no hay mas preventas disponibles`);
//         break;
//     }
//     let mensaje = (`Bienvenido/a ${nombre}, usted ahora esta en la fila`);
//     alert(mensaje);
// }

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
        alert = (`Usted a elegido la fecha ${fechaDos} de Febrero de 2023, Bienvenid@`);
        break;
    }
    else (fecha != "24" || fecha != "25"); {
        alert("Usted no ha ingresado una fecha correcta");
    }
   
}




