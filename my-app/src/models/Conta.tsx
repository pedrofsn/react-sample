import { Transacao } from "./Transacao";

export class Conta {
    constructor(
        public id: number,
        public nome: string,
        public conta: number,
        public transacoes? : Transacao[]
    ) {}
}