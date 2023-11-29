    let memoria = 0;

    let base = ["nombre", 0]

function calcularPrecio()
{ 
    base[0] = prompt("Ingrese el nombre del juego", "");

    base[1] = prompt("Ingrese el precio del juego en USD", "")

    let precio = base[1]*374;

    let impuesto1 = precio*1;

    let impuesto2 = precio*0.25;

    let impuesto3 = precio*0.3;

    let contImpuestos = parseFloat(impuesto1+impuesto2+impuesto3);

    let precioFinal = parseFloat (precio) + parseFloat(impuesto1+impuesto2+impuesto3);

let producto = {
    nombreJuego: base[0],
    pesificado: precio,
    impuestos: contImpuestos,
    preciosCimpuestos: precioFinal,
};

    alert("El juego '" + producto['nombreJuego'] + "' cuyo precio en pesos es: $" + parseFloat(producto['pesificado'].toFixed(2)) + ", y se le añaden $" + parseFloat(producto['impuestos'].toFixed(2)) + " en impuestos, dando un total de: $" + parseFloat(producto['preciosCimpuestos'].toFixed(2)));

    memoria = precioFinal;

    return memoria;
}

function sumarJuego()
{
    base[0] = prompt("Ingrese el nombre del juego", "");

    base[1] = prompt("Ingrese el precio del juego en USD", "")

    let precio = base[1]*374;

    let impuesto1 = precio*1;

    let impuesto2 = precio*0.25;

    let impuesto3 = precio*0.3;

    let contImpuestos = parseFloat(impuesto1+impuesto2+impuesto3);

    let precioFinal = parseFloat (precio) + parseFloat(impuesto1+impuesto2+impuesto3); 

    let sumatoria = parseFloat(precioFinal+memoria);

let producto = {
    nombreJuego: base[0],
    pesificado: precio,
    impuestos: contImpuestos,
    preciosCimpuestos: precioFinal,
    precioSumado: sumatoria,
};

    alert("Al valor inicial, ($"+ parseFloat(memoria.toFixed(2))+") se le suma el juego '" + producto['nombreJuego'] + "' cuyo precio en pesos es: $" + parseFloat(producto['pesificado'].toFixed(2)) + ", y se le añaden $" + parseFloat(producto['impuestos'].toFixed(2))+ " en impuestos, dando un total de: $" + parseFloat(producto['preciosCimpuestos'].toFixed(2)) + ". El total en conjunto a el/los anteriores juegos es de: $" + parseFloat(producto['precioSumado'].toFixed(2)));

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


