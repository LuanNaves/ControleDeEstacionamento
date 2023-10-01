// Array para armazenar as reservas
const reservas = [];

// Função para salvar uma reserva
function salvarReserva(placa, proprietario, numeroApartamento, blocoApartamento, modeloVeiculo, corVeiculo, numeroVaga) {
    const reserva = {
        placa,
        proprietario,
        numeroApartamento,
        blocoApartamento,
        modeloVeiculo,
        corVeiculo,
        numeroVaga
    };
    reservas.push(reserva);
}

// Função para exibir reservas na página de listagem
function exibirReservas() {
    const listaReservas = document.getElementById("reservasList");

    // Verifica se o elemento "reservasList" existe na página
    if (listaReservas) {
        listaReservas.innerHTML = "";

        reservas.forEach((reserva, index) => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>Reserva ${index + 1}:</strong><br>
                            Placa: ${reserva.placa}<br>
                            Proprietário: ${reserva.proprietario}<br>
                            Número do Apartamento: ${reserva.numeroApartamento}<br>
                            Bloco do Apartamento: ${reserva.blocoApartamento}<br>
                            Modelo do Veículo: ${reserva.modeloVeiculo}<br>
                            Cor do Veículo: ${reserva.corVeiculo}<br>
                            Número da Vaga de Estacionamento: ${reserva.numeroVaga}`;
            listaReservas.appendChild(li);
        });
    }
}

// Função para exibir informações sobre vagas disponíveis
function exibirVagasDisponiveis() {
    const vagasDisponiveis = document.getElementById("vagasDisponiveis");
    // Adicione código para exibir informações sobre vagas disponíveis aqui
}

// Evento de envio do formulário de cadastro
const cadastroForm = document.getElementById("cadastroForm");
cadastroForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const placa = document.getElementById("placa").value;
    const proprietario = document.getElementById("proprietario").value;
    const numeroApartamento = document.getElementById("numeroApartamento").value;
    const blocoApartamento = document.getElementById("blocoApartamento").value;
    const modeloVeiculo = document.getElementById("modeloVeiculo").value;
    const corVeiculo = document.getElementById("corVeiculo").value;
    const numeroVaga = document.getElementById("numeroVaga").value;

    salvarReserva(placa, proprietario, numeroApartamento, blocoApartamento, modeloVeiculo, corVeiculo, numeroVaga);
    alert("Cadastro realizado com sucesso!");

    // Limpar os campos do formulário após o envio
    cadastroForm.reset();

    exibirReservas();
});

// Verifique qual página estamos e execute as ações apropriadas
if (window.location.pathname.endsWith("listagem.html")) {
    exibirReservas();
} else if (window.location.pathname.endsWith("vagas-disponiveis.html")) {
    exibirVagasDisponiveis();
}