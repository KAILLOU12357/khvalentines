const messages = [
    "wow jas i see what it is",
    "OI OI OI",
    "please 宝宝",
    "WHO PRESS THAT!?",
    "生气了",
    "PMO",
    "I gonna crash out:(",
    "old bf out...",
    "JK wow u press it>:(",
    "宝宝:("
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.你敢？-button');
    const yesButton = document.querySelector('.愿意-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}