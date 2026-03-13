
const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");

btnAdicionar.addEventListener("click", function () {
let texto = inputTarefa.value;
    if (texto === "") {
        mensagem.textContent = "Ei, escreve alguma coisa aí!";
        mensagem.className = "text-danger fw-bold";
    } else {

    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = texto;
    listaTarefas.appendChild(li);
    inputTarefa.value = "";

 mensagem.textContent = "Eba, tarefa adicionada com sucesso!";
 mensagem.className = "text-success fw-bold";
    }

});