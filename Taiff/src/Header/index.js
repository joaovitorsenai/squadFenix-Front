import React from 'react';
import {Link} from 'react-router-dom';
import img from '../pages/Home/logotaiff.png'

import './Header.css';


function Header(){
    return(
        
            <div className="containerH">

                <div className="logo">
                    <img className="img" src={img}/>
                </div>
                <nav>
                <ul>
                    <li><Link className="linkH" to="/tabela">Tabela</Link></li>
                    <li><Link className="linkH" to="/cadPosicoes">Cadastro de Posições</Link></li>
                    <li><Link className="linkH" to="/grafico">Gráfico</Link></li>
                    <li><Link className="linkH" to="/">Sair</Link></li>
                </ul>
               </nav>
            </div>
    );

}

export default Header;