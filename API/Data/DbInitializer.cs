using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Products.Any()) return;

            var products = new List<Product>{
                new Product
                {
                    Nombre = "Bateria Elite Granito 6 piezas",
                    Descripcion =
                        "Es tiempo de consentir tu cocina con nuestra Bateria antiadherente Elite tipo granito de 6 piezas de la Tienda Hogar Universal, dandole un nuevo toque de diseno y calidad.",
                    UrlImagen = "https://hogaruniversal.vtexassets.com/arquivos/ids/165999-800-auto?v=637841690527070000&width=800&height=auto&aspect=true",
                    Categoria = "Antiadherentes",
                    Stock = 100,
                    Precio = 399900
                },
                new Product
                {
                    Nombre = "Olla a presion cierre interno LPC",
                    Descripcion = "Cocina de forma segura tus alimentos favoritos con nuestra Olla a presion cierre interno LPC (4l, 6l, 10l y 13l) de Hogar Universal. Compra aqui",
                    UrlImagen = "https://hogaruniversal.vtexassets.com/arquivos/ids/162037-800-auto?v=637509139057670000&width=800&height=auto&aspect=true",
                    Categoria = "OllasPresion",
                    Stock = 100,
                    Precio = 124400,
                },
                new Product
                {
                    Nombre = "Caldero Ocean azul 24cm",
                    Descripcion =
                        "Freir, asar y cocinar tus recetas favoritas es posible con nuestros calderos OCEAN de Hogar Universal. Encuentra tus productos resistentes al calor",
                    UrlImagen = "https://hogaruniversal.vtexassets.com/arquivos/ids/162385-800-auto?v=637549059058370000&width=800&height=auto&aspect=true",
                    Categoria = "Calderos",
                    Stock = 100,
                    Precio = 149900,
                },
                new Product
                {
                    Nombre = "Juego X 6 utensilios rustica",
                    Descripcion =
                        "Nada mejor que tener los mejores utensilios en tu cocina. Crea recetas deliciosas con ayuda de nuestro set x6 de utensilios Aliada: espatula, espumadera, espaguetera, cuchara, cuchara perforada y cucharon. Seran tu mejor compania en tus preparaciones.",
                    UrlImagen = "https://hogaruniversal.vtexassets.com/arquivos/ids/163720-800-auto?v=637624925280300000&width=800&height=auto&aspect=true",
                    Categoria = "Utensilios",
                    Stock = 100,
                    Precio = 69900,
                },
                new Product
                {
                    Nombre = "LICUADORA ELITE INOX PRO",
                    Descripcion =
                        "Cuenta con 3 funciones preprogramadas (picahielo, smoothie y pulso). Cuchillas pica hielo de 6 aspas fabricadas en acero inoxidable. Control electronico con velocidades variables. Vaso de vidrio refractario termo resistente de 1.75 L velocidades y pulso, 600w de potencia real 1000w de potencia maxima con cuerpo en acero inoxidable 600 W, 110 - 120 Vac, 60 Hz.",
                    UrlImagen = "https://hogaruniversal.vtexassets.com/arquivos/ids/166066-800-auto?v=637853648809270000&width=800&height=auto&aspect=true",
                    Categoria = "Electrodomesticos",
                    Stock = 100,
                    Precio = 359900,
                },
                new Product
                {
                    Nombre = "Bateria antiadherente Aliada 11 Piezas",
                    Descripcion =
                        "Completa tu cocina con nuestra Bateria Ultra de la Tienda Hogar Universal, tenemos de 4, 7, 9, 10 y 11 piezas, elige la ideal para ti.",
                    UrlImagen = "https://hogaruniversal.vtexassets.com/arquivos/ids/165999-800-auto?v=637841690527070000&width=800&height=auto&aspect=true",
                    Categoria = "Antiadherentes",
                    Stock = 100,
                    Precio = 236400
                },
                new Product
                {
                    Nombre = "Olla a presion Esencial CI 6L",
                    Descripcion = "La olla a presion que seguro necesitas en tu Hogar, comprala aqui online y nosotros te la llevamos hasta la puerta de tu casa por este increible precio.",
                    UrlImagen = "https://hogaruniversal.vtexassets.com/arquivos/ids/162037-800-auto?v=637509139057670000&width=800&height=auto&aspect=true",
                    Categoria = "OllasPresion",
                    Stock = 100,
                    Precio = 106480,
                },
                new Product
                {
                    Nombre = "Caldero fundido con pomo ensamblado y tapa fundida",
                    Descripcion =
                        "Prepara tus recetas colombianas favoritas en nuestro caldero fundido con pomo ensamblado y tapa fundida de Hogar Universal.",
                    UrlImagen = "https://hogaruniversal.vtexassets.com/arquivos/ids/162385-800-auto?v=637549059058370000&width=800&height=auto&aspect=true",
                    Categoria = "Calderos",
                    Stock = 100,
                    Precio = 23760,
                },
                new Product
                {
                    Nombre = "Set x4 utensilios Aliada",
                    Descripcion =
                        "Nada mejor que tener los mejores utensilios en tu cocina. Crea recetas deliciosas con ayuda de nuestro set x6 de utensilios Aliada: espatula, espumadera, espaguetera, cuchara, cuchara perforada y cucharon. Seran tu mejor compania en tus preparaciones.",
                    UrlImagen = "https://hogaruniversal.vtexassets.com/arquivos/ids/163720-800-auto?v=637624925280300000&width=800&height=auto&aspect=true",
                    Categoria = "Utensilios",
                    Stock = 100,
                    Precio = 22300,
                },
                new Product
                {
                    Nombre = "Licuadora Aliada vaso de vidrio negro",
                    Descripcion =
                        "Prepara batidos, granizados, salsas, jugos y mucho mas en nuestra licuadora Aliada de Hogar Universal: vaso de vidrio y cuchillas en acero inoxidable.",
                    UrlImagen = "https://hogaruniversal.vtexassets.com/arquivos/ids/166066-800-auto?v=637853648809270000&width=800&height=auto&aspect=true",
                    Categoria = "Electrodomesticos",
                    Stock = 100,
                    Precio = 135900,
                },
            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}