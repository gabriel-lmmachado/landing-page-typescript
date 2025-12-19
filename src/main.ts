import "./style.css";

const form = document.getElementById("contact-form") as HTMLFormElement;
const background = document.querySelector(".background") as HTMLElement;
const ctaButton = document.getElementById("cta") as HTMLButtonElement;

// Efeito parallax no background com movimento do mouse
window.addEventListener("mousemove", (e) => {
  background.style.transform = `translate(
    ${e.clientX * 0.01}px,
    ${e.clientY * 0.01}px
  )`;
});

// Efeito interativo no botão CTA
ctaButton.addEventListener("mouseenter", () => {
  ctaButton.style.backgroundColor = "#06b6d4";
});

ctaButton.addEventListener("mouseleave", () => {
  ctaButton.style.backgroundColor = "#38bdf8";
});

// Scroll para seção de contato ao clicar no CTA
ctaButton.addEventListener("click", () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
});

// Envio do formulário
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    name: (document.getElementById("name") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    projectType: (document.getElementById("projectType") as HTMLSelectElement).value,
    description: (document.getElementById("description") as HTMLTextAreaElement).value,
  };

  try {
    await fetch("https://SEU_WEBHOOK_N8N", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    alert("Your project has been sent successfully!");
    form.reset();
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    alert("Erro ao enviar. Tente novamente.");
  }
});
