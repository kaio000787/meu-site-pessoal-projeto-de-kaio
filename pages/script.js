
function enviarMensagemWhatsApp() {
  const nomeInput = document.getElementById('input-nome');
  const emailInput = document.getElementById('input-email');
  const telefoneInput = document.getElementById('input-tel');
  const mensagemInput = document.getElementById('input-msg');


  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const telefone = telefoneInput.value.trim();
  const mensagem = mensagemInput.value.trim();

  const whatsappUrl = `https://api.whatsapp.com/send?phone=5581982562343&text=
  Nome: ${nome}%0A;
  E-mail: ${email}%0A;
  Telefone: ${telefone}%0A;
  Mensagem: ${mensagem}`;

  window.open(whatsappUrl, '_blank');
}
  
function formatarTelefone(input) {
  let telefone = input.value.replace(/\D/g, '');
  if (telefone.length > 11) {
    telefone = telefone.slice(0, 11);
  }
  telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
  input.value = telefone;
}
    

function validarFormulario(event){
  event.preventDefault()
  enviarMensagemWhatsApp()

}
