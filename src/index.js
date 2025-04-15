// Desafio do Felipão - Heroi com XP e Elo
// Descrição: O jogador tem um herói com XP e Elo. O jogador quer saber qual é o elo do seu herói baseado no XP.


let nome = ("Sage")

// altere o valor xpHeroi aqui para testar o código ou faça o teste no Terminal com o comando node index.js com base no diretório do código.
// nível: undefined (sem elo) com apenas let xpHeroi
let xpHeroi = 1000 

if (xpHeroi <= 1000) {
    console.log("O Herói de nome " + nome + " está no nível de " + xpHeroi + " de XP e no elo de Ferro.")
}
else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    console.log("O Herói de nome " + nome + " está no nível de " + xpHeroi + " de XP e no elo de Bronze.")
} 
else if (xpHeroi >= 2001 && xpHeroi <= 5000) { 
    console.log("O Herói de nome " + nome + " está no nível de " + xpHeroi + " de XP e no elo de Prata.")
}
else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    console.log("O Herói de nome " + nome + " está no nível de " + xpHeroi + " de XP e no elo de Ouro.")
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    console.log("O Herói de nome " + nome + " está no nível de " + xpHeroi + " de XP e no elo de Platina.")
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    console.log("O Herói de nome " + nome + " está no nível de " + xpHeroi + " de XP e no elo de Ascendente.")
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    console.log("O Herói de nome " + nome + " está no nível de " + xpHeroi + " de XP e no elo de Imortal.")
} else if (xpHeroi >= 10001) {
    console.log("O Herói de nome " + nome + " está no nível de " + xpHeroi + " de XP e no elo de Radiante.")
}
else {
    console.log("O Herói de nome " + nome + " está no nível de " + xpHeroi + " de XP e não tem elo.")
}


