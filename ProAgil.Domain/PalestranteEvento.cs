using System;
using System.Collections.Generic;
using System.Text;

namespace ProAgil.Domain
{
    public class PalestranteEvento
    {
        public int Id { get; set; }
        public int EventoId { get; set; }
        public int PalestranteId { get; set; }
        public Evento Evento { get; set; }
        public Palestrante Palestrante { get; set; }
    }
}
