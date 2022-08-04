


let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");
 if(usuarioStorage){
   let usuario = usuarioStorage;
   let mensaje = `Bienvenid@ al festival ${usuario}`;
   alert(mensaje);
 }else{
   usuario = prompt("Ingrese el nombre de usuario que desea");
   sessionStorage.setItem("usuario", usuario);
   let contraseña = prompt ("Ingrese una contraseña");
   let edad = parseInt(prompt("Ingrese su edad (solo numero)"));
   alert(`Bienvenid@ al festival ${usuario}`)
 }
 
//  let permiso = usuario.edad >= 18 ? true : false;
//  permiso ? console.log(`Bienvenid@ ${usuario}`): console.log("No puedes ingresar"); ;

 

