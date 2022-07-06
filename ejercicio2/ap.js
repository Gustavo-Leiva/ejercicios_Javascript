/*Ejercicio Nro 2
Pide una nota (número). Muestra la calificación según la nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7-8: Bien
 9: Notable
 10: Sobresaliente

 validar que el numero ingresado sea un numero.
*/

let nota;

nota = prompt("Introduce una nota");
nota = parseInt(nota);

while(isNaN(nota) || nota < 0 || nota > 100) {
    nota = prompt("Error!! Introduce una nota entre 0 y 10");
    nota = parseInt(nota);
}


if(nota >=0 && nota <= 2)
{
  console.log("Muy deficiente");
}
else
{
    if(nota >= 3 && nota <=4)
    {

        console.log("Insuficiente");
    }
    else
    {
        if(nota >= 5 && nota <=6)
        {
            console.log("Suficiente");
        }
        else
        {
            if(nota >= 7 && nota <=8)
            {
                console.log("Bien");
            }
            else
            {
                if(nota ==9)
                {
                    console.log("Notable");
                }
                else
                {
                    if(nota ==10)
                    {
                        console.log("Sobresaliente");
                    }

                }
            }

        }
    }

}

