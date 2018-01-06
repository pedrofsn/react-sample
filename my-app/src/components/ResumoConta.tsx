import * as React from 'react';
import { Conta } from '../models/Conta';

export default interface Props {
  filtrando: boolean;
  contas: Conta[];
  filtrar: (nome: String, conta: number, valorMenor : number, valorMaior : number, dataMenor : number, dataMaior : number) => {};
  limparFiltros: () => {};
}

export class ResumoConta extends React.Component<Props, {}> {

  handleLimparFiltros(e: any) {
    this.props.limparFiltros();
    e.preventDefault()
  }

  handleSubmit(e: any) {
    const inputNome = (this.refs['nome'] as any as HTMLInputElement)
    const inputConta = (this.refs['conta'] as any as HTMLInputElement)
    const inputValorMenor = (this.refs['valorMenor'] as any as HTMLInputElement)
    const inputValorMaior = (this.refs['valorMaior'] as any as HTMLInputElement)
    const inputDataMenor = (this.refs['dataMenor'] as any as HTMLInputElement)
    const inputDataMaior = (this.refs['dataMaior'] as any as HTMLInputElement)

    const nome = inputNome.value.trim();
    const conta = inputConta.value.trim();
    const valorMenor = inputValorMenor.value.trim();
    const valorMaior = inputValorMaior.value.trim();
    const dataMenor = inputDataMenor.value.trim();
    const dataMaior = inputDataMaior.value.trim();

    let contaNumber = (conta != '') ? parseInt(conta) : -1
    let valorMenorNumber = (valorMenor != '') ? parseInt(valorMenor) : -1
    let valorMaiorNumber = (valorMaior != '') ? parseInt(valorMaior) : -1
    let dataMenorDate = (dataMenor != '') ? Date.parse(dataMenor) : -1
    let dataMaiorDate = (dataMaior != '') ? Date.parse(dataMaior) : -1

    this.props.filtrar(nome, contaNumber, valorMenorNumber, valorMaiorNumber, dataMenorDate, dataMaiorDate);

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
                <td>Filtrar transações</td>
              </tr>
              <tr>
                <td><input type="text" ref="valorMenor" placeholder="Valor menor" disabled={filtrando} /></td>
                <td><input type="text" ref="valorMaior" placeholder="Valor menor" disabled={filtrando} /></td>
              </tr>
              <tr>
                <td><input type="text" ref="dataMenor" placeholder="Data menor" disabled={filtrando} /></td>
                <td><input type="text" ref="dataMaior" placeholder="Data menor" disabled={filtrando} /></td>
              </tr>
              <tr>
                <td><input type="submit" value="Filtrar" onClick={this.handleSubmit.bind(this)} style={!filtrando ? {} : { display: 'none' }} /></td>
              </tr>
            </tbody>
          </table>
        </form>
        <br />
        <br />
        <input type="button" style={filtrando ? {} : { display: 'none' }} value="Limpar filtros aplicados" onClick={this.handleLimparFiltros.bind(this)} />
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