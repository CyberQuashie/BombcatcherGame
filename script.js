function createGrid(rows, cols) {
  const board = document.getElementById("game-board");

  for (let i = 0; i < rows * cols; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("data-index", i); // Optional: use for tracking
    board.appendChild(square);
  }
}

// Create a 10x10 grid
createGrid(10, 10);
