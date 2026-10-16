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
Scope: one public page that offers those three services.
Acceptance: the page shows Landing pages, CRM, and Freelancer as services for hire.
Check: node --test

S3. "colores el logo te mande"
Scope: use the supplied logo and the ink, white, and slate palette measured from it.
Acceptance: assets/logo.png is the cropped logo; the page canvas is white and the ink is #101820.

S4. "despliega en dokploy"
Scope: deploy with the existing helper at ~/.dokploy/deploy-app.sh.
Acceptance: the sslip host returns the page and the response contains the three services.

S5. "crea la repo en git"
Scope: a Git repository on GitHub under JoseMiguelBustamante.
Acceptance: origin points at that repository and main is pushed.

## Tasks

- T1 | S1 S2 S3 | inline | green | landing page, logo assets, and node test. `node --test`: 2 pass. RED was ENOENT on index.html. Commit 1c454056baab6cc29e8df20740d7b54b8ef01371. One work unit: the page and its stylesheet are a single deliverable, and Dokploy builds main, so this is not split into a chain.
- T2 | S5 | inline | green | https://github.com/JoseMiguelBustamante/parker-inc main pushed
- T3 | S4 | inline | green | http://parker.187.127.19.244.sslip.io returns 200 with Landing pages, CRM, and Freelancer. logo.png 200, blueprint.png 200, styles.css contains #101820 and #ffffff. applicationId VE3gc1_jQCSF0c6q5_8iD. Risk: item 5 (new public repo and Dokploy deploy). Browser form click not run: no browser on this machine.

## Log

L1 (2026-10-16): Créame un nuevo proyecto en proyect que sea una página donde ofrece de servicio hacer labding Pagés , crm y Freelancer colores el logo te mande, despliega en dokploy y crea la repo en git

Palette measured from the logo file: ink about #101820, canvas white, blueprint slates #A8B0B8 and #E0E8E8. Logo crop x 76–434, y 1183–1528 of the source screenshot. Blueprint crop kept as the hero drawing.
