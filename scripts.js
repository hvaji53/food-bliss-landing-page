const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    })
});

const orderForm = document.getElementById("order-form");

orderForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const customerName = document.getElementById("customer-name").value;
    const customerEmail = document.getElementById("customer-email").value;
    const customerPhone = document.getElementById("customer-phone").value;
    const orderType = document.getElementById("order-type").value;
    const orderMessage = document.getElementById("order-message").value;
    const formNote = document.getElementById("form-note");

    const instagramMessage = `
Hello Food Bliss,

My name is ${customerName}.
My email is ${customerEmail}.
My phone number is ${customerPhone || "Not provided"}.

I would like to order: ${orderType}

Order details: ${orderMessage}`;

    try {
        await navigator.clipboard.writeText(instagramMessage);

        formNote.textContent = "Your inquiry message has been copied. Instagram will open now — paste it into a DM to Food Bliss.";

        setTimeout(() => {
            window.open("https://www.instagram.com/food._bliss", "_blank");
        }, 800);
    } catch (error) {
        formNote.textContent = "Please copy your message manually and send it to @food._bliss on Instagram.";
    }
});