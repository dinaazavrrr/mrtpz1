const fs = require("fs");
const readline = require("readline");

function displayResult(a, b, c) {
  if (a === 0) throw new Error("Коефіцієнт a не може дорівнювати нулю.");

  console.log("➤ Обчислення результату...");

  const d = b * b - 4 * a * c;
  console.log(`Рівняння: ${a.toFixed(1)}x² + ${b.toFixed(1)}x + ${c.toFixed(1)} = 0`);

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log("Знайдено два корені:");
    console.log(`x₁ = ${root1}`);
    console.log(`x₂ = ${root2}`);
    console.log("Тип коренів: два різних дійсних числа");

  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    console.log("Має один корінь:");
    console.log(`x = ${root}`);
    console.log("Тип коренів: один дійсний розв’язок (кратний)");

  } else {
    console.log("Рівняння не має дійсних коренів.");
    console.log("Тип коренів: комплексні (уявні) числа");
  }
  // test mistake
  console.log("Помилка! Цей рядок не має бути в програмі.");
}

function startInteractiveInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function promptCoefficient(name, next) {
    rl.question(`${name}: `, (val) => {
      const parsed = parseFloat(val);
      if (isNaN(parsed)) {
        console.log(`Помилка: очікувалось число, але отримано '${val}'`);
        promptCoefficient(name, next);
      } else {
        next(parsed);
      }
    });
  }

  promptCoefficient("Введіть a", (a) => {
    promptCoefficient("Введіть b", (b) => {
      promptCoefficient("Введіть c", (c) => {
        try {
          displayResult(a, b, c);
        } catch (e) {
          console.error("Помилка:", e.message);
          process.exit(1);
        }
        rl.close();
      });
    });
  });
}

function readFromFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`Файл '${filePath}' не знайдено.`);
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, "utf-8").trim();
  const nums = content.split(" ").map(Number);

  if (nums.length !== 3 || nums.some((n) => isNaN(n))) {
    console.error("Невірний формат файлу. Очікується три числа через пробіл.");
    process.exit(1);
  }

  try {
    displayResult(...nums);
  } catch (err) {
    console.error("Помилка:", err.message);
    process.exit(1);
  }
}

if (process.argv.length > 2) {
  readFromFile(process.argv[2]);
} else {
  startInteractiveInput();
}
