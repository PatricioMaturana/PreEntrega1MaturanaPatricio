
function validaPregunta(dividendo) { 
    let divisor   = 1;
    let contador = 0;
    while(divisor<= dividendo)
    {
    if (dividendo % divisor==0)
    {
        contador++;
    }
    divisor++;
    }
    if (contador==2)
    {
        return("El numero "+dividendo+ ", es primo");
    }else
    {
        return("El numero "+dividendo+ ", no es primo");
    }
}

let salir = "si"; 

do {
    let numHasta
    do
    {
        numHasta = parseInt(prompt('Descubramos numeros primos comenzando del 1, ingrese el hasta para buscar:'));
        if (isNaN(numHasta) == true) {
            alert("Ingrese un numero entero valido, favor")
        }
    } while (isNaN(numHasta) == true)
    for (let dividendo = 1; dividendo <= numHasta; dividendo++) 
    {
        alert(validaPregunta(dividendo));
    }
    do{ 
        salir= prompt("¿Desea seguir consultando[Si/No]?")
        if (salir.toLowerCase()=="si"||salir.toLowerCase()=="no"){break;}
        else{alert("debe ingresar un valor valido [si/ no]");}
    }while (true)
} while (salir.toLowerCase() == "si")
alert("Gracias por participar!!!");