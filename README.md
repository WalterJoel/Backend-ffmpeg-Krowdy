# Backend-ffmpeg-Krowdy
Reto de Backend propuesto en el bootcamp de Krowdy

### Video Demostrativo
```bash 
https://drive.google.com/file/d/1ksFBYCOrMew7zT8RBUzpVp9D3vrx4O3f/view?usp=sharing
```

## Primero se debe instalar dependencias
```bash 
yarn
```
## Luego iniciar el proyecto
```bash 
yarn dev 
```
## Luego ir al navegador, con esta ruta se descargan los videos de Reddit
``` 
http://localhost:8080/getVideos
ojo la cantidad de videos dependera del limite que se declare.
```

##  Con esta ruta se genera el .txt que permite luego concatenar los videos
``` 
http://localhost:8080/getListOfVideos
```
##  Con esta ruta se genera el video final que resulta la concatenacion de todos los videos
``` 
http://localhost:8080/createReel
```
