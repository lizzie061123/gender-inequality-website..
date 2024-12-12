// DOM Manipulation Examples
document.addEventListener("DOMContentLoaded", function () {
    // Add a welcome message to the header dynamically
    const header = document.querySelector("header");
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = "Together, we can make a difference!";
    welcomeMessage.style.fontSize = "1.2rem";
    welcomeMessage.style.marginTop = "10px";
    header.appendChild(welcomeMessage);

    // Randomize a fact about gender inequality in the 'Definition' section
    const facts = [
        "Women earn 82 cents for every dollar men earn.",
        "Globally, 35% of women have experienced physical or sexual violence.",
        "Over 60% of the world’s illiterate population are women.",
        "Only 25% of parliamentary seats globally are held by women."
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    const definitionSection = document.querySelector("#definition");
    const factParagraph = document.createElement("p");
    factParagraph.textContent = `Did you know? ${randomFact}`;
    factParagraph.style.fontStyle = "italic";
    definitionSection.appendChild(factParagraph);
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
    let valid = true;

    // Name Validation
    const nameField = document.getElementById("name");
    if (nameField.value.trim() === "") {
        valid = false;
        nameField.classList.add("is-invalid");
    } else {
        nameField.classList.remove("is-invalid");
    }

    // Email Validation
    const emailField = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value.trim())) {
        valid = false;
        emailField.classList.add("is-invalid");
    } else {
        emailField.classList.remove("is-invalid");
    }

    // Message Validation
    const messageField = document.getElementById("message");
    if (messageField.value.trim() === "") {
        valid = false;
        messageField.classList.add("is-invalid");
    } else {
        messageField.classList.remove("is-invalid");
    }

    // Prevent form submission if not valid
    if (!valid) {
        event.preventDefault();
    }
});
