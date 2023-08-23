"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(numero, dono) {
        this.saldo = 0.0;
        this.numero = numero;
        this.dono = dono;
    }
    credita(quantia) {
        this.saldo += quantia;
    }
    debita(quantia) {
        this.saldo -= quantia;
    }
    getSaldo() {
        return this.saldo;
    }
}
exports.Conta = Conta;
