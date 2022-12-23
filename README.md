#                                                                       CB3DESIGN
![Pagina de Bienvenidos](https://user-images.githubusercontent.com/98109747/209245131-52bcebba-9374-427d-8ea2-7340c47cecd7.jpg)
#### DOMINIO
https://cb3desing-store-iyyo5ke1z-giovi-22.vercel.app/

CB3DESIGN es un E-commerce destinado a la venta de productos impresos en 3D para el rubro de la pastelería. 

La app está diseñada utilizando la librería de JavaScript React.JS 

Dentro de esta aplicación web se puede navegar a través de las categorías de los diferentes productos, ver sus respectivos detalles, agregarlos al carrito y realizar una compra online. En la sección USANDO LA APLICACION se explicará detalladamente su uso.

Al final de este documento se puede ver un archivo GIF del uso de la app e imágenes de cómo se ven los archivos en la base de datos.


## INSTALACIÓN 
Para instalar la app es necesario descargar los archivos del repositorio o bien, si se utiliza la aplicación Git, se puede clonar el repositorio directamente desde consola.

A través del siguiente link se puede acceder al proyecto:
[a link] https://github.com/Giovi-22/Proyecto-Coderhouse

Una vez dentro del repositorio se puede hacer click en el botón "<>Code" en donde se  descarga el proyecto en formato .zip como así también se puede copiar el link para realizar el clonado a través de Git.

Descargado el proyecto, abrir la consola de comandos, ingresar a la carpeta principal del proyecto y ejecutar los siguientes comandos:

    * $ cd <dirección a la carpeta principal del proyecto> 
    * $ npm install - para instalar la aplicación y sus dependencias. 
    * ....
    * Una vez completada la instalación ejecute el comando 
    * $ npm start - para correr la aplicación y poder verla en el navegador. 

## USANDO LA APLICACIÓN
Dentro de la app encontrará la barra de navegación superior para navegar a través de las siguientes secciones: 

      * un listado de todos los productos disponibles - PRODUCTOS
      * un acceso a cada categoría - CORTANTES, SELLOS ACRILICOS, MOLDES DE SILICONA
      * un acceso al carrito - ícono de carrito
      * un acceso para iniciar o registrarse en el sitio - INGRESAR

Se puede acceder al detalle de cada producto haciendo click en el botón VER DETALLES. El detalle del producto contiene su título, descripción, precio, total, subtotal, imagen, botones para incrementar la cantidad de productos deseados y un botón para agregar el producto al carrito de compras.

En el carrito se puede visualizar un resumen de los productos seleccionados para la compra con sus respectivas opciones para incrementar o no la cantidad deseada y eliminar el item de la lista, el valor total de la compra, un botón para vaciar el carrito y un botón para continuar al checkout.

En el checkout el usuario deberá finalizar la compra. Si el usuario no ingresó a la página previamente o no se encuentra registrado, tendrá que ingresar un pequeño formulario con sus datos para poder validar la compra; si el usuario ya inició sesión previamente, no se le pedirá que ingrese sus datos. Una vez finalizada la compra se le dará el feedback con el id para su seguimiento.

Un usuario podrá registrarse en la página accediendo al menú "ingresar", una vez allí podrá iniciar sesión o crear una cuenta.
Para crear una cuenta, deberá hacer click en "¿No tiene una cuenta? Cree una." en donde se le pedirá que ingrese los datos correspondientes.

Para iniciar sesión el usuario podrá elegir entre dos formas:
  * ingresar mediante e-mail y contraseña con previo registro en la página.
  * ingresar mediante Google.
  
Una vez iniciada la sesión se le va a habilitar al usuario la posibilidad de tener una Wish-list en donde guardar sus productos favoritos.

Para agregar productos a la wishlist debe hacer click en el ícono de corazón que se encuentra en la tarjeta de cada producto.
Dentro de la wishlist puede agregar los productos al carrito o vaciar la lista.
Si el usuario agrega los productos al carrito, el listado se vacía.
La lista de productos deseados solo se guarda en la base de datos cuando el usuario finaliza la sesión.

## TECNOLOGÍAS USADAS

* "@emotion/react":        version "^11.10.4"      Librería que utiliza Material UI para darle estilos a sus componentes
* "@emotion/styled":       version "^11.10.4"      Librería que utiliza Material UI para darle estilos a sus componentes
* "@fontsource/roboto":    version "^4.5.8"        Utilizada como fuente para los textos de la app.
* "@mui/icons-material":   version "^5.10.9"       Utilizada para agregar iconos en los componentes.
* "@mui/material":         version "^5.10.10"      Utilizada para la maquetación de los componentes.
* "firebase":              version "^9.14.0"       Utilizada para guardar los productos, las ventas, los usuarios registrados y las wish list.
* "react":                 version "^18.2.0"       Utilizada para la creación de la app.
* "react-dom":             version "^18.2.0"       Utilizada para proporcionar metodos de acceso al DOM virtual.
* "react-router-dom":      version "^6.4.2"        Utilizada para la navegación dentro de la aplicación.
* "react-scripts":         version "5.0.1"         Utilizada para ejecutar los scripts que vienen al instalar create-react-app. (start, build, test, eject)
* "formik":                version "^2.2.9"        Utilizada para la creación de formularios.

 ## GIF
 ![Entrega final Barolin](https://user-images.githubusercontent.com/98109747/204173186-22d5f172-98f9-4cc4-b4bd-c04bc42e82bd.gif)
 
 ##IMAGENES
### Firebase
#### Productos
![Firebase-productos](https://user-images.githubusercontent.com/98109747/204173262-e628aa50-f557-4896-ab67-0f829d4b5813.jpg)
#### Ventas
![Firebase-ventas](https://user-images.githubusercontent.com/98109747/208573173-6287a377-e636-4c20-80df-0afaae6d38da.jpg)
#### Wish list
![Firebase-wishlist](https://user-images.githubusercontent.com/98109747/204173275-4b5c8aa5-7535-4b24-ac33-b928e775b9c3.jpg)
#### Usuarios registrados
![Usuarios registrados](https://user-images.githubusercontent.com/98109747/204173782-dde1f87c-5345-477c-83be-c5b8671763aa.jpg)

