//import sql from "mssql";
//Aqui va el codigo que se ejecutara por cada API creada
import{ObtenerConexion, sql} from '../database/conexion';
export const obtenerTodosVehiculos = async (req,res)=>
    {
        const conexion = await ObtenerConexion();
        const resultado = await conexion.request().query('Select * from tblVehiculos');
        
        //Resultado a la consola (DEV)
        console.log(resultado);

        //Resultado al navegador
        res.json(resultado.recordset)
    }
//mostrar los vehiculos en funcion del id

export const obtenerVehiculoID = async (req,res)=>

    {
      //recibimos idVehiculo como parametro que llega por la URL
      const{idVehiculo}=req.params;
      const conexion = await ObtenerConexion();
  
      const resultado = await conexion.request()
        .input('idVehiculo',sql.Int,idVehiculo)
        .query("select * from TblVehiculos where idVehiculo=@idVehiculo")
  
        //imprimir consola (DEV)
        console.log(resultado);

        //Resultado al navegador
        res.json(resultado.recordset);
  
    }

    export const obtenerVehiculoPlaca = async (req,res)=>

        {
          //recibimos idVehiculo como parametro que llega por la URL
          const{placaVehiculo}=req.params;
          const conexion = await ObtenerConexion();
      
          const resultado = await conexion.request()
            .input('placaVehiculo',sql.VarChar,placaVehiculo)
            .query('select * from TblVehiculos where placaVehiculo=@placaVehiculo')
      
            //imprimir consola (DEV)
            console.log(resultado);
    
            //Resultado al navegador
            res.json(resultado.recordset);
      
    }
  
  export const InsertarNuevoVehiculo = async (req,res)=>
  {
     const {placaVehiculo,descripcionVehiculo,modeloVehiculo,anioFab,propietario} =req.body;
     //Validamos que existan los parametros en el body
     if (placaVehiculo==null || descripcionVehiculo ==null || modeloVehiculo ==null || anioFab ==null || propietario==null)
     {
            return res.status(500).json({msg:'Parametros insuficientes'});
     }
        const conexion = await ObtenerConexion();
        const resultado = await conexion.request()
            .input('placaVehiculo',sql.VarChar,placaVehiculo)
            .input('descripcionVehiculo',sql.VarChar,descripcionVehiculo)
            .input('modeloVehiculo',sql.VarChar,modeloVehiculo)
            .input('anioFab',sql.Int,anioFab)
            .input('propietario',sql.VarChar,propietario)
            .query("insert into tblVehiculos(placaVehiculo,descripcionVehiculo,modeloVehiculo,anioFab,propietario) values (@placaVehiculo, @descripcionVehiculo,@modeloVehiculo,@anioFab,@propietario);")

        //imprimir consola (DEV)
        console.log(resultado);
    
        //Resultado al navegador
        res.json({placaVehiculo,descripcionVehiculo,modeloVehiculo,anioFab,propietario});
  }
  export const eliminarVehiuloID = async (req,res)=>

    {
      //recibimos idVehiculo como parametro que llega por la URL
      const{idVehiculo}=req.params;
      const conexion = await ObtenerConexion();
  
      const resultado = await conexion.request()
        .input('idVehiculo',sql.Int,idVehiculo)
        .query("DELETE FROM tblVehiculos WHERE idVehiculo = @idVehiculo")
  
        //imprimir consola (DEV)
        console.log(resultado);

        //Resultado al navegador
        res.json(resultado.recordset);
  
    }