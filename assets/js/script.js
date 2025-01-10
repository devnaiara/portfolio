const contactForm = document.getElementById("contact-form");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

contactForm.addEventListener("submit", function (event) {

  event.preventDefault();

  const campoNome = document.getElementById("name");
  const campoEmail = document.getElementById("email");
  const campoSubject = document.getElementById("subject");
  const campoMessage = document.getElementById("message");

  const txtNome = document.getElementById("txtNome");
  const txtEmail = document.getElementById("txtEmail");
  const txtSubject = document.getElementById("txtSubject");

  if (campoNome.value.length < 3) {
    txtNome.innerHTML = "O Nome deve ter no mínimo 3 caracteres.";
    campoNome.focus();
    return;
  } else {
    txtNome.innerHTML = '';
  }

  if (!campoEmail.value.match(emailRegex)) {
    txtEmail.innerHTML = "Digite um E-mail válido.";
    campoEmail.focus();
    return;
  } else {
    txtEmail.innerHTML = '';
  }

  if (campoSubject.value.length < 5) {
    txtSubject.innerHTML = "O Assunto deve ter no mínimo 5 caracteres.";
    campoSubject.focus();
    return;
  } else {
    txtSubject.innerHTML = '';
  }

  console.log("Dados do Formulário:");
  console.log("Nome:", campoNome.value);
  console.log("Email:", campoEmail.value);
  console.log("Assunto:", campoSubject.value);
  console.log("Mensagem:", campoMessage.value);

  window.alert("Formulário Enviado com Sucesso!");
  
  campoNome.value = '';
  campoEmail.value = '';
  campoSubject.value = '';
  campoMessage.value = '';
});

