var nombre = "JUAN ANGEL RIVERA RAMIREZ";
let promedio = 9.5;
const edad = 20;

/*
console.log(promedio);
console.log(edad);
console.log(nombre);

if(true){
    var libro = "Libro 1";
    let animal = "perro";
    animal = 5;
    console.log(animal);
}
console.log(libro);
*/

/*
let cadena = prompt("Ingresa una cadena");

let n1 = parseInt(prompt("Ingresa un número"));
let n2 = parseInt(prompt("Ingresa un número"));
console.log(n1);
console.log(n2);

let suma = n1 + n2;
console.log(suma);
console.log(cadena);
*/

/*
let suma = 10+5;
let resta = 10-5;
let multiplicacion = 10*5;
let division = 10/5;
let residuo = 10%5;

console.log("Suma: ",suma);
console.log("Resta: ",resta);
console.log("Multiplicacion: ",multiplicacion);
console.log("Division: ",division);
console.log("Residuo: ",residuo);

console.log(5>3);
console.log(5<3);
console.log(5>=3);
console.log(5<=4);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "3");

let calificacion = 90;
if(calificacion >=90){
    console.log("Excelente");
} else if (calificacion >= 70){
    console.log("Aprobado");
} else {
console.log("Reprobado");
}

let tabla = 5;
for(let i=1; i<=10; i++){
    console.log(`${tabla} x ${i} = ${tabla*i}`);
    //console.log(tabla + " x "+i+" = "+tabla*i);
}

let contador = 1;

while (contador<=5){
    console.log(contador);
    contador++;
}

function saludar(nombre){
    console.log("Hola "+nombre+" eres gay");
}

saludar("Sebastian");

function aleatorio(){
    let n = Math.floor(Math.random()*1000+1);
    console.log(n);
}
aleatorio();

let numeros = [1,2,3];
console.log(numeros);
numeros.push(20);
console.log(numeros);
console.log(numeros[0]);

let numeros = [5,2];
numeros.push(20);
numeros.push(21);
numeros.push(22);
numeros.push(23);
numeros.push(24);
console.log(numeros);

for(let i = 0; i<numeros.length; i++){
    console.log(i+" interacion = "+numeros[i]);
}

let persona = {
    nombre: "Juan",
    edad: 20,
    ciudad: "Tepic"
}
console.log(persona.ciudad);
console.log(persona.edad);
console.log(persona.nombre);
console.log(persona);

persona.nombre = "Carlos"; // Asigna nuevamente
persona.carrera = "ISC"; // Lo crea si no esta en el objeto persona
console.log(persona.nombre);


let numeros = [1,2,3,4,5];
numeros.forEach(numero => {
    console.log(numero);
});

let numeros = [1,2,3,4,5];
let dobles =numeros.map(numero => {
    return numero*2;
});
console.log(dobles);

console.log(typeof (10))
console.log(typeof ("Hola"))
console.log(typeof (true))
console.log(typeof ({}))

const edad = 17;
const mensaje = edad >= 18 ? "Mayor de edad" : "menor de edad";
console.log(mensaje);


const edad = 5;
const mensaje = edad >= 18 < 50 ? "Mayor de edad" : edad >= 50 ? "Mediana edad" : "menor de edad";
console.log(mensaje);

// Objetos
const estudiante = {
    nombre: "Pedro",
    edad: 20,
    direccion: {
        calle: "calle"
    }
}
console.log(estudiante.nombre)
console.log(estudiante.nombre ? "Tiene nombre" : "No tiene nombre");
console.log(estudiante.campo || "sin campo")
console.log(estudiante.nombre || "sin campo")

let edad = 25;
edad >= 18 && console.log("Puede entrar");

let alumno = {
    nombre: "Juan",
    edad: 20,
    carrera: "ISC",
}
delete alumno.edad // elimina propiedad
console.log(alumno);
console.log("nombre" in alumno); // Retorna true/false si existe
console.log("edad" in alumno);

const numeros = [1, 2, 3, 4, 5];

const copia = [...numeros];
//delete copia[4];
const a = [1, 2];
const b = [3, 4];

console.log(...a);
console.log(...b);
console.log(copia);
console.log(...copia);

const productos = [
    {nombre: "Laptop", precio: 15000, categoria: "Electronica"},
    {nombre: "Calular", precio: 2900, categoria: "Telefonia"},
    {nombre: "TV", precio: 6000, categoria: "Electronica"},
    {nombre: "Moto", precio: 28000, categoria: "Transporte"},
]
//console.log(productos);

const carros = productos.filter(p => p.precio > 25000);
//console.log(carros); // filtra por precios

const nombres = productos.map(p => p.nombre);
// console.log(nombres); mapea los elementos y muestra los nombres de los subarreglos

const total = productos.reduce((suma, p) => {
    return suma + p.precio;
}, 0);
console.log("Total: $"+total);

*/
