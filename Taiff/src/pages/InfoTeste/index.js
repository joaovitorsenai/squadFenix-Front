import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../api';
import Header from '../../Header'
import Footer from '../../Footer'
import { Link } from 'react-router-dom';
import relatorioPDF from "../../Reports/Relatorio/relatorio";

import './Info.css';
import '../CSSbotao.css';

class InfoTeste extends Component{
    constructor(props){
        super(props);
        
        this.state={
            lista: [],
            nome:"",
            data:"",
            tipoProduto:"",
            especificar:"",
            fabricante:"",
            modeloPlaca:"",
            freqPlaca:"",
            pais:"",
            nomeComercial:"",
            tensPlaca:"",
            potPlaca:"",
            local:"",
        }
        this.handleChangeNome = this.handleChangeNome.bind(this);
        this.handleChangeData = this.handleChangeData.bind(this);
        this.handleChangeTipo = this.handleChangeTipo.bind(this);
        this.handleChangeEspec = this.handleChangeEspec.bind(this);
        this.handleChangeFabri = this.handleChangeFabri.bind(this);
        this.handleChangeModelo = this.handleChangeModelo.bind(this);
        this.handleChangeFreq = this.handleChangeFreq.bind(this);
        this.handleChangePais = this.handleChangePais.bind(this);
        this.handleChangeNomeComercial = this.handleChangeNomeComercial.bind(this);
        this.handleChangeTens = this.handleChangeTens.bind(this);
        this.handleChangePot = this.handleChangePot.bind(this);
        this.handleChangeLocal = this.handleChangeLocal.bind(this);
        

    }
    async componentDidMount(){
      const response = await api.get('/medias');
      this.setState({lista : response.data})
    }

    handleChangeNome(event) {
        this.setState({nome: event.target.value});
      };

      handleChangeData(event) {
        this.setState({data: event.target.value});
      };

      handleChangeTipo(event) {
        this.setState({tipoProduto: event.target.value});
      };

      handleChangeEspec(event) {
        this.setState({especificar: event.target.value});
      };

      handleChangeFabri(event) {
        this.setState({fabricante: event.target.value});
      };

      handleChangeModelo(event) {
        this.setState({modeloPlaca: event.target.value})
      };

      handleChangeFreq(event) {
        this.setState({freqPlaca: event.target.value})
      };

      handleChangePais(event) {
        this.setState({pais: event.target.value})
      };
      
      handleChangeNomeComercial(event) {
        this.setState({nomeComercial: event.target.value})
      };

      handleChangeTens(event) {
        this.setState({tensPlaca: event.target.value})
      };

      handleChangePot(event) {
        this.setState({potPlaca: event.target.value})
      };

      handleChangeLocal(event) {
        this.setState({local: event.target.value})
      };

    render(){
      const {lista} = this.state;
      console.log(lista);

      return(   

      <div className ="container">

         <Header/>
            <div className="card-post">
              <h1 className="title">Dados Relatório</h1>
              <form>
                <div className="group">
                    <div className="fields">
                        <input type="text" className="campo" name="Execultante" placeholder="Executante" onChange={this.handleChangeNome}/>
                  
                        <input type="text" className="campo"name="Data" placeholder="xx/xx/xxxx" onChange={this.handleChangeData}/>
                  
                        <input type="text" className="campo"name="Produto" placeholder="Produto" onChange={this.handleChangeTipo}/>
                    </div>

                    <div className="fields">
                        <input type="text" className="campo"name="Especificação" placeholder="Especificação" onChange={this.handleChangeEspec}/>
                                          
                        <input type="text" className="campo"name="Fabricante" placeholder="Fabricante" onChange={this.handleChangeFabri}/>                 
                        
                        <input type="text" className="campo" name="Modelo na Placa" placeholder="Modelo na Placa" onChange={this.handleChangeModelo}/>
                    </div>

                    <div className="fields">                     
                        <input type="text" className="campo" name="Freq. da Placa [Hz]" placeholder="Freq. da Placa [Hz]" onChange={this.handleChangeFreq}/>
                                        
                        <input type="text" className="campo" name="País de Fabricação" placeholder="País de Fabricação" onChange={this.handleChangePais}/>
                                                    
                        <input type="text" className="campo" name="Nome do Modelo Comercial" placeholder="Nome do Modelo Comercial" onChange={this.handleChangeNomeComercial}/>
                    </div>

                    <div className="fields">                      
                        <input type="text" className="campo" name="Tens. na Placa [V]" placeholder="Tens. na Placa [V]" onChange={this.handleChangeTens}/>
                                                            
                        <input type="text" className="campo" name="Pot. da Placa [W]" placeholder="Pot. da Placa [W]" onChange={this.handleChangePot}/>
                                                            
                        <input type="text" className="campo" name="Local" placeholder="Local do Teste" onChange={this.handleChangeLocal}/>
                    </div>
                  </div>

                 
                  <div className="btn-post">
                      <button className="botao" type="submit" onClick={()=>relatorioPDF(lista, this.state.nome,
                        this.state.data, this.state.local, this.state.tipoProduto, this.state.especificar, this.state.fabricante, this.state.modeloPlaca, this.state.freqPlaca,
                        this.state.pais, this.state.nomeComercial, this.state.tensPlaca, this.state.potPlaca)} >Gerar Relatório</button>
                  </div>
              </form>

            </div>
          <Footer/> 
          
      </div>    
      
      );
    }
    
  }

  export default InfoTeste;