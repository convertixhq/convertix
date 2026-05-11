function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validatePhone(phone) {
    return phone.replace(/\D/g, "").length >= 8;
}

function handleForm(buttonId, successPage) {

    const button = document.getElementById(buttonId);

    if (!button) return;

    button.addEventListener("click", () => {

        const form = button.closest(".card, .success-card, section");

        const inputs = form.querySelectorAll("input");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {
                input.style.border = "1px solid red";
                valid = false;
            } else {
                input.style.border = "1px solid rgba(255,255,255,0.15)";
            }

            if (input.type === "email") {
                if (!validateEmail(input.value)) {
                    input.style.border = "1px solid red";
                    valid = false;
                }
            }

            if (input.type === "tel") {
                if (!validatePhone(input.value)) {
                    input.style.border = "1px solid red";
                    valid = false;
                }
            }

        });

        if (!valid) {
            alert("Please complete all fields correctly.");
            return;
        }

        const originalText = button.innerText;

        button.innerText = "Processing...";
        button.disabled = true;
        button.style.opacity = "0.7";

        setTimeout(() => {
            window.location.href = successPage;
        }, 1200);

    });

}

handleForm("free-btn", "success-free.html");
handleForm("priority-btn", "success-priority.html");
handleForm("booking-btn", "success-booking.html");
