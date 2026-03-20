// Seleciona os elementos do HTML
const inputTarefa = document.getElementById("inputTarefa"); // Campo de input onde o usuário digita a tarefa
const btnAdicionar = document.getElementById("btnAdicionar"); // Botão de adicionar tarefa
const listaTarefas = document.getElementById("listaTarefas"); // Lista onde as tarefas serão exibidas
const mensagem = document.getElementById("mensagem"); // Elemento para mostrar mensagens ao usuário

// Evento de clique no botão "Adicionar"
btnAdicionar.addEventListener("click", function () {
    
// Pega o valor digitado no input
let texto = inputTarefa.value;


// Verifica se o campo está vazio
    if (texto === "") {
mensagem.textContent = "Ei, escreve alguma coisa aí!"; // Mensagem de erro
mensagem.className = "p-2 bg-danger text-white rounded fw-bold"; 
    return; 
    }


const li = document.createElement("li");
li.className = "list-group-item d-flex justify-content-between align-items-center";

const divConteudo = document.createElement("div");
divConteudo.className = "form-check d-flex align-items-center";


const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.className = "form-check-input me-2";

    
ivConteudo.appendChild(checkbox);
divConteudo.appendChild(document.createTextNode(texto));

// Evento quando o checkbox é marcado/desmarcado
 checkbox.addEventListener("change", function () {
if (checkbox.checked) {
 // Se estiver marcado, risca o texto
divConteudo.style.textDecoration = "line-through";
} else {
// Se desmarcar, volta ao normal
divConteudo.style.textDecoration = "none";
divConteudo.style.color = "black";
        }
    });

// Cria o botão de remover tarefa
const btnRemover = document.createElement("button");
btnRemover.textContent = "Remover";
btnRemover.className = "btn btn-danger btn-sm";

// Evento de clique para remover a tarefa
btnRemover.addEventListener("click", function () {
li.remove(); // Remove o item da lista
mensagem.textContent = "Tarefa removida!"; // Mostra mensagem
mensagem.className = "p-2 bg-warning text-dark rounded fw-bold";
    });


li.appendChild(divConteudo);
li.appendChild(btnRemover);

listaTarefas.appendChild(li);
inputTarefa.value = "";

 // Mensagem de sucesso
mensagem.textContent = "misericórdia, quanta coisa!";
mensagem.className = "p-2 bg-success text-white rounded fw-bold";
});