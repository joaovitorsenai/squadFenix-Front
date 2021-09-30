import { Component } from 'react';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../api';
import Header from '../../Header'
import Footer from '../../Footer'

import './Media.css';

class Medias extends Component{

    state = {
      lista: [],
    }
    async componentDidMount(){
      const response = await api.get('/medias');
      this.setState({lista : response.data})
    }
    render(){
      const {lista} = this.state;
      console.log(lista);

      return(   

      <div className ="container">

         <Header/>
        
        <h2 className="title">Tabela de Médias</h2>   
        <Table className="tabela" striped bordered hover variant="dark">
          <thead>
          <tr>
            <th>Dado</th>
            <th>TEMP</th>
            <th>T1</th>
            <th>T2</th>
            <th>T3</th>
            <th>TM</th>
            <th>TCorr</th>
          </tr>
          </thead>
          <tbody>
  
          {
            lista.map((list) => (
              <tr key = {list.id}>
                <td>{list.id}</td>
                <td>{list.mediaTA}</td>
                <td>{list.mediaT1}</td>
                <td>{list.mediaT2}</td>
                <td>{list.mediaT3}</td>
                <td>{list.mediaM}</td>
                <td>{list.mediaCor}</td>
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

  export default Medias;