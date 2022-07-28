let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log(e.target.children[0].value);
    console.log(e.target.children[1].value);
    console.log(e.target.children[2].value);
    
    if(e.target.children[1].value.includes("@") && e.target.children[1].value.includes(".")){
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Tus datos fueron registrados correctamente";
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
        e.target.children[1].value = "";
    }  
}
