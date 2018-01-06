import * as React from 'react';
import { Conta } from '../models/Conta';

export default interface Props {
  contas: Conta[];
  filtrar: (nome: String, conta: number, valor: number, isCredito: boolean) => {};
}

export class ResumoConta extends React.Component<Props, {}> {

  handleSubmit(e: any) {
    const inputNome = (this.refs['nome'] as any as HTMLInputElement)
    const inputConta = (this.refs['conta'] as any as HTMLInputElement)
    const inputValor = (this.refs['valor'] as any as HTMLInputElement)
    const inputCheckbox = (this.refs['credito'] as any as HTMLInputElement)

    const nome = inputNome.value.trim();
    const conta = inputConta.value.trim();
    const valor = inputValor.value.trim();
    const isCredito = inputCheckbox.checked;

    let contaNumber = (conta != '') ? parseInt(conta) : -1
    let valorNumber = (valor != '') ? parseInt(valor) : -1

    this.props.filtrar(nome, contaNumber, valorNumber, isCredito);

    e.preventDefault();
  }

  render() {
    const { contas } = this.props;

    return (
      <div>
        <h1>Contas & Transações</h1>
        <br />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <table>
            <tbody>
              <tr>
                <td>Filtrar contas</td>
              </tr>
              <tr>
                <td><input type="text" ref="nome" placeholder="Nome" /></td>
                <td><input type="text" ref="conta" placeholder="Conta" /></td>
              </tr>
              <tr>
                <td>Filtrar transações</td>
              </tr>
              <tr>
                <td><input type="text" ref="valor" placeholder="Valor" /></td>
                <td><label>Crédito: </label><input type="checkbox" ref="credito" /></td>
                <td><input type="submit" value="Filtrar" onClick={this.handleSubmit.bind(this)} /></td>
              </tr>
            </tbody>
          </table>
        </form>
        <br />
        <br />
        {
          contas.map(
            (conta) => {
              return <div key={conta.id}>
                <strong> Nome: {conta.nome} | Conta: {conta.conta} | Saldo: R$ {conta.saldo} </strong>
                <br />
                {
                  conta.transacoes.map(
                    (transacao) => {
                      return (
                        <div>
                          <br />
                          {transacao.nome}: R$ {transacao.valor.toString()} {transacao.isCredito ? "C" : "D"}
                          <br />
                          em {transacao.data.toString()}
                          <br />
                        </div>
                      )
                    }
                  )
                }
                <br />
              </div>
            }
          )
        }
      </div>
    );
  }
}