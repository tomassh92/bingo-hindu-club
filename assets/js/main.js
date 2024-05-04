function sacarNumero() {
    let nuevoNumero;
    do {
        nuevoNumero = Math.floor(Math.random() * 99) + 1;
    } while (numerosSacados.includes(nuevoNumero));

    numerosSacados.push(nuevoNumero);

    let numeroDisplay = document.getElementById('last-number');
    numeroDisplay.textContent = nuevoNumero;

    let cell = document.getElementById('number-' + nuevoNumero);
    if (cell) {
        cell.classList.add('highlighted');
    }

    if (numerosSacados.length === 99) {
        document.querySelector('.btn').disabled = true;
    }
}

let numerosSacados = [];
let bingoBoard = document.getElementById('bingo-board');

for (let i = 1; i <= 99; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = i;
    cell.id = 'number-' + i;
    bingoBoard.appendChild(cell);
}
