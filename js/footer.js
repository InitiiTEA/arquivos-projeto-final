document.addEventListener("DOMContentLoaded"), () => {
  const yearSpan = document.querySelector(".necessario span");
  if (yearSpan) {
    const year = new Date().getFullYear();
    yearSpan.textContent = `© ${year} InfiniTEA. Todos os direitos reservados.`;
  }
};



