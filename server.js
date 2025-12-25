import app from "./src/app.js";
import chalk from "chalk";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(chalk.blue(`Servidor escutando na porta ${PORT}.`));
});