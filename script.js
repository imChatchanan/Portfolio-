const text = document.querySelector(".typing-text span");

if (text) {

const words = [
    "Student",
    "Web Developer",
    "Programmer",
    "AI Developer"
];

let i = 0;

setInterval(() => {
    text.textContent = words[i];
    i = (i + 1) % words.length;
}, 2000);

}