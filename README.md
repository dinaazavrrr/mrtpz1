# Quadratic Equation Solver

This application solves quadratic equations of the form:
```
ax^2 + bx + c = 0
```

It supports two modes of execution:
- **Interactive Mode** – the user enters coefficients manually via the terminal
- **File Mode (Non-Interactive)** – coefficients are read from a text file

---

## How to Build and Run

### 1. Clone the repository

```
git clone https://github.com/<your-username>/quadratic-calculator.git
cd quadratic-calculator
```

### 2. Requirements
To run this JavaScript application from the terminal, you must have [Node.js](https://nodejs.org/) installed.

Node.js is a runtime environment that allows you to execute JavaScript code outside the browser, which is required for reading files, working with input/output, and running CLI-based tools like this one.


### Interactive Mode
To run the app and enter coefficients manually:
```
node calculator.js
```
You will be prompted to enter the values of ```a```, ```b```, and ```c```.

**Example:**
```
Enter a: 1
Enter b: -3
Enter c: 2
Equation: 1.0x² + -3.0x + 2.0 = 0
Two real roots found:
x₁ = 2
x₂ = 1
```

## File Mode (Non-Interactive)
To read coefficients from a file:
```
node calculator.js input.txt
```

### File Format
The file should contain exactly three space-separated numbers:
```
1 -3 2
```
These correspond to ```a```, ```b```, and ```c``` in the equation.

## Error Handling
- If ```a = 0``` → displays: ```Coefficient a cannot be zero.```

- If a non-number is entered → displays an error and retries (interactive mode)

- In file mode:

  - File not found → error

  - Incorrect format → error

## Reverted Commit

This repository includes at least one revert commit, such as:
```
revert: removed incorrect discriminant logic
```

## Commit Examples
```
init: initial project structure
```
```
feat: implement interactive mode
```
```
feat: support file input
```
```
fix: improved error handling
```
```
docs: add complete README.md
```
```
revert: restore previous correct version
```

## Author
Diana Lutsiuk, IM-31 , KPI, 2025