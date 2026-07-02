# Poney Club Marjorie — Guide de gestion des photos

Toutes les photos du site se gèrent depuis **un seul fichier** :

```
config/images.ts
```

Vous n'avez jamais besoin de toucher aux autres fichiers pour gérer les photos des galeries.

---

## Démarrer le site en local

```bash
npm install
npm run dev
```

Le site est accessible sur **http://localhost:3000**

---

## Ajouter une photo

**Étape 1 — Déposer le fichier**

Placez votre photo dans le dossier :
```
public/images/
```
Utilisez un nom sans espaces ni accents, par exemple : `ma-nouvelle-photo.jpg`

**Étape 2 — L'ajouter dans la config**

Ouvrez `config/images.ts` et ajoutez une ligne dans la galerie souhaitée.

_Exemple — ajouter dans la galerie d'accueil :_
```ts
export const galerieAccueilPhotos: Photo[] = [
  { src: '/images/galerie-1.jpg', alt: 'Description existante' },
  // ... autres photos existantes ...
  { src: '/images/ma-nouvelle-photo.jpg', alt: 'Ma nouvelle photo' }, // ← ajout
]
```

_Exemple — ajouter dans la grande galerie (section sombre) :_
```ts
export const galeriePhotos: Photo[] = [
  // ... photos existantes ...
  { src: '/images/ma-nouvelle-photo.jpg', alt: 'Ma nouvelle photo' },
  // Astuce : ajoutez  wide: true  pour une photo en pleine largeur (2 colonnes)
  { src: '/images/paysage.jpg', alt: 'Vue du manège', wide: true },
]
```

---

## Supprimer une photo

Ouvrez `config/images.ts` et **supprimez la ligne** correspondante dans la galerie concernée.

_Exemple — supprimer galerie-8 :_
```ts
// Avant
{ src: '/images/galerie-8.jpg', alt: 'Cavalière vue du dessus au manège' },

// Après : ligne supprimée
```

Vous pouvez également supprimer le fichier de `public/images/` si vous n'en avez plus besoin.

---

## Changer l'ordre des photos

Les photos s'affichent **dans l'ordre où elles apparaissent** dans `config/images.ts`.

Pour changer l'ordre, déplacez simplement les lignes dans le tableau.

_Exemple — mettre galerie-3 en premier :_
```ts
// Avant
export const galerieAccueilPhotos: Photo[] = [
  { src: '/images/galerie-5.jpg', alt: '...' },
  { src: '/images/galerie-3.jpg', alt: '...' },  // ← était en 2ème
  { src: '/images/galerie-2.jpg', alt: '...' },
]

// Après
export const galerieAccueilPhotos: Photo[] = [
  { src: '/images/galerie-3.jpg', alt: '...' },  // ← maintenant en 1er
  { src: '/images/galerie-5.jpg', alt: '...' },
  { src: '/images/galerie-2.jpg', alt: '...' },
]
```

---

## Déplacer une photo vers une autre section

Dans `config/images.ts`, **coupez la ligne** dans la galerie d'origine et **collez-la** dans la galerie de destination.

_Exemple — déplacer une photo de la galerie d'accueil vers la grande galerie :_
```ts
// config/images.ts

export const galerieAccueilPhotos: Photo[] = [
  { src: '/images/galerie-1.jpg', alt: '...' },
  // { src: '/images/galerie-3.jpg', ... }  ← ligne supprimée d'ici
  { src: '/images/galerie-2.jpg', alt: '...' },
]

export const galeriePhotos: Photo[] = [
  { src: '/images/galerie-1.jpg', alt: '...' },
  { src: '/images/galerie-3.jpg', alt: '...' }, // ← ajoutée ici
  // ...
]
```

Une même photo peut aussi apparaître dans **les deux galeries** simultanément — il suffit de la laisser dans les deux tableaux.

---

## Remplacer les images fixes du site

Les images des sections **Hero, À propos, Stages et Pension** sont dans la partie `siteImages` du même fichier :

```ts
export const siteImages = {
  hero:    { src: '/images/hero.jpg',    alt: '...' },
  apropos: { src: '/images/apropos.jpg', alt: '...' },
  stages:  { src: '/images/stages.jpg',  alt: '...' },
  pension: {
    box:    { src: '/images/pension-box.jpg',    alt: '...' },
    soins:  { src: '/images/pension-soins.jpg',  alt: '...' },
    pre:    { src: '/images/pension-pre.jpg',    alt: '...' },
    ecurie: { src: '/images/pension-ecurie.jpg', alt: '...' },
  },
}
```

Pour remplacer une image fixe : déposez la nouvelle photo dans `public/images/` et changez le `src` correspondant.

---

## Déployer sur Vercel

```bash
npm install -g vercel
vercel
```

Ou connectez le dépôt GitHub à [vercel.com](https://vercel.com) pour un déploiement automatique à chaque modification.
