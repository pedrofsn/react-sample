import * as React from 'react';

interface State {
  contas: {
    id: number;
    nome: string;
    conta: number;
    saldo: number;
  }[];
}

export class ResumoConta extends React.Component<{}, State> {
  constructor(props : any) {
    super(props);
    this.state = {
      contas: [
        {
          id: 1,
          nome : "Banco do Brasil",
          conta : 94080,
          saldo : 2000.99
        },
        {
          id: 2,
          nome : "Itaú",
          conta : 94080,
          saldo : 2000.99
        }
      ]
    };
  }

  render() {
    let jsx = <select>
        {
          this.state.contas.map(function (obj) {
            return <option key={obj.id}>
              Nome: {obj.nome} | Conta: {obj.conta} | Saldo: {obj.saldo}
            </option>
          })
        }
      </select>;
 
    return jsx;
  }
}