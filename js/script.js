const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector("input"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word"),
  messageElement = document.getElementById("message"),
  scoreText = document.querySelector(".score b"),
  wordClassElement = document.querySelector(".word-class");

let score = 0;
let streak = 0;
let correctWord, timer;
const scoreWords = [
  "Amazing", "Wonderful", "Wordlicious", "Incredible", "Fantastic",
  "Superb", "Outstanding", "Excellent", "Impressive", "Spectacular"
];

// Initialize game with dynamic timer based on word difficulty
const initTimer = () => {
  clearInterval(timer);
  const timeMap = { common: 20, rare: 25, exclusive: 30, legendary: 35 };
  const wordClass = wordClassElement.innerText.toLowerCase();
  let maxTime = timeMap[wordClass] || 30;

  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      timeText.innerText = maxTime;
    } else {
      clearInterval(timer);
      messageElement.innerHTML = `Time off! <span style="color: #39A7FF;">${correctWord.toUpperCase()}</span> was correct`;
      inputField.style.display = "none";
      setTimeout(() => {
        initGame();
        inputField.style.display = "block";
      }, 1500);
    }
  }, 1000);
};

// Classify words by difficulty (predefined in words.js or auto-generated)
const getWordClass = (wordObj) => {
  if (wordObj.difficulty) return wordObj.difficulty; // Use predefined if available

  const word = wordObj.word.toLowerCase();
  const wordLength = word.length;
  const repeatingChars = /([a-zA-Z]).*?\1/.test(word);

  if (wordLength <= 4 || repeatingChars) return "common";
  else if (wordLength <= 6) return "rare";
  else if (wordLength <= 8) return "exclusive";
  else return "legendary";
};

// Set visual style for word class
const setWordClassStyle = (wordClass) => {
  const colors = {
    common: { color: "black", bg: "lightblue" },
    rare: { color: "white", bg: "red" },
    exclusive: { color: "black", bg: "gold" },
    legendary: { color: "white", bg: "purple" }
  };
  wordClassElement.style.color = colors[wordClass].color;
  wordClassElement.style.backgroundColor = colors[wordClass].bg;
};

// Initialize game
const initGame = () => {
  const randomObj = words[Math.floor(Math.random() * words.length)];
  const wordArray = randomObj.word.split("");

  // Shuffle word
  for (let i = wordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }

  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
  inputField.className = "";
  inputField.focus();

  // Set word class and style
  const wordClass = getWordClass(randomObj);
  wordClassElement.innerText = wordClass;
  setWordClassStyle(wordClass);

  messageElement.textContent = "";
  initTimer();
};

// Update score with animations and streak bonuses
const updateScore = (timeLeft) => {
  const baseScore = 10;
  let bonus = 0;

  // Time bonus
  if (timeLeft > 25) bonus += 10;
  else if (timeLeft > 20) bonus += 7;
  else if (timeLeft > 15) bonus += 5;

  // Streak bonus
  streak++;
  if (streak >= 3) bonus += 5;

  // Word class bonus
  const wordClass = wordClassElement.innerText.toLowerCase();
  if (wordClass === "legendary") bonus += 15;
  else if (wordClass === "exclusive") bonus += 10;

  score += baseScore + bonus;
  scoreText.innerText = score;

  // Flash score update
  scoreText.classList.add("score-update");
  setTimeout(() => scoreText.classList.remove("score-update"), 500);
};

// Show celebratory word on score update
const showScoreWord = () => {
  const labelElement = document.getElementById("scoreLabel");
  const scoreValueElement = document.getElementById("scoreValue");
  const displayWord = scoreWords[Math.floor(Math.random() * scoreWords.length)];

  scoreValueElement.innerHTML = `<span class="celebrate-word">${displayWord}</span>`;
  labelElement.style.display = "none";

  setTimeout(() => {
    scoreValueElement.innerHTML = score;
    labelElement.style.display = "inline";
  }, 1100);
};

// Check user's word
window.checkWord = () => {
  const userWord = inputField.value.toLowerCase().trim();

  if (!userWord) {
    messageElement.textContent = "Please enter a word!";
    inputField.classList.add("flash");
    setTimeout(() => {
      inputField.classList.remove("flash");
      messageElement.textContent = "";
    }, 2000);
    return;
  }

  if (userWord !== correctWord) {
    streak = 0;
    inputField.classList.add("incorrect");
    wordText.classList.add("shake");
    messageElement.textContent = "Oops! Try again.";
    setTimeout(() => {
      inputField.classList.remove("incorrect");
      wordText.classList.remove("shake");
    }, 500);
    return;
  }

  // Correct answer
  const timeLeft = parseInt(timeText.innerText);
  clearInterval(timer);
  inputField.classList.add("correct");
  messageElement.innerHTML = `🎉 <span style="color: #39A7FF;">${correctWord.toUpperCase()}</span> is correct!`;

  updateScore(timeLeft);
  showScoreWord();

  setTimeout(() => {
    initGame();
    inputField.classList.remove("correct");
  }, 2000);
};

// Event listeners
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
inputField.addEventListener("keyup", (e) => {
  if (e.key === "Enter") checkWord();
});

// Live input validation (optional)
inputField.addEventListener("input", () => {
  const userWord = inputField.value.toLowerCase();
  inputField.classList.remove("partial-correct");
  if (correctWord.startsWith(userWord) && userWord.length > 0) {
    inputField.classList.add("partial-correct");
  }
});

// Initialize first game
initGame();
