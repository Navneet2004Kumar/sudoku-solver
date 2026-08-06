# 🧩 Sudoku Solver

A Sudoku Solver developed as part of the  Design and Analysis of Algorithms (DAA)** course. The project efficiently solves any valid 9×9 Sudoku puzzle using the **Backtracking Algorithm**, demonstrating recursion, constraint satisfaction, and algorithmic  problem-solving.


## 📖 Overview

Sudoku is a logic-based number placement puzzle where the objective is to fill a 9×9 grid so that:

Each row contains digits **1–9** exactly once.
Each column contains digits **1–9** exactly once.
Each 3×3 sub-grid contains digits **1–9** exactly once.

This project uses a recursive backtracking approach to explore possible values and backtrack whenever a constraint is violated.

---

## ✨ Features

 ✅ Solves any valid Sudoku puzzle
 ⚡ Fast Backtracking Algorithm
  🔄 Recursive implementation
  ✔️ Validity checking before placement
  📚 Clean and modular code
  💻 Console-based implementation



## 🛠️ Technologies Used

- C++
- STL
- Recursion
- Backtracking
- Design and Analysis of Algorithms



## 🧠 Algorithm

The solver follows these steps:

1. Find an empty cell.
2. Try numbers **1 to 9**.
3. Check if placing the number is valid.
4. If valid, place the number.
5. Recursively solve the remaining puzzle.
6. If no solution exists, backtrack and try another number.



📸 Sample Input

5 3 0 0 7 0 0 0 0
6 0 0 1 9 5 0 0 0
0 9 8 0 0 0 0 6 0
8 0 0 0 6 0 0 0 3
4 0 0 8 0 3 0 0 1
7 0 0 0 2 0 0 0 6
0 6 0 0 0 0 2 8 0
0 0 0 4 1 9 0 0 5
0 0 0 0 8 0 0 7 9


📸 Sample Output


5 3 4 6 7 8 9 1 2
6 7 2 1 9 5 3 4 8
1 9 8 3 4 2 5 6 7
8 5 9 7 6 1 4 2 3
4 2 6 8 5 3 7 9 1
7 1 3 9 2 4 8 5 6
9 6 1 5 3 7 2 8 4
2 8 7 4 1 9 6 3 5
3 4 5 2 8 6 1 7 9




## 🎯 Learning Outcomes

   Understanding Backtracking Algorithms
   Recursive Problem Solving
   Constraint Satisfaction Problems
   Time and Space Complexity Analysis
  Algorithm Optimization



 🔮 Future Improvements

  🎨 Graphical User Interface (GUI)
  📷 Solve Sudoku from an image using OCR
  📱 Web-based Sudoku Solver
  ⚡ Heuristic Optimization (MRV, Forward Checking)
  🤖 AI-powered Sudoku Generator






# view on netlify
https://6914c7b23228074ce21ae464--meek-pie-1ecf5f.netlify.app/
