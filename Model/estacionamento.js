class Estacionamento {
    constructor(totalVagas) {
        this.totalVagas = totalVagas;
        this.vagas = [];

        // Inicializa o array de vagas com informações sobre cada vaga
        for (let i = 1; i <= totalVagas; i++) {
            this.vagas.push({
                numero: i,
                status: 'disponivel',
                reserva: null
            });
        }
    }

    ocuparVaga(numeroVaga, reserva) {
        const vaga = this.vagas.find(v => v.numero === numeroVaga);
        console.log(vaga.numero);
        if (vaga && vaga.status === 'disponivel') {
            vaga.status = 'ocupada';
            vaga.reserva = reserva;
            return true; // Vaga ocupada com sucesso
        } else {
            return false; // A vaga especificada não está disponível
        }
    }

    desocuparVaga(numeroVaga) {
        const vaga = this.vagas.find(v => v.numero === numeroVaga);

        if (vaga && vaga.status === 'ocupada') {
            vaga.status = 'disponivel';
            vaga.reserva = null;
            return true; // Vaga desocupada com sucesso
        } else {
            return false; // A vaga especificada não está ocupada
        }
    }
}
