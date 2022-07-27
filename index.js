

//---------------------------------------------EJERCICIO--------------------------------------------------//
//  alert("Bienvenidos a la preventa de entradas para el Nuevo Festival de Cine. A continuación, ingrese solo el número de la fecha a la cual desea asistir");

//   let fechaUno = 24;
//   let fechaDos = 25;
//   let array1 = [];
//   let array2 = [];
//   let cantidadEntradas = array2;
//        for (let i = 0; i < 10; i++){
//            let fecha = parseInt(prompt(`Ingrese a que fecha desea ir (24 o 25 de Febrero de 2023)`));
//            array1.push(fecha);
         

//        if (fecha === fechaUno){
//            alert(`Usted ha elegido la fecha ${fechaUno} de Febrero de 2023, Bienvenid@!`);
//            cantidadEntradas = parseInt(prompt(`Ingrese la cantidad de entradas. Máximo 3 por persona.`));
//            array2.push(cantidadEntradas);
//            break;
//        }
//        else if (fecha === fechaDos){
//            alert (`Usted ha elegido la fecha ${fechaDos} de Febrero de 2023, Bienvenid@`);
//            cantidadEntradas = parseInt(prompt(`Seleccione la cantidad de entradas. Máximo 3 por persona.`));
//            array2.push(cantidadEntradas);
//            break;
//        }
//        else (fecha != fechaUno && fecha != fechaDos); {
//            alert(`Ingrese una fecha correcta`);
//        }  
     
//    } 

//   let precioEntradas = 10000;
//   let descuento = 400;
//   let cuotas = parseInt(prompt("Ingrese en la cantidad de cuotas que desea abonar (3, 6 o 12)"));

//        const suma = (a, b) => a + b;
//        const resta = (a, b) => a - b;
//        const multiplicar = (a, b) => a * b;
//        const dividir = (a, b) => a / b;
//        const iva = x => x * 0.21;

//   let resultado = resta(suma( multiplicar(precioEntradas, cantidadEntradas), iva(precioEntradas)), descuento);
//   let resultadoCuotas = dividir(resta(suma( multiplicar(precioEntradas, cantidadEntradas), iva(precioEntradas)), descuento), cuotas);


//   alert(`Fecha: ${array1} de Febrero de 2023. Entradas: ${array2}. Total a pagar: $${resultado} en ${cuotas} cuotas de $${resultadoCuotas} Pesos Argentinos`);
 
//    console.log(array1, array2);

//----------------------------------------------DOM----------------------------------------------------
// let saludo = document.getElementById("contenido");
// let seccion = prompt("Ingrese la seccion deseada (participar ó tienda)");


// if(seccion === "participar"){
//     saludo.innerHTML = "<h1>Bienvenidos a la inscripcion al Festival Nº1 de Cine Argentino 6550pr</h1>";
//     saludo.className = "verde";

// } else if (seccion === "tienda") {
//     saludo.innerHTML = "<h1>Bienvenidos a la tienda del Festival Nº1 de Cine Argentino 6550pr</h1>";
//     saludo.className = "azul"; 
// } else {
//     saludo.innerHTML = "<h1>Bienvenido al 1er Festival de Cine Argentino 6550pr</h1>";
//     saludo.className = "rojo";
// }


//  let contenedor = document.getElementById("contenido");
//  let productos =  [
//      {id: 1, nombre: "Remera", precio: 2000},   
//      {id: 2, nombre: "Buzo", precio: 3000},   
//      {id: 3, nombre: "Poster", precio: 500},   
//      {id: 4, nombre: "Gorra", precio: 900},
//  ];

//  for (const producto of productos){
//      let li = document.createElement("li");
//      li.innerHTML = ` <h3>ID: ${producto.id}</h3>
//                       <p>Producto: ${producto.nombre}</p>
//                       <b>Precio $${producto.precio}</b>
//                       `;
//  contenedor.append(li);
// }

//------------------------------------------------------EVENTS--------------------------------------
// let boton = document.getElementById("btnPrincipal");

// boton.addEventListener("mouseup", () => {
//     console.log("Inscripto");
// });

// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e){
//     e.preventDefault();
//     console.log(e.target.children[0].value);
//     console.log(e.target.children[1].value);
//     console.log(e.target.children[2].value);
    
//     if(e.target.children[1].value.includes("@") && e.target.children[1].value.includes(".")){
//         let mensaje = document.createElement("div");
//         mensaje.innerHTML = "Tus datos fueron registrados correctamente";
//         mensaje.className = "verde";
//         document.body.append(mensaje);
//         e.target.children[0].value = "";
//         e.target.children[1].value = "";
//         e.target.children[2].value = "";
        
//     }else{
//         let mensaje = document.createElement("div");
//         mensaje.innerHTML = "Datos ingresados incorrectos";
//         mensaje.className = "rojo";
//         document.body.append(mensaje);
//         e.target.children[1].value = "";
//     }  
// }

