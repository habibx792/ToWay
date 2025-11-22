document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById('container');
    cardsContainer.addEventListener('click', (e) => {
        const card = e.target.closest('a[data-item]');
        if (!card) return;
        e.preventDefault();
        const gameId = card.dataset.item;
        startGame(gameId);
    });
    function loadSpans() {

    }
    function startGame(id) {
        if (id == 1) {
            const mainContainer = document.getElementById("mainContainder");
            mainContainer.innerHTML = ""; // clear previous bubbles

            const containerHeight = mainContainer.offsetHeight;
            const containerWidth = mainContainer.offsetWidth;
            const colors = ["red", "green", "gray", "indigo", "amber", ];
            let ch = 'a';
            // let x = 10
            // let y = 10
            let time = [1000, 2000, 3000, 4000, 5000, 6000];

            for (let i = 0; i < 52; i++) {
                const bubble = document.createElement("div");
                const color = colors[Math.floor(Math.random() * colors.length)];
                const x = Math.floor(Math.random() * (containerWidth - 60));
                const y = Math.floor(Math.random() * (containerHeight - 60));
                bubble.classList.add(
                    "animate-ping",
                    "duration-700",
                    "opacity-0"
                );

                setTimeout(() => {
                    bubble.classList.remove("animate-ping", "opacity-0");
                    bubble.classList.add("opacity-100", "animate-pulse");
                }, 700);

                bubble.style.position = 'absolute';
                bubble.style.left = x + 'px';
                bubble.style.top = y + 'px';
                bubble.style.width = '60px';
                bubble.style.height = '60px';
                bubble.style.borderRadius = '50%';
                bubble.style.display = 'flex';
                bubble.style.justifyContent = 'center';
                bubble.style.alignItems = 'center';
                bubble.style.backgroundColor = color;
                bubble.style.color = 'white';
                bubble.style.fontSize = '24px';
                bubble.style.fontWeight = 'bold';
                bubble.style.userSelect = 'none';
                bubble.style.cursor = 'pointer';
                bubble.innerText = ch;
                ch = String.fromCharCode(ch.charCodeAt(0) + 1);
          ;
                if(ch=='z'||ch=='Z')
                {
                    if('z')
                    {
                        ch = 'A';
                    }
                    else{
                        ch='a'
                    }

                }
                let timeIndex=Math.floor(Math.random()*time.length);
                setTimeout(() => {
                    mainContainer.appendChild(bubble);
                }, time[timeIndex]+=500);



            }
            let correctLetterTyped=0;
            let wrongLetterTyped=0;

            let TotaltTypeTyped =0;
            let gameOver=false;
            document.addEventListener("keydown", (event) => {
                if (gameOver) {
                    event.preventDefault();
                    return;
                }

                const mainContainer = document.querySelector("#mainContainder");
                const bubbleArray = mainContainer.querySelectorAll("div");
                const keyPressed = event.key;
                for (let i = 0; i < bubbleArray.length; i++) {
                    const bubble = bubbleArray[i];
                    if (bubble.innerText === keyPressed) {
                        const drift = Math.random() < 0.5 ? -1 : 1;
                        bubble.style.setProperty("--drift", drift);
                        TotaltTypeTyped++;
                        correctLetter++;

                        bubble.classList.add(
                            "transition-all",
                            "duration-[5000ms]",
                            "ease-in-out",
                            "-translate-y-[1500px]",
                            "translate-x-[calc(120px_*_var(--drift))]",


                            "rotate-[1440deg]",
                            "scale-[0.4]",


                            "opacity-0",
                            "blur-md"
                        );




                        bubble.classList.add("bg-green-700");
                        setTimeout(() => {
                            bubble.style.display = 'none';
                        }, 2000);

                        break;
                    }
                    else{
                        //
                    }
                }
                TotaltTypeTyped++;
                wrongLetterTyped++;

                if (TotaltTypeTyped >= 100) {
                    gameOver=true;
                    // event.preventDefault();
                    const ResultDiv = document.querySelector("#ResultDIve");
                    const bubbleArray = document.querySelectorAll("#mainContainder div");
                    const wpmSPeed = document.querySelector("#wpmSPeed");
                    // const wpm = document.getElementById("wpmSPeed");
                    const rawSpeed = document.getElementById("rawSpeed");
                    const Accuracy = document.getElementById("Accuracy");
                    const correctLetter = document.getElementById("correctLetter");
                    const wrongLetter = document.getElementById("wrongLetter");
                    // wpmSPeed.innerText=;
                    ResultDIve.classList.add(
                        "top-1/2",
                        "left-1/2",
                        "-translate-x-1/2",
                        "-translate-y-[30%]"
                    );
                    wrongLetter.innerText = wrongLetterTyped;
                    correctLetter.innerText = correctLetterTyped;
                    Accuracy.innerText = Math.floor((correctLetterTyped /TotaltTypeTyped) * 100);
                    let wpmSp = (TotaltTypeTyped / 5) / mintues;
                    wpmSp = Math.floor(wpmSp);
                    let rawSp = wpmSp - wrongLetterTyped;
                    rawSpeed.innerText = rawSp;
                    wpm.innerText = wpmSp;
                    Accuracy.innerText += "%";
                    setTimeout(() => {
                        const ResultDIve = document.getElementById("ResultDIve");
                        ResultDIve.remove("top-1/2",
                            "left-1/2",
                            "-translate-x-1/2",
                            "-translate-y-[30%]")
                        ResultDIve.classList.add("hidden");
                        location.reload();
                    }, 5000);


                    bubbleArray.forEach((bubble) => {
                        bubble.style.display = "none";
                    });
                    ResultDiv.classList.remove("hidden");
                    ResultDiv.classList.add("block");
                }
            });

        }
    }
});

