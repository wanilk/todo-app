"use strict";
class TarefasLista {
    constructor() {
        this._tarefas = [];
    }
    adicionar(tarefa) {
        this._tarefas.push(tarefa);
    }
    get tarefas() {
        return this._tarefas;
    }
}
