

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Cadastrar() {

    const data = {
        id:0, 
        filme:"", 
        genero:"", 
        duracao:0, 
        avaliacao:0.0, 
        disponivel: true, 
        lancamento: new Date()
    }

    const navigation = useHistory();

    const [filme, setFilme] = useState(data);

    const salvarClick = () => {

    }

    return (
        <div>
            <a  href="#" 
                style={{fontSize: '10pt'}}
                onClick={() => navigation.goBack()}>
                Voltar
            </a>
            <h1>Cadastrar</h1>


            <div>
                <div>
                    <div>Filme</div>
                    <div>
                        <input type="text"
                            value={filme.filme}
                            onChange={(e) => setFilme({...filme, filme: e.target.value})}
                            />
                    </div>
                </div>

                <div>
                    <div>Gênero</div>
                    <div>
                        <input type="text"
                            value={filme.genero}
                            onChange={(e) => setFilme({...filme, genero: e.target.value})}
                            />
                    </div>
                </div>

                <div>
                    <div>Duração</div>
                    <div>
                        <input type="number"
                            value={filme.duracao}
                            onChange={(e) => setFilme({...filme, duracao: parseInt(e.target.value) || 0})}
                            />
                    </div>
                </div>

                <div>
                    <div>Avaliação</div>
                    <div>
                        <input type="number"
                            value={filme.avaliacao}
                            step="0.1"
                            onChange={(e) => setFilme({...filme, avaliacao: parseFloat(e.target.value) || 0})}
                            />
                    </div>
                </div>

                <div>
                    <div>Disponível</div>
                    <div>
                        <input type="checkbox"
                            checked={filme.disponivel}
                            onChange={(e) => setFilme({...filme, disponivel: e.target.checked})}
                            />
                    </div>
                </div>

                <div>
                    <div>Lançamento</div>
                    <div>
                        <input 
                            className="w-100"
                            type="date"
                            value={filme.lancamento.toISOString().substr(0, 10)}
                            onChange={(e) => setFilme({...filme, lancamento: new Date(e.target.value)})}
                            />
                    </div>
                </div>

                <div>
                    <button className="w-100 btn btn-primary" onClick={salvarClick}>
                        Cadastrar
                    </button>
                </div>

                <div>
                    {/* {JSON.stringify(filme)} */}
                </div>
            </div>
        </div>
    )
}