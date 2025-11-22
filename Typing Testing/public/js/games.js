document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById('container');
    cardsContainer.addEventListener('click', (e) => {
        const card = e.target.closest('a[data-item]');
        if (!card) return;
        e.preventDefault();
        const gameId = card.dataset.item;
        alert(gameId);
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
            let ch = 'A';
            for (let i = 0; i < 26; i++) {
                const bubble = document.createElement("div");
                const color = colors[Math.floor(Math.random() * colors.length)];
                const x = Math.floor(Math.random() * (containerWidth - 60));
                const y = Math.floor(Math.random() * (containerHeight - 60));
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
                if(ch=='Z')
                {
                    ch='A';
                }

                mainContainer.appendChild(bubble);
            }
            document.addEventListener("keydown", (event) => {
                const mainContainer = document.querySelector("#mainContainder");
                const bubbleArray = mainContainer.querySelectorAll("div");
                const keyPressed = event.key.toUpperCase();
                for (let i = 0; i < bubbleArray.length; i++) {
                    const bubble = bubbleArray[i];
                    if (bubble.innerText === keyPressed) {
                        bubble.style.display = 'none';
                        break;
                    }
                }
            });

        }
    }
});

