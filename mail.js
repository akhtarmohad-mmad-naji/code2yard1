// mail.js

// Initialize EmailJS
(function () {
    emailjs.init("o8btEBb-SUis9yHH8"); // Replace with your EmailJS public key
})();

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // EmailJS parameters
    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
    };

    // Send email using EmailJS
    emailjs
        .send("service_rxkupi5", "template_mfu2nwf", templateParams)
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
