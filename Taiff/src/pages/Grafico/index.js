import React, { Component } from "react";
import { Line, Chart } from 'react-chartjs-2';
import 'chartjs-adapter-luxon';
import StreamingPlugin from 'chartjs-plugin-streaming';
import {Link} from 'react-router-dom';
import api from "../../api";
import Header from "../../Header";
import Footer from "../../Footer";

Chart.register(StreamingPlugin);




import "./Grafico.css"
import '../CSSbotao.css';

class Grafico extends Component{

    state = {
        dados: [],
      }
      async componentDidMount(){
        const response = await api.get('/temperaturas');
        this.setState({dados : response.data})
      }
      

    render(){

        /*const {dados} = this.state;
        console.log(dados);
       
        const dataTeste = dados.map((dado) =>(dado.dataTeste));
        const t1 = dados.map((dado) =>(dado.t1));
        const t2 = dados.map((dado) =>(dado.t2));
        const t3 = dados.map((dado) =>(dado.t3));
        const tA = dados.map((dado) =>(dado.tAmbiente));*/
          
    return(
        <div className="container">
            <Header/>
                <div className="grafico">
                <Line 
                data={{
                    labels: [],
                    datasets: [
                        {
                        label: 'Termopar A',
                        data: [],
                        fill: false,
                        tension: 0.3,
                        backgroundColor: 
                            'rgba(148,0,211,0.50)',
                            
                        borderColor: 
                            'rgba(148,0,211,0.50)',
                            
                        borderWidth: 2
                        },
                        {
                        label: 'Termopar 1',
                        data: [],
                        fill: false,
                        tension: 0.3,
                        backgroundColor: 
                            'rgba(0,0,128,0.50)',
                                
                        borderColor: 
                            'rgba(0,0,128,0.50)',
                            
                        borderWidth: 2
                        },
                        {
                            label: 'Termopar 2',
                            data: [],
                            fill: false,
                            tension: 0.3,
                            backgroundColor: 
                                'rgba(139,0,0,0.50)',
                                
                            borderColor: 
                                'rgba(139,0,0,0.50)',
                            
                            borderWidth: 2
                        },
                        {
                            label: 'Termopar 3',
                            data: [],
                            fill: false,
                            tension: 0.3,
                            backgroundColor: 
                                'rgba(0,100,0,0.50)', 
                            
                            borderColor:    
                                'rgba(0,100,0,0.50)',   
                            
                            borderWidth: 2
                        },
                    ],
                
                    }}
                height={600}
                    width={1000}
                    options={{
                        maintainAspectRatio: false,
                        scales:{
                            x:{
                                type: 'realtime',
                                realtime: {
                                    onRefresh: chart => {
            
                                        fetch('http://localhost:8080/temperaturas')
                                          .then(response => response.json())
                                          .then(data => {
                                             console.log(data)   
                                            chart.data.datasets[0].data.push(...data);
            
                                            chart.update('quiet');
                                          });
                            }}
                            },
                            
                        }
                    }} 
                    
                />
                </div>
                <div className="botoes">
                    <a className="botao" href="http://localhost:8080/temperaturacsv">Baixar CSV</a>
                    <Link className="botao" to="/InfoTeste">Gerar Relatório</Link>
                </div>
            <Footer/>
        </div>    
    )
}
}

export default Grafico;
