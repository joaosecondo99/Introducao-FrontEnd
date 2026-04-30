function gerarSaudacao() {
    const escolha = document.getElementById("selecionar").value;
    let saudar;

    switch (escolha) {
        case "portugues":
            saudar = "Olá, tudo bem?";
            break;
        
        case "ingles":
            saudar = "Hello, how are you?";
            break;

        case "espanhol":
            saudar = "Hola, ¿todo bien?";
            break;

        case "frances":
            saudar = "Bonjour, tout va bien?";
            break;

        default:
            break;
    }

    document.getElementById("saudacao").innerHTML = saudar;
}