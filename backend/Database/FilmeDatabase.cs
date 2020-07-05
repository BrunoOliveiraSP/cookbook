using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;


namespace backend.Database
{
    public class FilmeDatabase
    {
        Models.apidbContext ctx = new Models.apidbContext();

        public Models.TbFilme Inserir(Models.TbFilme filme)
        {
            ctx.TbFilme.Add(filme);
            ctx.SaveChanges();
            return filme;
        }


        public List<Models.TbFilme> Listar()
        {
            return ctx.TbFilme.ToList();
        }


        public List<Models.TbFilme> Consultar(string nome)
        {
            return ctx.TbFilme.Where(x => x.NmFilme.Contains(nome))
                              .ToList();
        }

    }
}