

import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <div>
            <div>
                <Link to="/cadastrar">Cadastrar</Link>
            </div>

            <div>
                <Link to="/consultar">Consultar</Link>
            </div>
        </div>
    )
}