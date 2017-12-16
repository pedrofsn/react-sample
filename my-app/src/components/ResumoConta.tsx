import * as React from 'react';
import { Conta } from '../models/Conta';

export default interface Props {
  contas: Conta[];
}

export class ResumoConta extends React.Component<Props> {
  render() {
    const { contas } = this.props;

    return (
      <select>
        {
          contas.map((obj) => {
            return <option key={obj.id}>
              Nome: {obj.nome} | Conta: {obj.conta}
            </option>
          })
        }
      </select>
    );
  }
}