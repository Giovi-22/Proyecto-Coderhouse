import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { db } from "../Firebase/Firestore";
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

const productsCollection = collection(db,"productos");
const salesCollection = collection (db,"ventas");
const wishlistCollection = collection (db,"wishlist");
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

export function addWishlistToCollection(wishlist){
        const response = addDoc(wishlistCollection,wishlist);
        return response;
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
     icon: <MailIcon />,
     id:1},
    {titulo:"+543416965696",
     url:"/",
     icon: <SmartphoneIcon />,
     id:2},
    {titulo:"+543416965696",
     url:"https://web.whatsapp.com/",
     icon: <WhatsAppIcon />,
     id:3},
    {titulo:"/cb3d.design",
     url:"/",
     icon: <FacebookIcon />,
     id:4},
    {titulo:"cb3ddesign.rosario",
     url:"https://www.instagram.com/cb3ddesign.rosario/?hl=es",
     icon: <InstagramIcon />,
     id:5}
    ];

export const signupForm=[
        {
        id:"firstName",
        name:"firstName",
        label:"Nombre ",
        type:"text",
        placeHolder:"Nombre"
        },
        {
        id:"lastName",
        name:"lastName",
        label:"Apellido ",
        type:"text",
        placeHolder:"Apellido"
        },
        {
        id:"email",
        name:"email",
        label:"Email ",
        type:"text",
        placeHolder:"Email: alguien@ejemplo.com"
        },
        {
        id:"confirm_email",
        name:"confirm_email",
        label:"Confirmar email ",
        type:"text",
        placeHolder:"Email: alguien@ejemplo.com"
        },
        {
        id:"password",
        name:"password",
        label:"Password",
        type:"password",
        placeHolder:"Password"
        }
];
export const checkoutForm=[
        {
        id:"firstName",
        name:"firstName",
        label:"Nombre ",
        type:"text",
        placeHolder:"Nombre"
        },
        {
        id:"lastName",
        name:"lastName",
        label:"Apellido ",
        type:"text",
        placeHolder:"Apellido"
        },
        {
        id:"email",
        name:"email",
        label:"Email ",
        type:"text",
        placeHolder:"Email: alguien@ejemplo.com"
        },
        {
        id:"confirm_email",
        name:"confirm_email",
        label:"Confirmar email ",
        type:"text",
        placeHolder:"Email: alguien@ejemplo.com"
        }
];
export const signinForm=[
        {
        id:"email",
        name:"email",
        label:"Email ",
        type:"text",
        placeHolder:"Email: alguien@ejemplo.com"
        },
        {
        id:"password",
        name:"password",
        label:"Password",
        type:"password",
        placeHolder:"Password"
        }
];
