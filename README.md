# Iniciar Proyecto Laravel y React

## Requisitos Previos

-   PHP >= 8.2
-   Composer
-   Node.js
-   npm

## Instalación

### Composer

```bash
composer install
```

Creación de .env

```bash
cp .env.example .env
```

Generación de Key

```bash
php artisan key:generate
```

### NPM

```bash
npm install
```

## Configuración de base de datos

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

## Configuración de site (Opcional)

```env
SERVE_HOST=null
SERVE_HTTPS_KEY=null
SERVE_HTTPS_CERT=null
```

## Objetivo

Crear un sistema CRUD para **articulos** utilizando **React.js** como frontend y **Laravel** como backend. El objetivo es desarrollar una aplicación funcional que cumpla con los siguientes puntos:

### Requisitos

#### Backend

-   Generar migraciones para la base de datos.
-   Crear modelos que representen las entidades.
-   Implementar controladores para manejar la lógica del servidor.
-   Diseñar APIs RESTful.

#### Frontend

-   Consumir las APIs del backend.
-   Diseñar e implementar una interfaz de usuario (UI).

### Elementos Adicionales (Opcionales)

Agregar funcionalidades avanzadas en el frontend:

-   Uso de **Hooks** para la gestión de estado y efectos.
-   Implementación de **Contextos** para manejar estados globales.
-   Uso de **Reducers** para estructurar lógicas complejas de estado.

### Criterios de Evaluación

-   Cumplimiento de los requisitos básicos del CRUD.
-   Calidad y claridad del código (estructuración, comentarios, buenas prácticas).
-   Documentación clara y suficiente.
-   Uso de React (Hooks, Contextos, Reducers, Estados, Componentes).
-   Estabilidad y funcionamiento general del sistema.

**Nota:** Los elementos adicionales son opcionales pero se valorarán como puntos extra.

¡Buena suerte!
