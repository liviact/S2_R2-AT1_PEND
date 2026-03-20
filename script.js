// Função responsável por exibir a mensagem na tela
function exibirMensagem(){

// Pega o valor digitado no input com id "nomeUsuario"
const nome = document.getElementById("nomeUsuario").value;

// Seleciona o elemento onde a mensagem será exibida
const areaMensagem = document.getElementById("mensagem");

// Verifica se o usuário digitou algo
if(nome !== ""){
// Se tiver texto, mostra mensagem de boas-vindas personalizada
areaMensagem.innerText = "Oie, " + nome + "! Seja bem-vindo(a), divo(a)!";

// Define a cor verde para indicar sucesso
areaMensagem.style.color = "#28a745";
    }
    else{
// Se estiver vazio, mostra mensagem de erro
areaMensagem.innerText = "Campos obrigatórios não preenchidos!";

// Define a cor vermelha para indicar erro
areaMensagem.style.color = "#dc3545";
    }

}