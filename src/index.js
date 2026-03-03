import prompt from "prompt";
import chalk from "chalk";
import mainPrompt  from "./prompts/prompt-main.js"; 

async function main() {
    prompt.get(mainPrompt, async (erro, choice) =>{
        if(choice.select == 1) console.log(chalk.blue.bgRed.bold("Você selecionou o qrCode"));
        if(choice.select == 2) console.log("Você selecionou criar senha");
    })

    prompt.start();
};
main();