import * as React from 'react';
import { Conta } from '../models/Conta';

export default interface Props {
  contas: Conta[];
}

export class ResumoConta extends React.Component<Props> {
  render() {
    const { contas } = this.props;

    return (
      <div>
        {
          contas.map(
            (conta) => {
              return <div>
                <br />
                <br />
                <strong key={conta.id}> Nome: {conta.nome} | Conta: {conta.conta} | Saldo: {conta.saldo} </strong>
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
              </div>
            }
          )
        }
      </div>
    );
  }
}