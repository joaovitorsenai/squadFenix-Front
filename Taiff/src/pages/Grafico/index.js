import React from "react";
import {Line} from 'react-chartjs-2'
import Header from "../../Header";
import Footer from "../../Footer";

const grafico = () => {
    return(
        <div className="container">
            <Header/>
                <div className="grafico">
                <Line
                data={{
                    labels: [0, 500, 1000, 1500, 2000, 2500],
                    datasets: [
                        {
                        label: 'Termopar A',
                        data: [50, 40, 30, 20, 10, 15],
                        fill: false,
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            ],
                        borderColor: [
                            'rgb(0 ,0 ,0)',
                            ],
                        tension: 0.2,
                        borderWidth: 2
                        },
                        {
                        label: 'Termopar 1',
                        data: [26 ,14 ,5 ,3 ,8 ,11],
                        fill: false,
                        backgroundColor: [
                            'rgba(54, 162, 235, 1)',
                                ],
                        borderColor: [
                            'rgb(0 ,0 ,0 )',
                            ],
                        tension: 0.2,
                        borderWidth: 2
                        },
                        {
                            label: 'Termopar 2',
                            data: [22 ,29 ,15 ,13 ,18 ,21],
                            fill: false,
                            backgroundColor: [
                                'rgba(255, 206, 86, 1)',
                                ],
                            borderColor: [
                                'rgb(0 ,0 ,0 )',
                            ],
                            tension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Termopar 3',
                            data: [32 ,39 ,25 ,23 ,28 ,31],
                            fill: false,
                            backgroundColor: [
                                'rgba(75, 192, 192, 1)' ,
                            ],
                            borderColor: [    
                                'rgb(0 ,0 ,0 )',   
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

export default grafico;