function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const creator = document.querySelector('button[data-create]');
const destroyer = document.querySelector('button[data-destroy]');
const input = document.querySelector('#controls>input');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    return
  }
  destroyBoxes();
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = getRandomHexColor();
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

function destroyBoxes() {
  [...boxes.children].map(div => div.remove());
}

creator.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyer.addEventListener('click', destroyBoxes);