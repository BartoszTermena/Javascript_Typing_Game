window.addEventListener('load', init);



//Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}
const currentLevel = levels.easy;

//Globals
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//Words
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

//Initialize Game	
function init() {
    showWord(words);

    wordInput.addEventListener('input', startMatch);
    
    setInterval(countdown, 1000);

    setInterval(checkStatus, 50)
}

function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!';
        return true;
    } else {
        return false;
    }
}

function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }   
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
    
}

function countdown() {
    if(time > 0) {
        time--;
    } else if(time === 0) {
        //Game over
        isPlaying = false;
    } 
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over :( To start from start, enter the given text';
        score = -1;
    }
}

