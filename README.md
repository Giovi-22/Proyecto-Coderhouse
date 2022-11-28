#                                                                       CB3DESIGN

CB3DESIGN es un E-commerce destinado a la venta de productos impresos en 3D para el rubro de la pastelería. 

La app está diseñada utilizando la librería de JavaScript React.JS 

Dentro de esta aplicación web podrás navegar a través de las categorías de los diferentes productos, ver sus respectivos detalles, agregarlos al carrito y realizar una compra online. En la sección USANDO LA APLICACION se explicará detalladamente el su uso.


## INSTALACION 
Para instalar la app es necesario descargar los archivos del repositorio o bien, si utiliza la aplicación Git, puede clonar el repositorio directamente desde consola.

A través del siguiente link puede acceder al proyecto:
[a link] https://github.com/Giovi-22/Proyecto-Coderhouse

Una vez dentro del repositorio puede hacer click en el botón "<>Code" en donde podra descargar el proyecto en formato .zip o copiar el link para realizar el clonado a través de Git.

Descargado el proyecto, abra su consola de comandos, ingrese a la carpeta principal del proyecto y ejecute los siguientes comandos:

    * $ cd <dirección a la carpeta principal del proyecto> 
    * $ npm install - para instalar la aplicación y sus dependencias. 
    * ....
    * Una vez completada la instalación ejecute el comando 
    * $ npm start - para correr la aplicación y poder verla en el navegador. 

## USANDO LA APLICACIÓN
Dentro de la applicación usted va a encontrar una barra de navegación superior para navegar por las siguientes secciones: 

      * un listado de todos los productos disponibles - PRODUCTOS
      * un acceso a cada categoría - CORTANTES, SELLOS ACRILICOS, MOLDES DE SILICONA
      * un acceso al carrito - icono de carrito
      * un acceso para iniciar o registrarse en el sitio - INGRESAR

Puede acceder al detalle de cada producto haciendo click en el botón VER DETALLES. El detalle del producto contiene su título, descripción, precio, total, subtotal, imagen, botones para incrementar la cantidad de productos deseados y un botón para agregar el producto al carrito de compras.

En el carrito contiene un resumen de los productos seleccionados para la compra con sus respectivas opciones para incrementar o no la cantidad deseada y eliminar el item de la lista, el valor total de la compra, un botón para vaciar el carrito y un boton para continuar al checkout.

En el checkout el usuario deberá finalizar la compra. Si el usuario no ingreso a la página previamente o no se encuentra registrado, va a tener un pequeño formulario en donde prodrá ingresar sus datos para poder validar la compra; si el usuario inicio session previamente, no se le pedirá que ingrese sus datos. Una vez finalizada la compra se le dara el feedback con el id para su seguimiento.

Un usuario podrá registrarse en la página accediendo al menú "ingresar", una vez allí podra iniciar session o crear una cuenta.
Para crear una cuenta, deberá hacer click en "¿No tiene una cuenta? Cree una." en donde se le pedirá que ingrese los datos correspondientes.

Para iniciar session el usuario podrá seleccionar dos formas:
  * ingresar mediante email y contraseña con previo registro en la página.
  * ingresar mediante Google.
  
Una vez iniciada la session se le va a habilitar al usuario la posibilidad de tener una Wishlist en donde guardar sus productos favoritos.

Para agregar productos a la wishlist debe hacer click en el icono de corazon que se encuentra en la tarjeta de cada producto.
Dentro de wishlist puede agregar los productos al carrito o vaciar la lista.
Si el usuario agrega los productos al carrito, el listado se vacía.
La lista de productos deseados solo se guarda en la base de datos cuando el usuario finaliza la session.

## TECNOLOGIAS USADAS

* "@emotion/react":        version "^11.10.4"      Libreria que utiliza Material UI para darle estilos a sus componentes
* "@emotion/styled":       version "^11.10.4"      Libreria que utiliza Material UI para darle estilos a sus componentes
* "@fontsource/roboto":    version "^4.5.8"        Utilizada como fuente para los textos de la app.
* "@mui/icons-material":   version "^5.10.9"       Utilizada para agregar iconos en los componentes.
* "@mui/material":         version "^5.10.10"      Utilizada para la maquetación de los componentes.
* "firebase":              version "^9.14.0"       Utilizada para guardar los productos, las ventas, los usuarios registrados y las wish list.
* "react":                 version "^18.2.0"       Utilizada para la creación de la app.
* "react-dom":             version "^18.2.0"       Utilizada para proporcionar metodos de acceso al DOM virtual.
* "react-router-dom":      version "^6.4.2"        Utilizada para la navegación dentro de la aplicación.
* "react-scripts":         version "5.0.1"         Utilizada para ejecutar los scripts que vienen al instalar create-react-app. (start, build, test, eject)
