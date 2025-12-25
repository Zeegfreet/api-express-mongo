import ErrorBase from "./ErrorBase.js";


class Erro404 extends ErrorBase {
    constructor(message = "Recurso não encontrado", statusCode = 404) {
        super(message, statusCode);
    }
}

export default Erro404;