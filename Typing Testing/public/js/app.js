import { display } from './db.js';
document.addEventListener("DOMContentLoaded", () => {
    const mainTextArea = document.querySelector("#mainTextArea");
    const TypeLetter = document.querySelector("#TypeLetter");
    const timeText = document.querySelector("#timeText");
    mainTextArea.innerHTML = '';
    const obj = display();
    let index = Math.floor(Math.random() * obj.length);
    let str = obj[index].data;


    for (let i = 0; i < str.length; i++) {
        const span = document.createElement("span");
        // "rounded-md"  "border", "border-gray-300", ,
        span.classList.add(
            "inline-block", "px-2", "py-1", "m-0.5",
            "text-lg", "font-bold", "transition-colors", "duration-200"
        );

        if (str[i] === " ") {
            span.classList.add("bg-yellow-500", "w-3", "space-char"); // visually highlight spaces
            span.innerText = '.';
        } else {
            span.classList.add("bg-white", "hover:bg-blue-100", "cursor-pointer");
            span.innerText = str[i];
        }
        mainTextArea.appendChild(span);
    }
    const spanArr = mainTextArea.querySelectorAll("span");
    let currentIndex = 0;
    if (spanArr.length > 0) {
        spanArr[currentIndex].classList.add("bg-yellow-200");
    }
    const nonTypingKeys = [
        "Control", "Alt", "Meta", "Enter",
        "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight",
        "Escape", "Shift", "CapsLock", "Tab"
    ];
let correctLetterTyped=0;
    let wrongLetterTyped =0;
let TotaltType=0;
    let timerStarted = false;
    let intervalId = null;
    let time = 0;
    document.addEventListener("keydown", (event) => {
        const key = event.key;
        if (!timerStarted) {
            timerStarted = true;
            intervalId = setInterval(() => {
                time++;
                timeText.innerText = time;
            }, 1000);
        }
        if (nonTypingKeys.includes(key)) return;
        event.preventDefault();
        const currentSpan = spanArr[currentIndex];
        if (key === "Backspace") {
            if (currentIndex === 0) return;
            currentSpan.classList.remove("bg-yellow-700");
            currentIndex--;
            const prevSpan = spanArr[currentIndex];
            TotaltType++;
            prevSpan.classList.remove("bg-green-600", "bg-red-600", "text-white", "bg-yellow-200");
            prevSpan.classList.add(prevSpan.innerText === " " ? "bg-yellow-500" : "bg-white");
            prevSpan.classList.add("bg-yellow-200");
            prevSpan.scrollIntoView({ behavior: "smooth", block: "center" });
            return;
        }
        currentSpan.classList.remove("bg-yellow-200");
        if (key === currentSpan.innerText) {
            TotaltType++;
            correctLetterTyped++;
            currentSpan.classList.remove("bg-white", "bg-red-600", "bg-yellow-500");
            currentSpan.classList.add("bg-green-600", "text-white");
            TypeLetter.classList.remove("text-red-700");
            TypeLetter.classList.add("text-blue-800");
            TypeLetter.innerText = key;
            currentIndex++;
        } else {
            currentSpan.classList.remove("bg-white", "bg-green-600", "bg-yellow-500");
            TotaltType++;
            wrongLetterTyped++;
            currentSpan.classList.add("bg-red-600", "text-white");
            TypeLetter.innerText = key;
            TypeLetter.classList.remove("text-blue-800");
            TypeLetter.classList.add("text-red-700");
        }
        if (currentIndex < spanArr.length) {
            // spanArr[currentIndex].classList.add("bg-yellow-700");
        }
        currentSpan.scrollIntoView({ behavior: "smooth", block: "center" });
        if (currentIndex >= str.length) {
            clearInterval(intervalId);
            const ResultDIve = document.getElementById("ResultDIve");
            const wpm = document.getElementById("wpmSPeed");
            const rawSpeed = document.getElementById("rawSpeed");
            const Accuracy = document.getElementById("Accuracy");
            const correctLetter = document.getElementById("correctLetter");
            const wrongLetter = document.getElementById("wrongLetter");
            const Time = document.getElementById("Time");
            TypeLetter.innerText = "Congraturtions";
            ResultDIve.classList.remove("hidden");
            ResultDIve.classList.add(
                "top-1/2",
                "left-1/2",
                "-translate-x-1/2",
                "-translate-y-[30%]"
            );
            wrongLetter.innerText=wrongLetterTyped;
            correctLetter.innerText=correctLetterTyped;
            Accuracy.innerText=Math.floor((correctLetterTyped/TotaltType)*100);
            let mintues=time/60;
            Time.innerText=time;
            Time.innerText+=" sec";
            let wpmSp=(TotaltType/5)/mintues;
            wpmSp=Math.floor(wpmSp);
            let rawSp=wpmSp-wrongLetterTyped;
            rawSpeed.innerText=rawSp;
            wpm.innerText=wpmSp;
            Accuracy.innerText+="%";
            setTimeout(() => {
              const  ResultDIve = document.getElementById("ResultDIve");
                ResultDIve.remove("top-1/2",
                    "left-1/2",
                    "-translate-x-1/2",
                    "-translate-y-[30%]")
                ResultDIve.classList.add("hidden");
                location.reload();
            }, 5000);
        }
    });
});
