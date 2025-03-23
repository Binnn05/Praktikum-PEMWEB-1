// email.js

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const validateButton = document.getElementById("validate-btn");
    const messageDisplay = document.getElementById("message");

    function validateForm() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let message = "";

        if (nameInput.value.length <= 3) {
            message = "Name must be more than 3 characters";
        } else if (!emailRegex.test(emailInput.value)) {
            message = "Invalid email";
        } else if (passwordInput.value.length < 8) {
            message = "Password must be at least 8 characters";
        } else {
            message = "Valid Form!";
        }

        messageDisplay.innerText = message;
        messageDisplay.style.color = message === "Valid Form!" ? "green" : "red";
    }

    validateButton.addEventListener("click", validateForm);
});
