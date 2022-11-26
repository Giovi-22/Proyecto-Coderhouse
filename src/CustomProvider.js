import React, { createContext, useEffect, useState } from "react";

export const context = createContext();
const { Provider } = context;

function CustomProvider({children}){
    const [total,setTotal] = useState(0);
    const [count,setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [saleId,setSaleId] = useState("");

    let valorDelContexto = {
        addProducts: handleProducts,
        deleteProduct: handleDelete,
        updateProductCuantity:updateProductCuantity,
        vaciarCarrito:vaciarCarrito,
        setSaleId: setSaleId,
        cuantity:count,
        products: products,
        Total:total,
        saleId: saleId
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
    function updateCartCuantity(productsArray){
        let cuenta = 0;
        productsArray.forEach((value)=>cuenta = cuenta + value.cantidad);
        setCount(cuenta);
        calcularTotal(productsArray);
    }
    function updateProductCuantity(count,id){
            let array = [...products];
            array.forEach(element=>{
                if(element.id === id){
                    element.cantidad = count;
                    element.subTotal = element.price * count;
                }});
            updateCartCuantity(array);
            setProducts(array);
    }

    function calcularTotal(productsArray){
        let sumaTotal = 0;
        productsArray.forEach(producto => sumaTotal = sumaTotal + (producto.price*producto.cantidad));
        setTotal(sumaTotal);
    }
    
    useEffect(()=>{
        updateCartCuantity(products);
    },[products.length])

    return(
            <Provider value={valorDelContexto} >
                {children}
            </Provider>

    );
}

export default CustomProvider;
