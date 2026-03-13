const input = document.getElementById("input");
const botao = document.getElementById("botao");
const lista = document.getElementById("lista");

function adicionarItem(){

    let texto = input.value;

    if(texto === ""){
        alert("Digite algo");
        return;
    }

    let li = document.createElement("li");
    li.textContent = texto;

    lista.appendChild(li);

    input.value = "";
}

botao.addEventListener("click", adicionarItem);

