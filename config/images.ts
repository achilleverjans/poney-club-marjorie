// ============================================================
//  CONFIGURATION DES IMAGES — Poney Club Marjorie
//  Modifiez uniquement ce fichier pour gérer toutes les photos.
//  Voir README.md pour les instructions détaillées.
// ============================================================

export type Photo = {
  src: string    // chemin depuis /public  →  ex: '/images/ma-photo.jpg'
  alt: string    // description courte (accessibilité + SEO)
  wide?: boolean // true = photo en pleine largeur dans la grande galerie
}

// ─── Images fixes du site ────────────────────────────────────────────────────
// Ces images sont utilisées une seule fois dans des sections précises.
// Pour remplacer une image, changez uniquement la valeur de `src`.

export const siteImages = {
  hero: {
    src: '/images/cadre du poney club.webp',
    alt: 'Enfant sur un poney au Poney Club Marjorie',
  },
  apropos: {
    src: '/images/photo maman poney club.JPG',
    alt: 'Enfant qui embrasse tendrement son poney',
  },
  stages: {
    src: '/images/stages.jpg',
    alt: "Enfant à cheval lors d'un stage au Poney Club Marjorie",
  },
  pension: {
    box:    { src: '/images/pension-box.jpg',    alt: 'Enfant avec un poulain en écurie' },
    soins:  { src: '/images/pension-soins.jpg',  alt: 'Préparation et sellage du cheval' },
    pre:    { src: '/images/pension-pre.jpg',    alt: 'Poneys dans le pré fleuri' },
    ecurie: { src: '/images/pension-ecurie.jpg', alt: 'Enfants qui câlinent un poney en écurie' },
  },
}

// ─── Galerie de la page d'accueil ────────────────────────────────────────────
// Photos affichées dans la section aperçu, entre Pension et la grande galerie.
// Ajoutez autant de lignes que vous voulez — la grille s'adapte automatiquement.
// Pour ajouter une photo : déposez le fichier dans public/images/ puis ajoutez
// une ligne { src: '/images/nom-du-fichier.jpg', alt: 'description' }

export const galerieAccueilPhotos: Photo[] = [
  { src: '/images/galerie-5.jpg',  alt: 'Enfant allongée sur son poney' },
  { src: '/images/galerie-3.jpg',  alt: 'Petite fille avec ses poneys' },
  { src: '/images/galerie-2.jpg',  alt: 'Cours avec monitrice au manège' },
  { src: '/images/galerie-4.jpg',  alt: 'Enfant à cheval avec la monitrice et le poulain' },
  { src: '/images/galerie-6.jpg',  alt: 'Cheval palomino au soleil' },
  { src: '/images/galerie-7.jpg',  alt: 'Cavalière allongée sur son cheval' },
  { src: '/images/galerie-9.jpg',  alt: 'Deux chevaux blancs à la fenêtre du box' },
  { src: '/images/galerie-10.jpg', alt: 'Deux chevaux qui se font des câlins' },
]

// ─── Grande galerie (section sombre en bas de page) ──────────────────────────
// wide: true → la photo occupe 2 colonnes (idéal pour les formats paysage).
// Ajoutez autant de lignes que vous voulez.

export const galeriePhotos: Photo[] = [
  { src: '/images/galerie-1.jpg',  alt: 'Le manège du Poney Club Marjorie',                    wide: true },
  { src: '/images/galerie-2.jpg',  alt: 'Cours avec monitrice au manège' },
  { src: '/images/galerie-3.jpg',  alt: 'Petite fille avec ses poneys' },
  { src: '/images/galerie-4.jpg',  alt: 'Enfant à cheval avec la monitrice et le poulain' },
  { src: '/images/galerie-5.jpg',  alt: 'Enfant allongée sur son poney' },
  { src: '/images/galerie-6.jpg',  alt: 'Cheval palomino au soleil' },
  { src: '/images/galerie-7.jpg',  alt: 'Cavalière allongée sur son cheval' },
  { src: '/images/galerie-8.jpg',  alt: 'Cavalière vue du dessus au manège' },
  { src: '/images/galerie-9.jpg',  alt: 'Deux chevaux blancs à la fenêtre du box' },
  { src: '/images/galerie-10.jpg', alt: 'Deux chevaux qui se font des câlins',                 wide: true },
  { src: '/images/galerie-11.jpg', alt: 'Chevaux qui mangent du foin dans le paddock',         wide: true },
  { src: '/images/galerie-12.jpg', alt: 'Marjorie à cheval sur un grand gris au manège' },
  { src: '/images/galerie-13.jpg', alt: 'Séance de travail avec un cheval bai au manège' },
]
