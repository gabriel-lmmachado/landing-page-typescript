const form = document.getElementById("contact-form") as HTMLFormElement;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    name: (document.getElementById("name") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    projectType: (document.getElementById("projectType") as HTMLSelectElement).value,
    description: (document.getElementById("description") as HTMLTextAreaElement).value,
  };

  await fetch("https://SEU_WEBHOOK_N8N", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  alert("Your project has been sent successfully!");
  form.reset();
});
