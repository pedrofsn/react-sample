import * as React from 'react';
import { Transacao } from './models/Transacao';

export default interface Props {
  transacoes: Transacao[];
}

export class Transacoes extends React.Component<Props> {
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
            transacoes.map((obj) => {
              return <tr key={`transacao-${obj.id}`}>
                <td>{obj.nome}</td>
                <td>{obj.nome}</td>
                <td>{obj.nome}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    );

  }
}

