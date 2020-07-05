
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './paginas/Home';
import Cadastrar from './paginas/Cadastrar';
import Consultar from './paginas/Consultar';

export default function Routes() {

    const styles = {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c34',
        color: 'white'
    }

    return (
        <div style={styles}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/cadastrar" component={Cadastrar} />
                    <Route path="/consultar" component={Consultar} />
                </Switch>
            </BrowserRouter>                       
        </div>
    )

}