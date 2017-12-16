export class Transacao {
    constructor(
        public id: Number,
        public isCredito : Boolean,
        public nome : String,
        public data: Date,
        public valor: Number,
        public conta_id: Number
    ) {}
}