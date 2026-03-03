const mainPrompt = [
    {name: "select",
    description: "Escolha a  ferramenta (1 - qrCode ou 2 - Gerador de senhas)",
    pattern : /^[1-2]+$/,
    message: "Escolha um valor entre 1 e 2",
    required: true
    },
]

export default mainPrompt