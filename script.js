// Seleciona os elementos do HTML pelo ID
const inputTarefa = document.getElementById("inputTarefa"); // Campo onde o usuário digita a tarefa
const btnAdicionar = document.getElementById("btnAdicionar"); // Botão para adicionar tarefa
const listaTarefas = document.getElementById("listaTarefas"); // Lista onde as tarefas serão exibidas
const mensagem = document.getElementById("mensagem"); // Área para mostrar mensagens ao usuário

// Adiciona um evento de clique no botão
btnAdicionar.addEventListener("click", function () {

// Pega o texto digitado no input
let texto = inputTarefa.value;

// Verifica se o campo está vazio
if (texto === "") {
// Mostra mensagem de erro
mensagem.textContent = "Ei, escreve alguma coisa aí!";
mensagem.className = "text-danger fw-bold";
} else {

const li = document.createElement("li");
li.className = "list-group-item"; 

li.textContent = texto;       
listaTarefas.appendChild(li);

inputTarefa.value = "";

// Mostra mensagem de sucesso
mensagem.textContent = "Eba, tarefa adicionada com sucesso!";
mensagem.className = "text-success fw-bold";
}

});