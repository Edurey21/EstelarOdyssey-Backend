# Estelar Odyssey-Backend
Este proyecto es una aplicación backend desarrollada con Node.js y Express. El proyecto incluye configuraciones básicas para manejar solicitudes HTTP y permitir la comunicación con el frontend de Estelar Odyssey.

## Descripción

Este proyecto utiliza la siguiente configuración:

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web para Node.js, utilizado para construir la API del backend.
- **CORS**: Middleware para habilitar solicitudes de recursos cruzados.
- **Body-Parser**: Middleware para analizar cuerpos de solicitud entrantes en middleware de Express.

## Instalación

### Requisitos Previos

Asegúrate de tener instalado Node.js y npm en tu máquina. Puedes descargarlos desde [nodejs.org](https://nodejs.org/).

### Instalación de Dependencias

```bash
npm install
```

### Instalación de Dependencias Adicionales

Para configurar el servidor backend, utiliza los siguientes comandos:

```bash
npm init -y
npm install express cors body-parser
```

## Ejecución del Proyecto

Para iniciar el servidor, ejecuta:

```bash
node index.js
```

Esto iniciará el servidor en `http://localhost:5000`.

## Descripción de la Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
sugerencias-backend/
├── data/
│   ├── suggestions.json
├── node_modules/
├── index.js
├── package.json
├── package-lock.json
```
