import app from './app.js';

//import './database/conexion.js';
//Consumimos la conexion SQL SERVER
//configurar puerto de escucha HTTP
app.listen(app.get('port'));

console.log("Servidor IEM 2025 Server proliant iniciando en el puerto ",app.get('port'));
