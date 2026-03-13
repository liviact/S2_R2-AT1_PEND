function exibirMensagem(){

    const nome = document.getElementById("nomeUsuario").value;
    const areaMensagem = document.getElementById("mensagem");

    if(nome !== ""){
        areaMensagem.innerText = "Oie, " + nome + "! Seja bem-vindo(a), divo(a)!";
        areaMensagem.style.color = "#28a745";
    }
    else{
        areaMensagem.innerText = "Campos obrigatórios não preenchidos!";
        areaMensagem.style.color = "#dc3545";
    }

}