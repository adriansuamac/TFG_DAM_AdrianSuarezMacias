//importamos mongoose, para poder conectarnos a mongoDB
const { default: mongoose } = require("mongoose")

function conectarBaseDeDatos(){ //esta funcion sirve para conectar la aplicacion con la base de datos
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("Conexión a MongoDB realizada con éxito");
        })
        .catch((error) => {
            console.log("Error al conectar con MongoDB: ", error);
        });
}

//exportamos la funcion para poder usarla en el servidor.js
module.exports = conectarBaseDeDatos;