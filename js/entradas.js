
let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
   let usuario = usuarioStorage;
   Swal.fire(`¡Bienvenid#, ${usuario}!`);
 }else{
   usuario = prompt("Ingrese el nombre de usuario que desea");  
   let contraseña = prompt("Ingrese una contraseña segura");

   sessionStorage.setItem("usuario", usuario);
   const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Usuario creado correctamente'
  })
 }

 const nombreUser = () => {
       let usuarioStorage = sessionStorage.getItem("usuario");
       const username = document.getElementById("sesion");
          const li = document.createElement("div");
          li.innerHTML = `
          <h2>usuario: ${usuarioStorage}</h2>      
          `;
          li.className = "rojo";
          username.append(li);
      ;
  }

 const precioEntradas = async() => {
     const lista = document.getElementById("entradas");
     try {
         const response = await fetch(`../js/entradas.json`);
         const entradas = await response.json();

         entradas.forEach(entrada =>{
             const li = document.createElement("ul");
             li.innerHTML = `
             <h2>${entrada.nombre}</h2>
             <h5>${entrada.Precio}</h5>        
             <p>${entrada.id}</p>        
             `;
             li.className = "entradas";
             lista.append(li);
         });
     } catch(error){
         console.log(error);
     }
 };
 precioEntradas();
 nombreUser();

 