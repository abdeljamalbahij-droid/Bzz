/* Le Livre National — La SEGPA
   Paiement Bitcoin : adresse, QR code, conversion EUR → BTC, lien de commande */

document.addEventListener("DOMContentLoaded", async () => {
  const { btcAddress, priceEUR, contactEmail } = SHOP_CONFIG;

  const addressEl = document.getElementById("btc-address");
  if (addressEl) addressEl.textContent = btcAddress;

  // QR code — URI bitcoin: standard reconnue par les portefeuilles
  const qrEl = document.getElementById("qrcode");
  if (qrEl && typeof QRCode !== "undefined") {
    new QRCode(qrEl, {
      text: "bitcoin:" + btcAddress,
      width: 170,
      height: 170,
      colorDark: "#1c1917",
      colorLight: "#ffffff",
    });
  }

  // Copier l'adresse
  const copyBtn = document.getElementById("copy-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(btcAddress);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = btcAddress;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      copyBtn.textContent = "Copié ✓";
      setTimeout(() => (copyBtn.textContent = "Copier"), 2000);
    });
  }

  // Conversion EUR → BTC (API publique CoinGecko, sans clé)
  const amountEl = document.getElementById("btc-amount");
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur"
    );
    const data = await res.json();
    const btc = priceEUR / data.bitcoin.eur;
    if (amountEl) amountEl.textContent = "≈ " + btc.toFixed(6) + " BTC";
  } catch {
    if (amountEl) amountEl.textContent = "(convertissez 20 € au cours du moment)";
  }

  // Lien de commande pré-rempli
  const subject = "Commande — Le Livre National La SEGPA";
  const body =
    "Bonjour,\n\n" +
    "Je commande le Livre National La SEGPA (20 €).\n\n" +
    "Montant envoyé en BTC : \n" +
    "Hash de la transaction : \n" +
    "Nom : \n" +
    "Adresse postale : \n\n" +
    "Merci";
  const mail = document.getElementById("pay-mail");
  if (mail) {
    mail.href =
      "mailto:" + contactEmail +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  }
});
