function verificarAprovacao() {
    let nota = document.getElementById("nota").value;
    console.log("Nota Inserida: ", nota)

    if (nota >= 7) {
        document.getElementById("resultado").innerHTML = "Aluno Aprovado";
    } else {
        document.getElementById("resultado").innerHTML = "Aluno Reprovado";
    }
}