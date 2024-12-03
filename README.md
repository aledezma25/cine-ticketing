# Proyecto Laravel con Vue.js 🌟

¡Bienvenido! Este repositorio contiene una aplicación web desarrollada con **Laravel** para el backend y **Vue.js** para el frontend. Aquí encontrarás instrucciones detalladas para instalar y ejecutar el proyecto en tu entorno local.

---

## 📋 Requisitos previos

Asegúrate de tener instalados los siguientes componentes en tu sistema:

- **PHP** (>= 8.0)
- **Composer**
- **Node.js** y **npm**
- **MySQL**

---

## 🚀 Instalación

Sigue estos pasos para configurar y ejecutar el proyecto:

### 1. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

## 2. Configurar el entorno
Duplica el archivo .env.example y renómbralo como .env. Luego, configura la conexión a la base de datos en el archivo .env:
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
## 3. Instalar dependencias
Ejecuta los siguientes comandos para instalar las dependencias necesarias:

Backend (Laravel):
```bash
composer install
```
Frontend (Vue.js):
```bash
npm install
```

## 4. Configurar la base de datos
Ejecuta las migraciones y rellena las tablas con datos usando los seeders:
```bash
php artisan migrate
php artisan db:seed
```

## 5. Ejecutar los servicios
Inicia ambos servicios para desplegar la aplicación:

Frontend (Vue.js):
```bash
npm run dev
```

Backend (Laravel):
```bash
php artisan serve
```

## 🌐 Acceso a la aplicación
Frontend: Visita http://localhost:5173 (por defecto en Vite).
Backend: Visita http://localhost:8000.

## 🛠️ Herramientas utilizadas
Laravel: Framework PHP para la lógica de negocio.
Vue.js: Framework JavaScript para la interfaz de usuario.
MySQL: Sistema de gestión de bases de datos.

