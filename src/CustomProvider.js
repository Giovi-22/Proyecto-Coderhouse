import React, { createContext, useEffect, useState } from "react";

export const context = createContext();
const { Provider } = context;

function CustomProvider({children}){

    const [count,setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [saleId,setSaleId] = useState("");

    let valorDelContexto = {
        addProducts: handleProducts,
        deleteProduct: handleDelete,
        updateProductCuantity:updateProductCuantity,
        vaciarCarrito:vaciarCarrito,
        cuantity:count,
        products: products,
        saleId: saleId,
        setSaleId: setSaleId
            };
  
    function handleProducts(product){
            const result = products.find(value=>value.id === product.id);
            if(result){
                const valor = result.cantidad + product.cantidad;
                updateProductCuantity(valor,product.id);
            }else{
                setProducts([...products,product]); 
            }
    }  

    function handleDelete(productId){
            let array= [];      
            array = products.filter((value)=>value.id !== productId);
            setProducts(array);
    }
    function vaciarCarrito(){
            setProducts([]);
    }

    function updateProductCuantity(count,id){
            let array = [...products];
            array.forEach(element=>{if(element.id === id){element.cantidad = count}});
            setProducts(array);
    }
        
    useEffect(()=>{
        let cuenta = 0;
        products.forEach((value)=>cuenta = cuenta + value.cantidad)
            setCount(cuenta);
    },[products])


    return(
            <Provider value={valorDelContexto} >
                {children}
            </Provider>

    );
}

export default CustomProvider;
