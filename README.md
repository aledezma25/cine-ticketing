# 🌟 Proyecto MOCA desarrollado en Laravel con Vue.js

¡Bienvenido! Este repositorio contiene una aplicación web desarrollada con **Laravel** (backend) y **Vue.js** (frontend). Aquí encontrarás todo lo necesario para configurar y ejecutar el proyecto en tu entorno local. 🚀

---

## 📋 Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu sistema:

- 🐘 **PHP** (>= 8.0)
- 🎼 **Composer**
- 🟢 **Node.js** y **npm**
- 🗄️ **MySQL**

---

## ⚡ Instalación rápida

Sigue estos pasos para tener todo funcionando en minutos:

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/Ballesd/MoCA.git
cd MoCA

```

## 2️⃣ Configurar el entorno
Duplica el archivo .env.example y renómbralo como .env. Luego, configura la conexión a la base de datos en el archivo .env:
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
## 3️⃣ Instalar dependencias
Ejecuta los siguientes comandos para instalar las dependencias necesarias:

- Backend (Laravel):
```bash
composer install
```
- Frontend (Vue.js):
```bash
npm install
```

## 4️⃣ Configurar la base de datos
Ejecuta las migraciones y rellena las tablas con datos usando los seeders:
```bash
php artisan migrate
php artisan db:seed
```

## 5️⃣ Ejecutar los servicios
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
- Frontend: Visita http://localhost:5173 (por defecto en Vite).
- Backend: Visita http://localhost:8000.

## 🛠️ Herramientas utilizadas
- ⚙️ Laravel: Framework PHP para la lógica de negocio.
- 🌐 Vue.js: Framework JavaScript para la interfaz de usuario.
- 🗄️ MySQL: Sistema de gestión de bases de datos.


