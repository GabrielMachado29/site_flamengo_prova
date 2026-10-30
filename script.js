// 1. Cores e modo escuro
function trocarCor(cor) {
    document.body.style.backgroundColor = cor;
}

function alternarTema() {
    document.body.style.backgroundColor = "";
    document.body.classList.toggle("gabriel_escuro");
    const botao = document.querySelector("#gabriel_btnTema");

    if (document.body.classList.contains("gabriel_escuro")) {
        botao.innerText = "Modo claro";
    } else {
        botao.innerText = "Modo escuro";
    }
}

// 2. Abas
function resetarAbas() {
    document.getElementById("gabriel_aba1").classList.remove("gabriel_exibida");
    document.getElementById("gabriel_aba2").classList.remove("gabriel_exibida");
    document.getElementById("gabriel_aba3").classList.remove("gabriel_exibida");
    document.getElementById("gabriel_aba4").classList.remove("gabriel_exibida");
    document.getElementById("gabriel_aba5").classList.remove("gabriel_exibida");
    document.getElementById("gabriel_aba6").classList.remove("gabriel_exibida");

    document.getElementById("gabriel_btnAba1").classList.remove("gabriel_ativo");
    document.getElementById("gabriel_btnAba2").classList.remove("gabriel_ativo");
    document.getElementById("gabriel_btnAba3").classList.remove("gabriel_ativo");
    document.getElementById("gabriel_btnAba4").classList.remove("gabriel_ativo");
    document.getElementById("gabriel_btnAba5").classList.remove("gabriel_ativo");
    document.getElementById("gabriel_btnAba6").classList.remove("gabriel_ativo");
}

function mostrarAba(numero) {
    resetarAbas();
    document.getElementById("gabriel_aba" + numero).classList.add("gabriel_exibida");
    document.getElementById("gabriel_btnAba" + numero).classList.add("gabriel_ativo");
}

// 3. FAQ
function alternarPergunta(numero) {
    document.getElementById("gabriel_resposta" + numero).classList.toggle("gabriel_exibida");
}

// 4. Modal
function abrirModal(titulo, texto) {
    document.getElementById("gabriel_tituloModal").innerText = titulo;
    document.getElementById("gabriel_textoModal").innerText = texto;
    document.getElementById("gabriel_fundoModal").style.display = "block";
    document.getElementById("gabriel_fecharModal").focus();
}

function fecharModal() {
    document.getElementById("gabriel_fundoModal").style.display = "none";
}

// 5. Validação
function validarCadastro() {
    const nome = document.getElementById("gabriel_nome").value.trim();
    const idade = Number(document.getElementById("gabriel_idade").value);
    const cidade = document.getElementById("gabriel_cidade").value.trim();
    const idolo = document.getElementById("gabriel_idolo").value;
    const senha = document.getElementById("gabriel_senha").value;
    const confirma = document.getElementById("gabriel_confirma").value;
    const mensagem = document.getElementById("gabriel_mensagem");

    mensagem.style.color = "#ce3030";

    if (nome === "") {
        mensagem.innerText = "Preencha seu nome.";
    } else if (idade < 1 || idade > 120) {
        mensagem.innerText = "Informe uma idade entre 1 e 120 anos.";
    } else if (cidade === "") {
        mensagem.innerText = "Preencha sua cidade.";
    } else if (idolo === "") {
        mensagem.innerText = "Escolha seu ídolo favorito.";
    } else if (senha.trim().length < 6) {
        mensagem.innerText = "A senha precisa de pelo menos 6 caracteres, sem contar espaços nas pontas.";
    } else if (confirma !== senha) {
        mensagem.innerText = "As senhas não coincidem.";
    } else {
        mensagem.innerText = "Tudo certo, " + nome + "! Seu cadastro foi validado nesta demonstração.";
        mensagem.style.color = "#268348";
        document.getElementById("gabriel_formulario").reset();
    }
}
