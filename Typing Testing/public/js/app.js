import { GeneralPractise, display } from './db.js';
document.addEventListener("DOMContentLoaded",()=>{
    const mainTextArea = document.querySelector("#mainTextArea");
    const obj = display();
    let index=Math.floor(Math.random()*obj.length);
    let str=obj[index].data;
    for (let i = 0; i < str.length; i++) {
        const span = document.createElement("span");

        // Base classes for all characters
        span.classList.add(
            "border",
            "border-gray-300",
            "rounded-md",
            "inline-block",
            "px-2",
            "py-1",
            "m-0.5",
            "text-lg",
            "font-bold",
            "font-medium",
            "transition-colors",
            "duration-200"
        );

        // Different style for space characters
        if (str[i] === " ") {
            span.classList.add(
                "bg-yellow-600",
                "w-3"
            );
        } else {
            span.classList.add(
                "bg-white",
                "hover:bg-blue-600",
                "cursor-pointer"
            );
        }

        span.innerText = str[i]; // set the character
        mainTextArea.appendChild(span);
    }
    document.addEventListener("keydown", (event) => {
        const nonTypingKeys = [
            "Shift", "Control", "Alt", "Meta", "CapsLock",
            "Tab", "Enter", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Escape"
        ];

        if (!nonTypingKeys.includes(event.key)) {
           for(let i=0;i<str.length;i++)
           {
            if(event.key==str[i])
            {
                alert("Test pass");

            }
           }
        }
        else{
            alert("done");
        }
    });
})
