/*A. Una biblioteca solicita un script para gestionar los prestamos de los libros para determinar y mostrar la fecha de devolución dependiendo del usuario y las políticas de préstamo que son:
  Los libros de ciencias básicas y tecnología se prestan por tres días
  Las tesis se prestan por quince días
  Las obras literarias por una semana
  Los demás tipos por dos días
  Los usuarios con carnet de estudiante pueden prestar libros según las políticas establecidas
  Los usuarios con carnet de docente duplican la cantidad de días.
  Los otros usuarios sólo pueden hacer préstamo interno.
Por cada usuario que haga un préstamo se debe organizar en una tabla la información
Tipo de libro, tipo de usuario, fecha de devolución.*/

let fechaDevolver, carnet, libro, tipoLibro, carnetValido = true, tipoValido = true, nombre, tieneCarnet = -1, tipoUser = -1, tablita = document.getElementById("tablita");
const fecha = "11/08/2022";
let fechaActual = fecha.split("/");

/*for (let i = 0; i < 10; i++) {
  carnetEs[i] = "ES-00"+(i+1);
  carnetDo[i] = "DO-00"+(i+1);
}*/

alert("BIENVENIDO A BIBLIOTECA \"MIS LIBROS\"");

do{
  carnetValido = true;
  tieneCarnet = Number(prompt("¿Posee carnet?\n1. Carnet de Estudiante.\n2. Carnet de Docente.\n3. No tengo.\n\nIngrese el número de su respuesta\n"));
  if (tieneCarnet != 1 && tieneCarnet != 3 && tieneCarnet != 2){
    alert("ERROR. Respuesta Inválida.\nInténtelo de Nuevo.\n");
    carnetValido = false;
  }
  else if (tieneCarnet == 1){
    tipoUser = "Estudiante";
    carnetValido = true;
    /*if (tieneCarnet != 0) {
      do {
        carnetValido = true;
        carnet = prompt("Ingrese su carnet (Si se equivocó y no posee carnet, pulse 0).");
        if (carnet != 0){
          for (let i = 0; i < carnetEs.length; i++) {
            if (carnet != carnetEs[i]){
              if (carnet != carnetDo[i])
                carnetValido = false;
              else{
                tipoUser = "Docente";
                break;
              }
            }else{
              tipoUser = "Estudiante";
              break;
            }
          }
        }else{
          tieneCarnet = 0;
          tipoUser = "Particular";
        }
        if (!carnetValido)
          alert("Ha ingresado un carnet inválido. Inténtelo de nuevo.");
      } while (!carnetValido);*/
    /*}else
      tipoUser = "Particular";*/
  }else if (tieneCarnet == 2){
    carnetValido = true;
    tipoUser = "Docente";
  }else{
    carnetValido = true;
    tipoUser = "Particular";
  }
}while(!carnetValido);/*

nombre = prompt("Ingrese su nombre completo");*/

do{
  tipoValido = true;
  tipoLibro = Number(prompt("¿Qué tipo de libro desea solicitar su préstamo?\n\n\t1. Ciencias báscias.\n\t2. Tesis.\n\t3. Obras Literarias.\n\t4. Otro tipo\n"));
  if (tipoLibro < 1 && tipoLibro > 4) {
    alert("ERROR: Su respuesta es inválida. Inténtelo de nuevo.");
    tipoValido = false;
  }
  switch (tipoLibro) {
    case 1:
      libro = "Ciencias Básicas";
      break;

    case 2:
      libro = "Tesis";
      break;

    case 3:
      libro = "Obras Literarias";
      break;

    case 4:
      libro = "Otros";
      break;
    default:
      break;
  }
}while(!tipoValido);

switch (tipoLibro){
  case 1:
    if (tipoUser == "Estudiante")
      fechaDevolver = (Number(fechaActual[0])+3) + "/" + fechaActual[1] + "/" + fechaActual[2];
    else if(tipoUser == "Particular")
      fechaDevolver = fecha;
    else
      fechaDevolver = (Number(fechaActual[0])+6) + "/" + fechaActual[1] + "/" + fechaActual[2];
    break;

  case 2:
    if (tipoUser == "Estudiante")
      fechaDevolver = (Number(fechaActual[0])+15) + "/" + fechaActual[1] + "/" + fechaActual[2];
    else if(tipoUser == "Particular")
      fechaDevolver = fecha;
    else
      fechaDevolver = (Number(fechaActual[0])-1) + "/" + (Number(fechaActual[1])+1) + "/" + fechaActual[2];
    break;

  case 3:
    if (tipoUser == "Estudiante")
      fechaDevolver = (Number(fechaActual[0])+7) + "/" + fechaActual[1] + "/" + fechaActual[2];
    else if(tipoUser == "Particular")
      fechaDevolver = fecha;
    else
      fechaDevolver = (Number(fechaActual[0])+15) + "/" + fechaActual[1] + "/" + fechaActual[2];
    break;

  case 4:
    if (tipoUser == "Estudiante")
      fechaDevolver = (Number(fechaActual[0])+2) + "/" + fechaActual[1] + "/" + fechaActual[2];
    else if(tipoUser == "Particular")
      fechaDevolver = fecha;
    else
      fechaDevolver = (Number(fechaActual[0])+4) + "/" + fechaActual[1] + "/" + fechaActual[2];
    break;
}

tablita.innerHTML += "<tr><td>Tipo de Libro</td><td>Tipo de Usuario</td><td>Fecha de Devolución</td></tr>";
tablita.innerHTML += "<tr><td>"+libro+"</td><td>"+tipoUser+"</td><td>"+fechaDevolver+"</td></tr>"