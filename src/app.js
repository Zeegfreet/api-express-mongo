import express from "express";
import dbConnect from "./configs/dbConnect.js";
import chalk from "chalk";
import router from "./routes/index.js";
import mainpuladorDeerros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const db = await dbConnect();

db.on("error", (err) => {
    console.log(chalk.red("Falha na conexão com o banco: ", err));
});

db.once("open", () => {
    console.log(chalk.blue("Conexão estabelecida com o banco de dados."));
});

const app = express();

app.use(
    express.json()
);

router(app);

app.use(
    mainpuladorDeerros
);

app.use(
    manipulador404
);

export default app;