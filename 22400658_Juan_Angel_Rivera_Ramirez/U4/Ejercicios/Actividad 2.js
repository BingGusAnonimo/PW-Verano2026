/*
1. Escribe un programa que genere dos números aleatorios y que escriba en
consola qué números se generaron. Además, el programa deberá señalar si
los números son iguales, y en caso de que no lo sean, mostrará cuál es el
mayor.
*/

function Ejercicio_1(){
    let n1 = Math.floor(Math.random() * 100) + 1;
    let n2 = Math.floor(Math.random() * 100) + 1;

    console.log("Numero 1 aleatorio generado: ", n1);
    console.log("Numero 2 aleatorio generado: ", n2);

    if (n1 === n2) {
        console.log("Los números son iguales.");
    } else if (n1 > n2) {
        console.log("El numero mayor es:", n1);
    } else {
        console.log("El numero mayor es:", n2);
    }
}

Ejercicio_1();

/*
2. Escribe un programa que genere de forma continua números entre el 0 y el 5,
hasta que salga el número 0.
*/

function Ejercicio_2(){
    let Aleatorio;

    do {
        Aleatorio = Math.floor(Math.random() * 6);
        console.log(Aleatorio);
    } while (Aleatorio !== 0);
}

Ejercicio_2();


/*
3. Elabora un programa que genere un número aleatorio entre el número 2 y el
10, y después escriba la tabla de multiplicar del número generado.
*/

function Ejercicio_3(){
    let Aleatorio = Math.floor(Math.random() * 9) + 2;
    
    console.log("Numero aleatorio generado: ", Aleatorio);

    for (let i = 1; i <= 10; i++) {
        console.log(Aleatorio + " * " + i + " = " + (Aleatorio * i));
    }
}

Ejercicio_3();

/*
4. Escribe un programa que solicite 10 números entre el 1 y el 100, 
y determine cuántos de esos números son pares y cuántos impares.
*/

function Ejercicio_4(){
    let par = 0;
    let imp = 0;

    for (let i = 1; i <= 10; i++) {

        let num = Number(prompt("Iteracion: "+i+" - Ingresa un numero del 1 al 100: "));

        if (num % 2 === 0) {
            par++;
        } else {
            imp++;
        }
    }

    console.log("Total de Pares: ", par);
    console.log("Total de Impares: ", imp);
}

Ejercicio_4();


/*
5. Una tienda departamental paga a sus empleados el 10% de comisión a
quienes vendan menos de $10,000.00 en artículos, mientras que otorga un
15% a quienes vendan $10,000.00 o más. 

Diseña un programa que solicite un número entre $5,000 y $30,0000 
(validar entrada hasta que sea número válido) 
en ventas para un empleado, y muestre en pantalla cuánto dinero va a
recibir por comisión.
*/

function Ejercicio_5() {
    let ventas;

    do {
        ventas = Number(prompt("Ingresa las ventas ($5000 - $30000):"));
    } while (ventas < 5000 || ventas > 30000 || isNaN(ventas));

    if (ventas >= 10000) {
        console.log("Comisión *0.15: $" + (ventas * 0.15));
    } else {
        console.log("Comisión: *0.10$" + (ventas * 0.10));
    }
}

Ejercicio_5();