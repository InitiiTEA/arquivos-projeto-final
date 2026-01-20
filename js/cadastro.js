document.addEventListener('DOMContentLoaded', () => {
    const cadastro = document.getElementById('cadastro-form');

    if (cadastro) {
        cadastro.addEventListener('submit', function(event) {
            event.preventDefault();
        
            const nome = document.getElementById('nome');
            const email = document.getElementById('email');
            const senha = document.getElementById('senha');
            const confirmarSenha = document.getElementById('confirmar-senha');

        if (senha.value !== confirmarSenha.value) {
            alert('As senhas não coincidem!');
            senha.value = '';
            confirmarSenha.value = '';
            senha.focus();
            return;
        }
        
        // Aqui você pode adicionar a lógica para enviar os dados ao servidor
        
        alert('Cadastro realizado com sucesso!');
        window.location.href = './../index.html';
    });
    };

    const iconEyeOpen = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        </svg>`;

    const iconEyeClosed = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>`;

    // Seleciona os elementos
    const senhaInput = document.getElementById('senha');
    const toggleBtn = document.querySelector('.icon-eye');
    const confirmarInput = document.getElementById('confirmar-senha');

    // Verifica se os elementos existem para evitar erros
    if (senhaInput && toggleBtn && confirmarInput) {
        
        // Define o ícone inicial (Olho Fechado/Riscado pois a senha está oculta)
        toggleBtn.innerHTML = iconEyeClosed; 
        toggleBtn.style.cursor = 'pointer'; // Garante que pareça clicável

        toggleBtn.addEventListener('click', function() {
            // Verifica o tipo atual do input
            const tipoAtual = senhaInput.getAttribute('type');
            
            if (tipoAtual === 'password') {
                // MOSTRAR SENHA
                senhaInput.setAttribute('type', 'text');
                confirmarInput.setAttribute('type', 'text');
                toggleBtn.innerHTML = iconEyeOpen; // Muda para olho aberto
                toggleBtn.style.color = '#D65DB1'; // (Opcional) Destaca a cor quando visível
            } else {
                // OCULTAR SENHA
                senhaInput.setAttribute('type', 'password');
                confirmarInput.setAttribute('type', 'password');
                toggleBtn.innerHTML = iconEyeClosed; // Volta para olho fechado
                toggleBtn.style.color = '#999'; // Volta a cor original
            }
        });
    }
});