let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const input = document.getElementById("guessInput");
    const result = document.getElementById("result");
    const guess = Number(input.value);

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        result.textContent = "1부터 100 사이의 숫자를 입력해 주세요.";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        result.innerHTML = `정답입니다! <br>시도 횟수: ${attempts}번`;
    } else if (guess < randomNumber) {
        result.textContent = "너무 낮습니다!"
    } else if (guess > randomNumber) {
        result.textContent = "너무 높습니다!"
    }

    input.value = "";
    input.focus();
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("result").textContent = "";
    document.getElementById("guessInput").value = "";
}