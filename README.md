# Veterinaria-TotalCoin

## Instrucciones para levantar el proyecto

Requisitos:

* .NET 6.0
* NodeJS v18.12.0 o similar

Instalación:

  1. Clonar el repositorio.
  `git clone https://github.com/JorTohme/veterinaria`
  2. Dentro de la carpeta dotnet-backend ejecutar `dotnet restore`
  3. Dentro de la carpeta react-frontend ejecutar `npm install`

Levantar el proyecto:

  1. Dentro de la carpeta dotnet-backend ejecutar `dotnet run`
  2. Dentro de la carpeta react-frontend ejecutar `npm run dev`

## Cómo está hecho

La parte del frontend está hecha en ReactJS con [ViteJS](https://vitejs.dev/) como bundler y [TailwindCSS](https://tailwindcss.com/) como framework de CSS para darle unos estilos sencillos sin complicarme con el CSS.
La parte del backend está hecha en .NET 6.0 con C#.

### Base de datos

Si bien en los requisitos se detalla que no se requiere una base de datos persistente, elegí simular una mediante archivos JSON (En dotnet-backend/Database) para facilitar el desarrollo y correción del ejercicio. Hay un archivo Database.cs que se encarga de leer y escribir los archivos JSON. Por lo tanto todas las operaciones que se hagan sobre la aplicación quedan registradas.

### Backend

La API tiene los siguientes endpoints:
  
    - GET `/User` - Devuelve una lista de todos usuarios 
    - POST `/User` - Crea un nuevo usuario
    - GET `/User/{user}` - Devuelve un usuario por su nombre de usuario
    - GET `/User/{user}/pets` - Devuelve una lista de mascotas de un usuario
    - POST `/User/{user}/pets` - Crea una nueva mascota para un usuario
    - GET `/User/{user}/combos` - Devuelve una lista de combos de un usuario
    - POST `/User/{user}/combos` - Crea un nuevo combo para un usuario
    - PUT `/User/{user}/combos/{orderNumber}` - Actualiza un combo de un usuario (Lo marca como despachado)

    - GET `/Pet` - Devuelve una lista de todas las mascotas

    - GET `/Seller` - Devuelve una lista de todos los vendedores
    - POST `/Seller` - Crea un nuevo vendedor

    - GET `/Combo` - Devuelve una lista de todos los combos

    - POST `/Login` - Comprueba las credenciales de un usuario para iniciar sesión

Se aplican modelos, controladores y servicios para cada clase además del manejo de BD. No hay inyección de dependencias ni patrones complejos para agilizar el desarrollo y porque el ejercicio no lo requiere.

USUARIOS DE PRUEBA:

Para facilitar el testeo del ejercicio ya hay 2 usuarios registrados en la Base de datos:

Usuario `Jorge` - Contraseña `12345` - Rol `Cliente` -> Mascotas: `Azul` y `Branca` - 2 combos, uno despachado y otro no
Usuario: `Vendedor` - Contraseña: `12345` - Rol: `Vendedor`

### Frontend

El frontend está hecho en React usando Vite y estilando un poco con TailwindCSS. Se usan componentes para reutilizar y ordenar código y uso React Router para manejar las rutas de la aplicación.

La página no es responsive al 100% porque no era requerimiento pero se puede ver en un celular sin problemas.
Hay solo 3 rutas, este comentario en App.jsx lo resume:

"Es obligatorio pasar por la pantalla de Login, en esta se puede seleccionar si el usuario es Vendedor o Cliente
(Los usuarios clientes se pueden registrar en la pantalla de Login, los vendedores solo pueden registrarse por otro vendedor)
Si se selecciona vendedor, se redirige a la pantalla de vendedor, si se selecciona cliente, se redirige a la pantalla de cliente.

En la pantalla vendedor se pueden ver todos los combos pedidos - y despacharlos -; se pueden ver todos los usuarios y sus mascotas;
se pueden ver todos los users de los vendedores y registrar a otro vendedor.

En la pantalla de cliente se pueden ver las mascotas del usuario, los combos disponibles seleccionando una mascota,
y los combos pedidos. También se pueden registrar mascotas."

El calculo de los combos se hace en el frontend con los datos suministrados por el backend, no en el backend directamente.

## Puntos a mejorar

Ordenar y mejorar los endpoints de la API. Aplicar otro patrón.
Mejorar las "sesiones" de usuario que en realidad no son sesiones.
Hashear las contraseñas.

Diseñar el frontend mejor.
