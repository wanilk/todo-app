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
    get data() {
        return this._data;
    }
}
// const t11 = new Tarefa("comprar pão e o leite", new Date(2022,11,9))
// console.log(t11.descricao)
