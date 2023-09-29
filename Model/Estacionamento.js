class Estacionamento {
    constructor(totalVagas) {
        this.vagas = [];

        for (let i = 1; i <= totalVagas; i++) {
            this.vagas.push(new VagaEstacionamento(i, 'disponivel'));
        }
    }
}