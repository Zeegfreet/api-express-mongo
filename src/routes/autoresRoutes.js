import express from "express";
import AutorController from "../controllers/AutorController.js";


const routes = express.Router();

routes
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.buscarAutorPorId)
    .post("/autores", AutorController.cadastrarNovoAutor)
    .patch("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.deletarAutor);




export default routes;