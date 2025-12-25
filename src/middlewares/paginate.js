const paginate = async (req, res, next) => {
    try {
        const { limite = 10, pagina = 1} = req.query;
        const skip = (pagina - 1) * limite;

        const { request } = req;

        const dados = await request
            .skip(skip)
            .limit(limite);

        
        res.status(200).send(dados);

    } catch (err) {
        next(err);
    }
};

export default paginate;