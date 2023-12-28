# (Jogo da Velha) Project 

Descrição
Este projeto é uma implementação simples do clássico jogo da velha usando HTML, CSS e JavaScript. 
O objetivo é criar uma experiência interativa onde dois jogadores alternam entre "X" e "O" para preencher um tabuleiro de 3x3. O jogo verifica automaticamente se um jogador ganhou após cada jogada.

Funcionalidades Principais
Alternância de Jogadores: O jogo começa com o jogador "X" e alterna entre "X" e "O" após cada jogada.
Movimento: Os jogadores podem clicar nos botões do tabuleiro para fazer suas jogadas.
Verificação de Vitória: Após cada jogada, o sistema verifica automaticamente se um jogador ganhou, com base nas posições estabelecidas no array positions.
Feedback Visual: A interface do usuário fornece feedback sobre qual jogador está atualmente em turno.

Estrutura do Código
Variáveis Globais
currentPlayer: Elemento HTML que exibe o jogador da vez.
selected: Array que mantém o estado atual do tabuleiro.
player: String que mantém o jogador atual ("X" ou "O").
positions: Array 2D que define as posições possíveis para a vitória.

Funções Principais
init(): Inicializa o jogo, definindo o jogador atual, limpando o tabuleiro e adicionando listeners aos botões do jogo.
newMove(e): Função chamada quando um jogador clica em um botão do tabuleiro. Atualiza o tabuleiro com o movimento do jogador e verifica o status do jogo.
check(): Função que verifica se um jogador ganhou o jogo, com base nas posições definidas no array positions.

Instruções de Uso
Abra o arquivo HTML no seu navegador preferido.
Os jogadores alternam entre "X" e "O" clicando nos botões do tabuleiro.
Após cada jogada, o sistema verificará automaticamente se um jogador venceu.
Continue jogando até que um jogador vença ou o jogo termine em empate.
