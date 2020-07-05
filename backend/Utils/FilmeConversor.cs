using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;


namespace backend.Utils
{
    public class FilmeConversor
    {
        public Models.TbFilme ParaTabela(Models.Request.FilmeRequest request)
        {
            Models.TbFilme filme = new Models.TbFilme();
            filme.NmFilme = request.Nome;
            filme.DsGenero = request.Genero;
            filme.NrDuracao = request.Duracao;
            filme.VlAvaliacao = request.Avaliacao;
            filme.BtDisponivel = request.Disponivel;
            filme.DtLancamento = request.Lancamento;

            return filme;
        }

        public Models.Response.FilmeResponse ParaResponse(Models.TbFilme filme)
        {
            Models.Response.FilmeResponse response = new Models.Response.FilmeResponse();
            response.Nome = filme.NmFilme;
            response.Genero = filme.DsGenero;
            response.Duracao = filme.NrDuracao;
            response.Avaliacao = filme.VlAvaliacao;
            response.Disponivel = filme.BtDisponivel;
            response.Lancamento = filme.DtLancamento;

            return response;
        }

        public List<Models.Response.FilmeResponse> ParaResponse(List<Models.TbFilme> filmes)
        {
            List<Models.Response.FilmeResponse> response = new List<Models.Response.FilmeResponse>();
            foreach (Models.TbFilme item in filmes)
            {
                response.Add(
                    ParaResponse(item)
                );
            }
            return response;
        }


    }
}