# kakosKlan — contexto del proyecto

Web para una obra de teatro a domicilio ("Teatro a domicilio"). El usuario
(Gabriel) está aprendiendo React, Node, Docker y Git desde cero con este
proyecto real.

## Stack y estructura

- `server/` — backend Node + Express. Endpoint `GET /` (placeholder) y
  `GET /api/eventos` (devuelve fechas/lugares de la obra, datos hardcodeados
  de momento). CORS habilitado para el frontend.
- `client/` — frontend React + Vite. CSS con CSS Modules (`Componente.module.css`
  por componente, nunca selectores de etiqueta global tipo `body` dentro de un
  `.module.css`).
- `docker-compose.yml` en la raíz levanta ambos servicios con hot-reload
  (nodemon en server, Vite HMR en client), montando el código como volumen.
- Cada servicio tiene también su propio `Dockerfile` para construir su imagen
  de forma independiente si hace falta.

## Cómo se está trabajando

Desde el 2026-07-29, a petición explícita del usuario, el asistente (con el
subagente `teatro-mentor`, ver `.claude/agents/teatro-mentor.md`) implementa
el código directamente y lo explica después — antes el usuario escribía el
código guiado paso a paso; ya no. Sigue siendo importante explicar el porqué
de cada cambio con el mismo nivel de detalle didáctico que antes (conceptos,
sintaxis, causa de errores), solo cambió quién teclea.

## Estado actual (2026-07-29)

- Git conectado a GitHub (`gvsarrio/kakosKlan`, rama `main`).
- Backend Express funcionando, con `/api/eventos` consumido desde React
  (`client/src/components/Eventos.jsx`, usa `fetch` + `useState` + `useEffect`).
- Componentes React creados: `Header` (título + navbar), `Info` (texto
  expandible con estado), `Eventos` (lista traída del backend).
- `Header` tiene un diseño con fondo de rayas negro/blanco (barrotes, vía
  `repeating-linear-gradient`) y una caja blanca con el logo + enlaces de
  navegación superpuesta, cada elemento con su propio fondo para que se vea
  el rayado entre ellos.
- Variables de color definidas en `client/src/index.css` (`:root`): `--color-bg`,
  `--color-detail`, `--color-red`, `--color-black`, `--color-white`.
- `App.css` e `index.css` se limpiaron del contenido de demostración que trae
  Vite por defecto; `index.css` solo tiene un reset mínimo (`box-sizing`,
  `margin: 0` en `body`) más las variables de color.

## Pendiente / próximos pasos razonables

- Sección de galería de fotos/vídeo.
- Sección/formulario de contacto y reserva.
- Sección de blog/noticias.
- Conectar más partes del frontend al backend (más allá de `/api/eventos`).
- Dockerizar de cara a despliegue real (los Dockerfiles actuales están
  pensados para desarrollo, no para producción — no hay build optimizado del
  cliente ni imagen final servida por Express o nginx).

## Convenciones a mantener

- Nombres de variables CSS y de contenido en español, código (nombres de
  funciones, componentes, propiedades) en inglés/estándar de cada tecnología.
- Un `.module.css` por componente, mismo nombre que el componente.
- Commits en modo imperativo ("Añade X", no "Añadido X" ni "Añadiendo X").
