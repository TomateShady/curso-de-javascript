//  alert("Bienvenidos a la preventa de entradas para el Nuevo Festival de Cine");

//  let usuario;
//  let usuarioStorage = sessionStorage.getItem("usuario");
//   if(usuarioStorage){
//     let usuario = usuarioStorage;
//     let mensaje = `Bienvenid@ ${usuario}`;
//     alert(mensaje);
//   }else{
//     usuario = prompt("Ingrese el nombre de usuario que desea");
//     sessionStorage.setItem("usuario", usuario);
//     let contraseña = prompt ("Ingrese una contraseña");
//     let edad = parseInt(prompt("Ingrese su edad (solo numero)"));
//     alert(`Bienvenid@ ${usuario}`)
//   }
 
  const lista = document.getElementById("talonario")

   fetch("./entradas.json")
   .then(response => response.json())
   .then(productos => {
       productos.forEach(producto => {
           const li = document.createElement("li");
           li.innerHTML = `
           <h2>${producto.nombre}</h2>
           <p>${producto.precio}</p>
           `;

           lista.append(li);
       });
   });


 