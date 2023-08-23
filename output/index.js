"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = require("./conta");
const correntista_1 = require("./correntista");
const joao = new correntista_1.Correntista('Joao da Silva', '111222333-45');
const contaJoao = new conta_1.Conta('123-45', joao);
contaJoao.credita(100.0);
console.log('Saldo do João: ', contaJoao.getSaldo());
console.log(joao);
