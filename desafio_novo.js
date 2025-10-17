function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

let jogadores = [
    { nome: "Lala", vitorias: 8, derrotas: 5 },
    { nome: "Léo", vitorias: 25, derrotas: 10 },
    { nome: "Ana", vitorias: 52, derrotas: 30 },
    { nome: "Rafa", vitorias: 95, derrotas: 12 },
    { nome: "Mia", vitorias: 120, derrotas: 20 }
];

for (let i = 0; i < jogadores.length; i++) {
    let jogador = jogadores[i];
    let resultado = calcularRank(jogador.vitorias, jogador.derrotas);

    let nomeJogador = jogador.nome;
    let saldo = resultado.saldoVitorias;
    let nivel = resultado.nivel;

    let mensagem = "O Herói " + nomeJogador + " tem saldo de " + saldo + " e está no nível de " + nivel + ".";
    console.log(mensagem);
}
