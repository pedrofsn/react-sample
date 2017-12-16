import * as React from 'react';
import { Conta } from '../models/Conta';

export default interface PropsTransacoes {
  conta_id_selecionada: number,
  contas: Conta[];
}

export class Transacoes extends React.Component<PropsTransacoes> {
  render() {
    const { contas, conta_id_selecionada } = this.props;

    return (
      <table style={{ display: "inline-table" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          {
            contas.map(
              (conta) => {

                console.log("conta: " + conta.id)
                if (conta.id == conta_id_selecionada && conta.transacoes != null) {

                  conta.transacoes.map(
                    (transacao) => {
                      return <tr key={`transacao-${transacao.id}`}>
                        <td>{transacao.nome}</td>
                        <td>{transacao.nome}</td>
                        <td>{transacao.nome}</td>
                      </tr>
                    }
                  ) 

                }
              })
          }
        </tbody>
      </table>
    );

  }
}

