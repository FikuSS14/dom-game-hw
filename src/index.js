import './style.css';
import characterImg from './assets/goblin.png';

const board = document.getElementById('game-board');
const cells = [];
const BOARD_SIZE = 16;

for (let i = 0; i < BOARD_SIZE; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.dataset.index = i;
  board.append(cell);
  cells.push(cell);
}

const character = document.createElement('img');
character.src = characterImg;
character.alt = 'Character';
character.className = 'character';

let currentCellIndex = null;

function moveCharacter() {
  if (currentCellIndex !== null) {
    cells[currentCellIndex].innerHTML = '';
  }

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * 16);
  } while (newIndex === currentCellIndex && cells.length > 1);

  currentCellIndex = newIndex;
  cells[currentCellIndex].append(character);
}

moveCharacter();

setInterval(moveCharacter, 2000);

