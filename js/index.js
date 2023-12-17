//Variables
    let memoria = 0;

//funciones declaradas

//funcion inicial

function calcularPrecio()
{
    const getNombre = document.getElementById("nombreJuego").value;

    const getPrecio = document.getElementById("precioJuego").value;

    let base = [getNombre, getPrecio];

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

    document.getElementById("darRespuesta").innerHTML = "El juego '" + producto['nombreJuego'] + "' cuyo precio en pesos es: $" + parseFloat(producto['pesificado'].toFixed(2)) + ", y se le añaden $" + parseFloat(producto['impuestos'].toFixed(2)) + " en impuestos, dando un total de: $" + parseFloat(producto['preciosCimpuestos'].toFixed(2));

    //alert("El juego '" + producto['nombreJuego'] + "' cuyo precio en pesos es: $" + parseFloat(producto['pesificado'].toFixed(2)) + ", y se le añaden $" + parseFloat(producto['impuestos'].toFixed(2)) + " en impuestos, dando un total de: $" + parseFloat(producto['preciosCimpuestos'].toFixed(2)));

    memoria = precioFinal;

    return memoria;
}



//funcion sumadora

function sumarJuego()
{
    const getNombre = document.getElementById("nombreJuego").value;

    const getPrecio = document.getElementById("precioJuego").value;

    let base = [getNombre, getPrecio];

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

    document.getElementById("darRespuesta").innerHTML = "Al valor inicial, ($"+ parseFloat(memoria.toFixed(2))+") se le suma el juego '" + producto['nombreJuego'] + "' cuyo precio en pesos es: $" + parseFloat(producto['pesificado'].toFixed(2)) + ", y se le añaden $" + parseFloat(producto['impuestos'].toFixed(2))+ " en impuestos, dando un total de: $" + parseFloat(producto['preciosCimpuestos'].toFixed(2)) + ". El total en conjunto a el/los anteriores juegos es de: $" + parseFloat(producto['precioSumado'].toFixed(2));
    //alert("Al valor inicial, ($"+ parseFloat(memoria.toFixed(2))+") se le suma el juego '" + producto['nombreJuego'] + "' cuyo precio en pesos es: $" + parseFloat(producto['pesificado'].toFixed(2)) + ", y se le añaden $" + parseFloat(producto['impuestos'].toFixed(2))+ " en impuestos, dando un total de: $" + parseFloat(producto['preciosCimpuestos'].toFixed(2)) + ". El total en conjunto a el/los anteriores juegos es de: $" + parseFloat(producto['precioSumado'].toFixed(2)));

    memoria = sumatoria;

    return memoria;
}



//funciones onclick de los botones

function consultarPrecio(){
    calcularPrecio();
}

function sumarPrecios(){
    if (memoria != 0){
    
        sumarJuego();
    
    }else{
        
        Swal.fire({
            icon: "error",
            title: "Realize la primer consulta",
        });
        //alert("Realize la primer consulta");
    }

}












