// DOM elements
const passwordScreen = document.getElementById("password-screen");
const cardScreen = document.getElementById("card-screen");
const passwordInput = document.getElementById("password-input");
const submitPassword = document.getElementById("submit-password");
const errorMessage = document.getElementById("error-message");

// Set the correct password (without leading zero)
const CORRECT_PASSWORD = 6112004;

// Event Listener for Password Submission
submitPassword.addEventListener("click", () => {
    const enteredPassword = parseInt(passwordInput.value, 10);  // Parse password input as an integer

    if (enteredPassword === CORRECT_PASSWORD) {
        // If password is correct, navigate to flower.html
        window.location.href = "flower.html";
    } else {
        // Display error message if the password is incorrect
        errorMessage.textContent = "Có chừng đấy cũng không nhập được =((((";
    }
});

// Optional: Clear the error message when typing a new password
passwordInput.addEventListener("input", () => {
    errorMessage.textContent = "";  // Clear error message on new input
});

// Show Birthday Card (Button logic in flower.html)
// Check if show-card button exists (only available on flower.html)
const showCardButton = document.getElementById("show-card");
if (showCardButton) {
    showCardButton.addEventListener("click", () => {
        // Ensure flowerScreen and cardScreen are defined before using
        const flowerScreen = document.getElementById("flower-screen");
        if (flowerScreen && cardScreen) {
            flowerScreen.classList.add("hidden");   // Hide flower screen
            cardScreen.classList.remove("hidden");  // Show card screen
        }
    });
}
