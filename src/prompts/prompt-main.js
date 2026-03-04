import chalk from "chalk";
const mainPrompt = [
    {name: "select",
    description: chalk.yellow.bold("Escolha a  ferramenta (1 - qrCode ou 2 - Gerador de senhas)"),
    pattern : /^[1-2]+$/,
    message: chalk.red.italic("Escolha um valor entre 1 e 2"),
    required: true
    },
]

export default mainPrompt