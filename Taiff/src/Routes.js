import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import CadTeste from './pages/CadTeste'
import Tabela from './pages/Tabela'
import Grafico from './pages/Grafico'
import Medias from './pages/TabelaMedia'

export default () => {


    return(
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>

        <Route exact path="/tabela">
            <Tabela/>
        </Route>

        <Route exact path="/cadastro">
            <CadTeste/>
        </Route>

        <Route exact path="/grafico">
            <Grafico/>
        </Route>

        <Route exact path="/media">
            <Medias/>
        </Route>
    </Switch>    
    );
    }