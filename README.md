# Agenda Citas

Agenda estática publicada mediante GitHub Pages, con vistas diaria, semanal y mensual.

## Arquitectura

- HTML, CSS y JavaScript sin npm ni proceso de build.
- Firebase Authentication mediante correo y contraseña, sin registro público.
- Cloud Firestore como almacenamiento persistente.
- Sincronización de citas en tiempo real.
- Una cita por documento en `appointments`, usando `YYYY-MM-DD_HH:mm` como ID.
- Transacciones para impedir que dos dispositivos ocupen la misma fecha y hora.

La configuración pública de la aplicación Firebase está incluida en `index.html`. El acceso
a los datos depende de Firebase Authentication y de la lista de UID permitidas en
`firestore.rules`.

## Desarrollo local

La aplicación debe servirse por HTTP; no se debe abrir directamente como archivo local.
Por ejemplo:

```text
python -m http.server 4173
```

Después se puede abrir `http://127.0.0.1:4173/`.

## Reglas de Firestore

`firestore.rules` deniega por defecto el resto de la base y permite operar sobre
`appointments` únicamente a las UID autorizadas, validando además el esquema y el ID de
cada franja.
