let nomeHeroi = "Lala";
let qtdExperiencia = 7250;
let nivelHeroi = "";

if (qtdExperiencia <= 1000) {
    nivelHeroi = "Ferro";
} else if (qtdExperiencia <= 2000) {
    nivelHeroi = "Bronze";
} else if (qtdExperiencia <= 5000) {
    nivelHeroi = "Prata";
} else if (qtdExperiencia <= 7000) {
    nivelHeroi = "Ouro";
} else if (qtdExperiencia <= 8000) {
    nivelHeroi = "Platina";
} else if (qtdExperiencia <= 9000) {
    nivelHeroi = "Ascendente";
} else if (qtdExperiencia <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

for (let i = 0; i < 3; i++) {
    console.log("Analisando experiência... " + (i + 1));
}
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
