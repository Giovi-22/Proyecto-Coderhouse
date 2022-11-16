import Products from "./Products";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const tiempo = 2000;
//--------------------FUNCTIONS----------------------------------
export function getProducts(time=tiempo){
        let simulacionPedido = new Promise((res)=>{
        setTimeout(()=>{
            res(Products)},time);
        });
        return simulacionPedido;
}

export function getProductById(id,time=tiempo){
    let simulacionPedido = new Promise((res)=>{
        setTimeout(()=>{
            res(Products.find(value=>value.id===id))},time);
        });
        return simulacionPedido;
}

export function getProductsByCat(cat,time=tiempo){
    let simulacionPedido = new Promise((res)=>{
        setTimeout(()=>{
            res(Products.filter((value)=>value.category === cat))},time);
        });

        return simulacionPedido;

}

export function addProductToContext(products, item){   
                
}
//-------------------------LINKS----------------------------------


export const navLinks=[
    {titulo:"Bienvenidos",
     url: "/",
     id:1
    },
    {titulo:"Productos",
     url: "/Productos",
     id:5
    },
    {titulo:"Cortantes",
     url: "/Categorias/Cortantes",
     id:2
    },
    {titulo:"Sellos Acrílicos",
     url:"/Categorias/Sellos",
     id:3
     },
    {titulo:"Moldes de silicona",
     url:"/Categorias/Moldes",
     id:4
     }
    ];

export const socialLinks=[
    {titulo:"cb3d.desingrosario@gmail.com",
     url: "/",
     icon: <MailIcon />},
    {titulo:"+543416965696",
     url:"/",
     icon: <SmartphoneIcon />},
    {titulo:"+543416965696",
     url:"https://web.whatsapp.com/",
     icon: <WhatsAppIcon />},
    {titulo:"/cb3d.design",
     url:"/",
     icon: <FacebookIcon />},
    {titulo:"cb3ddesign.rosario",
     url:"https://www.instagram.com/cb3ddesign.rosario/?hl=es",
     icon: <InstagramIcon />}
    ];
