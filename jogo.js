var numeroSorteado

//document.getElementById("btnIniciar").addEventListener("click", iniciar);
document.getElementById("btnIniciar").onclick = iniciar;
document.getElementById("btnTentativa").onclick = realizarTentativa;

function iniciar() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let numeroAleatorio = Math.random(); 

    numeroSorteado = min + Math.trunc(dif * numeroAleatorio);
    console.log(numeroSorteado);

}

function realizarTentativa() {
    let resposta = Number(window.prompt("Digite um número e teste sua sorte"));

    if (numeroSorteado == resposta) {
        document.getElementById("divMensagem").innerHTML = "Você acertou! O número sorteado foi " + numeroSorteado;
    }

    if (numeroSorteado > resposta) {
        document.getElementById("divMensagem").innerHTML = "O número sorteado é maior.";
    }

    if (numeroSorteado < resposta) {
        document.getElementById("divMensagem").innerHTML = "O número sorteado é menor.";
    }
}