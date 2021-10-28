import React, { Component } from "react";
import api from "../../api";
import Header from "../../Header";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

class CadZeroPeca extends Component{

    constructor(props){
        super(props);
        this.state={
            x:"",
            y:"",
            z:"",
            r:"",
            
        }
        this.handleChangeX = this.handleChangeX.bind(this);
        this.handleChangeY = this.handleChangeY.bind(this);
        this.handleChangeZ = this.handleChangeZ.bind(this);
        this.handleChangeR = this.handleChangeR.bind(this);

        
    
    }
    
    
    
    handleChangeX(event) {
        this.setState({x: event.target.value});
      };
    
      handleChangeY(event) {
        this.setState({y: event.target.value});
      };
    
      handleChangeZ(event) {
        this.setState({z: event.target.value});
      };
    
      handleChangeR(event) {
        this.setState({r: event.target.value});
      };


      onRequest = async () =>{
    
        try{
            const res = await api.post('/zeropeca', {...this.state});
            return res.data
        } catch (error) {
            console.log('não deu certo', error);
        }
    
      };

render(){
    return(
        <div className="container">
            <Header/>
                <h2>Cadastro Zero Peça</h2>
                <form>
                    <div className="fields">
                        <label>eixoX</label>
                        <input type="text" id="x" value={this.state.x} onChange={this.handleChangeX} />
                    </div>

                    <div className="fields">
                        <label>eixoY</label>
                        <input type="text" id="y" value={this.state.y} onChange={this.handleChangeY}/>
                    </div>
                    <div className="fields">
                        <label>eixoZ</label>
                        <input type="text" id="z" value={this.state.z} onChange={this.handleChangeZ}/>
                    </div>

                    <div className="fields">
                        <label>Rotação</label>
                        <input type="text" id="r" value={this.state.r} onChange={this.handleChangeR}/>
                    </div>

                    <div className="btn-zeroPeca">
                            <Link onClick={this.onRequest} to="/cadTeste" type="submit">Enviar</Link>
                        </div>
                </form>
            <Footer/>
        </div>
    );
}

}

export default CadZeroPeca;