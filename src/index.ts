import { Conta } from './conta'
import { Correntista } from './correntista'

const joao = new Correntista('Joao da Silva', '111222333-45')
const contaJoao = new Conta('123-45', joao)
contaJoao.credita(100.0)
contaJoao.saldo = -10
console.log('Saldo do João: ', contaJoao.saldo)
console.log(joao)


