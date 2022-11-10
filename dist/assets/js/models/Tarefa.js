"use strict";
class Tarefa {
    constructor(descricao, data) {
        this._descricao = descricao;
        this._data = data;
        this._concluida = false;
    }
    get descricao() {
        return this._descricao;
    }
}
// const t1 = new tarefa("comprar pão", new Date(2022-11-9))
// console.log(t1)
