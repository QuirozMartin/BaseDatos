// --------CONTROL ALUMNO---------

// document.getElementById("borrarBaseDatos2").addEventListener("click", function () {
//     arrayEscuelaAlumnos = [];
//     localStorage.setItem("ArrayEA", JSON.stringify(arrayEscuelaAlumnos));
//     location.reload()
//   });

// var arrayEscuelaAlumnos = JSON.parse(localStorage.getItem("ArrayEA"));
var arrayClases = ["Javascript", "Python", "PHP", "React", "Vue"];
var calificaciones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var grupos =['A','B','C','D'];

// Código para poner los elementos del array en el select de Alumno

// Obtener el elemento select por su id
var selectElementA = document.getElementById("selectAlumno");

// Recorrer el array y agregar opciones al seleccionar alumno
arrayEscuelaAlumnos.forEach(function (opcion) {
  var opcionElement = document.createElement("option");
  opcionElement.text = opcion.nombres;
  selectElementA.add(opcionElement);
});

// Código para poner los elementos del array en el select de Clase

var selectElementC = document.getElementById("selectClase");

// Recorrer el array y agregar opciones al seleccionar clase
arrayClases.forEach(function (opcion) {
  var optionElement = document.createElement("option");
  optionElement.text = opcion;
  selectElementC.add(optionElement);
});

// FUNCION PARA AGREGAR CLASES A UN ALUMNO

document.getElementById("btnInscribirA").addEventListener("click", function () {
  let valorAlumno = document.getElementById("selectAlumno").value;
  let valorClase = document.getElementById("selectClase").value;

  // Se busca el alumno en el array de objetos para agregarle las clases de un array
  let alumnoEncontrado = arrayEscuelaAlumnos.find(
    (objeto) => objeto.nombres == valorAlumno
  );
  console.log("Valor de Alum Encontrad" + alumnoEncontrado);

  if (alumnoEncontrado) {
    // Se verifica si el alumno ya tiene un array de clases, de no ser así se crea uno
    console.log("se encontró el alumno para agregar clase");
    console.log(valorAlumno);
    console.log(valorClase);

    // Se busca la clase seleccionada para saber si ya está asignada al alumno y evitar que se repita

    // Verificar que la propiedad "clases" existe en el objeto del alumno
    if (alumnoEncontrado.clases && Array.isArray(alumnoEncontrado.clases)) {
      // Una vez verificado que si existe ese array se procede a buscar la clase en específica,Importante verificar si esxiste el array de lo contrario .find marcara error al estar buscando en una clase que no existe
      var claseEncontradaR = alumnoEncontrado.clases.find(
        (objeto) => objeto.clasesN == valorClase
      );
    }
    if (claseEncontradaR) {
      alert("Esta clase ya está asignada al Alumno");
    }
    // Si el alumno ya tiene la clase asignada se manda una alerta
    else {
      // Si el alumno no tiene la clase asignada se agrega la clase

      let objClases = {};

      objClases.clasesN = valorClase;
      objClases.calif = null;

      if (!alumnoEncontrado.clases) {
        // Si no tiene, crear uno
        alumnoEncontrado.clases = [];
      }

      alumnoEncontrado.clases.push(objClases);

      // Se busca el Alumno en al array para actualizarlo y volverlo a subir al local Storage
      let indexAlumno = arrayEscuelaAlumnos.findIndex(
        (objeto) => objeto.nombres === valorAlumno
      );

      if (indexAlumno !== -1) {
        arrayEscuelaAlumnos[indexAlumno] = alumnoEncontrado;
        // Se sube al local Storage con el alumno modificado
        localStorage.setItem("ArrayEA", JSON.stringify(arrayEscuelaAlumnos));
        console.log(arrayEscuelaAlumnos);
      } else {
        console.log("no se encontró nadie");
      }

      console.log(alumnoEncontrado);
    }
  }
  // Se agrega función para que se recarge la pagina y se actualize la renderización de los alumnos
  location.reload()

});

// FUNCION PARA AGREGAR LAS CALIFICACIONES A LA CLAES DE UN ALUMNO

// Código para poner los elementos del array en el select de Alumno

// Obtener el elemento select por su id
var selectElement = document.getElementById("selectAlumno2");

// Recorrer el array y agregar opciones al seleccionar alumno
arrayEscuelaAlumnos.forEach(function (opcion) {
  var opcionElement = document.createElement("option");
  opcionElement.text = opcion.nombres;
  selectElement.add(opcionElement);
});

// CODIGO PARA BUSCAR QUE CLASES TIENE SELECCIONADA UN ALUMNO Y MOSTRARLAS EN SEL SELECT

var selectElement = document.getElementById("selectClase2");

// Recorrer el array y agregar opciones al seleccionar alumno
document.getElementById("selectAlumno2").addEventListener("click", function () {
  let valorAlumno = document.getElementById("selectAlumno2").value;

  // Se busca el alumno en el array de objetos para agregarle las clases de un array
  let alumnoEncontrado2 = arrayEscuelaAlumnos.find(
    (objeto) => objeto.nombres == valorAlumno
  );

  // Se limpia el select para queno salgan las opciones anteriores
  selectElement.options.length = 0;

  alumnoEncontrado2.clases.forEach(function (opcion) {
    var opcionElement = document.createElement("option");
    opcionElement.text = opcion.clasesN;
    selectElement.add(opcionElement);
  });
});

// CODIGO PARA MOSTRAR LAS CALIFICACIONES POSIBLES POR AGREGAR

var selectCalif = document.getElementById("selectCalif");

// Recorrer el array y agregar opciones al seleccionar alumno
calificaciones.forEach(function (opcion) {
  var optionCalif = document.createElement("option");
  optionCalif.text = opcion;
  selectCalif.add(optionCalif);
});

// CODIGO PARA ASIGNAR LA CALIFIACIÓN DE LA MATERIA AL ALUMNO SELECCIONADO

document.getElementById("btnAsignarCalif").addEventListener("click", function () {
    let valorAlumno3 = document.getElementById("selectAlumno2").value;
    let valorClase3 = document.getElementById("selectClase2").value;
    let valorCalif3 = document.getElementById("selectCalif").value;

    let alumnoEncontrado3 = arrayEscuelaAlumnos.find(
      (objeto) => objeto.nombres == valorAlumno3
    );

    if (alumnoEncontrado3) {
      // Se encuentra la clase a la que se le quiere asignar la califiación
      let claseEncontrada3 = alumnoEncontrado3.clases.find(
        (objeto) => objeto.clasesN == valorClase3
      );

      claseEncontrada3.calif = valorCalif3;

      // Se busca el Alumno en al array para actualizarlo y volverlo a subir al local Storage
      // let indexAlumno = arrayEscuelaAlumnos.findIndex(
      //   (objeto) => objeto.nombres === valorAlumno3
      // );

      // if (indexAlumno !== -1) {
      //   arrayEscuelaAlumnos[indexAlumno] = alumnoEncontrado3;
      //   // Se sube al local Storage con el alumno modificado
      //   localStorage.setItem("ArrayEA", JSON.stringify(arrayEscuelaAlumnos));
      //   console.log(arrayEscuelaAlumnos);
      // }

    }

    localStorage.setItem("ArrayEA", JSON.stringify(arrayEscuelaAlumnos));
    location.reload()
  });


// CODIGO PARA ASIGNAR UN ALUMNO A UN GRUPO


    // Se busca la ubicación del input y se guarda en una variable
var selectGrupo = document.getElementById("selectGrupo");

// Recorrer el array y agregar opciones al seleccionar alumno
grupos.forEach(function (opcion) {
  var opcionGrupo = document.createElement("option");
  opcionGrupo.text = opcion;
  selectGrupo.add(opcionGrupo);
});


// Obtener el elemento select por su id
var selectElementD = document.getElementById("selectAlumno3");

// Recorrer el array y agregar opciones al seleccionar alumno (de grupos)
arrayEscuelaAlumnos.forEach(function (opcion) {
  var opcionElement3 = document.createElement("option");
  opcionElement3.text = opcion.nombres;
  selectElementD.add(opcionElement3);
});


//  FUNCION PARA AGREGAR ESE GRUPO AL OBJETO ALUMNO

document.getElementById('btnAsignarG').addEventListener('click',function(){

  let valorAlumno3 = document.getElementById("selectAlumno3").value;
  let valorClase3 = document.getElementById("selectGrupo").value;


  // Se busca el alumno deseado para asignarle un grupo dentro del array

  let alumnoEncontrado3 = arrayEscuelaAlumnos.find(
    (alumno) => alumno.nombres == valorAlumno3
  );

    alumnoEncontrado3.grupo = valorClase3;

    let indexAlumno = arrayEscuelaAlumnos.findIndex(
      (objeto) => objeto.nombres === valorAlumno3
    );

    if (indexAlumno !== -1) {
      arrayEscuelaAlumnos[indexAlumno] = alumnoEncontrado3;
      // Se sube al local Storage con el alumno modificado
      localStorage.setItem("ArrayEA", JSON.stringify(arrayEscuelaAlumnos));
      console.log(arrayEscuelaAlumnos);
    } else {
      console.log("no se encontró nadie");
    }

// Se agrega función para que se recarge la pagina y se actualize la renderización de los alumnos
location.reload()

})



// Código para descargar la base de datos actualizada en un archivo JSON

let btnDescargar = document.getElementById('btnDescargaJSON');

btnDescargar.addEventListener('click', function () {

  const contenidoJSON = JSON.stringify(arrayEscuelaAlumnos);

  const enlace =document.createElement('a');
  enlace.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(contenidoJSON);
  enlace.download = 'basededatos.json';
  enlace.click()

});