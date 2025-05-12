const history = [];
const dolarActual = 1300;
let salir = false;

function convertCurrency (pesos){
    return pesos/dolarActual;
}


while (salir == false) {
  let option = prompt(
    "Seleccione una opcion: \n1) Convertir Divisas ARS->USD \n2 Salir"
  );
  switch (option) {
    case "1":
      let pesos = prompt("INGRESE LOS PESOS A CONVERTIR");
      let conversion =  convertCurrency(pesos);
      history.push({
        tipo: "peso",
        entrada: pesos,
        salida: conversion.toFixed(2),
        fecha: new Date().toLocaleDateString() 
      });
      break;
    case "2":
      salir = true;
        for (let i in history){
          console.log ("Moneda ingresa es de : ",history[i].tipo);
          console.log ("Monto en pesos es de : ",history[i].entrada);
          console.log ("Monto en USD es de : ",history[i].salida);
          console.log ("Fecha de la consulta es : ",history[i].fecha);
        }
        alert(`El resultado es: ${convertCurrency(pesos).toFixed(2)} dólares`);
        break;
            default:
        prompt("Ingrese una opcion valida - ingrese una tecla para continuar");
  }
}


