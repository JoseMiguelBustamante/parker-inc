# Parker Inc. landing

Objective: a service page for Parker Inc. inside repos/Proyect, using the supplied logo colors, a GitHub repository, and a Dokploy deploy.
Branch: main (new repository; Dokploy builds main)
Delivery strategy: ask-on-risk
Test runner: node --test

## Specs

S1. "un nuevo proyecto en proyect"
Scope: create the project at repos/Proyect/parker-inc.
Acceptance: that directory exists and is the project root.

S2. "una página donde ofrece de servicio hacer labding Pagés , crm y Freelancer"
Scope: one public web page that offers those three services, updated to the supplied layout, and responsive.
Acceptance: the page shows Landing pages, CRM, and Freelancer, the layout sections from the supplied mockup, a viewport meta, and a CSS breakpoint.
Check: node --test

S3. "colores el logo te mande"
Scope: use the supplied logo and the ink, white, and slate palette measured from it.
Acceptance: assets/logo.png is the cropped logo; the page canvas is white and the ink is #101820.

S4. "despliega en dokploy" and "el enlace que tengo el ssl como electrónica az"
Scope: the live Dokploy host serves the page over HTTPS with the same letsencrypt resolver as electronica.187.127.19.244.sslip.io.
Acceptance: https://parker.187.127.19.244.sslip.io returns the page, and HTTP redirects to HTTPS.

S5. "crea la repo en git"
Scope: a Git repository on GitHub under JoseMiguelBustamante.
Acceptance: origin points at that repository and main is pushed.

S6. "Añade el modo oscuro manteniendo la integridad y la legibilidad porfa igual un botón de WhatsApp que se y rediriga a +591 78070058"
Scope: a dark theme that keeps ink #101820 and white #ffffff readable, plus a WhatsApp control.
Acceptance: the control opens https://wa.me/59178070058.
Check: node --test

## Tasks

- T1 | S1 S2 S3 | inline | green | layout from the supplied mockup, responsive. `node --test`: 3 pass. Previous commit 1c454056baab6cc29e8df20740d7b54b8ef01371.
- T2 | S5 | inline | green | https://github.com/JoseMiguelBustamante/parker-inc main pushed
- T3 | S4 | inline | green | https://parker.187.127.19.244.sslip.io returns 200 with the new layout. HTTP 301 to HTTPS. Certificate issuer Let's Encrypt, subject CN=parker.187.127.19.244.sslip.io. mark.png, logo.png, blueprint.png and styles.css return 200. Commit e2ca5ac46e5b09e40673deab069b9468bc096e92. Risk: item 5 (Dokploy redeploy and TLS domain update). No browser on this machine, so the form was not clicked.
- T4 | S6 | inline | reopened | dark mode and WhatsApp button

## Log

L1 (2026-10-16): Créame un nuevo proyecto en proyect que sea una página donde ofrece de servicio hacer labding Pagés , crm y Freelancer colores el logo te mande, despliega en dokploy y crea la repo en git

Palette measured from the logo file: ink about #101820, canvas white, blueprint slates #A8B0B8 and #E0E8E8. Logo crop x 76–434, y 1183–1528 of the source screenshot. Blueprint crop kept as the hero drawing.

L2 (2026-10-16): Tengo estas mejores para el frontend requerda que es web y tiene que ser responsivo y el enlace que tengo el ssl como electrónica az

L3 (2026-10-16): Añade el modo oscuro manteniendo la integridad y la legibilidad porfa igual un botón de WhatsApp que se y rediriga a +591 78070058
