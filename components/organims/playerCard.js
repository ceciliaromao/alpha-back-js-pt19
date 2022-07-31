import cardSheet from "../molecules/cardSheet.js";

export default function playerCard(player, arr) {
    return `
        <div class="box" id="container-player">
            <div class="player">
                <p>Jogador ${player}</p>
                <div class="box" id="card-one">
                    ${cardSheet(arr, player)}
                </div> 
            </div>
        </div>
    `;
}