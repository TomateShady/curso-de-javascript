
 let formulario = document.getElementById("formulario");
     formulario.addEventListener("submit", validarFormulario);
 
 let button = document.getElementById("btn")

  button.addEventListener("click", () =>{
    Swal.fire({
        title: '¿Desea continuar?',
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: 'Continuar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('¡Enviado!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('El formulario no fue enviado', '', 'info')
        }
      })   
    });

    
    function validarFormulario(e){
      e.preventDefault();
     
      if(formulario){
        let mensaje = document.createElement("div");
              mensaje.innerHTML = "Tus material ha sido enviado correctamente";
              mensaje.className = "verde";
              document.body.append(mensaje);      
          }else{
              let mensaje = document.createElement("div");
              mensaje.innerHTML = "Datos ingresados incorrectos";
              mensaje.className = "rojo";
              document.body.append(mensaje);
            }  
      }
      validarFormulario();


      
      //----------------------Probamos de otra manera con el nuevo formulario---------------------------
      // let usuario;
      // let usuarioStorage = sessionStorage.getItem("usuario");
      //      if(usuarioStorage){
      //        let usuario = usuarioStorage;
      //        let mensaje = `Bienvenid@ al festival ${usuario}`;
      //        alert(mensaje);
      //  }  else{
      //       usuario = prompt("Ingrese el nombre de usuario que desea");
      //       sessionStorage.setItem("usuario", usuario);
      //       let contraseña = prompt ("Ingrese una contraseña");
      //       let edad = parseInt(prompt("Ingrese su edad (solo numero)"));
      //       alert(`Bienvenid@ al festival ${usuario}`)
      //  }
      



      //  let timerInterval
      //  Swal.fire({
        //      title: 'Auto close alert!',
//      html: 'I will close in <b></b> milliseconds.',
//      timer: 2000,
//      timerProgressBar: true,
//      didOpen: () => {
//        Swal.showLoading()
//        const b = Swal.getHtmlContainer().querySelector('b')
//        timerInterval = setInterval(() => {
  //          b.textContent = Swal.getTimerLeft()
  //        }, 100)
//      },
//      willClose: () => {
//        clearInterval(timerInterval)
//      }
//    }).then((result) => {
//      /* Read more about handling dismissals below */
//      if (result.dismiss === Swal.DismissReason.timer) {
  //        console.log('I was closed by the timer')
//      }
//    })