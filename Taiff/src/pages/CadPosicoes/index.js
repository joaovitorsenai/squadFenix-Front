import React, {Component} from "react";
import api from "../../api";
import Header from '../../Header'
import Footer from '../../Footer'

import './Form.css';



class cadPosicoes extends Component{
    constructor(props){
    super(props);
    this.state={
      lista: [],
        eixoX:"",
        eixoY:"",
        eixoZ:"",
        rotacao:"",
        tempo:"",
        teste:""
    }
    this.handleChangeX = this.handleChangeX.bind(this);
    this.handleChangeY = this.handleChangeY.bind(this);
    this.handleChangeZ = this.handleChangeZ.bind(this);
    this.handleChangeR = this.handleChangeR.bind(this);
    this.handleChangeT = this.handleChangeT.bind(this);
    this.handleChangeTe = this.handleChangeTe.bind(this);

}



handleChangeX(event) {
    this.setState({eixoX: event.target.value});
  };

  handleChangeY(event) {
    this.setState({eixoY: event.target.value});
  };

  handleChangeZ(event) {
    this.setState({eixoZ: event.target.value});
  };

  handleChangeR(event) {
    this.setState({rotacao: event.target.value});
  };

  handleChangeT(event) {
    this.setState({tempo: event.target.value});
  };

  handleChangeTe(event) {
    this.setState({teste: event.target.value});
  }

  onRequest = async () =>{

    try{
        const res = await api.post('/gravarposicao', {...this.state});
        return res.data
    } catch (error) {
        console.log('não deu certo', error);
    }

  };

  async componentDidMount(){
    const response = await api.get('/testes');
    this.setState({lista : response.data})
  }


render(){
    const {lista} = this.state;
    console.log(lista);

    const ultimo = lista[lista.length -1];
    console.log(ultimo);
    

  return(
    <div className="container">
      <Header/>
        <main>
            <div className="card-post">

                <h1>Cadastro de Posições</h1>
                <div className="line-post"></div>

                <div className="card-body-post">

                    <form>

                        <div className="fields">
                            
                            <input type="text" id="idTeste" value={this.state.teste} onChange={this.handleChangeTe} className="campo" name="Teste" placeholder="Teste" />
                        </div>

                        <div className="fields">
                            
                            <input type="text" id="x" value={this.state.eixoX} onChange={this.handleChangeX} className="campo" name="Eixo-X" placeholder="Eixo-X" />
                        </div>

                        <div className="fields">
                            
                            <input type="text" id="y" value={this.state.eixoY} onChange={this.handleChangeY} className="campo" name="Eixo-Y" placeholder="Eixo-Y" />
                        </div>

                        <div className="fields">
                          
                            <input type="text" id="z" value={this.state.eixoZ} onChange={this.handleChangeZ} className="campo" name="Eixo-Z" placeholder="Eixo-Z" />
                        </div>

                        <div className="fields">
                            
                            <input type="text" id="rot" value={this.state.rotacao} onChange={this.handleChangeR} className="campo" name="Rotação" placeholder="Rotação" />
                        </div>

                        <div className="fields">
                            
                            <input type="text" id="temp" value={this.state.tempo} onChange={this.handleChangeT} className="campo" name="Tempo(s)" placeholder="Tempo(s)" />
                        </div>

                        <div className="btn-post">
                            <button className="botao" onClick={this.onRequest} type="submit">Enviar</button>
                        </div>
                    </form>

                </div>

            </div>
        </main>
      <Footer/>
    </div>
  );


}
}
export default cadPosicoes;