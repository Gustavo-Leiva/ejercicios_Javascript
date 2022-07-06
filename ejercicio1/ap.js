//ejercicio 1
/* Pide la edad y si es mayor de 18 años indica que ya puede conducir.
considerar:
1) Pedir el dato por prompt.
2) Si es incorrecto el dato volver a pedir por pantalla.
3) Si el dato es correcto mostrar el resultado como impresion del documento.
4) validar que el dato ingresado sea un numero .
2) Si el usuario ingresa un dato no numero, indicar que vuelva ingresar el dato.
*/


let edad;
let mayorEdad = 18;


edad = prompt("introduce la edad");
edad = parseInt(edad);

while (isNaN(edad) || edad < 1 || edad > 150) {
  edad = prompt("Error!!.Ingrese un valor mayor a 0. Reingrese la edad.");
  edad = parseInt(edad);
}

if (edad >= mayorEdad) {
  document.write("ya eres mayor de edad, puedes conducir");
} else {
  document.write("no eres mayor de edad");
}


