console.log("Ready for the updates");

let num = Math.floor(Math.random() * 100 + 1);
console.log("Generated Number:", num);

let res = document.querySelector(".sub");
let result = document.querySelector(".res");
let limit = 5;
let attempts = 0;

res.addEventListener("click", () => {
    let guess = Number(document.querySelector("#guess").value);

    attempts++;

    if (guess === num) {
        result.innerText = "🎉 Perfect guess!";
        result.style.backgroundColor = "lightgreen";
        res.disabled = true;
        return;
    }

    if (attempts >= limit) {
        result.innerText = `❌ You've used all your attempts!..\n The number is : ${num}`;
        res.disabled = true;
        return;
    }

    if (guess > num) {
        if (guess - num > 15) {
            result.innerText = `📈 Too High!\nLimits left: ${limit - attempts}`;
            result.style.backgroundColor = "lightcoral";
        } else {
            result.innerText = `⚠️ Slightly High!\nLimits left: ${limit - attempts}`;
            result.style.backgroundColor = "coral";
        }
    } else {
        if (num - guess > 15) {
            result.innerText = `📉 Too Low!\nLimits left: ${limit - attempts}`;
            result.style.backgroundColor = "lightblue";
        } else {
            result.innerText = `⚠️ Slightly Low!\nLimits left: ${limit - attempts}`;
            result.style.backgroundColor = "steelblue";
        }
    }
});
