
document.addEventListener("DOMContentLoaded", () => {
    const contactButton = document.getElementById("contact");

    // Send an email to me
    contactButton.addEventListener("click", () => {
        const link =
            "mailto:phamghien@gmail.com" +
            "?subject=" + encodeURIComponent("Subject");

        window.location.href = link;
    });
});
