const productos = [
    {   
        id: 1,     
        nombre: 'Manzana',
        precio: 0.5
    },
    {    
        id: 2, 
        nombre: 'Pasta dental',
        precio: 3.50
    },
    {
        id: 3, 
        nombre: 'Cepillo dental',
        precio: 2.50
    },
    {
        id: 4, 
        nombre: 'Leche',
        precio: 4.00
    },
    {
        id: 5, 
        nombre: 'Queso libra',
        precio: 2.50
    },
    {
        id: 6, 
        nombre: 'Mantequilla',
        precio: 2.75
    },
    {
        id: 7, 
        nombre: 'Galletas',
        precio: 2.50
    },
    {
        id: 8, 
        nombre: 'Fresa',
        precio: 0.75
    },
    {
        id: 9, 
        nombre: 'Nachos',
        precio: 3.50
    },
    {
        id: 10, 
        nombre: 'Carne libra',
        precio: 3.50
    }
];

export default productos;

export const getProductoById = (idProducto) => {
    return productos.filter((productos) =>productos.id === idProducto)
}