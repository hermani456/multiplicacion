// funcion que se asegura que el numero este dentro del rango
const comparacion = (n) => n < 1 || n > 20;

// funcion que pide un numero entre el 1 y el 20 y lo retorna
const numUsuario = (comp) => {
   const numero = prompt("Ingresa un numero del 1 al 20");
   do {
      numero
      if (comp(numero)) {
         alert("Numero fuera de rango");
      }
   } while (comp(numero));
   return numero;
};

// constante que guarda el numero ingresado
const numeroIngresado = numUsuario(comparacion);

// loop que multiplica desde 1 hasta el numero ingresado por el usuario
for (i = 1; i <= numeroIngresado; i++) {
   document.write(`${i} x ${numeroIngresado} = ${i * numeroIngresado}<br>`);
}

// funcion que retorna el factorial de un numero ingresado
const factorialNumero = (x) => {
   if (x > 1) {
      return x * factorialNumero(x - 1);
   } else {
      return x;
   }
};

// loop que muestra el factorial desde 1 hasta el numero ingresado por el usuario
for (i = 1; i <= numeroIngresado; i++) {
   document.write(`El factorial de ${i} es ${factorialNumero(i)}<br>`);
}
