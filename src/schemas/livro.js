import mongoose from "mongoose";
import { autorSchema } from "./autor.js";

const schema = new mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    titulo: { 
        type: String, 
        required: [true, "O título é obrigatório"]
    },
    editora: {
        type: String,
        required: [true, "A editora é obrigatória"]
    },
    preco: {
        type: Number,
        required: [true, "O preço é obrigatório"],
        min: [10, "O preço mínimo deve ser R$ 10,00"],
        max: [1500, "O preço máximo deve ser R$ 1.500,00"]
    },
    paginas: {
        type: Number,
        required: [true, "A quantidade de páginas é obrigatória"],
        validate: {
            validator: (valor) => valor > 50 && valor < 5000,
            message: "A quantidade de páginas deve estar entre 50 e 5000"
        }
    },
    autor: autorSchema
}, { versionKey: false });


const livro = mongoose.model("livros", schema);

export default livro;