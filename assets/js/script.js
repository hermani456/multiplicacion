const comparacion = (n) => n < 1 || n > 20;

const numUsuario = () => {
   do {
      var numero = prompt("Ingresa un numero del 1 al 20");
      if (comparacion(numero)) {
         alert("Numero fuera de rango");
      }
   } while (comparacion(numero));
   return numero;
};

const numeroIngresado = numUsuario();

for (i = 1; i <= numeroIngresado; i++) {
   document.write(`${i} x ${numeroIngresado} = ${i * numeroIngresado}<br>`);
}

const factorialNumero = (x) => {
   if (x > 1) {
      return x * factorialNumero(x - 1);
   } else {
      return x;
   }
};

for (i = 1; i <= numeroIngresado; i++) {
   document.write(`El factorial de ${i} es ${factorialNumero(i)}<br>`);
}
