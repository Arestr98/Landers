using System.Collections.Generic;
using System.Linq;
using API.Entities;

namespace API.Extensions
{
    public static class ProductExtensions
    {
        public static IQueryable<Product> Sort(this IQueryable<Product> query, string orderBy)
        {
            if (string.IsNullOrEmpty(orderBy)) return query.OrderBy(p => p.Nombre); 

            query = orderBy switch
            {
                "price" => query.OrderBy(p => p.Precio),
                "priceDesc" => query.OrderByDescending(p => p.Precio),
                _ => query.OrderBy(p => p.Nombre)
            };

            return query;
        }

        public static IQueryable<Product> SearchName(this IQueryable<Product> query, string searchTerm)
        {
            if (string.IsNullOrEmpty(searchTerm)) return query;

            var lowerCaseSearchTerm = searchTerm.Trim().ToLower();

            return query.Where(p => p.Nombre.ToLower().Contains(lowerCaseSearchTerm));
        }

        public static IQueryable<Product> SearchDesc(this IQueryable<Product> query, string searchTerm)
        {
            if (string.IsNullOrEmpty(searchTerm)) return query;

            var lowerCaseSearchTerm = searchTerm.Trim().ToLower();

            return query.Where(p => p.Descripcion.ToLower().Contains(lowerCaseSearchTerm));
        }

        public static IQueryable<Product> Filter(this IQueryable<Product> query, string types)
        {
            var typeList = new List<string>();

            if (!string.IsNullOrEmpty(types))
                typeList.AddRange(types.ToLower().Split(",").ToList());

            query = query.Where(p => typeList.Count == 0 || typeList.Contains(p.Categoria.ToLower()));

            return query;
        }
    }
}