"use strict";
class TarefaController {
    constructor(listaTarefas) {
        this._listaTarefas = listaTarefas;
        this._tarefaView = new TarefaView();
    }
    adicionar(tarefa) {
        this._listaTarefas.adicionar(tarefa);
        this._tarefaView.montar(this._listaTarefas);
    }
}
