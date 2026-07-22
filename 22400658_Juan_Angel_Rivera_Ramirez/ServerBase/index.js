const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Bienvenido a mi primer servidor con express");
});

app.get("/saludo/:nombre", (req,res) => {
    const nombre = req.params.nombre;
    res.send("Hola "+nombre);
});

app.get("/pagina", (req,res) => {
    res.send(`
        <style>
            h1 {color: red;}
        </style>
        <h1> Mi pagina </h1>
        <p> Creada con Express </p>
    `);
});

app.listen(PORT, () => {
    console.log("Servidor iniciado en http://localhost:"+PORT);
});

/*
Ejercio 1. numero par o impar
*/

app.get("/par/:numero", (req,res) => {
    let numero = Number(req.params.numero);

    if(numero % 2 == 0){
        res.send(numero+ " es un número par");
    }else{
        res.send(numero+ " es un número impar");
    }
});

/*
Ejercio 2. Mayor de edad
*/

app.get("/edad/:edad", (req,res) => {
    let edad = Number(req.params.edad);

    if(edad < 18){
        res.send("Eres MENOR de edad");
    }else{
        res.send("Eres MAYOR de edad");
    }
});

/*
Ejercio 3. Calculadora
*/

app.get("/calculadora/:operacion/:a/:b", (req,res) => {
    let operacion = req.params.operacion;
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    let resultado;

    switch(operacion){
        case "suma":
        res.send(resultado = a+b);
        break;

        case "resta":
        res.send(resultado = a-b);
        break;
        
        case "multiplicacion":
        res.send(resultado = a*b);
        break;
    }

    /*
    if (operacion = "suma" || ){
        
    }
    
    else if (operacion = "resta"){
        res.send(resultado = a-b);
    }
    /*
    if (operacion = "multiplicacion"){
        res.send(resultado = a*b);
    }
    if (operacion = "división"){
        res.send(resultado = a/b);
    }
    */

});



