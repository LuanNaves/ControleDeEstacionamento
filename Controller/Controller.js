import Estacionamento from './Estacionamento.js';
import CadastroReservaController from './CadastroReservasController.js';
import ListaVagasController from './ListaVagasController.js';

const estacionamento = new Estacionamento(20);

// Crie instâncias dos controladores e passe a instância de Estacionamento como argumento
const cadastroReservaController = new CadastroReservaController(estacionamento);
const listaVagasController = new ListaVagasController(estacionamento);