export interface Product {
    id: number;
    nombre: string;
    descripcion: string;
    urlImagen: string;
    categoria?: string;
    stock?: number;    
    precio: number;
}