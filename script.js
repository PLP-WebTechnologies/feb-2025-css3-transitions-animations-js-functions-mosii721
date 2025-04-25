// Get DOM elements
const triggerBtn = document.getElementById('triggerBtn');
const animatedBox = document.getElementById('animatedBox');
const colorSelect = document.getElementById('colorSelect');
const currentColorSpan = document.getElementById('currentColor');

// Function to save user preference to localStorage
function savePreference(key, value) {
    localStorage.setItem(key, value);
}

// Function to retrieve user preference from localStorage
function getPreference(key, defaultValue) {
    return localStorage.getItem(key) || defaultValue;
}

// Function to apply saved color and update UI
function applySavedColor() {
    const savedColor = getPreference('boxColor', '#28a745');
    animatedBox.style.backgroundColor = savedColor;
    colorSelect.value = savedColor;
    currentColorSpan.textContent = colorSelect.options[colorSelect.selectedIndex].text;
}

// Function to trigger CSS animation
function triggerAnimation() {
    animatedBox.classList.remove('pulse');
    // Force reflow to restart animation
    void animatedBox.offsetWidth;
    animatedBox.classList.add('pulse');
}

// Load saved preferences on page load
document.addEventListener('DOMContentLoaded', () => {
    applySavedColor();
});

// Event listener for button click to trigger animation
triggerBtn.addEventListener('click', () => {
    triggerAnimation();
});

// Event listener for color selection change
colorSelect.addEventListener('change', (e) => {
    const newColor = e.target.value;
    animatedBox.style.backgroundColor = newColor;
    currentColorSpan.textContent = e.target.options[e.target.selectedIndex].text;
    savePreference('boxColor', newColor);
    triggerAnimation();
});