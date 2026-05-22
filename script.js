
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  document.getElementById("year").textContent = new Date().getFullYear();

  menuButton.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    });
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const enquiryMessage = [
      "Hello Sri Venkateshwara Enclave,",
      "",
      "I am interested in your properties. Please contact me with more details.",
      "",
      `Name: ${name}`,
      `Phone Number: ${phone}`,
      `Requirement: ${message}`,
      "",
      "Thank you."
    ].join("\n");

    formStatus.classList.remove("hidden");

    const whatsappUrl = `https://wa.me/919731878494?text=${encodeURIComponent(enquiryMessage)}`;
    const emailSubject = encodeURIComponent("Property Enquiry - Sri Venkateshwara Enclave");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=crazychandrashekhar1@gmail.com&su=${emailSubject}&body=${encodeURIComponent(enquiryMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  });
});
 
