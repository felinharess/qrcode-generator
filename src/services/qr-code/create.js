import prompt from "prompt";
import promptQrcode from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";
export default async function createQrcode() {
    prompt.get(promptQrcode, handle )
    prompt.start();
};