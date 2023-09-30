document.addEventListener('DOMContentLoaded',function(){

    const estacionamento = new Estacionamento(20);

    function gerarTabelaVagas() {
        const tabela = document.querySelector('table tbody');
        tabela.innerHTML = ''; // Limpa o conteúdo atual da tabela

        estacionamento.vagas.forEach((vaga, index) => {
            const row = tabela.insertRow();
            const cellNumeroVaga = row.insertCell(0);
            const cellStatusOcupacao = row.insertCell(1);

            cellNumeroVaga.textContent = index + 1;
            cellStatusOcupacao.textContent = vaga.statusOcupacao;
        });
    }       
    gerarTabelaVagas();
    });