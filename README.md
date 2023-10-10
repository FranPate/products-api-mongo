#Objetivo:
Definir una api para poder gestionar nuestro inventario de productos

#Acciones:
- Identificarnos (auth)
- Añadir productos al inventario (post)
- Eliminar productos del inventario (delete)
- Consultar todos los productos (get)
- Consultar por id (get)
- Editar el contenido de los productos (put)

#REST Design:
- Añadir Productos: POST /products
- Consultar Todos los Productos: GET /products
- Consultar un Producto: GET /products/:id
- Eliminar Producto: DELETE /products/:id
- Editar un Producto: PUT /products/:id
- Sistema de Credenciales

-Probar con postman


1- Definir las rutas a utilizar
2- Preparar los test para realizar las funciones y los endpoints
3- Hacer los logins y la autentifiacion para cada endpoint
4- Crear los routes para limpiar codigo