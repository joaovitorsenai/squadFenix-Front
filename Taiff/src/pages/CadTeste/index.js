import React, { Component } from "react";
import api from "../../api";
import Header from "../../Header";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

class CadTeste extends Component{

    constructor(props){
        super(props);
        this.state={
            nome:"",
            modelo:"",
            dataTeste:"",
            idZeroPeca:""
        }
        this.handleChangeN = this.handleChangeN.bind(this);
        this.handleChangeM = this.handleChangeM.bind(this);
        this.handleChangeD = this.handleChangeD.bind(this);
        this.handleChangeZ = this.handleChangeZ.bind(this);
    
    }
    
    handleChangeN(event) {
        this.setState({nome: event.target.value});
      };
    
      handleChangeM(event) {
        this.setState({modelo: event.target.value});
      };

      handleChangeD(event) {
        this.setState({dataTeste: event.target.value});
      };

      handleChangeZ(event) {
        this.setState({idZeroPeca: event.target.value});
      };
        
    
      onRequest = async () =>{
    
        try{
            const res = await api.post('/gravarteste', {...this.state});
            return res.data
        } catch (error) {
            console.log('não deu certo', error);
        }
    
      };

render(){
    return(

        <div className="container">
            <Header/>
            <h2> Cadastro de Teste</h2>
                <form>
                    <div className="fields">
                        <label>Nome</label>
                        <input type="text" id="n" value={this.state.nome} onChange={this.handleChangeN}/>
                    </div>

                    <div className="fields">
                        <label>Modelo</label>
                        <input type="text" id="m" value={this.state.modelo} onChange={this.handleChangeM}/>
                    </div>

                    <div className="fields">
                        <label>Data</label>
                        <input type="text" id="d" value={this.state.dataTeste} onChange={this.handleChangeD}/>
                    </div>

                    <div className="fields">
                        <label>Zero Peça</label>
                        <input type="text" id="z" value={this.state.idZeroPeca} onChange={this.handleChangeZ}/>
                    </div>

                    <div className="btn-produto">
                        <Link onClick={this.onRequest} to="/cadPosicoes" type="submit">Enviar</Link>
                        </div>
                </form>
            <Footer/>
        </div>
    );
}

}

export default CadTeste;