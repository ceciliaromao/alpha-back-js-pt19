import playerCard from "../organims/playerCard.js";
import Cards from "../../modules/Card.js";
import Random from "../../modules/Random.js";

export default function gamePage() {
  const app = document.querySelector("#container");
  const player1 = Cards();
  const player2 = Cards();
  const raffle = Random(1, 75);
  const temp = Random(1, 75);

  app.innerHTML = `
    <div id="result"></div>
    ${playerCard("1", player1.getCard())}
    ${playerCard("2", player2.getCard())}
    <div id="drawn-list"></div>
  `;

  const result = document.querySelector("#result");
  const cardNumbers = document.querySelectorAll(".numbers");
  const drawnList = document.querySelector("#drawn-list");

  result.innerHTML = `Iniciando o Jogo!`;

  for (const el of cardNumbers) {
    el.addEventListener("click", () => {
      if (raffle.isDrawn(parseInt(el.textContent))) {
        el.classList.add('drawn-number');
        switch (el.dataset.parent) {
          case "1":
            player1.drawnNumber(parseInt(el.textContent));
            if (player1.winner()) {
              result.innerHTML = "Jogador 1 Ganhou!!";
              clearInterval(playBingo);
              document.querySelector("body").style = "pointer-events: none;";
              return true;
            }
            break;
          case "2":
            player2.drawnNumber(parseInt(el.textContent));
            if (player2.winner()) {
              result.innerHTML = "Jogador 2 Ganhou!!";
              clearInterval(playBingo);
              document.querySelector("body").style = "pointer-events: none;";
              return true;
            }
          default:
            console.log("Cartela não existe!");
        }
      }
    });
  }

  const playBingo = setInterval(() => {
    if (!temp.drawRandom()) {
      clearInterval(playBingo);
      return (result.innerHTML = "Todos os números foram sorteados!");
    }
    
    result.innerHTML = `${raffle.drawRandom()}`;
    drawnList.innerHTML = `${raffle.getDrawnNumbers()}`
  }, 5000);
}
