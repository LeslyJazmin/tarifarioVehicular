import sql from "mssql";

const parametrossql = 
{
    user : process.env.user,
    password : process.env.password,
    server : process.env.server,
    database : process.env.database,
    trustServerCertificate : Boolean(process.env.trustServerCertificate)
}

export async function ObtenerConexion ()
{
    try {
        const miConexion = await sql.connect(parametrossql);
        return miConexion;
    } catch (error) {
        console.log(error);
    } 
    //const resultado = await miConexion.request().query("select * from tblVehiculos")
    //console.log(resultado);
}
//ObtenerConexion();
export{sql};