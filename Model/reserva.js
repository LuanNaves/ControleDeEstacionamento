class Reserva {
    constructor(placa, proprietario, numeroApartamento, blocoApartamento, modeloVeiculo, corVeiculo, numeroVaga) {
        this.placa = placa;
        this.proprietario = proprietario;
        this.numeroApartamento = numeroApartamento;
        this.blocoApartamento = blocoApartamento;
        this.modeloVeiculo = modeloVeiculo;
        this.corVeiculo = corVeiculo;
        this.numeroVaga = numeroVaga;
    }

    fazerReserva(estacionamento) {
        // Verifica se a vaga especificada está disponível no estacionamento
        const vagaDisponivel = estacionamento.vagas.find(vaga => vaga.numero === this.numeroVaga && vaga.status === 'disponivel');

        if (vagaDisponivel) {
            // Verifica se a placa já está em alguma reserva
            const placaExistente = estacionamento.vagas.some(vaga => vaga.status === 'ocupada' && vaga.reserva.placa === this.placa);

            if (placaExistente) {
                alert('Placa já está em uso em outra reserva.');
                return false; // Placa já está em uso em outra reserva
            }

            // Ocupa a vaga no estacionamento
            const reservaBemSucedida = estacionamento.ocuparVaga(this.numeroVaga, this);

            if (reservaBemSucedida) {
                return true; // Reserva bem-sucedida
            } else { 
                alert('Falha ao ocupar a vaga.');
                return false; // Falha ao ocupar a vaga
            }
        } else {
            alert('A vaga já está ocupada.');
            return false; // A vaga especificada não está disponível
        }
    }
}