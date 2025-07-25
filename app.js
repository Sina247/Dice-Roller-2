const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let rollCount = 0;
const history = [];

function rollDice() {
  const rand1 = Math.floor(Math.random() * 6);
  const rand2 = Math.floor(Math.random() * 6);

  document.getElementById("dice1").textContent = diceFaces[rand1];
  document.getElementById("dice2").textContent = diceFaces[rand2];

  const sum = rand1 + rand2 + 2;
  rollCount++;

  document.getElementById("sum").textContent = `Sum: ${sum}`;
  document.getElementById("count").textContent = `Roll Count: ${rollCount}`;

  history.unshift(`🎲 ${diceFaces[rand1]} + ${diceFaces[rand2]} = ${sum}`);
  if (history.length > 5) history.pop();

  const historyList = document.getElementById("history");
  historyList.innerHTML = "";
  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}
