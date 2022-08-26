
 let formulario = document.getElementById("formulario");
 formulario.addEventListener("submit", validarFormulario);
 let button = document.getElementById("btn");
 let array1 = [];

  button.addEventListener("click", () =>{
    let nombre = document.getElementById("nombreusuario").value;  
    let apellido = document.getElementById("apellidousuario").value;  
    let mail = document.getElementById("emailusuario").value;  
    let categorias = document.getElementById("categoriausuario").value;
      if(nombre != "" && apellido != "" && mail != ""){
        Swal.fire({
            title: '¿Desea continuar?',
            showDenyButton: true,
            confirmButtonText: 'Continuar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) { 
              array1.push([nombre, apellido, mail, categorias]);
              console.log(array1);
              Swal.fire('¡Enviado!', '', 'success');
            } else if (result.isDenied) {
              Swal.fire('El formulario no fue enviado', '', 'info');
            }
          }) 
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Datos incompletos',
          text: 'Completar todos los datos',
        })
      }
    });

    function validarFormulario(e){
      e.preventDefault();     
      ;
    }
      validarFormulario();
