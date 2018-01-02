import * as React from 'react';
import { Transacao } from '../models/Transacao';

export default interface PropsTransacoes {
  transacoes: Transacao[];
}

export class Transacoes extends React.Component<PropsTransacoes> {
  render() {
    const { transacoes } = this.props;

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
            transacoes.map(
              (transacao) => {
                return (
                  <tr>
                    <td>{transacao.nome}</td>
                    <td>{transacao.nome}</td>
                    <td>{transacao.nome}</td>
                  </tr>
                )
              }
            )
          }
        </tbody>
      </table>
    );

  }
}

