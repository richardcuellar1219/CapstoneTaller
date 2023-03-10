const mysql = require("mysql2");

// TODO: Valores en fichero de entorno
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

const pool2 = mysql.createPool({
  uri: "mysql://root:elbajista@127.0.0.1:3306/gestiontaller",
});

global.db = pool2.promise();
