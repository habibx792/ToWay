document.addEventListener("DOMContentLoaded", () => {
    const inputWord = document.querySelector("#inputWord");
    const btnSearch = document.querySelector("#btnSearch");
    const textData = document.querySelector("#textData");

    async function getData(word) {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Word not found");
            }

            const data = await response.json();

            // extract the useful stuff
            const wordName = data[0].word;
            const part = data[0].meanings[0].partOfSpeech;
            const phonetic = data[0].phonetic || "No phonetic available";
            const meaning = data[0].meanings[0].definitions[0].definition;

            // feed into your 4 boxes
            const values = [wordName, part, phonetic, meaning];
            const boxes = textData.querySelectorAll("div");

            boxes.forEach((box, index) => {
                const h1 = box.querySelector("h1");
                h1.textContent = values[index];
            });

        } catch (err) {
            alert(err.message);
        }
    }

   
    inputWord.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const word = inputWord.value.trim();
            if (word !== "") {
                getData(word);
            } else {
                alert("Please enter a word");
            }
        }
    });

    // Button click search
    btnSearch.addEventListener("click", () => {
        const word = inputWord.value.trim();
        if (word !== "") {
            getData(word);
        } else {
            alert("Please enter a word");
        }
    });
});
