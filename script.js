// Seleciona os elementos do HTML pelos seus IDs
const inputTarefa = document.getElementById("inputTarefa"); // Campo de texto onde o usuário digita a tarefa
const btnAdicionar = document.getElementById("btnAdicionar"); // Botão que adiciona a tarefa
const listaTarefas = document.getElementById("listaTarefas"); // Lista (ul/ol) onde as tarefas serão exibidas
const mensagem = document.getElementById("mensagem"); // Elemento para mostrar mensagens ao usuário

// Adiciona um evento de clique no botão "Adicionar"
btnAdicionar.addEventListener("click", function () {


let texto = inputTarefa.value;

// Verifica se o campo está vazio
if (texto === "") {
// Se estiver vazio, mostra uma mensagem de erro
mensagem.textContent = "Ei, escreve alguma coisa aí!";
mensagem.className = "text-danger fw-bold";
} else {

        
const li = document.createElement("li");
li.className = "list-group-item";

// Define o texto do item como o que o usuário digitou
li.textContent = texto;

// Adiciona o item na lista de tarefas
listaTarefas.appendChild(li);

// Limpa o campo de input após adicionar a tarefa
inputTarefa.value = "";

// Mostra uma mensagem de sucesso
mensagem.textContent = "Eba, tarefa adicionada com sucesso!";
mensagem.className = "text-success fw-bold";
    }

});