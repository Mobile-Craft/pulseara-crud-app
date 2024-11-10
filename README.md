# Pulseara CRUD App

Esta es una aplicación CRUD para la gestión de procedimientos, construida con **React + TypeScript** usando **Vite** como bundler y **AWS Amplify** como backend, con **AppSync** para la API GraphQL. La aplicación incluye características para crear, leer, actualizar y eliminar procedimientos.

## Tabla de Contenidos
- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración de AWS Amplify](#configuración-de-aws-amplify)
- [Ejecutar el Proyecto](#ejecutar-el-proyecto)
- [Configuración Avanzada de ESLint](#configuración-avanzada-de-eslint)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Comandos Disponibles](#comandos-disponibles)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Características

- **CRUD Completo**: Operaciones de creación, lectura, actualización y eliminación de procedimientos.
- **Modal de Edición**: Edita múltiples registros en un modal, con la opción de agregar y marcar para eliminación.
- **AWS Amplify y AppSync**: Utiliza GraphQL para manejar el backend de forma escalable y eficiente.
- **React + TypeScript + Vite**: Configuración rápida con Hot Module Replacement (HMR) y un conjunto de reglas básicas de ESLint.

## Requisitos Previos

Antes de comenzar, asegúrate de tener lo siguiente instalado en tu sistema:

- **Node.js** (v14 o superior)
- **npm** (v6 o superior)
- **AWS CLI** configurado en tu entorno con las credenciales necesarias
- **Amplify CLI** configurado para tu usuario

Para instalar el Amplify CLI:

```bash
npm install -g @aws-amplify/cli


  ## Instalacion
Clona el repositorio:
https://github.com/Mobile-Craft/pulseara-crud-app.git

  ## Instala las dependencias:
  npm install

 ## Ejecutar el Proyecto
  npm run dev


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# pulseara-crud-app
