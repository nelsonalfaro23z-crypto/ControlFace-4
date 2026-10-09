function continuar(){

let correo=document.getElementById("correo").value;

if(correo==""){

alert("Ingrese su correo.");

return;

}

window.location.href="password.html";

}