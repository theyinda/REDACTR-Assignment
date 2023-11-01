
const mainTextEl = document.querySelector("#mainText");
const redactWordsEl = document.querySelector("#scrambleWords");
const redactCharacterEl = document.querySelector("#redactCharacter");
const redactButtonEl = document.querySelector("#redactButton");
const resultContainerEl = document.querySelector("#resultContainer");


const redactFunction = () => {

    //Start time
    const startTime = new Date().getTime();

    const mainText = mainTextEl.value;
    const scrambledText = redactWordsEl.value;
    const wordType = redactCharacterEl.value;

    const mainWords = mainText.toLowerCase().split(' ');
    const redactedWords = scrambledText.toLowerCase().split(' ');


      // Calculate the Stats
      const wordsScanned = mainWords.length;
      const matchedWords = mainWords.filter(word => redactedWords.includes(word)).length;


    const redactedText = mainWords.map(word =>
        redactedWords.includes(word) ? wordType : word
    ).join(' ');

    if (redactedText.includes(wordType)) {
        console.log(redactedText);
    } else {
        console.log('Text not found in mainText.');
    }
    // Display the Redacted Text and Stats
    resultContainerEl.innerHTML = `
        <p>Redacted Text: ${redactedText}</p>
        <p>Words Scanned: ${wordsScanned}</p>
        <p>Matched Words: ${matchedWords}</p>
        <p>Time Taken: ${(new Date().getTime() - startTime) / 1000} seconds</p>
      
    `;
}

// Listen for button click and call scrambledFunction
redactButtonEl.addEventListener("click", redactFunction);
