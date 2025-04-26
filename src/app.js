//Archivo den conf para express
import express from 'express';
const app = express();

import config from './config.js';
app.set('port', config.port);

//configurar cliente Postman para recibir parametros por body en formato JSON
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

//Importar las rutas creadas para nuestras APIS
import  VehiculoRuta from './routes/vehiculoTarifa.routes.js';

//Aplicar configuraciòn de la ruta
app.use(VehiculoRuta);

export default app;
