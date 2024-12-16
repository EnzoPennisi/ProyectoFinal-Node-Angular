import express from "express";
//import config from './config.js'
import clientes from "./modules/categorias/ruta.js";
import proveedores from "./modules/productos/ruta.js";
import cors from "cors";

//Inicialización de express
const app = express();
app.use(cors());
/*
app.use(cors({
  origin: 'http://localhost:3000'
}));
*/

app.use(express.json());

//Configuración del puerto
app.set("port", 4000);

//rutas
app.use("/api/categorias", clientes);
app.use("/api/productos", proveedores);

export default app;
