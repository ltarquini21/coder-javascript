const nombre = prompt("Ingresa tu nombre para continuar");
let cotizacionAuto;


while(true){
  cotizacionAuto = prompt("Bienvenida/o "+ nombre + "\nIngresá 1 si querés recibir una cotización por E-mail. \nIngresá 2 si querés cotizarlo a través de nuestra Web. \nIngresá 3 si querés que nos comuniquemos con usted.");
if (cotizacionAuto === "1" || cotizacionAuto === "2" || cotizacionAuto === "3"){
  break}
  
  else{
    alert("Elige una opción correspondiente")
  }
}

while(true)
  if(cotizacionAuto == 1){
    alert("Elegiste cotizar vía mail")
    break
  }
  else if(cotizacionAuto == 2){
    alert("Elegiste cotizar vía web")
    break
  }
  else if(cotizacionAuto == 3){
    alert("Nos comunicaremos con usted vía celular")
    break
  }
  else{
    alert("Elige una opción correspondiente")
  }
  let cotizacion;
  let preciovwFox;
  let preciofordFiesta;
  let preciofordFocus;
  let preciorenaultClio;
  let preciopeugeot208;

  while(true){
  cotizacion = parseInt(prompt("Que auto quisieras cotizar? \nOpción 1- Volkswagen Fox $8500000 \nOpción 2- Ford Fiesta $12000000 \nOpción 3- Ford Focus $15000000 \nOpción 4- Renault Clio $7500000 \nOpción 5- Peugeot 208 $15500000"));
    
  if (cotizacion === 1){
      preciovwFox = 8500000;
      preciovwFox = 1;
      alert("Elegiste opción 1")
      alert("El precio del Volkswagen Fox es de $8.500.000");
      break;
    }
    else if(cotizacion === 2){
        preciofordFiesta = 12000000;
        preciofordFiesta = 1;
        alert("Elegiste opción 2")
        alert("El precio de Ford Fiesta es de $12.000.000");
      break;
    }
    else if(cotizacion === 3){
        preciofordFocus = 15000000;
        preciofordFocus = 1;
        alert("Elegiste opción 3")
        alert("El precio de Ford Focus es de $15.000.000");
        break;
    }
    else if(cotizacion === 4 ){
      preciorenaultClio = 7500000;
      preciorenaultClio = 1;
      alert("Elegiste opción 4")
      alert("El precio de Renault Clio es de $7.500.000");
      break;
    }
    else if(cotizacion === 5){
      preciopeugeot208 = 15500000;
      preciopeugeot208 = 1;
      alert("Elegiste opción 5");
      alert("El precio de Peugeot 208 es de $15.500.000");
      break;
    }
    else{
      alert("Elige una opción válida");
    }
  }




