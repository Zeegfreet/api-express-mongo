import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";


const router = (app) => {
    app.use(
        livros,
        autores
    );
};

export default router;