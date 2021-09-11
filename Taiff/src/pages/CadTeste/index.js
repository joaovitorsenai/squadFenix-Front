import React, {Component} from "react";
import api from "../../api";
import Header from '../../Header'
import Footer from '../../Footer'

import './Form.css';



class Teste extends Component{
    constructor(props){
    super(props);
    this.state={
        eixoX:"",
        eixoY:"",
        eixoZ:"",
        rotacao:"",
        tempo:"",
        produto:""
    }
    this.handleChangeX = this.handleChangeX.bind(this);
    this.handleChangeY = this.handleChangeY.bind(this);
    this.handleChangeZ = this.handleChangeZ.bind(this);
    this.handleChangeR = this.handleChangeR.bind(this);
    this.handleChangeT = this.handleChangeT.bind(this);
    this.handleChangeP = this.handleChangeP.bind(this);

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

  handleChangeP(event) {
    this.setState({produto: event.target.value});
  }
    

  onRequest = async () =>{

    try{
        const res = await api.post('/gravarposicao', {...this.state});
        return res.data
    } catch (error) {
        console.log('não deu certo', error);
    }

  };


render(){
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
                            <label>Produto</label>
                            <input type="text" id="prod" value={this.state.produto} onChange={this.handleChangeP} />
                        </div>

                        <div className="fields">
                            <label>Eixo X</label>
                            <input type="text" id="x" value={this.state.eixoX} onChange={this.handleChangeX} />
                        </div>

                        <div className="fields">
                            <label>Eixo Y</label>
                            <input type="text" id="y" value={this.state.eixoY} onChange={this.handleChangeY}  />
                        </div>

                        <div className="fields">
                            <label>Eixo Z</label>
                            <input type="text" id="z" value={this.state.eixoZ} onChange={this.handleChangeZ} />
                        </div>

                        <div className="fields">
                            <label>Rotação</label>
                            <input type="text" id="rot" value={this.state.rotacao} onChange={this.handleChangeR} />
                        </div>

                        <div className="fields">
                            <label>Tempo(s)</label>
                            <input type="text" id="temp" value={this.state.tempo} onChange={this.handleChangeT} />
                        </div>

                        <div className="btn-post">
                            <button onClick={this.onRequest} type="submit">Enviar</button>
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
export default Teste;