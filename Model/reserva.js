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

        console.log(vagaDisponivel);
        console.log(typeof(vagaDisponivel.numero))

        if (vagaDisponivel) {
            // Ocupa a vaga no estacionamento
            const reservaBemSucedida = estacionamento.ocuparVaga(this.numeroVaga, this);

            if (reservaBemSucedida) {
                return true; // Reserva bem-sucedida
            } else {
                return false; // Falha ao ocupar a vaga
            }
        } else {
            return false; // A vaga especificada não está disponível
        }
    }
}