

class ErrorDeValidacao extends Error {
    constructor(message = "Erro de validação de dados: ", statusCode = 400) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }

    enviarResposta(err, res){
        const moongoseMessage = Object.values(err.errors)
            .map(e => e.message)
            .join("; ");
        res.status(this.statusCode).send({ message: `${this.message} ${moongoseMessage}` });
    }
}

export default ErrorDeValidacao;