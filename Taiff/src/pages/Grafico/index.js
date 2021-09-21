import React, { Component } from "react";
import {Line} from 'react-chartjs-2'
import api from "../../api";
import Header from "../../Header";
import Footer from "../../Footer";

class Grafico extends Component{

    state = {
        dados: [],
      }
      async componentDidMount(){
        const response = await api.get('/temperaturas');
        this.setState({dados : response.data})
      }

    render(){
        var chart = document.getElementById('myChart');
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
                <Line id="myChart" 
                data={{
                    labels: id,
                    datasets: [
                        {
                        label: 'Termopar A',
                        data: tA,
                        fill: false,
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            ],
                        tension: 0.2,
                        borderWidth: 2
                        },
                        {
                        label: 'Termopar 1',
                        data: t1,
                        fill: false,
                        backgroundColor: [
                            'rgba(54, 162, 235, 1)',
                                ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                            ],
                        tension: 0.2,
                        borderWidth: 2
                        },
                        {
                            label: 'Termopar 2',
                            data: t2,
                            fill: false,
                            backgroundColor: [
                                'rgba(255, 206, 86, 1)',
                                ],
                            borderColor: [
                                'rgba(255, 206, 86, 1)',
                            ],
                            tension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Termopar 3',
                            data: t3,
                            fill: false,
                            backgroundColor: [
                                'rgba(75, 192, 192, 1)' ,
                            ],
                            borderColor: [    
                                'rgba(75, 192, 192, 1)',   
                            ],
                            tension: 0.2,
                            borderWidth: 2
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
            <Footer/>
        </div>    
    )
}
}

export default Grafico;