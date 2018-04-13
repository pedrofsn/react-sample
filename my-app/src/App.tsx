import * as React from 'react';
import { Conta } from './models/Conta';
import './App.css';
import { Transacao } from './models/Transacao';
import './css/pure-min.css';
import './css/side-menu.css';
import {Link} from 'react-router-dom';


//const logo = require('./logo.svg');

class App extends React.Component<{}, { contas: Conta[], contasTemp: Conta[], filtrando: boolean }> {

  componentWillMount() {
    this.state = {
      filtrando: false,
      contasTemp: [],
      contas: [
        {
          id: 1,
          nome: "Caixa",
          conta: 12,
          descricao: "Minha conta poupança da CAIXA",
          saldo: 100,
          transacoes: [
            {
              tipo: "Crédito",
              nome: "Bitcoin",
              data: new Date(),
              valor: 100
            },
            {
              tipo: "Crédito",
              nome: "Salário",
              data: new Date(),
              valor: 50
            },
            {
              tipo: "Crédito",
              nome: "Freelancer",
              data: new Date(),
              valor: 1080
            }
          ]
        },
        {
          id: 2,
          nome: "Itaú",
          conta: 1234,
          descricao: "Minha conta poupança da CAIXA",
          saldo: 300,
          transacoes: [
            {
              tipo: "Crédito",
              nome: "Depósito",
              data: new Date(),
              valor: 300
            }
          ]
        }
      ]
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
          if (myContas[i].transacoes[j].tipo) {
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

  handleLimparFiltros() {
    this.setState({ contas: this.state.contasTemp, contasTemp: this.state.contasTemp, filtrando: false })
  }

  handleFiltrar(nome: String, conta: number) {
    const contasTemp = new Array<Conta>()
    var contasFiltradas = this.state.contas

    if (this.state.contasTemp.length == 0) {
      for (let conta of this.state.contas) {
        contasTemp.push(conta)
      }
    } else {
      for (let conta of this.state.contasTemp) {
        contasTemp.push(conta)
      }
    }

    if (contasFiltradas.length > 0) {
      if (nome != '') {
        contasFiltradas = contasFiltradas.filter(c => c.nome == nome)
      }

      if (conta != -1) {
        contasFiltradas = contasFiltradas.filter(c => c.conta == conta)
      }
    }

    this.setState({ contas: contasFiltradas, contasTemp: contasTemp, filtrando: true })
  }

  render() {
    return (
      <div id="layout">
        <div id="menu">
          <div className="pure-menu">

              <ul className="pure-menu-list">
                  <li className="pure-menu-item"><Link to="/home" className="pure-menu-link">Home</Link></li>
                  <li className="pure-menu-item"><Link to="/addconta" className="pure-menu-link">Cadastrar Conta</Link></li>
                  <li className="pure-menu-item"><Link to="/transacoes" className="pure-menu-link">Transações</Link></li>
              </ul>
          </div>
      </div>
      <div className="App">
        {this.props.children}
      </div>
    </div>
    );
  }
}
export default App;