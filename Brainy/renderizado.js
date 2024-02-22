

let tituloRNombre = document.createElement('div');
tituloRNombre.textContent = 'NOMBRE';

let tituloRGrupo = document.createElement('div');
tituloRGrupo.textContent = 'GRUPO';

let tituloRCalificaciones = document.createElement('div');
tituloRCalificaciones.textContent = 'CALIFICACIONES';


let tituloRDiv = document.createElement('div');
tituloRDiv.classList.add('titulos_renderizado');


// Codigo para renderizar la información de los alumnos en una tabla y poder aplicar funcionalidades

let tablaCuerpo = document.getElementById('tablaCuerpo');



/**
 * Renders the full student table by looping through the array of student objects,
 * calculating the average grade for each student, adding the average as a new property on
 * the student object, and generating a table row for each student with their info and grades.
 */
function renderizarTablaCompleta() {
  arrayEscuelaAlumnos.forEach((alumno) => {
    const row = document.createElement("tr");

    // CODIGO PARA OBTENER EL PROMEDIO DE LOS ALUMNOS
    let promedio = 0;
    let sumaCalif = 0;

    console.log("Inicio Promedio");

    alumno.clases.forEach((clase) => {
      sumaCalif = sumaCalif + parseInt(clase.calif);
      console.log(clase.calif);
    });
    promedio = sumaCalif / alumno.clases.length;

    // Se agrega el key promedio con el valor promedio al alumno y se sube al array
    alumno.promedio = promedio.toFixed(1);

    // Se sube al local Storage con el alumno modificado
    localStorage.setItem("ArrayEA", JSON.stringify(arrayEscuelaAlumnos));
    console.log("Fin Promedio");
    row.innerHTML = `
        <td> ${alumno.nombres}</td>
        <td> ${alumno.apellidos}</td>
        <td> ${alumno.grupo}</td>
        <td> 
            ${alumno.clases
              .map((clase) => `${clase.clasesN}: ${clase.calif}`)
              .join("<br>")}
        <br>
        </td>
        <td> ${promedio.toFixed(1)} </td>
        `;
    tablaCuerpo.appendChild(row);
    console.log("renderizadatabla");
  });
}


renderizarTablaCompleta();

// Codigo para ordenar la lista de alumnos renderizada por su promedio, de mayoy a menor y menor a mayor

let opcionOPromedio = document.getElementById('ordenarPromedio');
opcionOPromedio.addEventListener('change',()=>{

    let valorOPromedio = document.getElementById('ordenarPromedio').value
    console.log(valorOPromedio);

    switch(valorOPromedio){

    case 'ordenP1':

        break;
    case 'ordenP2':

        arrayEscuelaAlumnos.sort(function(a, b) {
            return b.promedio - a.promedio;
            
          });
        
         renderizarTabla(arrayEscuelaAlumnos);

        break;

    case 'ordenP3':
        
        arrayEscuelaAlumnos.sort(function(a, b) {
            return a.promedio - b.promedio;
          });
        renderizarTabla(arrayEscuelaAlumnos);
        break;
    }


})


function renderizarTabla(arrayRenderizar){

    tablaCuerpo.innerHTML= '';
    arrayRenderizar.forEach(alumno =>{

        const row = document.createElement('tr');

        row.innerHTML =
        `
        <td> ${alumno.nombres}</td>
        <td> ${alumno.apellidos}</td>
        <td> ${alumno.grupo}</td>
        <td> 
            ${alumno.clases.map(clase => `${clase.clasesN}: ${clase.calif}`).join("<br>")}
        <br>
        </td>
        <td> ${alumno.promedio} </td>
        `
        tablaCuerpo.appendChild(row);
    })
}

// CÓDIGO PARA BUSCAR ALUMNO POR NOMBRE Y APELLIDO

    // Busqueda por Nombre
document.getElementById('btnBuscarNombre').addEventListener('click',()=>{  

let valorBNombre = document.getElementById('inputBNombre').value

let alumnoBE = arrayEscuelaAlumnos.find(
    (alumno) => alumno.nombres == valorBNombre
)

tablaCuerpo.innerHTML= '';
let rowBN = document.createElement('tr');

rowBN.innerHTML =
`
<td> ${alumnoBE.nombres}</td>
<td> ${alumnoBE.apellidos}</td>
<td> ${alumnoBE.grupo}</td>
<td> 
<br>
    ${alumnoBE.clases.map(clase => `${clase.clasesN}: ${clase.calif}`).join("<br>")}
<br>
</td>
<td> ${alumnoBE.promedio} </td>
`
tablaCuerpo.appendChild(rowBN);

});

// Función para que cuando no se esté buscando nada renderize la tabla completa
document.getElementById('inputBNombre').addEventListener('input',(event)=>{
    let valorBNombre = event.target.value;
    if (valorBNombre == ''){
        tablaCuerpo.innerHTML= '';
        renderizarTablaCompleta();
    }
})

document.getElementById('inputBApellido').addEventListener('input',(event)=>{
    let valorBNombre = event.target.value;
    if (valorBNombre == ''){
        tablaCuerpo.innerHTML= '';
        renderizarTablaCompleta();
    }
})

document.getElementById('inputBGrupo').addEventListener('input',(event)=>{
    let valorBNombre = event.target.value;
    if (valorBNombre == ''){
        tablaCuerpo.innerHTML= '';
        renderizarTablaCompleta();
    }
})


// Busqueda por Nombre V2

// document.getElementById('inputBNombre').addEventListener('input',(event)=>{  

//     let valorBNombre = event.target.value;

//     let alumnoBE = arrayEscuelaAlumnos.find(
//         (alumno) => alumno.nombres == valorBNombre
//     )
    
//     tablaCuerpo.innerHTML= '';
//     let rowBN = document.createElement('tr');
    
//     rowBN.innerHTML =
//     `
//     <td> ${alumnoBE.nombres}</td>
//     <td> ${alumnoBE.apellidos}</td>
//     <td> ${alumnoBE.grupo}</td>
//     <td> 
//     <br>
//         ${alumnoBE.clases.map(clase => `${clase.clasesN}: ${clase.calif}`).join("<br>")}
//     <br>
//     </td>
//     <td> ${alumnoBE.promedio} </td>
//     `
//     tablaCuerpo.appendChild(rowBN);
    
    
//     });




    // Busqueda por apellido
document.getElementById('btnBuscarApellido').addEventListener('click',()=>{

let valorBApellido = document.getElementById('inputBApellido').value;

let alumnoBE = arrayEscuelaAlumnos.find(
    (alumno) => alumno.apellidos == valorBApellido
)

tablaCuerpo.innerHTML= '';
let rowBN = document.createElement('tr');

rowBN.innerHTML =
`
<td> ${alumnoBE.nombres}</td>
<td> ${alumnoBE.apellidos}</td>
<td> ${alumnoBE.grupo}</td>
<td> 
<br>
    ${alumnoBE.clases.map(clase => `${clase.clasesN}: ${clase.calif}`).join("<br>")}
<br>
</td>
<td> ${alumnoBE.promedio} </td>
`
tablaCuerpo.appendChild(rowBN);
})



// CÓDIGO PARA OBTENER EL PROMEDIO DEL GRUPO


document.getElementById('btnBuscarGrupo').addEventListener('click',()=>{

let valorGrupo = document.getElementById('inputBGrupo').value;

let arrayBGNombres = [];
let arrayBGApellidos = [];
let arrayBGPromedio =[];
let promedioGrupo= 0;

tablaCuerpo.innerHTML = '';

arrayEscuelaAlumnos.forEach(alumno =>{
if (alumno.grupo == valorGrupo){
    arrayBGNombres.push(alumno.nombres)
    arrayBGApellidos.push(alumno.apellidos)
    arrayBGPromedio.push(alumno.promedio)
    promedioGrupo += parseFloat(alumno.promedio)
}

})
let promedioGrupoFinal = promedioGrupo/(arrayBGNombres.length);
let rowBG = document.createElement('tr');

rowBG.innerHTML =
`
<td> ${arrayBGNombres.map(nombre => nombre).join("<br>")}</td>
<td> ${arrayBGApellidos.map(apellidos => apellidos).join("<br>")}</td>
<td> ${valorGrupo}</td>
<td> ${arrayBGPromedio.map(promedio => promedio).join("<br>")} </td>
<td> ${promedioGrupoFinal} </td>
`
tablaCuerpo.appendChild(rowBG);

console.log(arrayBGNombres)
console.log(arrayBGApellidos)
console.log(promedioGrupo)
console.log(promedioGrupoFinal)

})




