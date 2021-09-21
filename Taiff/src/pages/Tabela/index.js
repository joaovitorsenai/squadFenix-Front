import { Component } from 'react';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../api';
import Header from '../../Header'
import Footer from '../../Footer'

import './Tabela.css';

class Posicoes extends Component{

    state = {
      lista: [],
    }
    async componentDidMount(){
      const response = await api.get('/posicoes');
      this.setState({lista : response.data})
    }
    render(){
      const {lista} = this.state;
      console.log(lista);

      return(   

      <div className ="container">

         <Header/>
        
        <h2 className="title">Tabela de Posições</h2>   
        <Table className="tabela" striped bordered hover variant="dark">
          <thead>
          <tr>
            <th>ID</th>
            <th>Nome do Produto</th>
            <th>Eixo X</th>
            <th>Eixo Y</th>
            <th>Eixo Z</th>
            <th>Rotação</th>
            <th>Tempo(s)</th>
          </tr>
          </thead>
          <tbody>
  
          {
            lista.map((list) => (
              <tr key = {list.id}>
                <td>{list.id}</td>
                <td>{list.produto.nome}</td>
                <td>{list.eixoX}</td>
                <td>{list.eixoY}</td>
                <td>{list.eixoZ}</td>
                <td>{list.rotacao}</td>
                <td>{list.tempo}</td>
              </tr>
          ))
           }
          </tbody>
  
          </Table>
          
          <Footer/> 
          
      </div>    
      
      );
    }
    
  }

  export default Posicoes;