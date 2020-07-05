
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



let data = [
    { id:1, filme:"Avengers", genero:"Ação", duracao:125, avaliacao:6.5, disponivel:true, lancamento:"2003-05-15T00:00:00"},
    { id:2, filme:"Harry Potter", genero:"Aventura", duracao:115, avaliacao:9.5, disponivel:false, lancamento:"2008-05-12T00:00:00"},
    { id:3, filme:"A bela e a fera", genero:"Romance", duracao:112, avaliacao:8.2, disponivel:true, lancamento:"2020-04-13T00:00:00"}       
]

export default function Consultar() {

    const navigation = useHistory();

    const [filmes, setFilmes] = useState(data); 

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
                            <td>{f.filme}</td>
                            <td>{f.genero}</td>
                            <td>{f.duracao}</td>
                            <td>{f.avaliacao}</td>
                            <td>{f.disponivel ? "Sim" : "Não"}</td>
                            <td>{f.lancamento}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
