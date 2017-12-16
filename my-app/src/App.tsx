import * as React from 'react';
import { ResumoConta } from './ResumoConta';
import { Transacoes } from './Transacoes';
import { Transacao } from './models/Transacao';
import { Conta } from './models/Conta';
import './App.css';

const logo = require('./logo.svg');

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

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Gerenciamento Financeiro</h2>
        </div>
        <br />
        <ResumoConta contas={state.contas} />
        <br />
        <br />
        <Transacoes transacoes={state.transacoes} />
      </div>
    );
  }
}

export default App;
