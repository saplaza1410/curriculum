# Sergio Plaza — Portfolio

Portfolio web profesional de Sergio Plaza, Desarrollador Full Stack con 5+ años de experiencia en PHP, Laravel, Docker y más.

## Stack

- **Frontend:** HTML5, CSS3, Vanilla JS
- **Backend:** Node.js + Express.js
- **Datos:** JSON file
- **Autenticación:** express-session

## Funcionalidades

- Single-page portfolio con 6 secciones (Hero, Sobre mí, Experiencia, Habilidades, Portfolio, Contacto)
- Panel de administración en `/admin` para gestionar proyectos
- Diseño Gradient Modern responsive (mobile-first)
- Redes sociales: GitHub, LinkedIn, WhatsApp

## Instalación local

```bash
git clone https://github.com/saplaza1410/curriculum.git
cd curriculum
npm install
```

Crea un archivo `.env` basado en `.env.example`:

```env
ADMIN_PASSWORD=tu_password
SESSION_SECRET=cadena_aleatoria_larga
PORT=3000
NODE_ENV=development
```

Arranca el servidor:

```bash
npm start
```

Abre [http://localhost:3000](http://localhost:3000)

## Panel Admin

Accede en `/admin` con la contraseña definida en `ADMIN_PASSWORD`.

Desde el admin puedes añadir, editar y eliminar proyectos del portfolio.

## Tests

```bash
npm test
```

## Despliegue

Desplegado en [Render](https://render.com). Variables de entorno requeridas:

| Variable | Descripción |
|----------|-------------|
| `ADMIN_PASSWORD` | Contraseña del panel admin |
| `SESSION_SECRET` | Secreto para las sesiones |
| `NODE_ENV` | `production` |
