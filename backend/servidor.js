const express = require("express"); //importo express que es el framework que me permite crear un servidor web
const cors = require("cors"); //importo cors para que el frontend pueda conectarse aquí
require("dotenv").config(); //importo dotenv para usar las variables que guardo en el archivo .env
const app = express(); //creo la app del server usando express
const conectarBaseDeDatos = require("./src/configuracion/conexionBD"); //importo la funcion que conecta a la base de datos
conectarBaseDeDatos; //aqui llamo a la funcion para conectar con la base de datos
app.use(express.json); //este middleware hace que el servidor pueda entender datos en json
//el middleware sirve para conectar y facilitar comunicacion entre diferentes aplicaciones y bases de datos
app.use(cors()); //activo el cors para que el frontend pueda hacer peticiones a aquí(backend)

conectarBaseDeDatos(); //aqui conectamos a mongodb

const puerto = process.env.puerto || 5000;
app.listen(puerto,() =>{
    console.log("Servidor funcionando en el puerto " + puerto);
})

