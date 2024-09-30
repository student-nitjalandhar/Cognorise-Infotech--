// Select DOM elements
const displayDays = document.getElementById('days');
const displayHours = document.getElementById('hours');
const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');
const startButton = document.getElementById('start-button');
const dateInput = document.getElementById('date-input');

// Initialize countdown interval
let countdownInterval;

// Function to calculate and update the countdown
function updateCountdown(targetDate) {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        alert("Countdown finished!");
        resetDisplay();
        return;
    }

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update display
    displayDays.textContent = formatTime(days);
    displayHours.textContent = formatTime(hours);
    displayMinutes.textContent = formatTime(minutes);
    displaySeconds.textContent = formatTime(seconds);
}

// Function to format time values with leading zeros
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Function to reset the countdown display
function resetDisplay() {
    displayDays.textContent = '00';
    displayHours.textContent = '00';
    displayMinutes.textContent = '00';
    displaySeconds.textContent = '00';
}

// Event listener for the start button
startButton.addEventListener('click', () => {
    const targetDateValue = dateInput.value;
    if (!targetDateValue) {
        alert("Please select a valid date and time.");
        return;
    }

    const targetDate = new Date(targetDateValue).getTime();
    if (isNaN(targetDate)) {
        alert("Invalid date format.");
        return;
    }

    // Clear any existing countdown
    clearInterval(countdownInterval);

    // Start the countdown
    updateCountdown(targetDate);
    countdownInterval = setInterval(() => updateCountdown(targetDate), 1000);
});
