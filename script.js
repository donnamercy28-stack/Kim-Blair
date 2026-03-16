// Get references to the HTML elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const letterContainer = document.getElementById('letterContainer');
const thankYouScreen = document.getElementById('thankYouScreen');

// --- State Tracking ---
let noButtonVanished = false; // To know if they already tried clicking No

// --- FUNCTION: The magic that happens when 'YES' is clicked ---
function handleYesClick() {
    // 1. Launch Confetti (Using the canvas-confetti library loaded in index.html)
    confetti({
        particleCount: 200, // Lots of confetti!
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ffb6c1', '#ff6b81', '#ffffff'] // Pink, Dark Pink, White
    });

    // 2. Fade out the original letter
    letterContainer.style.opacity = '0';
    
    // 3. After the fade-out, reveal the Thank You screen
    // The timeout (1000ms) must match the CSS transition duration
    setTimeout(() => {
        letterContainer.style.display = 'none'; // Completely hide the letter
        thankYouScreen.classList.add('visible'); // Fade in the thank-you message
    }, 1000);
}


// --- EVENT LISTENERS ---

// When 'YES' is clicked
yesBtn.addEventListener('click', handleYesClick);

// When 'NO' is clicked
noBtn.addEventListener('click', () => {
    if (!noButtonVanished) {
        // --- The user clicked 'NO' for the first time ---

        // 1. Completely hide the 'NO' button
        noBtn.style.display = 'none';

        // 2. Transform the 'YES' button as requested
        // change text, make bigger, change font size/style
        yesBtn.innerHTML = "DO IT FOR YOUR LITTLE SISTER! 🎀🥺";
        yesBtn.style.padding = "20px 40px"; // Make it bigger
        yesBtn.style.fontSize = "22px";
        yesBtn.style.fontWeight = "900"; // Extra bold
        yesBtn.style.backgroundColor = "#ff6b81"; // Darker pink for urgency!

        // 3. Optional: add some padding to the button container to center the single big button
        document.querySelector('.button-group').style.paddingLeft = '0';

        noButtonVanished = true; // Mark that this interaction happened
    } 
    // If they were to somehow click 'NO' again (e.g. if it didn't hide correctly), 
    // it wouldn't do anything else.
});
