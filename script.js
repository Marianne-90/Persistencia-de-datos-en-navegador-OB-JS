
nombre=prompt("Ingresa tu nombre");

apellido=prompt("Ingresa tu apellido");

nombreYApellido={nombre,apellido}

localStorage.setItem("nombreYApellido",JSON.stringify(nombreYApellido));

sessionStorage.setItem("nombreYApellido",JSON.stringify(nombreYApellido));

console.log(JSON.parse(localStorage.getItem("nombreYApellido")));

document.cookie="nombreYApellido="+JSON.stringify(nombreYApellido);expires=new Date(Date.now()+120000);



