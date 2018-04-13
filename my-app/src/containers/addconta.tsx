import * as React from 'react';
import { AdicionarConta } from '../components/AdicionarConta';
import { Conta } from '../models/Conta';
import '../App.css';
import '../css/pure-min.css';
import '../css/side-menu.css';

class AddConta extends React.Component<{}, { contas: Conta[], contasTemp: Conta[]}> {

  componentWillMount() {
    this.state = {
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
              tipo: "credito",
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
          descricao: "Minha conta corrente do Itaú",
          saldo: 300,
          transacoes: [
            {
              tipo: "credito",
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

  render() {
    return (
        <div className="">
          <AdicionarConta adicionarConta={this.handleAdicionarConta.bind(this)} contas={this.state.contas}/>
        </div>
    );
  }
}
export default AddConta;