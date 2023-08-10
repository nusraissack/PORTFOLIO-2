let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
       let span = document.createElement("span");
       span.textContent = letter;
       span.className = "letter";
       word.append(span);
    });
});

let curentWordIndex = 0;
let maxWordIndex = "1";
words[curentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let
}