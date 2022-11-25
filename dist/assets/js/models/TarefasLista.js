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
// const TarefasLista1 = new TarefasLista();
// const t1 = new Tarefa ("Comprar Pão", new Date (2022,10,9));
// const t2 = new Tarefa ("Comprar Manteiga", new Date (2022,10,10));
// const t3 = new Tarefa ("Comprar Leite", new Date (2022,10,20));
// TarefasLista1.adicionar(t1);
// TarefasLista1.adicionar(t2);
// TarefasLista1.adicionar(t3);
// TarefasLista1.tarefas.forEach(tarefa => {
//     console.log(tarefa.descricao);
// });
