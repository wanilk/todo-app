class TarefaView{

    private _tabela: HTMLTableElement;
    private _inputDescricao: HTMLInputElement;
    private _inputData: HTMLInputElement;
    private _btnAdicionar: HTMLButtonElement;

    constructor(){
        this._tabela = document.querySelector("#tabela-de-tarefas")!;
        this._inputDescricao = document.querySelector("#input-descricao")!;
        this._inputData = document.querySelector("#input-data")!;
        this._btnAdicionar = document.querySelector("#btn-adicionar")!;
    }

    montar(listaTarefas: TarefasLista){

        this._tabela.innerHTML = "";

        listaTarefas.tarefas.map(tarefa => {
            const linha =  document.createElement("tr")
            const colunaDescricao =  document.createElement("td")
            colunaDescricao.innerHTML = tarefa.descricao
            linha.appendChild(colunaDescricao);
            this._tabela.appendChild(linha);


            // const colunaData =  document.createElement("td")
            // const colunaConcluida =  document.createElement("td")


        })

    }
}