import { display } from './db.js';

document.addEventListener("DOMContentLoaded", () => {
    const mainTextArea = document.querySelector("#mainTextArea");
    const TypeLetter = document.querySelector("#TypeLetter");

    mainTextArea.innerHTML = '';

    // Get random text
    const obj = display();
    let index = Math.floor(Math.random() * obj.length);
    let str = obj[index].data;

    // Create spans for each character
    for (let i = 0; i < str.length; i++) {
        const span = document.createElement("span");
        span.classList.add(
            "border", "border-gray-300", "rounded-md",
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

    // Highlight first character
    if (spanArr.length > 0) {
        spanArr[currentIndex].classList.add("bg-yellow-200");
    }

    const nonTypingKeys = [
        "Control", "Alt", "Meta", "Enter",
        "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight",
        "Escape", "Shift", "CapsLock", "Tab"
    ];

    document.addEventListener("keydown", (event) => {
        const key = event.key;

        if (nonTypingKeys.includes(key)) return;
        event.preventDefault();
        const currentSpan = spanArr[currentIndex];

        if (key === "Backspace") {
            if (currentIndex === 0) return;
            currentSpan.classList.remove("bg-yellow-700");
            currentIndex--;
            const prevSpan = spanArr[currentIndex];

            prevSpan.classList.remove("bg-green-600", "bg-red-600", "text-white", "bg-yellow-200");
            prevSpan.classList.add(prevSpan.innerText === " " ? "bg-yellow-500" : "bg-white");

            prevSpan.classList.add("bg-yellow-200");
            prevSpan.scrollIntoView({ behavior: "smooth", block: "center" });
            return;
        }
        currentSpan.classList.remove("bg-yellow-200");

        if (key === currentSpan.innerText) {
            currentSpan.classList.remove("bg-white", "bg-red-600", "bg-yellow-500");
            currentSpan.classList.add("bg-green-600", "text-white");
            TypeLetter.classList.remove("text-red-700");
            TypeLetter.classList.add("text-blue-800");

            TypeLetter.innerText=key;
            currentIndex++;
        } else {
            currentSpan.classList.remove("bg-white", "bg-green-600", "bg-yellow-500");
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
            const ResultDIve = document.getElementById("ResultDIve");
            TypeLetter.innerText = "Congraturtions";
            ResultDIve.classList.remove("hidden");
            ResultDIve.classList.add(
                "top-1/2",
                "left-1/2",
                "-translate-x-1/2",
                "-translate-y-[30%]"
            );
        }
    });

});
