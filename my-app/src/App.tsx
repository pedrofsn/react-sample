import * as React from 'react';
import { ResumoConta } from './components/ResumoConta';
import { AdicionarTransacao } from './components/AdicionarTransacao';
import { AdicionarConta } from './components/AdicionarConta';
import { Conta } from './models/Conta';
import './App.css';
import { Transacao } from './models/Transacao';

const logo = require('./logo.svg');

class App extends React.Component<{}, { contas: Conta[], contasTemp: Conta[] }> {

  componentWillMount() {
    this.state = {
      contasTemp: [],
      contas: [
        {
          id: 1,
          nome: "Caixa",
          conta: 12,
          saldo: 100,
          transacoes: [
            {
              isCredito: true,
              nome: "Bitcoin",
              data: new Date(),
              valor: 100
            }
          ]
        },
        {
          id: 2,
          nome: "Itaú",
          conta: 1234,
          saldo: 300,
          transacoes: [
            {
              isCredito: true,
              nome: "Depósito",
              data: new Date(),
              valor: 300
            }
          ]
        }
      ]
    }
  }

  handleAdicionarConta(novaConta: Conta) {
    let myContas = this.state.contas
    let match = false

    for (let i = 0; i < myContas.length; i++) {
      // Conta existe?
      if (myContas[i].conta === novaConta.conta || novaConta.id === myContas[i].id) {
        match = true
        break
      }
    }

    if (!match) {
      myContas.push(novaConta);
      this.setState({ contas: myContas })
    } else {
      alert('Conta já existente')
    }
  }

  handleAdicionarTransacao(conta: number, transacao: Transacao) {
    let myContas = this.state.contas
    let match = false
    for (let i = 0; i < myContas.length; i++) {

      // Conta existe?
      if (myContas[i].conta === conta) {
        myContas[i].transacoes.push(transacao);
        match = true

        // computar saldo
        let saldo: number = 0
        for (let j = 0; j < myContas[i].transacoes.length; j++) {
          if (myContas[i].transacoes[j].isCredito) {
            saldo += myContas[i].transacoes[j].valor
          } else {
            saldo -= myContas[i].transacoes[j].valor
          }
        }

        // Atualizar o saldo
        myContas[i].saldo = saldo
      }
    }

    if (match) {
      this.setState({ contas: myContas })
    } else {
      alert('Conta inexistente')
    }
  }

  handleFiltrar(nome: String, conta: number, valor: number, isCredito: boolean) {
    const contasBackup = new Array<Conta>()
    let contasFiltradas = this.state.contas

    // Backupando contas existentes
    if (this.state.contasTemp.length == 0) {
      contasFiltradas.forEach(conta => contasBackup.push(conta))
    } else {
      const { contasTemp } = this.state
      contasTemp.forEach(conta => contasBackup.push(conta))
    }

    if (contasFiltradas.length > 0 && nome != '') {
      for (let i = 0; i < contasFiltradas.length; i++) {
        let caso = contasFiltradas[i].nome === nome
        if (!caso && i > -1) {
          contasFiltradas.splice(i, 1);
        }
      }
    } else if (nome == '' || nome == undefined) {
      contasFiltradas = contasBackup
    }

    this.setState({ contas: contasFiltradas, contasTemp: contasBackup })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Gerenciamento Financeiro</h2>
        </div>
        <div className="coluna">
          <ResumoConta contas={this.state.contas} filtrar={this.handleFiltrar.bind(this)} />
        </div>
        <div className="coluna">
          <AdicionarConta adicionarConta={this.handleAdicionarConta.bind(this)} />
        </div>
        <div className="coluna">
          <AdicionarTransacao adicionarTransacao={this.handleAdicionarTransacao.bind(this)} />
        </div>
      </div>
    );
  }
}
export default App;