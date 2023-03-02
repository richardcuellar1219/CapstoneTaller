//conexion de prueba a BBDD MySQL
//necesitamos la libreria mysql2 que instala via npm
// npm install mysql2
const mysql = require('mysql2');

//me conecto a la bbdd 
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'gestiontaller'
})
const clientId = 2;

conn.connect((err) => {
    /* conn.query('SELECT * FROM cliente', (err, result) => {
         console.log(err);
         console.log(result);
     }) */

    conn.query(' SELECT * FROM clientes WHERE id=?', [clientId], (err, result) => {
        console.log(result);
    })

})