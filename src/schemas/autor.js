import mongoose from "mongoose";

export const autorSchema = new mongoose.Schema({
    id: { 
        type: mongoose.Schema.ObjectId 
    },
    nome: { 
        type: String,
        required: true
    },
    nacionalidade: { 
        type: String ,
        required: true
    }
}, { versionKey: false });


const autor = mongoose.model("autores", autorSchema);

export default autor;