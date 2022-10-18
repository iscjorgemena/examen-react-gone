# examen-react-gone

## Instrucciones para levantar el proyecto y hacer pruebas (Despues de Clonar)
1.- Iniciar el json server en una terminal: json-server --watch db/db.json --port 3001

2.- En otro terminal dentro de la raiz del proyecto copiar el ".env.example" a .env, dejar el archivo tal cual

3.- Instalar node_modules: yarn install

4.- Hacer build al sitio: yarn build

5.- Iniciar el proyecto en modo produccion: yarn start ('http://localhost:3000/')

6.- En otro terminal ejecutar: yarn cypress, esto abrira una aplicacion.

7.- En la aplicacion abierta selecionar "E2E testing"

8.- Seleccionar el navegado correspondiente y click en "Start E2E Testing", abrira el navegado seleccionado y se mostraran las pruebas

9.- Ejecutar la prueba deseada dando click

## ¿Qué es lo que más te gustó de tu desarrollo?
Realmente me gusto todo, desde el maquetar hasta aprender como usar flexbox, al igual me agrado aprender como usar https://www.netlify.com/

##  Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?
Hubiese puesto los botones de favoritos y agregar como fixed para que te siga segun el scroll y hubiese mejorado la forma de usar las variables de sass en mi codigo (uso mas less el dia a dia), al igual hubiese creado un endpoint para poder subir la imagen del personaje al public

## Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste
Al final de la liberacion encontre un bug que solo aparece en produccion, este bug es al querer eliminar un favorito el navegador lanza un error de iteracion, pese a todas mis pruebas no logre replicarlo en desarrollo, en dicho ambiente no se presenta

## Comentario personal
Como comente en el punto anterior al momento de pasar a produccion me da un error pero no especifica donde.
Para probar la funcionalidad de eliminar favoritos seguir los pasos siguientes:

1.- Iniciar el json server en una terminal: json-server --watch db/db.json --port 3001

2.- En otro terminal dentro de la raiz del proyecto copiar el ".env.example" a .env, dejar el archivo tal cual(siempre y cuando no exista el archivo)

3.- Instalar node_modules: yarn install

4.- Iniciar el proyecto en modo desarrollo: yarn dev('http://localhost:3000/')