const quotes = [
    "Life is 10% what happens to you and 90% how you react to it. — Charles R. Swindoll",
    "Change your thoughts, and you change your world. — Norman Vincent Peale",
    "All our dreams can come true if we have the courage to pursue them. — Walt Disney",
    "Success is a journey not a destination. — Ben Sweetland",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. — Zig Ziglar",
];

let currentQuoteIndex = 0;

function displayNextQuote() {
    document.getElementById('quote-text').textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

setInterval(displayNextQuote, 2000);

document.getElementById('draw-rainbow').addEventListener('click', () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    const rainbowContainer = document.getElementById('rainbow-container');
    const potOfGold = document.getElementById('pot-of-gold');
    rainbowContainer.innerHTML = '';
    colors.forEach((color, index) => {
        setTimeout(() => {
            const newParagraph = document.createElement('p');
            newParagraph.style.backgroundColor = color;
            rainbowContainer.appendChild(newParagraph);
            newParagraph.style.display = 'block'; 
            if (index === colors.length - 1) {
                setTimeout(() => {
                    potOfGold.style.display = 'block'; 
                }, 1000);
            }
        }, index * 1000); 
    });
});
