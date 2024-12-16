export interface Product{
    id: number;
    nombre: string;
    fecha_vencimiento: string;
    stock: number;
    precio: number;
    url_img: string;
    id_categoria: number;
}

export interface Category{
    id: number;
    nombre: string;
}