# Poney Club Marjorie — Déploiement

## Avant de déployer, personnaliser :

### 1. Numéro WhatsApp
Chercher `32XXXXXXXXX` dans les fichiers suivants et remplacer par le vrai numéro (sans espaces, sans `+`) :
- `components/Contact.tsx`
- `components/WhatsAppButton.tsx`
- `components/Footer.tsx`

### 2. Adresse & coordonnées
Dans `components/Contact.tsx`, modifier :
- L'adresse dans le tableau `infos`
- L'email `info@poneyclubmarjorie.be`
- Le lien `tel:` avec le vrai numéro

### 3. Google Maps
Dans `components/Contact.tsx`, remplacer le `src` de l'iframe par votre lien Google Maps embed :
1. Aller sur Google Maps, chercher votre adresse
2. Cliquer "Partager" > "Intégrer une carte" > Copier le code iframe
3. Remplacer uniquement le `src="..."` dans Contact.tsx

### 4. Photos
Remplacer les URLs Unsplash par vos vraies photos :
- Dans `next.config.mjs`, ajouter votre domaine d'hébergement photos si besoin
- Chaque composant `Image src=` peut être remplacé

## Déployer sur Vercel

```bash
npm install -g vercel
vercel
```

Ou connecter le dépôt GitHub à vercel.com (recommandé).

## Démarrer en local

```bash
npm install
npm run dev
```

Site disponible sur http://localhost:3000
