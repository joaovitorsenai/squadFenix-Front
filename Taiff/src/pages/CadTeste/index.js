import React, { Component } from "react";
import api from "../../api";
import Header from "../../Header";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

class CadTeste extends Component{

    constructor(props){
        super(props);
        var ultimo;
        this.state={
            lista:[],
            nome:"",
            modelo:"",
            dataTeste:"",
            idZeroPeca:""
        }
        this.handleChangeN = this.handleChangeN.bind(this);
        this.handleChangeM = this.handleChangeM.bind(this);
        this.handleChangeD = this.handleChangeD.bind(this);
    
    }
    
    handleChangeN(event) {
        this.setState({nome: event.target.value});
        this.setState({idZeroPeca: this.ultimo});
      };
    
      handleChangeM(event) {
        this.setState({modelo: event.target.value});
      };

      handleChangeD(event) {
        this.setState({dataTeste: event.target.value});
      };

        
      onRequest = async () =>{
    
        try{
            const res = await api.post('/gravarteste', {...this.state});
            return res.data
        } catch (error) {
            console.log('não deu certo', error);
        }
    
      };

      async componentDidMount(){
        const response = await api.get('/zeroPeca');
        this.setState({lista : response.data})
      }

render(){
    const {lista} = this.state;
    console.log(lista);

    const listaID = lista.map((list) => {
        return list.id
    });

    this.ultimo = listaID[listaID.length -1];
    console.log(this.ultimo);


    return(

        <div className="container">
            <Header/>
            <h2> Cadastro de Teste</h2>
                <form>
                    <div className="fields">
                        
                        <input type="text" id="n" value={this.state.nome} onChange={this.handleChangeN} className="campo" name="Nome" placeholder="Nome"/>
                    </div>

                    <div className="fields">
                        
                        <input type="text" id="m" value={this.state.modelo} onChange={this.handleChangeM} className="campo" name="Modelo" placeholder="Modelo"/>
                    </div>

                    <div className="fields">
                        
                        <input type="text" id="d" value={this.state.dataTeste} onChange={this.handleChangeD} className="campo" name="Data" placeholder="xx/xx/xxxx"/>
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