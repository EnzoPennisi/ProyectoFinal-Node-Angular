import { createPool } from "mysql2/promise";
import { config } from "dotenv";

//Objetivo: cargar las variables de entorno
config();

let pool = null;

try {
  pool = createPool({
    host: process.env.HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
  });
} catch (error) {
  console.log(`Error al conectar con la base de datos: ${error}`);
}

export default pool;

//Todo lo comentado es para el archivo config.js
//y sirve para cargar las variables de entorno y configurar la aplicación

// import {config} from 'dotenv';

// // Objetivo: cargar las variables de entorno
// config();

// // Objetivo: configuración de la aplicación
// const app = {
//     port: process.env.PORT || 3000,
// }

// export default app;
