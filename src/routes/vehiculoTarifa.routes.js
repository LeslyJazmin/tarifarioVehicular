//Aqui se referenciaran las APIS creadas
import { Router } from "express";
const rutas =Router();

//APIS
import {obtenerTodosVehiculos,obtenerVehiculoID, obtenerVehiculoPlaca,InsertarNuevoVehiculo, eliminarVehiuloID}  from '../Controllers/vehiculoController';

//Esta Api me devuelve una lista de todos los vehiculos de mi proyecto
rutas.get('/vehiculos', obtenerTodosVehiculos)

//Esta Api me devuelve los datos de un vehiculos en funcion del ID
rutas.get('/obtenerVehiculoID/:idVehiculo', obtenerVehiculoID)

//Esta Api me devuelve los datos de un vehiculos en funcion de placa
rutas.get('/obtenerVehiculoPlaca/:placaVehiculo', obtenerVehiculoPlaca)

//Api para registrar 
rutas.post('/insertarVehiculo', InsertarNuevoVehiculo)

//Esta Api me devuelve los datos de un vehiculos en funcion del ID
rutas.get('/eliminarVehiuloID/:idVehiculo', eliminarVehiuloID)

export default rutas;
