var nome = document.getElementById('nome');
var email = document.getElementById('email');
var mensagem = document.getElementById('mensagem');

function mensagemEnviada() {
if(nome.value != '' && email.value != '' && mensagem.value != '') {
    alert('Mensagem enviada com sucesso.');
} 
else {
    alert('Primeiro você deve preencher os campos.');
}
}