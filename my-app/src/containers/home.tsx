import * as React from 'react';
import { ResumoConta } from '../components/ResumoConta';
import { Conta } from '../models/Conta';
import '../App.css';
import '../css/pure-min.css';
import '../css/side-menu.css';

class Home extends React.Component<{}, { contas: Conta[], contasTemp: Conta[], filtrando: boolean }> {

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
          descricao: "Minha conta coornte do Itaú",
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

  handleLimparFiltros() {
    this.setState({ contas: this.state.contasTemp, contasTemp: this.state.contasTemp, filtrando: false })
  }

  handleFiltrar(nome: String, valorI:number, valorF:number, dateI:string, dateF:string) {
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

      if (valorI != -1 && valorF != -1) {
        contasFiltradas[0].transacoes = contasFiltradas[0].transacoes.filter(valorObj => valorObj.valor >= valorI && valorObj.valor <= valorF)
      }

      if(dateI != '' && dateF != ''){
        contasFiltradas[0].transacoes = contasFiltradas[0].transacoes.filter(dateObj => dateObj.data.toLocaleDateString().toString() >= dateI && dateObj.data.toLocaleDateString().toString() <= dateF)
      }
    }

    this.setState({ contas: contasFiltradas, contasTemp: contasTemp, filtrando: true })
  }

  render() {
    return (
        <div className="">
          <ResumoConta contas={this.state.contas} filtrando={this.state.filtrando}
            filtrar={this.handleFiltrar.bind(this)} limparFiltros={this.handleLimparFiltros.bind(this)} />
        </div>
    );
  }
}
export default Home;