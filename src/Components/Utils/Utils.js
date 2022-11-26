import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { db } from "../Firebase/Firestore";
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

const productsCollection = collection(db,"productos");
const salesCollection = collection (db,"ventas");

const tiempo = 500;
//--------------------FUNCTIONS----------------------------------
export function getProducts(){
        const consulta = getDocs(productsCollection);
        return consulta;
}

export function getProductById(id){
    const ref = doc(productsCollection,id);
    const resultado = getDoc(ref);
    return resultado;

}

export function getProductsByCat(cat,time=tiempo){
    const consulta = query(productsCollection,where("category","==",cat));
    const resultado = getDocs(consulta);
    return resultado;
}

export function addProduct(products){
        const response = addDoc(productsCollection,products);
        return response;
}
export function addSaleToCollection(sale){
        const response = addDoc(salesCollection,sale);
        return response;
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
     url: "/productos",
     id:5
    },
    {titulo:"Cortantes",
     url: "/categorias/cortantes",
     id:2
    },
    {titulo:"Sellos Acrílicos",
     url:"/categorias/sellos",
     id:3
     },
    {titulo:"Moldes de silicona",
     url:"/categorias/moldes",
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
