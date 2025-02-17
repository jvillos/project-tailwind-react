# Práctica 5.1: Creación de un Sistema de Diseño e Implementación en React + Tailwind CSS

En esta práctica, hemos desarrollado un sistema de diseño basado en los wireframes creados en la [Práctica 4.1.](https://www.figma.com/design/wVp8c4drg3ekrAwQ56zL8p/Empresa-dise%C3%B1o?node-id=0-1&t=uKXAPWifFQPEpdmR-1) Se ha estructurado y documentado el sistema en Figma y posteriormente implementado en un proyecto de React con TypeScript, utilizando Tailwind CSS para la estilización.

Para la presentación de este proyecto presentaremos nuestro sistema de diseño elegido, haciendo incapié en los componentes que utilizaremos con sus variantes. También mostraremos la implementación de los estilos con Tailwind CSS, la implementación de los distintos componentes con React para terminar con una lista de recursos de interés.

- [Proyecto en Figma](https://www.figma.com/design/wVp8c4drg3ekrAwQ56zL8p/Empresa-dise%C3%B1o?node-id=67-43&t=uKXAPWifFQPEpdmR-1)
- [Repositorio de Github](https://www.figma.com/design/wVp8c4drg3ekrAwQ56zL8p/Empresa-dise%C3%B1o?node-id=67-43&t=uKXAPWifFQPEpdmR-1)


## Índice

1. Definición del Sistema de Diseño

2. Componentes elegidos

3. Implementación de estilos con Tailwind CSS

4. Implementación de componentes con React

5. Enlaces de interés


## 1. Definición del [Sistema de Diseño](https://www.figma.com/design/wVp8c4drg3ekrAwQ56zL8p/Empresa-dise%C3%B1o?node-id=67-43&t=uKXAPWifFQPEpdmR-1)

![Descripción de la imagen](/images/picture.jpg)

## 2. Componentes elegidos

## 3. Implementación de estilos con Tailwind CSS

## 4. Implementación de componentes con React

## 5. Enlaces de interés


# Enlaces de interés

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
