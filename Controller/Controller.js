const estacionamento = new Estacionamento(20);
const formulario = document.getElementById('cadastroReserva');

function reservarVaga(numeroVaga) {
    if (estacionamento.vagas[numeroVaga - 1].statusOcupacao === 'disponivel') {
        estacionamento.vagas[numeroVaga - 1].statusOcupacao = 'ocupada';
        
    }
}

function vagasOcupadas() {
    return estacionamento.vagas.filter(vaga => vaga.statusOcupacao === 'ocupada').length;
}

function vagasDisponiveis() {
    return estacionamento.vagas.filter(vaga => vaga.statusOcupacao === 'disponivel').length;
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    const placa = document.getElementById('placa').value;
    const nomeProprietario = document.getElementById('nomeProprietario').value;
    const numeroApartamento = document.getElementById('numeroApartamento').value;
    const blocoApartamento = document.getElementById('blocoApartamento').value;
    const modeloVeiculo = document.getElementById('modeloVeiculo').value;
    const corVeiculo = document.getElementById('corVeiculo').value;
    const numeroVaga = document.getElementById('numeroVaga').value;

    const reserva = new Reserva(placa, nomeProprietario, numeroApartamento, blocoApartamento, modeloVeiculo, corVeiculo, numeroVaga);

    reservarVaga(numeroVaga);

    alert('Cadastro realizado com sucesso!');
    formulario.reset();
});