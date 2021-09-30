import React, { Component } from "react";
import {Line} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import api from "../../api";
import Header from "../../Header";
import Footer from "../../Footer";

import "./Grafico.css"

class Grafico extends Component{

    state = {
        dados: [],
      }
      async componentDidMount(){
        const response = await api.get('/temperaturas');
        this.setState({dados : response.data})
      }

      

    render(){
        const {dados} = this.state;
        console.log(dados);

        const id = dados.map((dado) =>(dado.id));
        const t1 = dados.map((dado) =>(dado.t1));
        const t2 = dados.map((dado) =>(dado.t2));
        const t3 = dados.map((dado) =>(dado.t3));
        const tA = dados.map((dado) =>(dado.tAmbiente));


    return(
        <div className="container">
            <Header/>
                <div className="grafico">
                <Line 
                data={{
                    labels: id,
                    datasets: [
                        {
                        label: 'Termopar A',
                        data: tA,
                        fill: false,
                        backgroundColor: [
                            'transparent',
                            ],
                        borderColor: [
                            'rgba(148,0,211,0.50)',
                            ],
                        borderWidth: 3
                        },
                        {
                        label: 'Termopar 1',
                        data: t1,
                        fill: false,
                        backgroundColor: [
                            'transparent',
                                ],
                        borderColor: [
                            'rgba(0,0,128,0.50)',
                            ],
                        borderWidth: 3
                        },
                        {
                            label: 'Termopar 2',
                            data: t2,
                            fill: false,
                            backgroundColor: [
                                'transparent',
                                ],
                            borderColor: [
                                'rgba(139,0,0,0.50)',
                            ],
                            borderWidth: 3
                        },
                        {
                            label: 'Termopar 3',
                            data: t3,
                            fill: false,
                            backgroundColor: [
                                'transparent' ,
                            ],
                            borderColor: [    
                                'rgba(0,100,0,0.50)',   
                            ],
                            borderWidth: 3
                        },
                    ],
                
                    }}
                height={600}
                    width={1000}
                    options={{
                        maintainAspectRatio: false,
                        scales:{
                            yAxes:[
                                {
                                    ticks:{
                                        beginAtZero: true
                                    }
                                }
                            ]
                        }
                    }} 
                />
                </div>
                <div className="botoes">
                    <a className="botao" href="http://localhost:8080/temperaturacsv">Baixar CSV</a>
                    <Link className="botao" to="/media">Ver Resultado</Link>
                </div>
            <Footer/>
        </div>    
    )
}
}

export default Grafico;