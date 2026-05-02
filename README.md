# Consoltics - Premium Digital Transformation Consulting

Consoltics es una plataforma web corporativa diseñada para una consultoría de transformación digital de alto nivel. El proyecto destaca por un diseño oscuro ("Dark Mode") elegante, animaciones fluidas y una arquitectura escalable.

## 🚀 Tecnologías Utilizadas

- **React 19** - Librería principal para la interfaz.
- **TypeScript** - Tipado estático para un código más robusto.
- **Tailwind CSS 4** - Framework de utilidades CSS de última generación.
- **Motion** - Biblioteca para animaciones y transiciones suaves.
- **React Router 7** - Gestión de navegación y rutas de la SPA.
- **Lucide React** - Set de iconos modernos y consistentes.
- **Vite** - Bundler de alto rendimiento para desarrollo y construcción.

## 🛠️ Requisitos Previos

- [Docker](https://www.docker.com/get-started) instalado.
- [Docker Compose](https://docs.docker.com/compose/install/) instalado.
- Node.js 20+ (opcional, solo para ejecución local sin Docker).

## 🐳 Ejecución con Docker

El proyecto incluye una configuración de Docker optimizada tanto para desarrollo como para producción.

### 1. Producción (Contenedor Nginx)

Para levantar la aplicación en un entorno similar a producción (archivos optimizados servidos por Nginx):

```bash
docker-compose up --build app
```

La aplicación estará disponible en: `http://localhost:8080`

### 2. Desarrollo (Hot Reload)

Para trabajar en el código con recarga en tiempo real dentro de un contenedor:

```bash
docker-compose up dev
```

La aplicación estará disponible en: `http://localhost:3000`

## 💻 Ejecución Local (Sin Docker)

Si prefieres ejecutarlo directamente en tu máquina:

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Construir para producción:
   ```bash
   npm run build
   ```

## 📂 Estructura del Proyecto

- `/src/components`: Componentes reutilizables (Navbar, Footer, etc.).
- `/src/pages`: Vistas principales de la aplicación (Home, Clientes).
- `/src/App.tsx`: Configuración de rutas y layout principal.
- `/.nginx`: Configuración personalizada de Nginx para manejar el routing de la SPA.
- `Dockerfile`: Definición de la imagen de producción (Multi-stage build).
- `docker-compose.yaml`: Orquestación de servicios para Dev y Prod.

---
© 2026 Consoltics. Innovación y Seguridad Digital.
