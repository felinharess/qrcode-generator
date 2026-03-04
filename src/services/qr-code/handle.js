import qr from 'qrcode-terminal';
import chalk from 'chalk';


export default async function hadle(error, result) {
    if(error) {
        console.log("Error on application");
        return;
    };
    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, (qrcode)=>{
        console.log(chalk.green.bold("Qr code gerado com sucesso:\n"));
        console.log(qrcode);
    });
    
};