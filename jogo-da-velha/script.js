const currentPlayer = document.querySelector(".currentPlayer");

let selected;
let player = "X";
var items;
var lista = []


let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function init() {
  //Vai preencher o jogador da vez ~~ Mostrar vazio cada quadrado ~~ e vai exercutar newMove
  selected = [];// Este array tem que estar presente aqui, para quando alguém ganhar, resetar o array e consequentemente o game.

  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;

  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

init();

function newMove(e) {
  //Preencher cada quadrado com o jogador da vez ~~ Pegar o index do local de cada quadrado e preenche
  //Pega o array ja criado e adiciona no index especifico referente a cada botao o X ou O.
  
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = player;
  e.target.removeEventListener("click", newMove);
  selected[index] = player;

  setTimeout(() => {
    check();
  }, [100]);

  player = player === "X" ? "O" : "X";
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
  // console.log(selected)  empty x 2, quer dizer que ter dois locais vazios a frente até ter outro valor.
}

function check() {
  let playerLastMove = player === "X" ? "O" : "X";

  let items = selected.map((item, i)=>{
    return [item,i]
  }).filter((item)=>{
    return item[0] === playerLastMove
  })
  console.log(items)
  
}
