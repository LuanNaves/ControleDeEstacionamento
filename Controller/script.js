document.addEventListener("DOMContentLoaded", function() {


    // Iniciando o estacionamento
    const estacionamento = new Estacionamento(20);

    preencherListaReservas(estacionamento);
    preencherListaVagas(estacionamento);

    const cadastro = document.getElementById("cadastroForm");

    cadastro.addEventListener('submit', function(event) {
        event.preventDefault();

        console.log(estacionamento);
        console.log(estacionamento.vagas);

        // Capturar os valores do formulário
        const placa = document.getElementById("placa").value;
        const proprietario = document.getElementById("proprietario").value;
        const numeroApartamento = document.getElementById("numeroApartamento").value;
        const blocoApartamento = document.getElementById("blocoApartamento").value;
        const modeloVeiculo = document.getElementById("modeloVeiculo").value;
        const corVeiculo = document.getElementById("corVeiculo").value;
        const numeroVaga = parseInt(document.getElementById("numeroVaga").value, 10);

        // Criar uma instância da classe Reserva com os valores do formulário
        const reserva = new Reserva(placa, proprietario, numeroApartamento, blocoApartamento, modeloVeiculo, corVeiculo, numeroVaga);

        console.log(reserva);
        
        // Tentar adicionar a reserva ao estacionamento
        const reservaBemSucedida = reserva.fazerReserva(estacionamento);

        // Exibir uma mensagem de sucesso ou erro
        if (reservaBemSucedida) {
            alert("Reserva bem-sucedida! A vaga foi reservada.");
            preencherListaReservas(estacionamento);
            preencherListaVagas(estacionamento);
        } else {
            alert("Falha na reserva. A vaga especificada não está disponível.");
        }
        
        // Limpar o formulário
        cadastro.reset();
    });

    function preencherListaReservas(estacionamento) {
        const reservasList = document.getElementById("reservasList");
    
        // Limpar a lista antes de preenchê-la novamente
        reservasList.innerHTML = '';
    
        estacionamento.vagas.forEach(vaga => {
            if (vaga.status === 'ocupada') {
                const reserva = vaga.reserva;
                const listItem = document.createElement("li");
                listItem.textContent = `Vaga ${vaga.numero} - Placa: ${reserva.placa} - Proprietário: ${reserva.proprietario} - Apartamento: ${reserva.numeroApartamento} - Bloco: ${reserva.blocoApartamento} - Modelo: ${reserva.modeloVeiculo} - Cor: ${reserva.corVeiculo}`;
                reservasList.appendChild(listItem);
            }
        });
    }

    function preencherListaVagas(estacionamento) {
        const listaVagas = document.getElementById("vagasList");
    
        // Limpar a lista de vagas antes de preenchê-la novamente
        listaVagas.innerHTML = '';
    
        if (estacionamento.vagas.length > 0) {
            estacionamento.vagas.forEach(vaga => {
                const listItem = document.createElement("li");
                const status = vaga.status === 'disponivel' ? 'Disponível' : 'Ocupada';
                listItem.textContent = `Vaga ${vaga.numero} - ${status}`;
                listaVagas.appendChild(listItem);
            });
        } else {
            listaVagas.textContent = "Nenhuma vaga disponível.";
        }
    }    
    
});