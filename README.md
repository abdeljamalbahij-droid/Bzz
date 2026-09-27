# Le Livre National La SEGPA 📘

Boutique en ligne pour acheter **Le Livre National La SEGPA** (livre physique, **20 €**), avec **paiement en Bitcoin** (adresse + QR code). Publié automatiquement sur **GitHub Pages** à chaque push sur `main`.

**🌐 Site en ligne :** <https://abdeljamalbahij-droid.github.io/Bzz/>

## ⚠️ À faire avant la mise en ligne réelle

Le fichier **`config.js`** contient des valeurs fictives à remplacer :

```js
const SHOP_CONFIG = {
    btcAddress: "bc1qexemple_adresse_a_remplacer_avant_publication000000", // ⚠️ votre vraie adresse BTC
    priceEUR: 20,                    // prix en euros
    contactEmail: "contact@exemple.fr", // ⚠️ votre vrai email
};
```

1. **Créez un portefeuille Bitcoin** (par ex. [BlueWallet](https://bluewallet.io/) ou Trust Wallet sur téléphone) et copiez votre adresse de réception (commence souvent par `bc1q…`).
2. **Remplacez l'adresse** dans `config.js` — le QR code se mettra à jour automatiquement.
3. **Remplacez l'email** de contact dans `config.js`.
4. Poussez sur `main` : le site se republie automatiquement.

## Structure du projet

```
├── index.html   # Page boutique (produit, paiement BTC, FAQ, contact)
├── style.css    # Design responsive (thème Bitcoin orange/dark)
├── script.js    # QR code, copie d'adresse, conversion EUR → BTC (API CoinGecko)
├── config.js    # ⚠️ Adresse BTC, prix et email — À MODIFIER
└── .github/workflows/deploy.yml  # Publication automatique GitHub Pages
```

## Fonctionnement du paiement

Le site est **statique** : il ne traite pas les paiements lui-même.

1. L'acheteur scanne le QR code ou copie l'adresse Bitcoin
2. Il envoie l'équivalent de 20 € en BTC (montant affiché en direct via l'API CoinGecko)
3. Il vous envoie sa preuve de paiement + son adresse de livraison par email
4. Vous vérifiez la transaction (dans votre application Bitcoin) et vous expédiez le livre

> 💡 Pour automatiser entièrement les paiements (confirmation automatique sans vérification manuelle), il faudrait un service comme **BTCPay Server** ou un hébergement avec backend — impossible sur GitHub Pages seul.
