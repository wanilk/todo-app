class TarefasLista {
    private _tarefas: Tarefa[];

    constructor (){
        this._tarefas = []
    }

    adicionar(tarefa: Tarefa){
        this._tarefas.push(tarefa)
    }

    get tarefas(){
        return this._tarefas
    }
}