// Mostrar mensagem do CTA
  function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");
    mensagem.style.display = "block";
    setTimeout(() => { mensagem.style.display = "none"; }, 3000);
  }

  // Abrir modal de login
  function abrirLogin() {
    const modal = document.getElementById("loginModal");
    modal.style.display = "flex";
  }

  // Fechar modal de login
  function fecharLogin() {
    const modal = document.getElementById("loginModal");
    modal.style.display = "none";
  }

  // Fechar login se clicar fora da caixa
  window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }