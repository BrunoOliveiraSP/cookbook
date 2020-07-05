using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;


namespace backend.Business
{
    public class FilmeBusiness
    {
        Database.FilmeDatabase db = new Database.FilmeDatabase();

        public Models.TbFilme Inserir(Models.TbFilme filme)
        {
            if (filme.NmFilme == string.Empty)
                throw new Exception("Filme obrigatório.");

            if (filme.DsGenero == string.Empty)
                throw new Exception("Gênero obrigatório.");

            if (filme.NrDuracao <= 0)
                throw new Exception("Duração obrigatória.");

            if (filme.VlAvaliacao <= 0)
                throw new Exception("Avaliação obrigatória.");

            return db.Inserir(filme);
        }

        public List<Models.TbFilme> Listar()
        {
            return db.Listar();
        }

        public List<Models.TbFilme> Consultar(string nome)
        {
            return db.Consultar(nome);
        }
    }
}