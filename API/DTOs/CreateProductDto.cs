using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace API.DTOs
{
    public class CreateProductDto
    {
        [Required]
        public string Nombre { get; set; }

        [Required]
        public string Descripcion { get; set; }

        [Required]
        [Range(100, Double.PositiveInfinity)]
        public long Precio { get; set; }

        [Required]
        public string UrlImagen { get; set; }

        [Required]
        public string Categoria { get; set; }


        [Required]
        [Range(0, 200)]
        public int Stock { get; set; }
    }
}