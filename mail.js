// mail.js

// Initialize EmailJS
(function () {
    emailjs.init("UlAEv1UP5YjEDPsr7"); // Replace with your EmailJS public key
})();

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // EmailJS parameters
    const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    // Send email using EmailJS
    emailjs
        .send("service_bbz1xrl", "template_aga3vq9", templateParams)
        .then(
            function (response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Message sent successfully!");
                document.getElementById("contactForm").reset(); // Reset form after success
            },
            function (error) {
                console.error("FAILED...", error);
                alert("Message failed to send. Please try again later.");
            }
        );
});
