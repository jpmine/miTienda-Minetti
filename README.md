
# LaBemol

[VER EN VERCEL](https://tienda-de-guitarras-la-bemol.vercel.app/)

![](https://github.com/jpmine/miTienda-Minetti/blob/4f071d3ca1b44e52d7b78164117cf3e4c4537989/Tienda-la-bemol-1.gif)

Tienda e-commerce especializada en guitarras, desarrollada en ReactJS para el curso de Coderhouse.

El proyecto utiliza además Firebase de Google, servicio de base de datos desde el cual la tienda levanta todos los productos disponibles y sus características.
El mismo servicio es usado también para guardar las ordenes de compra que se generan desde la tienda.

La tienda cuenta con 3 secciones donde se van filtrando por categorías los productos (guitarras eléctricas, acústicas o criollas).

## Funcionamiento

Los productos son cargados a la tienda desde Firebase como se indicó anteriormente.
Al hacer click en "Ver más", el cliente puede acceder a una completa descripción de cada guitarra: además de su precio y stock, se informan las características más destacadas de cada una.

En el Navbar aparecerá condicionalmente el ícono de un carrito indicando la cantidad de productos que el cliente va agregando y desde el cual se puede acceder a la vista del carrito. 

Desde allí se puede finalizar la compra (acción que llevará al cliente a un formulario en el cual debe completar sus datos y luego se generará la orden de compra), o bien el cliente puede volver a los productos o vaciar el carrito y/o eliminar puntualmente algún producto en particular.

Recordamos que las ordenes generadas, son guardadas en Firebase.

## Librerías y Hooks
React-router-dom para navegacion: https://www.npmjs.com/package/react-router-dom

React-bootstrap para menú de navegación y cards: https://react-bootstrap.github.io/

React-icons para ícono de corrito: https://react-icons.github.io/react-icons/icons?name=fi

Firebase de Google: https://console.firebase.google.com/

#### Hooks:
useState
useEffect
useParams
useContext

BrowserRouter y Routes junto con Links y Nav.Links para el routing.

## Instalación

### Paso 1 - Clonar el proyecto
Desde el Git Bash ejecutar sobre el directorio donde se desee clonar el proyecto: `git clone https://github.com/jpmine/miTienda-Minetti`

### Paso 2 - Instalar dependencias
Ubicado en la carpeta del proyecto, ejecutar en consola: `npm install`

### Paso 3 - Correr servidor
En la misma carpeta ejecutar en consola: `npm start`


