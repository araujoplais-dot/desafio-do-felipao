class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "um ataque indefinido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de criação e uso de objetos
const heroi1 = new Heroi("Lais", 25, "mago");
const heroi2 = new Heroi("Owen", 30, "guerreiro");
const heroi3 = new Heroi("Kenji", 28, "ninja");
const heroi4 = new Heroi("Anya", 40, "monge");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();