# desarrollo-movil-isfdyt-27

# Instalar Expo

npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

# Crear un proyecto con expo

npx create-expo-app my-app --template blank-typescript

# Inicializar dependencias 

cd my-app
npm install

# Correr el proyecto

npm run start

# Install Expo router

npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

# Modificar el package.json modificando la linea main

{
  "main": "expo-router/entry"
}

# Modificar app.json

{
  "expo": {
    "scheme": "proyecto-prueba", // --> agregar esta linea
    "name": "proyecto-prueba",
    "slug": "proyecto-prueba",
 ....
  }
}
