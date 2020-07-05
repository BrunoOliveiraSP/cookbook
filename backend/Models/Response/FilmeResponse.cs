using System;

namespace backend.Models.Response
{
    public class FilmeResponse
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Genero { get; set; }
        public int Duracao { get; set; }
        public decimal Avaliacao { get; set; }
        public bool Disponivel { get; set; }
        public DateTime Lancamento { get; set; }
    }
}