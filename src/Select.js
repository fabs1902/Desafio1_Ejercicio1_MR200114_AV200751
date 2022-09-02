import React, {useState} from 'react'
import { getProductoById } from './data/productos'
import productos from './data/productos'
import { renderIntoDocument } from 'react-dom/test-utils'
import { Carta } from './Carta'

export const  Select = () => {
   // const {nombre, precio} = productos;
    //console.log(productos[0].nombre);
    //var objeto;    
    const mostrarId = () => {       
       /* let idProducto = document.getElementById("cmbProductos").value;       
        let productoEncontrado = getProductoById(parseInt(idProducto));    
        let nombreProducto =  productoEncontrado[0].nombre;
        let precioProducto = productoEncontrado[0].precio    
        console.log("El nombre del producto es "+nombreProducto+" y su precio es de "+precioProducto);*/
       // objeto = {id: idProducto, nombre: nombreProducto, precio: precioProducto};        
    }
    
    //const [producto, setProducto] = useState([{id:100, nombreProducto: 'jabon', precio: 10}]);
    const [producto, setProducto] = useState([]);
    //const [input, setInput] = useState(second)

    const handleAdd = () => {
      console.log('aqui'+producto)
      let idProducto = document.getElementById("cmbProductos").value;       
      let productoEncontrado = getProductoById(parseInt(idProducto));    
      let nombreProducto =  productoEncontrado[0].nombre;
      let precioProducto = productoEncontrado[0].precio    
      console.log("El nombre del producto es "+nombreProducto+" y su precio es de "+precioProducto);
      /*producto.map((productos) => {
        setProducto([{id:idProducto, nombre: nombreProducto, precio: precioProducto}, ...productos])
      }); */
      setProducto((pro) => [ ...pro, {id:idProducto, nombre: nombreProducto, precio: precioProducto}])
      //console.table(producto)
    }

    const deleteTodo = indice => {
      const newProductos = [...producto]
      newProductos.splice(indice, 1)
      setProducto(newProductos);      
    }
    

  return (
    <>
        <div className='col-lg-6'>    
            <select className="form-select" aria-label="Default select example" id='cmbProductos' onChange={mostrarId}>
              {
                productos.map((producto) =>(
                    <option value = {producto.id} key={producto.id}>{producto.nombre}</option>
                ))
              }
            </select>
          </div>
          <div className='col-lg-6'>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="button" onClick={handleAdd}>Agregar </button>                         
            </div>            
        </div> 
        <div className='row  mt-5'>
            <div className='col-lg-12'>
             <ol>
                {                                    
                  producto.map((pro) =>{
                    return(
                      <Carta id={pro.id} nombre = {pro.nombre} precio = {pro.precio} deleteProducto ={deleteTodo}/>
                    )
                  })                 
                }
             </ol>
            </div>
        </div>
        <div className='row  mt-5'>
            <div className='col-lg-12'>
              <div className="card">
                <div className="card-body">
                  Total a cancelar
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
