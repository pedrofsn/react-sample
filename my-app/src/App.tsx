import * as React from 'react';
import { ResumoConta } from './components/ResumoConta';
import { Conta } from './models/Conta';
import './App.css';
import { observer } from 'mobx-react';
import { Transacoes } from './components/Transacoes';
import { Transacao } from './models/Transacao';

const logo = require('./logo.svg');
/*
let state = {
  contas: [
    new Conta(
      1,
      "Banco do Brasil",
      94080,
      2000.99
    ),
    {
      id: 2,
      nome: "Itaú",
      conta: 94080,
      saldo: 2000.99
    }
  ],
  transacoes: [
    new Transacao(
      1,
      true,
      "Depósito no caixa",
      new Date(),
      100,
      1
    ),
    {
      id: 2,
      isCredito: true,
      nome: "Depósito no caixa",
      data: new Date(),
      valor: 100,
      conta_id: 1
    }
  ]
};
*/
@observer
class App extends React.Component {

  contas: Conta[]
  transacoes: Transacao[]

  componentWillMount() {
    this.contas = [
      new Conta(
        1,
        "Banco do Brasil",
        94080,
        0
      ),
      {
        id: 2,
        nome: "Itaú",
        conta: 94080,
        saldo: 0
      }
    ]

    this.transacoes = [new Transacao(
      1,
      true,
      "Depósito",
      new Date(),
      100,
      1
    ),
    {
      id: 2,
      isCredito: true,
      nome: "Depósito",
      data: new Date(),
      valor: 100,
      conta_id : 2
    }]
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Gerenciamento Financeiro</h2>
        </div>
        <br />
        <ResumoConta contas={this.contas} />
        <br />
        <br />
        <Transacoes transacoes={this.transacoes} />
      </div>
    );
  }
}
export default App;
