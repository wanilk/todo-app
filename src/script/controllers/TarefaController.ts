class TarefaController{

    private _listaTarefas: TarefasLista;
    private _tarefaView: TarefaView;

    constructor(listaTarefas: TarefasLista){
        this._listaTarefas = listaTarefas;
        this._tarefaView = new TarefaView();
    }

    adicionar(tarefa: Tarefa){
        this._listaTarefas.adicionar(tarefa);
        this._tarefaView.montar(this._listaTarefas);
    }
}