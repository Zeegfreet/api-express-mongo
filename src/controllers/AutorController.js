import { autor } from "../schemas/index.js";

class AutorController {

    static async listarAutores(req, res){
        try {
            const autores = await autor.find({});
            res.status(200).send(autores);
        } catch (error) {
            res.status(500).send({ message: `Falha na requisição: ${error.message}` });
        }
    }

    static async buscarAutorPorId(req, res){
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).send(autorEncontrado);
        } catch (error) {
            res.status(500).send({ message: `Falha na requisição: ${error.message}` });
        }
    }

    static async cadastrarNovoAutor(req, res){
        try {
            const dados = req.body;
            const novoAutor = await autor.create(dados);
            res.status(201).send(novoAutor);
        } catch (error) {
            res.status(500).send({ message: `Falha na requisição: ${error.message}` });
        }
    }

    static async atualizarAutor(req, res){
        try {
            const id = req.params.id;
            const dados = req.body;
            await autor.findByIdAndUpdate(id, dados);
            const autorAtualizado = await autor.findById(id);
            res.status(201).send(autorAtualizado);
        } catch (error) {
            res.status(500).send({ message: `Falha na requisição: ${error.message}` });
        }
    }

    static async deletarAutor(req, res){
        try {
            const id = req.params.id;
            const autorDeletado = await autor.findByIdAndDelete(id);
            res.status(200).send(autorDeletado);
        } catch (error) {
            res.status(500).send({ message: `Falha na requisição: ${error.message}` });
        }
    }

}


export default AutorController;