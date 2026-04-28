function calcularDesconto() {
        let valorTotal = Number(document.getElementById("valorTotal").value);

        let porcentagem = Number(document.getElementById("porcentagem").value);

    
    if (valorTotal > 0 && porcentagem > 0) {

        let valorDesconto = (valorTotal * porcentagem) / 100;

        let valorFinal = valorTotal - valorDesconto;

        window.alert(`
            Valor Total: ${valorTotal}
            Valor do Desconto: ${valorDesconto}
            Valor Final: ${valorFinal}`)
    } else {
        window.alert("Valores incorretos!")
    }


}