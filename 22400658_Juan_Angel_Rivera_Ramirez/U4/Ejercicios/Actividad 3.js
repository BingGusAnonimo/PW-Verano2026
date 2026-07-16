// Actividad 3

/*
1.- Elabora un programa que contenga una función llamada potencia y reciba dos parámetros;
base y exponente. La función deberá retornar la potencia de acuerdo con los parámetros
recibidos. El cálculo de la potencia se realizará por medio de un ciclo for.
Salida: BASE elevado a POTENCIA es RESULTADO

*/
function Ejercicio_1() {

    function Potencia(base, exponente) {
        let res = 1;

        for (let i = 1; i <= exponente; i++) {
            res = res * base;
        }
        return res;
    }


    let base = Number(prompt("Dame la base"));
    let exponente = Number(prompt("Dame el exponente"));
    let res = Potencia(base, exponente);

    console.log("BASE " + base + " elevado a POTENCIA " + exponente + " es RESULTADO " + res);
}

//Ejercicio_1();

/*
2.- Cajero automático
Simula un cajero con un saldo inicial de $5000. Mostrar un menú:
    1. Consultar saldo
    2. Depositar
    3. Retirar
    4. Salir
No permitir retirar más dinero del disponible.
*/

function Ejercicio_2() {
    let saldo = 5000;
    let opcion;

    do {
        opcion = Number(prompt("1. Consultar saldo / 2. Depositar / 3. Retirar / 4. Salir"));

        switch (opcion) {
            case 1:
                console.log("Saldo: $" + saldo);
                break;
            case 2:
                let deposito = Number(prompt("Cantidad a depositar:"));
                saldo = saldo + deposito;
                console.log("Deposito Realizado");
                break;
            case 3:
                let retiro = Number(prompt("Cantidad a retirar:"));
                saldo = saldo - retiro;
                console.log(" Realizado");
                break;
            case 4:
                console.log("A salido del banco");
                break;
            default:
                console.log("Opcion no valida");
                break;
        }
    }
    while (opcion != 4);
}
// Ejercicio_2();

/*
3.- Juego de dados
Genera dos dados hasta que ambos tengan el mismo valor.
Salida:
    3-5
    1-6
    2-4
    6-6
Se necesitaron 4 lanzamientos.
*/

function Ejercicio_3() {

    let dado1;
    let dado2;
    let lanzamientos = 0;

    do {
        dado1 = Math.floor(Math.random() * 6 + 1);
        dado2 = Math.floor(Math.random() * 6 + 1);

        lanzamientos = lanzamientos + 1;

        console.log(dado1 + " - " + dado2);
    }

    while (dado1 != dado2);

    console.log("Se necesitaron " + lanzamientos +
        " lanzamientos para el mismo valor");
}

//Ejercicio_3();

/*
4.- Adivinar número
La computadora genera un número entre 1 y 100. 
El usuario tiene máximo 7 intentos. Después
de cada intento indicar Más grande Más pequeño
*/

function Ejercicio_4() {

    let num = Math.floor(Math.random() * 100 + 1);
    let intento = 0;
    let contador = 1;

    while (contador <= 7) {
        intento = Number(prompt("Intento " + contador
            + ", adivina el número del 1 al 100 "));

        if (intento == num) {
            
        }   
    } 
}

/*
5.- Crea un programa que simule el registro de ventas de una tienda. Cada venta debe contener
el nombre del vendedor, el nombre del producto, la cantidad vendida y el precio unitario. El
programa debe permitir registrar múltiples ventas (solicitándolos mediante prompt()) y al
finalizar debe mostrar en consola el total de ventas realizadas, el total de ingresos generados,
cuántas unidades se vendieron de cada producto y cuál fue el vendedor que generó el mayor
monto en ventas. 

El ejercicio debe aplicar ciclos, arreglos, objetos, condicionales y usar
métodos como .push(),.map(),.forEach() o.reduce().

Total de ventas realizadas: 6
Total de ingresos: $15,700.00
Unidades vendidas por producto:
•
Laptop: 3 unidades
Mouse: 5 unidades
. Teclado: 2 unidades
Vendedor con más ventas: Carla ($8000)
*/

function Ejercicio_5() {

    let ventas = [];
    let totalVentas = Number(prompt("¿Cuántas ventas vas a registrar?"));

    for (let i = 0; i < totalVentas; i++) {

        let vendedor = prompt("Nombre del vendedor:");
        let producto = prompt("Nombre del producto:");
        let cantidad = Number(prompt("Cantidad vendida:"));
        let precio = Number(prompt("Precio unitario:"));

        let venta = {
            vendedor: vendedor,
            producto: producto,
            cantidad: cantidad,
            precio: precio
        };

        ventas.push(venta);
    }

    console.log("Total de ventas realizadas: " + ventas.length);

    let ingresos = 0;

    let productos = {};
    let vendedores = {};

    ventas.forEach(function (venta) {

        ingresos = ingresos + (venta.cantidad * venta.precio);

        if (productos[venta.producto]) {
            productos[venta.producto] += venta.cantidad;
        } else {
            productos[venta.producto] = venta.cantidad;
        }

        if (vendedores[venta.vendedor]) {
            vendedores[venta.vendedor] += venta.cantidad * venta.precio;
        } else {
            vendedores[venta.vendedor] = venta.cantidad * venta.precio;
        }

    });

    console.log("Total de ingresos: $" + ingresos);

    console.log("Unidades vendidas por producto:");

    for (let producto in productos) {
        console.log(producto + ": " + productos[producto] + " unidades");
    }

    let mejorVendedor = "";
    let mayorVenta = 0;

    for (let vendedor in vendedores) {

        if (vendedores[vendedor] > mayorVenta) {
            mayorVenta = vendedores[vendedor];
            mejorVendedor = vendedor;
        }

    }

    console.log("Vendedor con más ventas: " + mejorVendedor + " ($" + mayorVenta + ")");
}

Ejercicio_5();