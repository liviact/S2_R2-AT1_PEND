const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");

btnAdicionar.addEventListener("click", function () {
    let texto = inputTarefa.value.trim();

    if (texto === "") {
        mensagem.textContent = "Ei, escreve alguma coisa aí!";
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


    divConteudo.appendChild(checkbox);
    divConteudo.appendChild(document.createTextNode(texto));

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            divConteudo.style.textDecoration = "line-through";
        } else {
            divConteudo.style.textDecoration = "none";
            divConteudo.style.color = "black";
        }
    });

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.className = "btn btn-danger btn-sm";

    btnRemover.addEventListener("click", function () {
        li.remove();
        mensagem.textContent = "Tarefa removida!";
        mensagem.className = "p-2 bg-warning text-dark rounded fw-bold";
    });

    li.appendChild(divConteudo);
    li.appendChild(btnRemover);

    listaTarefas.appendChild(li);

    inputTarefa.value = "";

    mensagem.textContent = "misericórdia, quanta coisa!";
    mensagem.className = "p-2 bg-success text-white rounded fw-bold";
});