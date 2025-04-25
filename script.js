const board = document.getElementById("sudoku-board");
const inputs = [];

// Create 9x9 input grid
for (let row = 0; row < 9; row++) {
  inputs[row] = [];
  for (let col = 0; col < 9; col++) {
    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("min", "1");
    input.setAttribute("max", "9");
    board.appendChild(input);
    inputs[row][col] = input;
  }
}

// Get board values as 2D array
function getGrid() {
  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid[i] = [];
    for (let j = 0; j < 9; j++) {
      const val = parseInt(inputs[i][j].value);
      if (!isNaN(val)) {
        grid[i][j] = val;
        inputs[i][j].classList.add("original");
      } else {
        grid[i][j] = 0;
      }
    }
  }
  return grid;
}

function setGrid(grid, original) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!original[i][j]) {
        inputs[i][j].value = grid[i][j];
        inputs[i][j].classList.add("filled");
      }
    }
  }
}

function isValid(grid, row, col, num) {
  for (let x = 0; x < 9; x++) {
    if (grid[row][x] === num || grid[x][col] === num) return false;
  }

  const startRow = row - (row % 3);
  const startCol = col - (col % 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[startRow + i][startCol + j] === num) return false;
    }
  }

  return true;
}

function solveSudoku(grid) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(grid, row, col, num)) {
            grid[row][col] = num;
            if (solveSudoku(grid)) return true;
            grid[row][col] = 0; // Backtrack
          }
        }
        return false;
      }
    }
  }
  return true;
}

function solve() {
  const grid = getGrid();
  const original = grid.map(row => row.map(cell => cell !== 0));

  document.getElementById("status").textContent = "Solving...";

  setTimeout(() => {
    const solved = solveSudoku(grid);
    if (solved) {
      setGrid(grid, original);
      document.getElementById("status").textContent = "✅ Solved successfully!";
    } else {
      document.getElementById("status").textContent = "❌ No solution exists.";
    }
  }, 100); // Delay to allow UI update
}
