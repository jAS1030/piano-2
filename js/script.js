const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano__keys');

const PlayNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

const handleMousedown = (key) => {
    const dataNote = key.getAttribute('data-note');
    if (dataNote) {
        PlayNote(dataNote);
    }

    if (key.className.includes('black')) {
        key.classList.add('black--pressed');
    } else {
        key.style.background = '#ddd';
    }
}

const handleMouseup = (key) => {
    if (key.className.includes('black')) {
        key.classList.remove('black--pressed');
    } else {
        key.style.background = 'white';
    }
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMousedown(key));
    key.addEventListener('mouseup', () => handleMouseup(key));
});

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcher--active');
        keysSection.classList.remove('disabled-keys');
    } else {
        switcher.classList.remove('switcher--active');
        keysSection.classList.add('disabled-keys');
    }
});

const keyDownMapper = {
    "Tab": () => handleMousedown(keys[0]),
    "1": () => handleMousedown(keys[1]),
    "q": () => handleMousedown(keys[2]),
    "2": () => handleMousedown(keys[3]),
    "w": () => handleMousedown(keys[4]),
    "e": () => handleMousedown(keys[5]),
    "4": () => handleMousedown(keys[6]),
    "r": () => handleMousedown(keys[7]),
    "5": () => handleMousedown(keys[8]),
    "t": () => handleMousedown(keys[9]),
    "6": () => handleMousedown(keys[10]),
    "y": () => handleMousedown(keys[11]),
    "u": () => handleMousedown(keys[12]),
    "8": () => handleMousedown(keys[13]),
    "i": () => handleMousedown(keys[14]),
    "9": () => handleMousedown(keys[15]),
    "o": () => handleMousedown(keys[16]),
    "p": () => handleMousedown(keys[17]),
    "-": () => handleMousedown(keys[18]),
    "[": () => handleMousedown(keys[19]),
    "=": () => handleMousedown(keys[20]),
    "]": () => handleMousedown(keys[21]),
    "Backspace": () => handleMousedown(keys[22]),
    "\\": () => handleMousedown(keys[23]),
}

const keyUpMapper = {
    "Tab": () => handleMouseup(keys[0]),
    "1": () => handleMouseup(keys[1]),
    "q": () => handleMouseup(keys[2]),
    "2": () => handleMouseup(keys[3]),
    "w": () => handleMouseup(keys[4]),
    "e": () => handleMouseup(keys[5]),
    "4": () => handleMouseup(keys[6]),
    "r": () => handleMouseup(keys[7]),
    "5": () => handleMouseup(keys[8]),
    "t": () => handleMouseup(keys[9]),
    "6": () => handleMouseup(keys[10]),
    "y": () => handleMouseup(keys[11]),
    "u": () => handleMouseup(keys[12]),
    "8": () => handleMouseup(keys[13]),
    "i": () => handleMouseup(keys[14]),
    "9": () => handleMouseup(keys[15]),
    "o": () => handleMouseup(keys[16]),
    "p": () => handleMouseup(keys[17]),
    "-": () => handleMouseup(keys[18]),
    "[": () => handleMouseup(keys[19]),
    "=": () => handleMouseup(keys[20]),
    "]": () => handleMouseup(keys[21]),
    "Backspace": () => handleMouseup(keys[22]),
    "\\": () => handleMouseup(keys[23]),
}

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyDownMapper[event.key]()
});

document.addEventListener('keyup', (event) => {
    keyUpMapper[event.key]()
});
