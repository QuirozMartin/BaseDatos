// -----INSCRIPCION ALUMNO-----

document.getElementById("borrarBaseDatos").addEventListener("click", function () {
    arrayEscuelaAlumnos = [];
    localStorage.setItem("ArrayEA", JSON.stringify(arrayEscuelaAlumnos));
    alert('se borro la base de datos');
    location.reload();

  });

let arrayEscuelaAlumnos = JSON.parse(localStorage.getItem("ArrayEA")) || [];

document.getElementById("btnEnviar1").addEventListener("click", function () {

  let objAlumno = {};
  objAlumno.nombres = document.getElementById("inputNombre").value;
  objAlumno.apellidos = document.getElementById("inputApellido").value;
  objAlumno.edad = document.getElementById("inputEdad").value;

  arrayEscuelaAlumnos.push(objAlumno);
  
  localStorage.setItem("ArrayEA", JSON.stringify(arrayEscuelaAlumnos));

  // Se vacian los campos cuando se ingresa un alumno
  document.getElementById("inputNombre").value = '';
  document.getElementById("inputApellido").value = '';
  document.getElementById("inputEdad").value = '';
  location.reload()

});
