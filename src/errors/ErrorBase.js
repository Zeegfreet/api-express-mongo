
class ErrorBase extends Error {
    constructor(message = "Erro interno do servidor", statusCode = 500) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }

    enviarResposta(res){
        res.status(this.statusCode).send({ message: this.message });
    }
}

export default ErrorBase;