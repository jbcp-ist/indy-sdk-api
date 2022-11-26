const mysql = require('mysql2/promise');

const setting = {
    host: "127.0.0.1",
    user: "root",
    password: "spp123!!",
    database: "did",
    connectionLimit: 4,
    dateStrings: 'date'
}


async function getData(){
    try{
        let pool = await mysql.createPool(setting);
        let connection = await pool.getConnection(async conn => conn);
        let query = `SELECT * FROM police_case;`
        let output = await connection.query(query);
        console.log(output[0].length);

        for(let i =0;i<output[0].length;i++){
            output[0][i].evidence = JSON.parse( output[0][i].evidence);
        };

        // let out = output[0][0];
        // out.evidence = JSON.parse(out.evidence);
        connection.release();
        return output[0];
    }catch(err){
        console.log(err);
    }
    

    
}

module.exports = { 
    getData,

}
