class Tarefa {
    private _descricao: string;
    private _data:Date;
    private _concluida: boolean;

    constructor(descricao: string, data: Date){
        this._descricao = descricao;
        this._data = data;
        this._concluida = false;
    }

    get descricao(){
        return this._descricao;
    }
}

// const t1 = new tarefa("comprar pão", new Date(2022-11-9))
// console.log(t1)