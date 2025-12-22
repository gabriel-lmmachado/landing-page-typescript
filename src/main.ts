import "./style.css";
import { createIcons, icons } from "lucide";
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
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nome: form.nome.value,
    email: form.email.value,
    // outros campos
  };

  try {
    const response = await fetch("/.netlify/functions/sendProject", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
      form.reset();
    } else {
      console.error(result);
      alert("Erro ao enviar projeto. Veja o console para detalhes.");
    }
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    alert("Erro ao enviar formulário. Tente novamente.");
  }
});
createIcons({ icons });