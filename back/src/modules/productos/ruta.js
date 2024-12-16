import express from "express";
import pool from "../../config.js";

const router = express.Router();

//listar
router.get("/", async (req, res) => {
  //http://localhost:4000/api/productos

  try {
    const query = "SELECT * FROM productos";
    const [result] = await pool.query(query);

    const productosFormateados = result.map((producto) => {
      if (producto.fecha_vencimiento) {
        producto.fecha_vencimiento = new Date(producto.fecha_vencimiento)
          .toISOString()
          .split("T")[0];
      }
      return producto;
    });

    res.send(productosFormateados);
  } catch (error) {
    console.log(`Error al obtener datos: ${error}`);
    res.sendStatus(500).send("Error al obtener datos");
  }
});

//listar productos por categoria
router.get("/:idCategoria", async (req, res) => {
  //http://localhost:4000/api/productos/1

  try {
    const idCategoria = req.params.idCategoria;

    const query = "SELECT * FROM productos WHERE id_categoria = ?";
    const [result] = await pool.query(query, [idCategoria]);

    const productosFormateados = result.map((producto) => {
      if (producto.fecha_vencimiento) {
        producto.fecha_vencimiento = new Date(producto.fecha_vencimiento)
          .toISOString()
          .split("T")[0];
      }
      return producto;
    });

    res.send(productosFormateados);
  } catch (error) {
    console.log(`Error al obtener datos: ${error}`);
    res.sendStatus(500).send("Error al obtener datos");
  }
});

// Crear un producto
router.post("/", async (req, res) => {
  //http://localhost:4000/api/productos
  try {
    const { nombre, fecha_vencimiento, stock, precio, url_img, id_categoria } =
      req.body;

    if (
      !nombre ||
      !fecha_vencimiento ||
      !stock ||
      !precio ||
      !url_img ||
      !id_categoria
    ) {
      return res
        .status(400)
        .json({ mensaje: "Todos los campos son obligatorios." });
    }

    const query =
      "INSERT INTO productos (nombre, fecha_vencimiento, stock, precio, url_img, id_categoria) VALUES (?, ?, ?, ?, ?, ?)";

    const values = [
      nombre,
      fecha_vencimiento,
      stock,
      precio,
      url_img,
      id_categoria,
    ];

    const [result] = await pool.query(query, values);

    res.status(201).json({
      mensaje: "Producto creado con éxito",
      data: {
        id: result.insertId,
        ...req.body,
      },
    });
  } catch (error) {
    console.error(`Error al insertar datos: ${error.message}`);
    res.status(500).json({ mensaje: "Error al insertar datos" });
  }
});

//actualizar un producto
router.patch("/:id", async (req, res) => {
  //http://localhost:4000/api/productos/1
  try {
    const id = req.params.id;

    const { nombre, fecha_vencimiento, stock, precio, url_img, id_categoria } =
      req.body;

    const query =
      "UPDATE productos SET nombre = ?, fecha_vencimiento = ?, stock = ?, precio = ?, url_img = ?, id_categoria = ? WHERE id = ?";

    const values = [
      nombre,
      fecha_vencimiento,
      stock,
      precio,
      url_img,
      id_categoria,
      id,
    ];

    const [result] = await pool.query(query, values);

    res.status(201).json({
      message: "Producto actualizado con exito",
      data: {
        id: result.insertId,
        ...req.body,
      },
    });
  } catch (error) {
    console.log(`Error al actualizar datos: ${error}`);
    res.status(500).json({ mensaje: "Error al actualizar datos" });
  }
});

//eliminar producto
router.delete("/:id", async (req, res) => {
  //http://localhost:4000/api/productos/1
  try {
    const { id } = req.params;

    const query = "DELETE FROM productos WHERE id = ?";

    await pool.query(query, [id]);

    res.json({
      message: "Producto eliminada con exito",
      id,
    });
  } catch (error) {
    console.log(`Error al eliminar datos: ${error}`);
    res.sendStatus(500).json({ mensaje: "Error al eliminar datos" });
  }
});

export default router;
