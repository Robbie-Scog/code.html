//Flower need
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
// Password Check Logic
const passwordScreen = document.getElementById("password-screen");
const cardScreen = document.getElementById("card-screen");
const passwordInput = document.getElementById("password-input");
const submitPassword = document.getElementById("submit-password");
const errorMessage = document.getElementById("error-message");

// Set the correct password
const CORRECT_PASSWORD = 6112004;  // Example password: 06112004 (without leading zero)

// Event Listener for Password Submission
submitPassword.addEventListener("click", () => {
    const enteredPassword = parseInt(passwordInput.value, 10);

    if (enteredPassword === CORRECT_PASSWORD) {
        // If password is correct, show the flower screen
        passwordScreen.classList.add("hidden");
        window.location.href = "flower.html";
    } else {
        // Display error message if the password is incorrect
        errorMessage.textContent = "Incorrect Password. Try again!";
    }
});

// Show Birthday Card on Button Click
const showCardButton = document.getElementById("show-card");

showCardButton.addEventListener("click", () => {
    flowerScreen.classList.add("hidden");
    cardScreen.classList.remove("hidden");
});