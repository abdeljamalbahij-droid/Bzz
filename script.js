/* Boutique — Le Livre National La SEGPA
   Paiement Bitcoin : QR code, copie d'adresse, conversion EUR → BTC */

document.addEventListener("DOMContentLoaded", async () => {
    const address = SHOP_CONFIG.btcAddress;
    const priceEUR = SHOP_CONFIG.priceEUR;
    const email = SHOP_CONFIG.contactEmail;

    // Affichage de l'adresse
    const addressEl = document.getElementById("btc-address");
    if (addressEl) addressEl.textContent = address;

    // Bouton copier
    const copyBtn = document.getElementById("copy-btn");
    if (copyBtn) {
        copyBtn.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(address);
                copyBtn.textContent = "Copié ✓";
                setTimeout(() => (copyBtn.textContent = "Copier"), 2000);
            } catch {
                const range = document.createRange();
                range.selectNode(addressEl);
                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
                document.execCommand("copy");
                sel.removeAllRanges();
                copyBtn.textContent = "Copié ✓";
                setTimeout(() => (copyBtn.textContent = "Copier"), 2000);
            }
        });
    }

    // QR code de l'adresse (URI bitcoin:)
    const qrEl = document.getElementById("qrcode");
    if (qrEl && typeof QRCode !== "undefined") {
        new QRCode(qrEl, {
            text: "bitcoin:" + address,
            width: 180,
            height: 180,
            colorDark: "#1f2937",
            colorLight: "#ffffff",
        });
    }

    // Conversion EUR → BTC via l'API publique CoinGecko (sans clé)
    const btcAmountEls = [
        document.getElementById("payment-btc-amount"),
        document.getElementById("product-btc-price"),
    ];
    try {
        const res = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur"
        );
        const data = await res.json();
        const btcPrice = data.bitcoin.eur;
        const btcAmount = priceEUR / btcPrice;
        const formatted = "≈ " + btcAmount.toFixed(6) + " BTC";
        btcAmountEls.forEach((el) => {
            if (el) el.textContent = formatted;
        });
    } catch {
        btcAmountEls.forEach((el) => {
            if (el) el.textContent = "convertissez 20 € au cours actuel";
        });
    }

    // Liens email dynamiques
    const subject = encodeURIComponent("Commande — Le Livre National La SEGPA");
    const body = encodeURIComponent(
        "Bonjour,\n\nJe confirme ma commande du Livre National La SEGPA.\n\nMontant envoyé (BTC) : \nHash de la transaction : \nAdresse de livraison : \n\nMerci"
    );
    document.querySelectorAll('a[href^="mailto:"]').forEach((a) => {
        a.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
});
