// Função para calcular o IMC
function calcularIMC() {
    // Captura os valores de peso e altura dos campos de entrada
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Valida se os valores são números positivos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert(
            "Por favor, insira valores válidos para peso e altura. Ex: Use no mínimo '1' para Peso. E '1.50' ou '1,50' para Altura."
        );
        return;
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);

    // Determina a classificação do IMC
    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    // Exibe o resultado na tela
    document.getElementById(
        "resultado"
    ).innerText = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
}