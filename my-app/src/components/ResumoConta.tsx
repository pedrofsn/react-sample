import * as React from 'react';
import { Conta } from '../models/Conta';

export default interface Props {
  filtrando: boolean;
  contas: Conta[];
  filtrar: (nome: String, conta: number/*, valor: number, isCredito: boolean*/) => {};
  limparFiltros: () => {};
}

export class ResumoConta extends React.Component<Props, {}> {

  handleLimparFiltros(e : any) {
    this.props.limparFiltros();
    e.preventDefault()
  }

  handleSubmit(e: any) {
    const inputNome = (this.refs['nome'] as any as HTMLInputElement)
    const inputConta = (this.refs['conta'] as any as HTMLInputElement)
    // const inputValor = (this.refs['valor'] as any as HTMLInputElement)
    // const inputCheckbox = (this.refs['credito'] as any as HTMLInputElement)

    const nome = inputNome.value.trim();
    const conta = inputConta.value.trim();
    // const valor = inputValor.value.trim();
    // const isCredito = inputCheckbox.checked;

    let contaNumber = (conta != '') ? parseInt(conta) : -1
    // let valorNumber = (valor != '') ? parseInt(valor) : -1

    this.props.filtrar(nome, contaNumber/*, valorNumber, isCredito*/);

    e.preventDefault();
  }

  render() {
    const { contas, filtrando } = this.props;

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
                <td><input type="text" ref="nome" placeholder="Nome exato" disabled={filtrando} /></td>
                <td><input type="text" ref="conta" placeholder="Conta exata" disabled={filtrando} /></td>
              </tr>
              <tr>
                <td><input type="submit" value="Filtrar" onClick={this.handleSubmit.bind(this)} style={!filtrando ? {} : { display: 'none' }} /></td>
              </tr>
            </tbody>
          </table>
        </form>
        <br />
        <br />
        <input type="button" style={filtrando ? {} : { display: 'none' }} value="Limpar filtros aplicados" onClick={this.handleLimparFiltros.bind(this)}/>
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