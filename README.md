# Site SEGPA 🎓

Site statique de la Section d'Enseignement Général et Professionnel Adapté, publié automatiquement sur **GitHub Pages** à chaque push sur la branche `main`.

## Pages du site

- **Accueil** — présentation de la SEGPA
- **La SEGPA** — pédagogie adaptée et accompagnement
- **Formations** — ateliers professionnels (hôtellerie, bois, espace vert, maintenance)
- **Vie scolaire** — parcours de la 6e à la 3e
- **Contact** — coordonnées du collège

## Structure du projet

```
├── index.html                  # Page unique du site (ancres internes)
├── style.css                   # Styles responsive
└── .github/workflows/deploy.yml  # Publication automatique GitHub Pages
```

## Publication automatique

Le workflow `.github/workflows/deploy.yml` publie le site sur GitHub Pages à chaque push sur `main`.

### Activation de GitHub Pages (une seule fois)

1. Ouvrir **Settings → Pages** du dépôt
2. Sous **Build and deployment**, choisir **Source : GitHub Actions**
3. Le site sera disponible sur : `https://abdeljamalbahij-droid.github.io/Bzz/`

## Personnalisation

- Modifier les textes dans `index.html` (nom du collège, coordonnées, ateliers proposés)
- Ajuster les couleurs dans `style.css` (variables `--primary`, `--secondary`, ...)
