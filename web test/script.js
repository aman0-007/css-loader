window.onload = function () {
    const texts = ['Loading...', 'Please wait...']; // Texts to cycle through
    let currentIndex = 0;

    function cycleText() {
        animateText(texts[currentIndex]);
        currentIndex = (currentIndex + 1) % texts.length; // Cycle to the next text
    }

    cycleText(); // Start with the first text
    setInterval(cycleText, 4000); // Change text every 4 seconds
};

// Function to animate text
function animateText(text) {
    const container = document.querySelector('#text-container');
    container.innerHTML = ''; // Clear previous text

    // Calculate total width of all letters for proper alignment
    const letterSpacing = 5; // Reduced spacing between letters
    const letterWidth = 40; // Approximate width of each letter
    const totalWidth = text.length * (letterWidth + letterSpacing);
    const startX = -(totalWidth / 2); // Center the letters horizontally

    // Create and animate each letter
    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.classList.add('letter');
        span.textContent = letter;
        container.appendChild(span);

        // Random start positions across the entire screen
        const randomX = Math.random() * window.innerWidth; // Full screen width
        const randomY = Math.random() * window.innerHeight; // Full screen height

        // Final positions
        const finalX = startX + index * (letterWidth + letterSpacing);
        const finalY = 0;

        // Apply styles dynamically
        span.style.setProperty('--random-x', `${randomX}px`);
        span.style.setProperty('--random-y', `${randomY}px`);
        span.style.setProperty('--final-x', `${finalX}px`);
        span.style.setProperty('--final-y', `${finalY}px`);
        span.style.animationDelay = `${index * 0.2}s`; // Stagger animation for each letter
    });
}
