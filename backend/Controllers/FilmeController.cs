using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FilmeController : ControllerBase
    {
        Utils.FilmeConversor conversor = new Utils.FilmeConversor();
        Business.FilmeBusiness business = new Business.FilmeBusiness();

        [HttpPost]
        public ActionResult<Models.Response.FilmeResponse> Inserir(Models.Request.FilmeRequest request)
        {
            try
            {
                Models.TbFilme filme = conversor.ParaTabela(request);
                filme = business.Inserir(filme);

                Models.Response.FilmeResponse response = conversor.ParaResponse(filme);
                return response;
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.ErroResponse(400, ex.Message)
                );
            }
        }

        [HttpGet]
        public ActionResult<List<Models.Response.FilmeResponse>> Listar()
        {
            try
            {
                List<Models.TbFilme> filmes = business.Listar();
                if (filmes.Count == 0)
                    return NotFound(filmes);

                List<Models.Response.FilmeResponse> response = conversor.ParaResponse(filmes);
                return response;
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.ErroResponse(500, ex.Message)
                );
            }
        }

        [HttpGet("filtrar/")]
        public ActionResult<List<Models.Response.FilmeResponse>> ConsultarPorNome(string nome)
        {
            try
            {
                List<Models.TbFilme> filmes = business.Consultar(nome);
                if (filmes.Count == 0)
                    return NotFound(filmes);

                List<Models.Response.FilmeResponse> response = conversor.ParaResponse(filmes);
                return response;
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.ErroResponse(500, ex.Message)
                );
            }
        }

    }
}