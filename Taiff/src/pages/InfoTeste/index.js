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
                      
                      <input type="text" className="campo" name="Execultante" placeholder="Executante"/>
                  </div>

                  <div className="fields">
                      
                      <input type="text" className="campo"name="Data" placeholder="xx/xx/xxxx"/>
                  </div>

                  <div className="fields">
                      
                      <input type="text" className="campo"name="Produto" placeholder="Produto"/>
                  </div>

                  <div className="fields">
                      
                      <input type="text" className="campo"name="Especificação" placeholder="Especificação"/>
                  </div>

                  <div className="fields">
                      
                      <input type="text" className="campo"name="Fabricante" placeholder="Fabricante"/>
                  </div>

                  <div className="fields">
                      
                      <input type="text" className="campo" name="Modelo na Placa" placeholder="Modelo na Placa"/>
                  </div>

                  <div className="fields">
                      
                      <input type="text" className="campo" name="Freq. da Placa [Hz]" placeholder="Freq. da Placa [Hz]"/>
                  </div>

                  <div className="fields">
                      
                      <input type="text" className="campo" name="País de Fabricação" placeholder="País de Fabricação"/>
                  </div>

                  <div className="fields">
                      
                      <input type="text" className="campo" name="Nome do Modelo Comercial" placeholder="Nome do Modelo Comercial"/>
                  </div>

                  <div className="fields">
                      
                      <input type="text" className="campo" name="Tens. na Placa [V]" placeholder="Tens. na Placa [V]"/>
                  </div>

                  <div className="fields">
                      
                      <input type="text" className="campo" name="Pot. da Placa [W]" placeholder="Pot. da Placa [W]"/>
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