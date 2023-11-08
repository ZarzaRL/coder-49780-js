function calcularPrecio()
{ 
let precio = prompt("Ingrese el precio del juego", "");

let impuesto1 = precio*0.25;

let impuesto2 = precio*0.3;

let impuesto3 = precio*0.45;

let contImpuestos = parseFloat(impuesto1+impuesto2+impuesto3);

let precioFinal = parseFloat (precio) + parseFloat(impuesto1+impuesto2+impuesto3);

alert("Al precio inicial "+ "($" + precio + ") " + "se le agregan: $"+ contImpuestos + " en impuestos, dando un total de: $" + precioFinal);

memoria = precioFinal;

return memoria;
}

function sumarJuego()
{
    let precio = prompt("Ingrese el precio del juego", "");

    let impuesto1 = precio*0.25;

    let impuesto2 = precio*0.3;

    let impuesto3 = precio*0.45;

    let contImpuestos = parseFloat(impuesto1+impuesto2+impuesto3);

    let precioFinal = parseFloat (precio) + parseFloat(impuesto1+impuesto2+impuesto3); 

    sumatoria = parseFloat(precioFinal+memoria);

    alert("Al precio inicial "+ "($" + precio + ") " + "se le agregan: $"+ contImpuestos + " en impuestos, dando un total de: $" + precioFinal + " y se le suman $"+ memoria + " de el/los juegos anteriores, dando un total de: $"+ sumatoria);

    memoria = sumatoria;

    return memoria;
}

calcularPrecio();

let inicio = prompt("Si desea finalizar = 0, consultar el valor de otro juego = 1, sumar otro juego al total ingrese = 2", "");

while (inicio != 0)
{
    if (inicio == 1)
    {
        calcularPrecio();
    }else if (inicio == 2)
    {
        sumarJuego();
    }
    else
    {
        alert("Ingreso una opcion no valida");
    }
    inicio = prompt("Si desea finalizar = 0, consultar el valor de otro juego = 1, sumar otro juego al total ingrese = 2", "");

}


