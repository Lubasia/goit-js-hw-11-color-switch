const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timeOutId = 0

const elem = {
    body: document.querySelector('body'),
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]')
}

const changeColor = () => {
    let color = randomIntegerFromInterval(0, colors.length-1);
    elem.body.style.background = colors[color]
}

const startChenges = () => {
    elem.start.disabled = true;
    timeOutId = setInterval(changeColor, 500)
}

const stopChenges = () => {
    clearInterval(timeOutId);
    elem.start.disabled = false;
}

elem.start.addEventListener('click', startChenges);
elem.stop.addEventListener('click', stopChenges)


