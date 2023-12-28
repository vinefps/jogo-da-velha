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
  // const items = selected.map((item, i)=>{
  //   //Cria um array para cada item do array ja existente, retornando X ou 0, junto com o index.
  //   return [item, i]
  // }).filter((item)=>{
  //   //Pega todos os arrays criados, e retorna somente os que coincidirem com o último jogador.
  //   //obs: Aqui há a criação de dois arrays distintos, um para o X e outro para o O.
  //   //Eu tinha uma dúvida em relação a criação destes dois arrays, como um não substitui o outro..
  //   //a resposta é que há sim a substituição na "const items", hora o array presente é o que tem o X e outra hora o O.
  //   //A diferença é que o valor não se perde, porque os valores estão salvos no array selected. e toda vez que se roda a function check
  //   //os valores são recuperados.
  //   return item[0] === playerLastMove
  // }).map((item)=>{
  //   //Transformo todos os arrays que tem o mesmo item "X ou O", em um único array, pois irá retornar só o item[1] e não como forma de arrayj.
  //   return item[1]
  // })
  



  // for (pos of positions) {
  //   if (pos.every((item) => items.includes(item))) {   //Every testa se todos os elementos passam pelo teste, e retorna true ou false.
  //     alert("O JOGADOR '" + playerLastMove + "' GANHOU!");//pos se torna cada array dentro de position, o callback é conferir se cada item dentro de pos está incluido dentro do array items.
  //     init();
  //     return;
  //   }
  // }

  // if (selected.filter((item) => item).length === 9) {
  //   alert("DEU EMPATE!");
  //   init(); //Para limpar o array e reiniciar o game.
  //   return;
  // }
  
}
