const nouns1 = ["dog", "cat", "elephant", "giraffe", "zebra"];
const verbs = ["jumps", "runs", "flies", "swims", "walks"];
const adjectives = ["quick", "lazy", "happy", "sad", "angry"];
const nouns2 = ["fence", "river", "house", "car", "tree"];
const places = ["in the park", "on the moon", "under the sea", "in the forest", "in the city"];

let textToSpeak = "";

document.getElementById('noun1').addEventListener('click', () => {
    let word = getRandomWord(nouns1);
    textToSpeak += word + " ";
    speakNow(word);
    updateStoryOutput();
});

document.getElementById('verb').addEventListener('click', () => {
    let word = getRandomWord(verbs);
    textToSpeak += word + " ";
    speakNow(word);
    updateStoryOutput();
});

document.getElementById('adjective').addEventListener('click', () => {
    let word = getRandomWord(adjectives);
    textToSpeak += word + " ";
    speakNow(word);
    updateStoryOutput();
});

document.getElementById('noun2').addEventListener('click', () => {
    let word = getRandomWord(nouns2);
    textToSpeak += word + " ";
    speakNow(word);
    updateStoryOutput();
});

document.getElementById('place').addEventListener('click', () => {
    let word = getRandomWord(places);
    textToSpeak += word + " ";
    speakNow(word);
    updateStoryOutput();
});

document.getElementById('speak').addEventListener('click', () => {
    speakNow(textToSpeak);
});

document.getElementById('generate').addEventListener('click', () => {
    textToSpeak = getRandomWord(nouns1) + " " + getRandomWord(verbs) + " " + getRandomWord(adjectives) + " " + getRandomWord(nouns2) + " " + getRandomWord(places);
    updateStoryOutput();
    speakNow(textToSpeak);
});

document.getElementById('reset').addEventListener('click', () => {
    textToSpeak = "";
    updateStoryOutput();
});

function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function updateStoryOutput() {
    document.getElementById('storyOutput').innerText = textToSpeak;
}

function speakNow(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onstart = () => console.log('Speech started');
        utterance.onend = () => console.log('Speech ended');
        utterance.onerror = (event) => console.error('Speech error', event);
        window.speechSynthesis.speak(utterance);
    } else {
        console.error('Speech Synthesis not supported in this browser.');
    }
}
