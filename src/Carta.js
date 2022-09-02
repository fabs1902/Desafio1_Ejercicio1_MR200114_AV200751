import React, {useState} from 'react'
import { getProductoById } from './data/productos'

export const Carta = ({id, nombre, precio, deleteProducto, index, producto}) => {
    
    var [precioTotal, setPrecioTotal] = useState(0)

    const calcularPrecio = (e) => {
        
        setPrecioTotal = parseFloat(precioTotal) + 1;
        console.log(precioTotal);

        /*precioT = 0;
        cantidad = 0;
        idP=0;
        var cantidad = document.getElementById(""+e.target.id).value;
        var idP = document.getElementById(""+e.target.id).id;        
        // console.log('Codigo producto: '+e.target.id);
        let productoEncontrado = getProductoById(parseInt(idP));           
        let nombreProducto =  productoEncontrado[0].nombre;
        let precioProducto = productoEncontrado[0].precio    
        var precioT = parseFloat(precioProducto.toFixed(2)) * (parseInt(cantidad));
        setPrecioTotal(parseFloat(precioTotal) + parseFloat(precioT));
        console.log(precioTotal)*/
    }

    const mostrarTotal = () => {
        console.log(parseFloat(precioTotal));
    }

    return (        
        <div className='row mt-3'>        
            <div className="card">
                <div className="card-body">
                    <div className='row'>
                        <div className='col-lg-3 col-md-4'>
                            <b>Producto:</b> {nombre}                            
                        </div>
                        <div className='col-lg-3 col-md-4'>
                            <b>Precio $:</b> {precio}
                        </div>
                        <div className='col-lg-3 col-md-4'>
                            <b>Cantidad:</b> <input type="number" min = "1" id={id} onChange={calcularPrecio} ></input>
                        </div>
                        <div className='col-lg-3 col-md-4'>
                            <button type="button" className="btn btn-danger" onClick={() => deleteProducto(index)}><i className="fa-solid fa-trash-can"></i></button>
                            <button type="button" className="btn btn-danger" onClick={mostrarTotal}>Prueba</button>
                        </div>
                    </div>        
                </div>
            </div>        
        </div>    
    )
}
