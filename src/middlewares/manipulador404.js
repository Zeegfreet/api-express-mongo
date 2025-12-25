import Erro404 from "../errors/Erro404.js";

const manipulador404 = (_req, res) => {
    new Erro404().enviarResposta(res);
};

export default manipulador404;