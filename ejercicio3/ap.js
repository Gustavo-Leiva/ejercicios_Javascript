/*1. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….

*/

let i;
let j;


for (i = 1; i <= 30; i++) //bucle for del exterior para recorrer  DE 1 A 30
{
     
    for(j=0;j<i;j++) //bucle for interior para hacer las repeticiones.
    {
        document.write(i);  //imprime el mensaje.
    }
    document.write("<br>") //salto de linea.

}



