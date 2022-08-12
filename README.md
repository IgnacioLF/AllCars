# AllCars
Allcars es una aplicación móvil que hace uso de una pequeña API propia. 
La API está desarrollada con Node.js utilizando un servidor HTTP con Express, la base de datos utilizada será MongoDB. 
Para la parte de la aplicación está desarrollada con React-Native junto a Expo para facilitar su desarrollo, 
gracias a esto la aplicación podrá ser utilizada tanto en Android como en iOS. Utiliza Redux para almacenar el jwt y mantener la sesión iniciada

[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

[![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactnative.dev/)
[![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://www.android.com/)
[![iOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white)](https://www.apple.com/es/ios/ios-15/)
[![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)](https://expo.dev/)
[![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](https://es.redux.js.org/)

## Aplicación

<img src="https://i.imgur.com/JwO9pU5.png" width="200">

Allcars es una aplicación móvil que muestra datos sobre los coches del mercado, 
cuenta con un sistema de usuarios en que tras crearnos una cuenta podremos acceder a pantalla principal en la cual podremos acceder a distintas pantallas:
* Coches : Nos mostrara un listado con los distintos coches junto a su precio modelo y tipo. 
También puedes acceder a detalles más específicos de cada coche cuando son pulsados, 
donde se mostrara una descripción más amplia y podrás tener la opción de añadirlo a favoritos.
* Fotos : Nos mostrará fotos de distintos coches las cuales podemos filtrar por día y noche.
* Favoritos : Nos mostrará un listado con los coches que el usuario tenga en favoritos
* Cuenta : Podremos realizar los cambios que necesites sobre la cuenta

## API(back-end)

Mediante HTTP accediendo a las distintas rutas podrás realizar distintas acciones: 
* Usuario :
  Los datos del usuario se guardan en la base de datos junto a la contraseña encriptada.
  Para la autenticación del usuario se utiliza JSON Web Token (JWT) 
  - /user/register :  Crear un usuario nuevo en la base de datos
  - /user/login : Nos genera el JWT del usuario
  - /user/profile : Nos da los datos del usuario 
  - /user/update-profile : Nos permite actualizar los datos del usuario
  - /user/favorites/add : Nos permite añadir un coche a los favoritos del usuario
  - /user/favorites/remove : Elimina de los favoritos el coche enviado
  - /user/favorites/all : Nos da un array de todos los datos de los coches favoritos del usuario
  - /user/favorites/check : Nos permite comprobar si el usuario tiene en favoritos un coche en especifico
* Coches :
  Los datos de los coches se guardan en la base de datos menos la foto que se guarda en /uploads
  - /car/all : Nos da un array con todos los coches
  - /car/car : Nos da los datos de un coche en especifico
  - /car/new-car : Crear un nuevo coche en la base de datos
  - /car/remove : Elimina el coche de la base de datos
  - /car/update-image : Nos permite actualizar la imagen de un coche
* Fotos :
  Los datos de las fotos se guardan en la base de datos menos la foto que se guarda en /uploads
  - /phooto/allday : Nos da un array con todas las fotos de día
  - /photo/allnight : Nos da un array con todas las fotos de noche
  - /photo/new : Crea una nueva foto en la base de datos
  - /photo/remove : Elimina la foto de la base de datos
 
 ## Capturas

 ![gif](https://user-images.githubusercontent.com/100155212/184326355-f5e56e0b-9699-4ab8-a0db-71880f8022f1.gif)
 <img src="https://i.imgur.com/Sm3GqxQ.png" width="480">
 
 <img src="https://i.imgur.com/ZrgySvt.png" width="480"> <img src="https://i.imgur.com/4HiwLT3.png" width="480">
 
 <img src="https://i.imgur.com/usu9VAo.png" width="480"> <img src="https://i.imgur.com/0GjT7aG.png" width="480">
 
 <img src="https://i.imgur.com/HF8XJu9.png" width="480"> <img src="https://i.imgur.com/3cSmz8g.png" width="480">

 
