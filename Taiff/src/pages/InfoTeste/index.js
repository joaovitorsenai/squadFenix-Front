import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../api';
import Header from '../../Header'
import Footer from '../../Footer'
import relatorioPDF from "../../Reports/Relatorio/relatorio";

import './Info.css';

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
            <div className="card-body-post">

              <form>

                  <div className="fields">
<<<<<<< HEAD
                      
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
=======
                      <label>Executante</label>
                      <input type="text" className="inserir" value={this.state.nome} onChange={this.handleChangeNome}/>
                  </div>

                  <div className="fields">
                      <label>Data</label>
                      <input type="text" className="inserir" value={this.state.data} onChange={this.handleChangeData}/>
                  </div>

                  <div className="fields">
                      <label>Local</label>
                      <input type="text" className="inserir" value={this.state.local} onChange={this.handleChangeLocal}/>
                  </div>

                  <div className="fields">
                      <label>Tipo do Produto</label>
                      <input type="text" className="inserir" value={this.state.tipoProduto} onChange={this.handleChangeTipo}/>
                  </div>

                  <div className="fields">
                      <label>Especificar</label>
                      <input type="text" className="inserir" value={this.state.especificar} onChange={this.handleChangeEspec}/>
                  </div>

                  <div className="fields">
                      <label>Fabricante</label>
                      <input type="text" className="inserir" value={this.state.fabricante} onChange={this.handleChangeFabri}/>
                  </div>

                  <div className="fields">
                      <label>Modelo na Placa</label>
                      <input type="text" className="inserir" value={this.state.modeloPlaca} onChange={this.handleChangeModelo}/>
                  </div>

                  <div className="fields">
                      <label>Freq. da Placa [Hz]</label>
                      <input type="text" className="inserir" value={this.state.freqPlaca} onChange={this.handleChangeFreq}/>
                  </div>

                  <div className="fields">
                      <label>País de Fabricação</label>
                      <input type="text" className="inserir" value={this.state.pais} onChange={this.handleChangePais}/>
                  </div>

                  <div className="fields">
                      <label>Nome do Modelo Comercial</label>
                      <input type="text" className="inserir" value={this.state.nomeComercial} onChange={this.handleChangeNomeComercial}/>
                  </div>

                  <div className="fields">
                      <label>Tens. na Placa [V]</label>
                      <input type="text" className="inserir" value={this.state.tensPlaca} onChange={this.handleChangeTens}/>
                  </div>

                  <div className="fields">
                      <label>Pot. da Placa [W]</label>
                      <input type="text" className="inserir" value={this.state.potPlaca} onChange={this.handleChangePot}/>
>>>>>>> feature/relatorio
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