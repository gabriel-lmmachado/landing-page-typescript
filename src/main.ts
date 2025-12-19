const ctaButton = document.getElementById("cta") as HTMLButtonElement;

ctaButton.addEventListener("mouseenter", () => {
  ctaButton.style.backgroundColor = "#06b6d4"; // muda cor ao passar o mouse
});

ctaButton.addEventListener("mouseleave", () => {
  ctaButton.style.backgroundColor = "#38bdf8"; // volta à cor original
});