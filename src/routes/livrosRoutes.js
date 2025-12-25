import express from "express";
import LivroController from "../controllers/LivroController.js";
import paginate from "../middlewares/paginate.js";

const routes = express.Router();

routes
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.buscarLivrosPorFiltro, paginate)
    .get("/livros/:id", LivroController.buscarLivroPorId)
    .post("/livros", LivroController.cadastrarNovoLivro)
    .patch("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.deletarLivro);




export default routes;