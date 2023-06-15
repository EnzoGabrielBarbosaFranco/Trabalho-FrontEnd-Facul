// Script para o carrossel de imagens
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName('slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000); // Altere o valor em milissegundos para controlar a velocidade de troca de slides
}
// script.js
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    if (name.trim() === "") {
      alert("Por favor, preencha o campo Nome.");
      return false;
    }
  
    if (email.trim() === "") {
      alert("Por favor, preencha o campo Email.");
      return false;
    }
  
    if (!validateEmail(email)) {
      alert("Por favor, insira um endereço de email válido.");
      return false;
    }
  
    if (message.trim() === "") {
      alert("Por favor, preencha o campo Mensagem.");
      return false;
    }
  
    // Aqui você pode adicionar código para enviar o formulário ou executar outras ações desejadas
  
    showSuccessMessage();
    return true;
  }
  
  function validateEmail(email) {
    // Expressão regular para validar o formato do email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  function showSuccessMessage() {
    var form = document.getElementById("contactForm");
    var successMessage = document.createElement("p");
    successMessage.textContent = "Formulário enviado com sucesso!";
    successMessage.classList.add("success-message");
    form.appendChild(successMessage);
    alert("Formulário enviado com sucesso!");
  
    // Remover a mensagem após o pop-up ser clicado
    successMessage.textContent = "";
  }