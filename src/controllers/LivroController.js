import { autor, livro } from "../schemas/index.js";


class LivroController {

    static async listarLivros(req, res, next){
        try {
            const livros = await livro.find({});
            res.status(200).send(livros);
        } catch (error) {
            next(error);
        }
    }

    static async buscarLivrosPorFiltro(req, res, next){
        try {
            const filtros = await buscadorDeLivrosPorFiltro(req.query);
            if (filtros === null) {
                console.log("Nenhum livro encontrado com os filtros fornecidos.");
                return res.status(200).send([]);
            }

            const livros = livro.find(filtros);

            req.request = livros;

            next();
        }
        catch (error) {
            next(error);
        }
    }

    static async buscarLivroPorId(req, res){
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).send(livroEncontrado);
        } catch (error) {
            res.status(500).send({ message: `Falha na requisição: ${error.message}` });
        }
    }

    static async cadastrarNovoLivro(req, res, next){
        try {
            const dados = req.body;
            const autorId = dados.autor;
            const autorEncontrado = await autor.findById(autorId);
            const novoLivro = await livro.create({ ...dados, autor: { ...autorEncontrado._doc } });
            res.status(201).send(novoLivro);
        } catch (error) {
            next(error);
        }
    }

    static async atualizarLivro(req, res){
        try {
            const id = req.params.id;
            const dados = req.body;
            await livro.findByIdAndUpdate(id, dados);
            const livroAtualizado = await livro.findById(id);
            res.status(201).send(livroAtualizado);
        } catch (error) {
            res.status(500).send({ message: `Falha na requisição: ${error.message}` });
        }
    }

    static async deletarLivro(req, res){
        try {
            const id = req.params.id;
            const livroDeletado = await livro.findByIdAndDelete(id);
            res.status(200).send(livroDeletado);
        } catch (error) {
            res.status(500).send({ message: `Falha na requisição: ${error.message}` });
        }
    }

}


const buscadorDeLivrosPorFiltro = async (params) => {
    const {
        busca,
        nomeAutor,
        minPaginas,
        maxPaginas
    } = params;

    let filtros = {};

    if (busca) {
    // const regBusca = new RegExp(busca, "i");
        filtros.$or = [
            { titulo: { $regex: busca, $options: "i" } },
            { editora: { $regex: busca, $options: "i" } }
        ];
    }

    if (minPaginas || maxPaginas) filtros.paginas = {};
    if (minPaginas) filtros.paginas.$gte = minPaginas;
    if (maxPaginas) filtros.paginas.$lte = maxPaginas;

    if (nomeAutor) {
        const autorEncontrado = await autor.findOne({ nome: { $regex: nomeAutor, $options: "i" } });
        if (autorEncontrado) {
            filtros.autor = autorEncontrado._id;
        } else {
            filtros = null;
        }
    }
    return filtros;
};



export default LivroController;