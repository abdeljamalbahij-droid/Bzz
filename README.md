# Manuel du Champs Habitat en SEGPA 📖

Site vitrine et boutique du manuel écrit par et pour les classes de SEGPA. Publié automatiquement sur GitHub Pages à chaque push sur `main`.

**🌐 En ligne :** <https://abdeljamalbahij-droid.github.io/Bzz/>

## Contenu

- **Page unique éditoriale** (`index.html`) : le livre, les extraits de cours téléchargeables, les fiches métiers, l'achat en Bitcoin, la FAQ
- **Extraits de cours complets** (`cours/*.txt`) : lettre de motivation (français), calculs d'atelier (maths), fiche HACCP (atelier), fiche métier boulanger — tous en texte brut, ouvrables partout
- **À propos** (`apropos.md`) : présentation du livre et table des extraits

## ⚠️ À compléter avant la vente

`config.js` contient des valeurs à remplacer :

```js
const SHOP_CONFIG = {
  btcAddress: "bc1qREMPLACE_MOI...",   // ← ton adresse Bitcoin de réception
  priceEUR: 20,                         // ← prix en euros
  contactEmail: "ton-email@exemple.fr", // ← ton email de commande
};
```

**Créer une adresse Bitcoin (5 minutes, gratuit) :**
1. Installer BlueWallet (ou Trust Wallet) sur un téléphone
2. Créer un portefeuille et **sauvegarder la phrase de récupération sur papier** (personne ne peut la retrouver : 12 mots, c'est la seule clé)
3. Copier l'adresse de réception (commence par `bc1q…`) dans `config.js`
4. Ne jamais partager la phrase de récupération — uniquement l'adresse

## Publication automatique

`.github/workflows/deploy.yml` publie le site à chaque push sur `main`. GitHub Pages est déjà activé (source : GitHub Actions).

```
├── index.html       # Page du site
├── style.css        # Style éditorial (papier/encre)
├── script.js        # QR code, copie d'adresse, conversion EUR→BTC (CoinGecko)
├── config.js        # ⚠️ Adresse BTC, prix, email
├── apropos.md       # Présentation du livre
└── cours/           # Extraits de cours téléchargeables (.txt)
```

## Paiement

Le site est statique : l'acheteur paie vers l'adresse Bitcoin affichée (QR code), puis envoie sa preuve de paiement par email. La confirmation est manuelle (vérification dans l'application du portefeuille). Pour une confirmation automatique, il faudrait BTCPay Server ou un hébergement avec backend.
