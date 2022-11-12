import Products from "./Products";

export function getProducts(time=1000){
        let simulacionPedido = new Promise((res)=>{
        setTimeout(()=>{
            res(Products)},time);
        });
        return simulacionPedido;
}

export function getProductById(id,time=1000){
    let simulacionPedido = new Promise((res)=>{
        setTimeout(()=>{
            res(Products.find(value=>value.id===id))},time);
        });
        return simulacionPedido;
}

export function getProductsByCat(cat,time=1000){
    let simulacionPedido = new Promise((res)=>{
        setTimeout(()=>{
            res(Products.filter((value)=>value.category === cat))},time);
        });

        return simulacionPedido;

}

export function addProductToContext(products, item){   
                
}
    
