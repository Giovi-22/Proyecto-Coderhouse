import React, { createContext, useEffect, useState } from "react";

export const context = createContext();
const { Provider } = context;

function CustomProvider({children}){
    const [total,setTotal] = useState(0);
    const [count,setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [wishList,setWishlist] = useState([]);
    const [saleId,setSaleId] = useState("");
    const [user,setUser] = useState({});
    const [isLogged,setIslogged] = useState(false);
    
    let valorDelContexto = {
        addProducts: handleProducts,
        deleteProduct: handleDelete,
        addProductToWishList: addProductToWishList,
        deleteProductToWishList: deleteProductToWishList,
        updateCart:updateCart,
        updateProductCuantity:updateProductCuantity,
        vaciarCarrito:vaciarCarrito,
        vaciarWishlist:vaciarWishlist,
        setSaleId: setSaleId,
        setUser: setUser,
        setIslogged:setIslogged,
        Logged:isLogged,
        Usuario: user,
        cuantity:count,
        wishList:wishList,
        products: products,
        Total:total,
        saleId: saleId
            };
  
    function addProductToWishList(product){
                 const result = wishList.find(value=>value.id === product.id);
            if(result === undefined){
                setWishlist([...wishList,product]);
            }else{
            }
    }

    function deleteProductToWishList(productID){
            let array= [];      
            array = wishList.filter((value)=>value.id !== productID);
            setWishlist(array);
    }

    function handleProducts(product){
            let result = products.find(value=>value.id === product.id);
            if(result === undefined){
                setProducts([...products,product]);
            }else{
                const valor = result.cantidad + product.cantidad;
                updateProductCuantity(valor,product.id);
                
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

    function vaciarWishlist(){
            setWishlist([]);
    }

    function updateCartCuantity(productsArray){
        let cuenta = 0;
        productsArray.forEach((value)=>cuenta = cuenta + value.cantidad);
        setCount(cuenta);
        calcularTotal(productsArray);
    }

    function calcularTotal(productsArray){
        let sumaTotal = 0;
        productsArray.forEach(producto => sumaTotal = sumaTotal + (producto.price*producto.cantidad));
        setTotal(sumaTotal);
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

    function updateCart(productos){
               let array = [...products];
               let arrayWish = [];
               array.forEach((producto)=>{
                    productos.forEach((prod)=>{
                        if(prod.id === producto.id){
                            producto.cantidad=producto.cantidad + 1;
                        }else{
                            arrayWish.push(prod);
                        }
                    });
               });
               setProducts([...array,...arrayWish]);
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
