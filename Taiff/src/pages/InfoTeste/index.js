import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../api';
import Header from '../../Header'
import Footer from '../../Footer'
import relatorioPDF from "../../Reports/Relatorio/relatorio";

import './Media.css';

class InfoTeste extends Component{

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
            <div className="card-body-post">

              <form>

                  <div className="fields">
                      <label>Executante</label>
                      <input type="text"/>
                  </div>

                  <div className="fields">
                      <label>Data</label>
                      <input type="text"/>
                  </div>

                  <div className="fields">
                      <label>Tipo do Produto</label>
                      <input type="text"/>
                  </div>

                  <div className="fields">
                      <label>Especificar</label>
                      <input type="text"/>
                  </div>

                  <div className="fields">
                      <label>Fabricante</label>
                      <input type="text"/>
                  </div>

                  <div className="fields">
                      <label>Modelo na Placa</label>
                      <input type="text"/>
                  </div>

                  <div className="fields">
                      <label>Freq. da Placa [Hz]</label>
                      <input type="text"/>
                  </div>

                  <div className="fields">
                      <label>País de Fabricação</label>
                      <input type="text"/>
                  </div>

                  <div className="fields">
                      <label>Nome do Modelo Comercial</label>
                      <input type="text"/>
                  </div>

                  <div className="fields">
                      <label>Tens. na Placa [V]</label>
                      <input type="text"/>
                  </div>

                  <div className="fields">
                      <label>Pot. da Placa [W]</label>
                      <input type="text"/>
                  </div>

                  <div className="btn-post">
                      <button className="botao" type="submit">Enviar</button>
                      <button className="botao" onClick={()=>relatorioPDF(lista)} >Gerar Relatório</button>
                  </div>
              </form>

            </div>
          <Footer/> 
          
      </div>    
      
      );
    }
    
  }

  export default InfoTeste;