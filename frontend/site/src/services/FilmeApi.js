
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/filme'
})


export default class FilmeApi {

    async listar() {
        try {
            const response = await api.get(`/`);
            return response.data;
        } catch (e) {
            return this.verificarErro(e);
        }
    }

    async inserir(filme) {
        try {
            const response = await api.post(`/`, filme);
            return response.data;
        } catch (e) {
            return this.verificarErro(e);
        }
    }


    verificarErro(e) {
        if (e.message == "Network Error") 
            return { erro: "Falha na conexão." }
        else 
            return e.response.data;
    }

};

