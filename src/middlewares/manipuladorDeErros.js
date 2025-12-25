import mongoose from "mongoose";
import ErrorBase from "../errors/ErrorBase.js";
import ErrorDeValidacao from "../errors/ErrorDeValidacao.js";


// eslint-disable-next-line no-unused-vars
const mainpuladorDeerros = (err, req, res, next) => {
    if (err instanceof mongoose.Error.ValidationError) {
        new ErrorDeValidacao().enviarResposta(err, res);
    }

    new ErrorBase().enviarResposta(res);
};

export default mainpuladorDeerros;