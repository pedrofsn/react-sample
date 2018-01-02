import * as React from 'react';
import { Transacao } from '../models/Transacao';

export default interface MyProps {
    adicionarTransacao: (conta: number, transacao: Transacao) => {};
}

export class AdicionarTransacao extends React.Component<MyProps> {

    handleSubmit(e: any) {
        const inputConta = (this.refs['conta'] as any as HTMLInputElement)
        const inputValor = (this.refs['valor'] as any as HTMLInputElement)

        const conta = inputConta.value.trim();
        const valor = inputValor.value.trim();

        if (valor === '') {
            alert('Valor é um campo obrigatório');
        }

        let contaNumber = parseInt(conta)
        let valorNumber = parseInt(valor)

        let transacao = new Transacao(true, "teste", new Date(), valorNumber)
        this.props.adicionarTransacao(contaNumber, transacao);

        e.preventDefault();

        inputConta.value = ''
        inputValor.value = ''
    }

    render() {
        return (
            <div>
                <h3>Adicionar Transação</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Conta</label><br />
                        <input type="text" ref="conta" />
                    </div>
                    <div>
                        <label>Valor</label><br />
                        <input type="text" ref="valor" />
                    </div>
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                </form>
            </div>
        );
    }
}

