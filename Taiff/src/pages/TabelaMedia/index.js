import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../api';
import Header from '../../Header'
import Footer from '../../Footer'
import relatorioPDF from "../../Reports/Relatorio/relatorio";

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
            <div className="card-body-post">

              <form>

                  <div className="fields">
                      <label>Teste</label>
                      <input type="text"/>
                  </div>

                  <div className="fields">
                      <label>Eixo X</label>
                      <input type="text"/>
                  </div>

                  <div className="fields">
                      <label>Eixo Y</label>
                      <input type="text"/>
                  </div>

                  <div className="fields">
                      <label>Eixo Z</label>
                      <input type="text"/>
                  </div>

                  <div className="fields">
                      <label>Rotação</label>
                      <input type="text"/>
                  </div>

                  <div className="fields">
                      <label>Tempo(s)</label>
                      <input type="text"/>
                  </div>

                  <div className="btn-post">
                      <button className="botao" type="submit">Enviar</button>
                      <button className="botao" onClick={()=>relatorioPDF()} >Gerar Relatório</button>
                  </div>
              </form>

            </div>
          <Footer/> 
          
      </div>    
      
      );
    }
    
  }

  export default Medias;