/*Adicionado um evento que exibe uma mensagem quando o botão de envio é clicad*/
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const statusMessage = document.getElementById("status-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Simular o envio do formulário (pode ser substituído por uma chamada AJAX)
        // Aqui você pode adicionar a lógica para enviar os dados do formulário para um servidor

        // Exibir a mensagem de envio bem-sucedido
        statusMessage.textContent = "Mensagem enviada com sucesso!";
    });
});

// Função para validar o email
function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}

// Selecionar o campo de email
const campoEmail = document.getElementById('email');

// Adicionar um ouvinte de evento para verificar a validade do email quando o campo perder o foco
campoEmail.addEventListener('blur', function() {
  const email = campoEmail.value;
  const isValid = validarEmail(email);

  if (isValid) {
    campoEmail.style.borderColor = 'green'; // Estilo válido
  } else {
    campoEmail.style.borderColor = 'red'; // Estilo inválido
  }
});

document.querySelector('.scroll-to-top a').addEventListener('click', function (event) {
  event.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  window.scrollTo({
    top: target.offsetTop,
    behavior: 'smooth'
  });
});
