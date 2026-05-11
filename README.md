# 🛍️ MyStore — E-commerce Fullstack

> Tienda online moderna construida con React, Firebase y FakeStoreAPI. Proyecto final del reto Fullstack UPB.

🌐 **Demo en vivo:** [https://Vlabecor.github.io/proyecto-final](https://Vlabecor.github.io/proyecto-final)

---

## ✨ Características

- 🛒 **Carrito de compras** con persistencia en localStorage (Zustand)
- 🔐 **Autenticación real** con Firebase Authentication (Email/Contraseña)
- ☁️ **Pedidos en la nube** guardados en Firestore
- 🌐 **Catálogo real** consumido desde [FakeStoreAPI](https://fakestoreapi.com/)
- 📱 **Diseño responsive** Mobile First con menú hamburguesa
- 🎨 **UI Premium** con Tailwind CSS y animaciones suaves
- ⚡ **Lazy Loading** de componentes para mejor performance
- 🚀 **Desplegado** en GitHub Pages

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|-----------|-----|
| React 19 | Framework principal |
| Vite | Bundler y dev server |
| Tailwind CSS v4 | Estilos y diseño |
| Zustand | Estado global (carrito, productos) |
| React Router v7 | Navegación SPA |
| Firebase Auth | Autenticación de usuarios |
| Firestore | Base de datos en la nube |
| FakeStoreAPI | Catálogo de productos real |
| gh-pages | Deploy en GitHub Pages |

---

## 📁 Estructura del Proyecto

```
src/
├── assets/          # Imágenes y recursos estáticos
├── components/
│   ├── atoms/       # Componentes base (botones, inputs)
│   ├── molecules/   # ProductCard, SearchBar
│   ├── organisms/   # Gallery, NavBar, Cart, Checkout, Login, Register
│   └── templates/   # Layout principal
├── config/          # Configuración de Firebase
├── services/        # authService, productService, firestoreService
├── store/           # cartStore, productStore (Zustand)
└── styles/          # main.css (Tailwind)
```

---

## 🚀 Instalación y Uso Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/Vlabecor/proyecto-final.git
cd proyecto-final

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de Firebase

# 4. Iniciar en modo desarrollo
npm run dev
```

---

## 🔑 Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con:

```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_proyecto
VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
```

---

## 📦 Scripts Disponibles

```bash
npm run dev        # Servidor de desarrollo
npm run build      # Build para producción
npm run preview    # Preview del build
npm run deploy     # Deploy a GitHub Pages
```

---

## 📱 Páginas de la Aplicación

| Ruta | Descripción |
|------|-------------|
| `/gallery` | Catálogo de productos con filtros y búsqueda |
| `/product/:id` | Detalle del producto |
| `/cart` | Carrito de compras |
| `/checkout` | Proceso de pago |
| `/order-success` | Confirmación de pedido |
| `/login` | Inicio de sesión |
| `/register` | Registro de usuario |
| `/profile` | Perfil del usuario |

---

## ✅ Buenas Prácticas Implementadas

- ✅ `.gitignore` configurado correctamente
- ✅ **+34 commits** descriptivos y organizados por paso
- ✅ Código modular con separación de responsabilidades
- ✅ Componentes reutilizables (`ProductCard`, `NavBar`, `Footer`)
- ✅ Estado global con **Zustand** (carrito y productos)
- ✅ `useMemo` para evitar renders innecesarios en filtros
- ✅ **Lazy Loading** de rutas para mejor performance
- ✅ Variables de entorno para datos sensibles
- ✅ Diseño **Mobile First** completamente responsivo

---

## 👤 Autor

**Vlabecor** — Proyecto Final Reto Fullstack UPB 2025

[![GitHub](https://img.shields.io/badge/GitHub-Vlabecor-black?logo=github)](https://github.com/Vlabecor)
