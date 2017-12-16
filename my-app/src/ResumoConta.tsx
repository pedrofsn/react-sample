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
        }
      ]
    };
  }

  render() {
    let jsx = <table style={{ display: "inline-table" }}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Conta</th>
          <th>Saldo</th>
        </tr>
      </thead>
      <tbody>
        {
          this.state.contas.map(function (obj) {
            return <tr key={obj.id}>
              <td>{obj.nome}</td>
              <td>{obj.conta}</td>
              <td>{obj.saldo}</td>
            </tr>
          })
        }
      </tbody>
    </table>;
 
    return jsx;
  }
}