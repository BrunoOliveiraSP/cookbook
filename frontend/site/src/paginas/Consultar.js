
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


import FilmeApi from '../services/FilmeApi';


export default function Consultar() {
    const filmeApi = new FilmeApi();
    const navigation = useHistory();
    const [filmes, setFilmes] = useState([]); 


    useEffect(() => {
        const carregarTela = async () => {
            const response = await filmeApi.listar();
            if (!response.erro)
                setFilmes(response);
            else 
                alert(response.erro);
        }
        carregarTela();
    }, [])


    return (
        <div className="w-75">
            <a href="#" 
               style={{fontSize: '10pt'}}
               onClick={() => navigation.goBack()}>
                Voltar
            </a>
            <h1>Consultar</h1>

            <div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Filme</td>
                            <td>Gênero</td>
                            <td>Duração</td>
                            <td>Avaliação</td>
                            <td>Disponível</td>
                            <td>Lançamento</td>
                        </tr>
                    </thead>
                    <tbody>
                    {filmes.map(f => 
                        <tr key={f.id}>
                            <td>{f.id}</td>
                            <td>{f.nome}</td>
                            <td>{f.genero}</td>
                            <td>{f.duracao}</td>
                            <td>{f.avaliacao}</td>
                            <td>{f.disponivel ? "Sim" : "Não"}</td>
                            <td>{new Date(f.lancamento).toLocaleDateString()}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
