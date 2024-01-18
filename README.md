# GeoApp

## Descripción
GeoApp es una aplicacion web que te permite visualizar todos los paises, su nombre y bandera. Esto al consumir una api graphQL: https://countries.trevorblades.com/ 

## Características Principales
- podras visualizar todas las banderas con el nombre del pais correspondiente.

![Alt text](<images/Captura desde 2024-01-17 20-07-08.png>)



## Instalación

- En la terminal de la carpeta `server` y en la carpeta `client`, ejecuta el siguiente comando para instalar las dependencias del servidor:
```bash
npm i
```
## Base de Datos
Para este proyecto usaremos una base de datos no SQL (no relacionales), con el motor de bases de datos mongoDB. En esta guardaremos toda la info de los paises que en un futuro podras crear. 

En esta base de datos almacenaras por cada pais : 
- codigo
- nombre 
- capital 
- moneda 
- idiomas (se usara un array, debido a que pueden ser varios idiomas en el mismo pais)
- continente.

![Alt text](<images/Captura desde 2024-01-17 20-47-46.png>)


para acceder a la base de datos utiliza en mongo compass el enlace:
```bash
mongodb+srv://<user>:<password>@cluster0.sxdtfez.mongodb.net/GeoApp
```
## Uso
- para correr el servidor utiliza dentro de la terminal de server el comando:
```bash
nodemon index.js
```
- luego para abrir GeoApp, usa el comando en la terminal cliente:
```bash
npm run dev
```
y selecciona el enlace.


## Estado del Proyecto
El proyecto continua en desarrollo, en futuras versiones, podras implementar la creacion de paises e interactuar con ellos, te estaremos actualizando e informando 😃.
## Integrantes
- Deivy Patiño
- Samuel Zapata
- Juan Diego Barrera
- Brallam Delgado

## Contacto
cualquier problema o duda contactanos por medio de nuestro correo:

deivypr28@gmail.com

