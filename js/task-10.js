function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonToCreate = document.querySelector('button[data-create]');
const buttonToDestroy = document.querySelector('button[data-destroy]');
const input = document.querySelector('#controls>input');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    const RandomColor = getRandomHexColor();
    for (let i = 1; i <= amount; i += 1) {
      const newDiv = document.createElement('div');
      newDiv.style.backgroundColor = RandomColor;
      boxes.append(newDiv);
    }
    [...boxes.children].map((div, i, arr) => {
      if (i === 0) {
        div.style.width = '30px';
        div.style.height = '30px';
      } else {
        let sizeForDiv = parseInt(arr[i - 1].style.width) + 10;
        div.style.width = `${sizeForDiv}px`;
        div.style.height = `${sizeForDiv}px`;
      }
    })
  }
}

buttonToCreate.addEventListener('click', evt => {
  createBoxes(input.value);
})

buttonToDestroy.addEventListener('click', evt => {
  const ArrToDestroy = [...boxes.children];
  ArrToDestroy.map(div => div.remove());
})