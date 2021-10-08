import React, { Component } from "react";
import api from "../../api";
import Header from "../../Header";
import Footer from "../../Footer";

class CadProduto extends Component{

    constructor(props){
        super(props);
        this.state={
            nome:"",
            modelo:""
        }
        this.handleChangeN = this.handleChangeN.bind(this);
        this.handleChangeM = this.handleChangeM.bind(this);
    
    }
    
    
    
    handleChangeN(event) {
        this.setState({nome: event.target.value});
      };
    
      handleChangeM(event) {
        this.setState({modelo: event.target.value});
      };
        
    
      onRequest = async () =>{
    
        try{
            const res = await api.post('/gravaproduto', {...this.state});
            return res.data
        } catch (error) {
            console.log('não deu certo', error);
        }
    
      };

render(){
    return(

        <div className="container">
            <Header/>
            <h2> Cadastro de Produtos</h2>
                <form>
                    <div className="fields">
                        <label>Nome</label>
                        <input type="text" id="n" value={this.state.n} onChange={this.handleChangeN}/>
                    </div>

                    <div className="fields">
                        <label>Modelo</label>
                        <input type="text" id="m" value={this.state.m} onChange={this.handleChangeM}/>
                    </div>

                    <div className="btn-produto">
                            <button onClick={this.onRequest} type="submit">Enviar</button>
                        </div>
                </form>
            <Footer/>
        </div>
    );
}

}

export default CadProduto