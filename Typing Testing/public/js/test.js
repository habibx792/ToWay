import { display, wordDataBase, testSataBase } from "./db.js";

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("[data-item]");
  let keydownListener = null;
  let timeHead = document.querySelector("#timeContainer");
  let textArea = document.querySelector("#textDiv");

  function timeRun(myCounter, targetValue) {
    if (myCounter.intervalId) {
      clearInterval(myCounter.intervalId);
    }
    myCounter.intervalId = setInterval(() => {
      myCounter.count++;
      timeHead.innerText = myCounter.count;
      if (myCounter.count >= targetValue) {
        clearInterval(myCounter.intervalId);
        myCounter.intervalId = null;
        alert("complete the mathd");
        localStorage.setItem("finalCount", myCounter.count);
      }
    }, 1000);
  }

  let myCounter = { count: 0, intervalId: null };

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      const clicked = e.currentTarget;
      const value = clicked.dataset.item;

      if (keydownListener) {
        document.removeEventListener("keydown", keydownListener);
        keydownListener = null;
      }

      if (value == 1) {
        // Reset counter when starting
        myCounter.count = 0;
        timeHead.innerText = myCounter.count;
        textArea.innerText = "";

        let random = Math.floor(Math.random() * testSataBase.length);
        let random1 = Math.floor(Math.random() * testSataBase.length);
        // alert(random+" + "+ random1);
        let myText = testSataBase[random1] + " " + testSataBase[random];
        let county = 0;
        let tchar = 0;
        //   reaching at word so that we can ignore the space or brak words
        while (tchar == 0) {
          if (testSataBase[random1] != " ") {
            random1++;
            // alert("test")
            console.log("testing");
          } else {
            // random1++;
            tchar = 1;
          }
        }
        //   alert(testSataBase[random1]);
        // make clean text forn this index;
        let makeCount = 0;
        while (
          random1 != testSataBase.length ||
          random1 != testSataBase.length
        ) {
          if (testSataBase[random1] != " ") {
            myText += testSataBase[random1];
            random1++;
          } else {
            myText += testSataBase[random1];
            makeCount++;
            random1++;
          }
          if (makeCount == 250) {
            break;
          }
        }
        // alert(myText)
        // console.log(myText);
        let count = 0;
        let i = 0;

        while (count < 250 && i < myText.length) {
          let word = "";

          // Build the word until space or end of string
          while (i < myText.length) {
            if (myText[i] == " ") {
              i++;
              break;
            } else {
              word += myText[i];
              i++;
            }
          }
          console.log(word);
          console.log(count);

          let div = document.createElement("div");
          div.innerText = word;
          div.classList.add("border-b-2","border-blue-500");
          textArea.appendChild(div);

          count++;
        }

        const targetValue = parseInt(clicked.innerText);

        keydownListener = (event) => {
          // Start the timer with the target value
          if (!myCounter.intervalId) {
            timeRun(myCounter, targetValue);
          }
        };
        document.addEventListener("keydown", keydownListener);
      } else if (value == 2) {
        myCounter.count = 0;
        timeHead.innerText = myCounter.count;

        const targetValue = parseInt(clicked.innerText);

        keydownListener = (event) => {
          // Start the timer with the target value
          if (!myCounter.intervalId) {
            timeRun(myCounter, targetValue);
          }
        };
        document.addEventListener("keydown", keydownListener);
      } else if (value == 3) {
        myCounter.count = 0;
        timeHead.innerText = myCounter.count;

        const targetValue = parseInt(clicked.innerText);

        keydownListener = (event) => {
          // Start the timer with the target value
          if (!myCounter.intervalId) {
            timeRun(myCounter, targetValue);
          }
        };
        document.addEventListener("keydown", keydownListener);
        alert(value);
      } else if (value == 4) {
        myCounter.count = 0;
        timeHead.innerText = myCounter.count;

        const targetValue = parseInt(clicked.innerText);

        keydownListener = (event) => {
          // Start the timer with the target value
          if (!myCounter.intervalId) {
            timeRun(myCounter, targetValue);
          }
        };
        document.addEventListener("keydown", keydownListener);
        alert(value);
      } else if (value == 5) {
        alert(value);
      } else if (value == 6) {
        alert(value);
      } else if (value == 7) {
        alert(value);
      }
    });
  });
});
