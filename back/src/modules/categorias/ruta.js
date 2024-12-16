import express from "express";
import pool from "../../config.js";

const router = express.Router();

//listar todas las categorias
router.get("/", async (req, res) => {
  //http://localhost:4000/api/categorias

  try {
    const query = "SELECT * FROM categorias";
    const [result] = await pool.query(query);

    res.send(result);
  } catch (error) {
    console.log(`Error al obtener datos: ${error}`);
    res.sendStatus(500).send("Error al obtener datos");
  }
});

//crear una categoria
router.post("/", async (req, res) => {
  //http://localhost:4000/api/categorias
  try {
    const { nombre } = req.body;
    const query = "INSERT INTO categorias (nombre) VALUES (?)";
    const values = [nombre];
    const [result] = await pool.query(query, values);

    res.status(201).json({
      mensaje: "Categoria creada con exito",
      data: {
        id: result.insertId,
        nombre: nombre,
      },
    });
  } catch (error) {
    console.log(`Error al insertar un datos : ${error}`);
    res.status(500).json({ message: "Error al insertar datos" });
  }
});

//actualizar una categoria
router.patch("/:id", async (req, res) => {
  //http://localhost:4000/api/categorias/1
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const query = "UPDATE categorias SET nombre = ? WHERE id = ?";
    const values = [nombre, id];
    await pool.query(query, values);

    res.status(201).json({
      message: "Categoria actualizada con exito",
      data: {
        id,
        nombre,
      },
    });
  } catch (error) {
    console.log(`Error al actualizar datos: ${error}`);
    res.status(500).json({ message: "Error al actualizar datos" });
  }
});

//eliminar una categoria
router.delete("/:id", async (req, res) => {
  //http://localhost:4000/api/categorias/1
  try {
    const { id } = req.params;

    const query = "DELETE FROM categorias WHERE id = ?";

    await pool.query(query, [id]);

    res.status(201).json({
      message: "Categoria eliminada con exito",
      id,
    });
  } catch (error) {
    console.log(`Error al eliminar datos: ${error}`);
    res.status(500).json({ message: "Error al eliminar datos" });
  }
});

export default router;
