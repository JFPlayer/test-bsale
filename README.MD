#Test Bsale Backend
_Aplicacion web ecommerce desarrollado como prueba tecnica para Bsale_

##Vista previa 
[![](/preview-bsale.jpg)](https://test-bsale-joel-flores.herokuapp.com/)
Demo: [E-commerce Bsale](https://test-bsale-joel-flores.herokuapp.com/)

##Comenzando 🚀
_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

###Instalación 🔧

Clonar el proyecto
```bash
  git clone https://github.com/JFPlayer/test-bsale.git
```
Ir a la carpeta del proyecto
```bash
  cd test-bsale
```
Instalar dependencias
```bash
  npm install
```
Iniciar el servidor de desarrollo
```bash
  npm run dev
```

##Referencias de la API :information_source:

####Obtener todos los productos
```http
  GET /api/products
```

####Obtener los productos filtrados
```http
  GET /api/products?search=${keyword}&categoryId=${categoryId}&limit=${limit}&page=${page}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `keyword` | `string` |  Palabra clave para filtrar los productos |
| `categoryId` | `number` |  ID de la categoria |
| `limit` | `number` |  Cantidad de productos por paginas |
| `page` | `number` |  Numero de pagina |

####Obtener un producto
```http
  GET /api/products/${productId}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `productId` | `number` |  ID del producto |
####Obtener las categorias
```http
  GET /api/categories/
```

##Variables de entorno :lock:
Para iniciar este proyecto necesitas crear un archivo .env en la raiz del proyecto y añadir estas variables de entorno

`PORT`
`DB_HOST`
`DB_USER`
`DB_PASSWORD`
`DB_NAME`

##Caracteristicas 📋
- Busqueda de productos por "palabras clave", categoria
- Carrito de compras
- Paginación


##Construido con 🛠️
**Server:** Node, Express, Sequelize

##Autor ✒️
**[Joel Flores](https://www.linkedin.com/in/joel-flores-7801/)**
