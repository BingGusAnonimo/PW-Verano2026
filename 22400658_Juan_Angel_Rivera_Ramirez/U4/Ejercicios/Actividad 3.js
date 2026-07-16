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
            + ", adivina el número del 1 al 100"));

        if (intento == num) {
            console.log("Adivinaste el número al intento: " + contador);
            break;
        }   

        if (intento < num) {
            console.log("Es más grande el número");
        }
        else {
            console.log("Es más pequeño el número");
        }

        contador = contador + 1;

        if (contador == 8) {
            console.log("Perdiste, el número es: " + num);
        }
    }   
}

// Ejercicio_4();
