# MealTicket Frontend

Este es el frontend de **MealTicket**, una aplicación desarrollada en **React** con **TypeScript** y **Vite** que permite la gestión de vouchers de alimentación. La aplicación utiliza **Apollo Client** para comunicarse con un backend GraphQL y está estilizada con **Chakra UI** y **Shadcn/UI**.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Características Principales](#características-principales)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/mealticket-frontend.git
   cd mealticket-frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:

   ```env
    VITE_API_URL=http://localhost:4000/graphql
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre tu navegador y navega a `http://localhost:4000` o al puerto que se indique en la terminal.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```bash
├── public/                      # Archivos públicos como favicon y manifest.json
├── src/                         # Código fuente de la aplicación
│   ├── assets/                  # Archivos estáticos (imágenes, fuentes, etc.)
│   ├── components/              # Componentes reutilizables de la aplicación
│   │   └── ui/                  # Componentes dedicados a de la interfaz de usuario
│   ├── context/                 # Contextos de React para manejo de estado global
│   │   └── AuthContext.tsx      # Contexto de autenticación
│   ├── hooks/                   # Hooks personalizados
│   │   ├── useLocalStorage.tsx  # Hook para manipular localStorage
│   │   └── UseVoucherButton.tsx # Hook para manejo de acciones con vouchers
│   ├── lib/                     # Librerías y utilidades compartidas
│   │   └── utils.ts             # Utilidades generales
│   ├── pages/                   # Páginas principales de la aplicación
│   │   ├── Dashboard.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   ├── services/                # Configuración de Apollo Client y servicios de API
│   │   ├── apolloClient.ts      # Configuración de Apollo Client
│   │   ├── auth.ts              # Servicios de autenticación
│   │   ├── user.ts              # Servicios relacionados con usuarios
│   │   └── voucher.ts           # Servicios relacionados con vouchers
│   ├── types/                   # Tipos de TypeScript utilizados en la aplicación
│   │   └── index.ts             # Archivo que agrupa todos los tipos
│   ├── App.tsx                  # Componente principal de la aplicación
│   ├── main.tsx                 # Punto de entrada de la aplicación
│   └── vite-env.d.ts            # Declaraciones de tipos para Vite
├── .gitignore                   # Archivos y carpetas ignoradas por Git
├── package.json                 # Dependencias y scripts de NPM
├── tsconfig.json                # Configuración de TypeScript
├── tsconfig.app.json            # Configuración de TypeScript para la aplicación
├── tsconfig.node.json           # Configuración de TypeScript para Node.js
├── tailwind.config.js           # Configuración de Tailwind CSS
├── vite.config.ts               # Configuración de Vite y alias
└── README.md                    # Documentación del proyecto

```

## Características Principales

- **Gestión de Vouchers**: La aplicación permite a los usuarios gestionar sus vouchers de alimentación.
- **Autenticación**: Los usuarios pueden autenticarse en la aplicación.
- **Gestión de Usuarios**: Los administradores pueden gestionar los usuarios de la aplicación.
- **Gestión de Roles**: Los administradores pueden gestionar los roles de los usuarios.
