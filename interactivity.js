let container = document.getElementById('container');
const containerSize = 1000;
let isMouseDown = false;
let currentMode = "Black-white";

let newGridButton = document.getElementById("new-grid");
let resetButton = document.getElementById("reset");
let modeText = document.getElementById("mode");
let rainbowButton = document.getElementById("rainbow");
let blackWhiteButton = document.getElementById("black-white");

modeText.textContent = `Current mode: ${currentMode}`;

rainbowButton.addEventListener("click", () => {
    rainbowMode();
    modeText.textContent = `Current mode: ${currentMode}`;
});
blackWhiteButton.addEventListener("click", () => {
    blackWhiteMode();
    modeText.textContent = `Current mode: ${currentMode}`;
});
newGridButton.addEventListener("click", newGrid);
resetButton.addEventListener("click", resetSquares);
document.addEventListener("mousedown", () => (isMouseDown = true));
document.addEventListener("mouseup", () => (isMouseDown = false));

function rainbowMode() {
    currentMode = "Rainbow";
}

function blackWhiteMode() {
    currentMode = "Black-white";
}

function changeColor(event) {
    if (isMouseDown || event.type === "mousedown") {
        if (currentMode === "Black-white") {
            event.target.style.backgroundColor = "black";
        } else if (currentMode === "Rainbow") {
            let alpha = parseFloat(event.target.dataset.alpha) || 0.1;
            alpha = Math.min(alpha + 0.1, 1);

            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);

            event.target.style.backgroundColor = `rgba(${randomR}, ${randomG}, ${randomB}, ${alpha})`;
            event.target.dataset.alpha = alpha;
        }
    }
}

function resetSquares() {
    const squares = container.querySelectorAll(".square");

    squares.forEach(square => {
        square.style.backgroundColor = "azure";
        square.removeAttribute("data-alpha");
    });
}

function newGrid() {
    container.innerHTML = "";

    let SquaresPerSide = prompt("How many squares per side? (Max 100)");
    while (SquaresPerSide > 100 || SquaresPerSide <= 0 || isNaN(SquaresPerSide)) {
        alert("Invalid input! Enter a number between 1 and 100.");
        SquaresPerSide = prompt("How many squares per side? (Max 100)");
    }

    let numOfSquares = SquaresPerSide * SquaresPerSide;
    let squareSize = containerSize / SquaresPerSide;

    for (let i = 0; i < numOfSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = "azure";
        square.addEventListener("mouseover", changeColor);
        square.addEventListener("mousedown", changeColor);
        container.appendChild(square);
    }
}

(function createInitialGrid() {
    let SquaresPerSide = prompt("How many squares per side? (Max 100)");
    while (SquaresPerSide > 100 || SquaresPerSide <= 0 || isNaN(SquaresPerSide)) {
        alert("Invalid input! Enter a number between 1 and 100.");
        SquaresPerSide = prompt("How many squares per side? (Max 100)");
    }
    let numOfSquares = SquaresPerSide * SquaresPerSide;
    let squareSize = containerSize / SquaresPerSide;

    for (let i = 0; i < numOfSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = "azure";
        square.addEventListener("mouseover", changeColor);
        square.addEventListener("mousedown", changeColor);
        container.appendChild(square);
    }
})();
