#                                                                       CB3DESIGN

CB3DESIGN es un E-commerce destinado a la venta de productos impresos en 3D para el rubro de la pastelería. 

La app está diseñada utilizando la librería de JavaScript React.JS 

Dentro de esta aplicación web podrás navegar a través de las categorías de los diferentes productos, ver sus respectivos detalles, agregarlos al carrito y realizar una compra online. En la sección USANDO LA APLICACION se explicará detalladamente el su uso.


## INSTALACION 
Para instalar la app es necesario descargar los archivos del repositorio o bien, si utiliza la aplicación Git, puede clonar el repositorio directamente desde consola.

A través del siguiente link puede acceder al proyecto:
[a link] https://github.com/Giovi-22/Proyecto-Coderhouse

Una vez dentro del repositorio puede hacer click en el botón "<>Code" en donde podra descargar el proyecto en formato .zip o copiar el link para realizar el clonado a través de Git.
Descargado el proyecto, abra su consola de comandos, ingrese a la carpeta principal del proyecto y escriba en consola el comando `npm install` para instalar la aplicación y sus dependencias. Una vez completada la instalación ejecute el comando `npm start` para correr la aplicación y poder verla en el navegador. 

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



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
