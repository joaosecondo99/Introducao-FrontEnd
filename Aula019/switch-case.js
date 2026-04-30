function calcularOperacao() {
    const valor1 = Number(document.getElementById("num1").value);
    const valor2 = Number(document.getElementById("num2").value);
    const operador = document.getElementById("operador").value;

    let resultado;
    
    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById("resultado").innerHTML = "O valor precisa ser um número!"
    } else {
        switch (operador) {
            case "+":
                resultado = valor1 + valor2;
                break;
        
            case "-":
                resultado = valor1 - valor2;
                break;
        
            case "*":
                resultado = valor1 * valor2;
                break;
        
            case "/":
                if (valor2 === 0) {
                    document.getElementById("resultado").innerHTML = "Divisão por zero é indefinida!"
                    return;
                } else {
                    resultado = valor1 / valor2;
                    break;
                }
        
            default:
                document.getElementById("resultado").innerHTML = "Opção Inválida!"
                return;
                break;
    }
    
    document.getElementById("resultado").innerHTML = `O resultado entre ${valor1} ${operador} ${valor2} = ${resultado}`
    }
}
    