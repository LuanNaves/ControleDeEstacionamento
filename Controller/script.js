document.addEventListener('DOMContentLoaded', function() {
    // Iniciando o estacionamento
    const estacionamento = new Estacionamento(20);

    // Preenchendo dados das listas
    preencherListaReservas(estacionamento);
    preencherListaVagas(estacionamento);

    // Definindo variaveis para as páginas
    const cadastroSection = document.getElementById('cadastroForm');
    const listagemSection = document.getElementById('listagemReservas');
    const vagasSection = document.getElementById('vagasDisponiveis');

    // Inicialmente, exiba a seção de cadastro e oculte as outras
    cadastroSection.style.display = 'block';
    listagemSection.style.display = 'none';
    vagasSection.style.display = 'none';

    const cadastroLink = document.querySelector('nav ul li:nth-child(1) a');
    const listagemLink = document.querySelector('nav ul li:nth-child(2) a');
    const vagasLink = document.querySelector('nav ul li:nth-child(3) a');

    // Adicionando funcionalidade ao menu de navegacao
    cadastroLink.addEventListener('click', function(event) {
        event.preventDefault();
        cadastroSection.style.display = 'block';
        listagemSection.style.display = 'none';
        vagasSection.style.display = 'none';
    });
    listagemLink.addEventListener('click', function(event) {
        event.preventDefault();
        cadastroSection.style.display = 'none';
        listagemSection.style.display = 'block';
        vagasSection.style.display = 'none';
    });
    vagasLink.addEventListener('click', function(event) {
        event.preventDefault();
        cadastroSection.style.display = 'none';
        listagemSection.style.display = 'none';
        vagasSection.style.display = 'block';
    });

    const cadastro = document.getElementById('cadastroForm');
    // Fazer cadastro da reserva
    cadastro.addEventListener('submit', function(event) {
        event.preventDefault();

        // Capturar os valores do formulário
        const placa = document.getElementById('placa').value;
        const proprietario = document.getElementById('proprietario').value;
        const numeroApartamento = document.getElementById('numeroApartamento').value;
        const blocoApartamento = document.getElementById('blocoApartamento').value;
        const modeloVeiculo = document.getElementById('modeloVeiculo').value;
        const corVeiculo = document.getElementById('corVeiculo').value;
        const numeroVaga = parseInt(document.getElementById('numeroVaga').value, 10);

        // Criar uma instância da classe Reserva com os valores do formulário
        const reserva = new Reserva(placa, proprietario, numeroApartamento, blocoApartamento, modeloVeiculo, corVeiculo, numeroVaga);
        
        // Tentar adicionar a reserva ao estacionamento
        const reservaBemSucedida = reserva.fazerReserva(estacionamento);

        // Exibir uma mensagem de sucesso ou erro
        if (reservaBemSucedida) {
            console.log(reserva);
            alert('Reserva bem-sucedida! A vaga foi reservada.');
            preencherListaReservas(estacionamento);
            preencherListaVagas(estacionamento);
        } else {
            alert('Falha na reserva.');
            return;
        }
        
        // Limpar o formulário
        cadastro.reset();
    });

    function preencherListaReservas(estacionamento) {
        const reservasList = document.getElementById('reservasList');
    
        // Limpar a lista antes de preenchê-la novamente
        reservasList.innerHTML = '';
    
        estacionamento.vagas.forEach(vaga => {
            if (vaga.status === 'ocupada') {
                const reserva = vaga.reserva;
                const listItem = document.createElement('li');
                listItem.textContent = `Vaga ${vaga.numero} - Placa: ${reserva.placa} - Proprietário: ${reserva.proprietario} - Apartamento: ${reserva.numeroApartamento} - Bloco: ${reserva.blocoApartamento} - Modelo: ${reserva.modeloVeiculo} - Cor: ${reserva.corVeiculo}`;

                // Botão para desocupar a vaga
                const desocuparButton = document.createElement('button');
                desocuparButton.textContent = 'Desocupar';
                desocuparButton.classList.add("desocupar-button");
                desocuparButton.addEventListener('click', function() {
                    // Desocupando vaga e atualizando listas
                    estacionamento.desocuparVaga(vaga.numero);
                    preencherListaVagas(estacionamento)
                    preencherListaReservas(estacionamento)
                    alert('Vaga desocupada com sucesso!');
                });

                listItem.appendChild(desocuparButton);
                reservasList.appendChild(listItem);
            }
        });
    }

    function preencherListaVagas(estacionamento) {
        const listaVagas = document.getElementById('vagasList');
    
        // Limpar a lista de vagas antes de preenchê-la novamente
        listaVagas.innerHTML = '';
    
        if (estacionamento.vagas.length > 0) {
            estacionamento.vagas.forEach(vaga => {
                const listItem = document.createElement('li');
                const status = vaga.status === 'disponivel' ? 'Disponível' : 'Ocupada';
                listItem.textContent = `Vaga ${vaga.numero} - ${status}`;
                listaVagas.appendChild(listItem);
            });
        } else {
            listaVagas.textContent = 'Nenhuma vaga disponível.';
        }
    }

    
});