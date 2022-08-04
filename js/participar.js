
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log(e.target.children[0].value);
    console.log(e.target.children[1].value);
    console.log(e.target.children[2].value);
    
    if(e.target.children[2].value.includes("@") && e.target.children[2].value.includes(".")){
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Tus material ha sido enviado correctamente";
        mensaje.className = "verde";
        document.body.append(mensaje);
        e.target.children[0].value = "";
        e.target.children[1].value = "";
        e.target.children[2].value = "";
    }else{
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Datos ingresados incorrectos";
        mensaje.className = "rojo";
        document.body.append(mensaje);
        e.target.children[2].value = "";
    }  
}

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

// let timerInterval
// Swal.fire({
//     title: 'Auto close alert!',
//     html: 'I will close in <b></b> milliseconds.',
//     timer: 2000,
//     timerProgressBar: true,
//     didOpen: () => {
//       Swal.showLoading()
//       const b = Swal.getHtmlContainer().querySelector('b')
//       timerInterval = setInterval(() => {
//         b.textContent = Swal.getTimerLeft()
//       }, 100)
//     },
//     willClose: () => {
//       clearInterval(timerInterval)
//     }
//   }).then((result) => {
//     /* Read more about handling dismissals below */
//     if (result.dismiss === Swal.DismissReason.timer) {
//       console.log('I was closed by the timer')
//     }
//   })