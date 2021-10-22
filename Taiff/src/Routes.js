import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import CadPosicoes from './pages/CadPosicoes'
import Tabela from './pages/Tabela'
import Grafico from './pages/Grafico'
import Medias from './pages/TabelaMedia'
import CadTeste from './pages/CadTeste';
import CadZeroPeca from './pages/CadZeroPeca';

export default () => {


    return(
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>

        <Route exact path="/tabela">
            <Tabela/>
        </Route>

        <Route exact path="/cadPosicoes">
            <CadPosicoes/>
        </Route>

        <Route exact path="/grafico">
            <Grafico/>
        </Route>

        <Route exact path="/media">
            <Medias/>
        </Route>

        <Route exact path="/cadTeste">
            <CadTeste/>
        </Route>
        <Route exact path="/cadZeroPeca">
            <CadZeroPeca/>
        </Route>
    </Switch>    
    );
    }