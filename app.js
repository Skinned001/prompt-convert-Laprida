let valor ;
let historia = [];
let salir = false;

function conversor_currency (pesos){
    return pesos/1300;
}


while (salir == false) {
  let option = prompt(
    "Seleccione una opcion: \n1) Divisa ARS->USD \n2 Salir"
  );
  switch (option) {
    case "1":
      let pesos = prompt("INGRESE LOS PESOS A CONVERTIR");
      let conversion = conversor_currency(pesos);
      historia.push({
        tipo: "peso",
        entrada: pesos,
        salida: conversion,
        fecha: new Date().toLocaleDateString() 
      });
      break;
    case "2":
      salir == true;
        for (let i in historia){
          console.log ("Moneda ingresa es: ",historia[i].tipo);
          console.log ("Valor en pesos es: ",historia[i].entrada);
          console.log ("Valor en USD es: ",historia[i].salida);
          console.log ("Fecha es: ",historia[i].fecha);
        }
        break;
  }
}


