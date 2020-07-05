using System;
using System.Collections;
using System.Linq;


namespace backend.Models.Request
{
    public class FilmeRequest
    {
        public string Nome { get; set; }
        public string Genero { get; set; }
        public int Duracao { get; set; }
        public decimal Avaliacao { get; set; }
        public bool Disponivel { get; set; }
        public DateTime Lancamento { get; set; }
        
    }
}