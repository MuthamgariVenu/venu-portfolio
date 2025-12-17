// Smooth scroll for navbar links
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Contact form UI validation (FormSubmit handles email)
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", () => {
    console.log("Form submitted");
  });
}
