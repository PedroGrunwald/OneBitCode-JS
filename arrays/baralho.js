const baralho = [];
let opcao = "";

do {
  opcao = prompt(
    "Cartas do baralho:" +
      baralho.length +
      "\n1. Adicionar uma carta\n2. puxar uma carta\n3.sair"
  );

  switch (opcao) {
    case "1":
      const novaCarta = prompt("qual é a carta");
      baralho.push(novaCarta);
      break;
    case "2":
      const cartaPuxada = baralho.pop();
      if (!cartaPuxada) {
        alert("nao ha nenhuma carta no baralho");
      } else {
        alert("voce puxou.um(a)" + cartaPuxada);
      }
    case "3":
      alert("saindo...");
      break;
    default:
      alert("opcao invalida");
  }
} while (opcao !== "3");
