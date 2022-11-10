class TarefaView{

    private tabela: HTMLTableElement;

    constructor(){
        this.tabela = document.querySelector("#tabela-de-tarefas")!
    }

    montar(listaTarefas: TarefasLista){

        this.tabela.innerHTML = "";

        listaTarefas.tarefas.map(tarefa => {
            const linha =  document.createElement("tr")
            const colunaDescricao =  document.createElement("td")
            colunaDescricao.innerHTML = tarefa.descricao
            linha.appendChild(colunaDescricao);
            this.tabela.appendChild(linha);


            // const colunaData =  document.createElement("td")
            // const colunaConcluida =  document.createElement("td")


        })

    }
}