import * as React from 'react';
import { ResumoConta } from './components/ResumoConta';
import { Conta } from './models/Conta';
import './App.css';
import {observer} from 'mobx-react';
import { Transacoes } from './components/Transacoes';

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

  conta_id_selecionada : number
  contas : Conta[]

  componentWillMount() {
    this.conta_id_selecionada = 1
    this.contas = [
      new Conta(
        1,
        "Banco do Brasil",
        94080
      ),
      {
        id: 2,
        nome: "Itaú",
        conta: 94080
      }
    ]
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
        <Transacoes contas={this.contas} conta_id_selecionada={this.conta_id_selecionada} /> 
      </div>
    );
  }
}
export default App;
