# kakosKlan

Web para una obra de teatro a domicilio. Backend en Node/Express (`server/`) y
frontend en React/Vite (`client/`).

## Arrancar con Docker (recomendado, mismo entorno en cualquier máquina)

Requisito: Docker Desktop instalado y abierto.

```
docker compose up
```

- Backend: http://localhost:3000
- Frontend: http://localhost:5173

Los contenedores montan el código como volumen y recargan solos al guardar
cambios (nodemon en el backend, Vite HMR en el frontend) — no hace falta
reconstruir la imagen tras cada edición, solo si cambian las dependencias
(`package.json`).

Para reconstruir tras instalar una dependencia nueva:
```
docker compose up --build
```

Para pararlo:
```
docker compose down
```

## Arrancar sin Docker (Node instalado localmente)

En dos terminales separadas:

```
cd server
npm install
npm run dev
```

```
cd client
npm install
npm run dev
```

## Contexto del proyecto

Ver [CLAUDE.md](./CLAUDE.md) para el estado actual del desarrollo, decisiones
tomadas y próximos pasos — se mantiene actualizado a medida que avanza el
proyecto, para poder retomarlo desde cualquier ordenador.
