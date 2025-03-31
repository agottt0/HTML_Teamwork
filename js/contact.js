document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("formResponse");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            responseMessage.textContent = "Thank you! Your message has been sent.";
            responseMessage.style.color = "green";
            form.reset();
        } else {
            responseMessage.textContent = "Please fill in all fields.";
            responseMessage.style.color = "red";
        }
    });
});
