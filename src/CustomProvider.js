import React, {createContext, useEffect, useState} from "react";

export const context = createContext();
const {Provider} = context;

function CustomProvider({children}){

    const [count,setCount] = useState(0);
    const [products, setProducts] = useState([]);
    
    let valorDelContexto = {
        addProducts: handleProducts,
        deleteProduct: handleDelete,
        updateProduct:updateProduct,
        cuantity:count,
        products: products
            };
  
    function handleProducts(product){
                setProducts([...products,product]); 
    }  

    function handleDelete(productId){
            let array= [];      
            array = products.filter((value)=>value.id !== productId);
            setProducts(array);
    }

    function updateProduct(count,id){
            let array = [...products];
            array.forEach(element=>{if(element.id === id){element.cantidad = count}});
            setProducts(array);
    }
        
    useEffect(()=>{
        let cuenta = 0;
        products.map((value)=>cuenta = cuenta + value.cantidad)
        setCount(cuenta);
    },[products])


    return(
            <Provider value={valorDelContexto} >
                {children}
            </Provider>

    );
}

export default CustomProvider;
