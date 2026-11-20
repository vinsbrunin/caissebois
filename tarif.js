/*
 * TARIF CAISSES BOIS 2026 — Les Vins Brunin-Guillier
 * ------------------------------------------------------------------
 * Prix de VENTE HTVA, marge maison incluse.
 *
 * ATTENTION : ce fichier est public sur GitHub.
 * N'y mets JAMAIS les prix d'achat ni le nom du fournisseur.
 *
 * Pour changer un prix : modifie le nombre (point décimal : 6.10),
 * puis change aussi le numéro de VERSION dans sw.js.
 */
window.TARIF = {
  annee: 2026,
  tva: 0.21,

  // Couvercles coulissants
  couvercles: [
    { id: "peuplier",   nom: "Peuplier",   desc: "bois clair et lisse" },
    { id: "sapin",      nom: "Sapin",      desc: "bois veiné" },
    { id: "plexiglass", nom: "Plexiglass", desc: "transparent" }
  ],

  // Caisses : prix par caisse selon le couvercle + dimensions intérieures (H × L × P, cm)
  caisses: [
    { id: "1",   nom: "1 bouteille",                   court: "1",             bouteilles: 1,
      prix: { peuplier: 4.00, sapin: 4.50,  plexiglass: 5.00 },
      dim:  { bordeaux: "32,4 × 8 × 8,3",    bourgogne: "32,4 × 8,4 × 8,4" } },
    { id: "2",   nom: "2 bouteilles",                  court: "2",             bouteilles: 2,
      prix: { peuplier: 5.30, sapin: 6.30,  plexiglass: 7.10 },
      dim:  { bordeaux: "32,4 × 15,6 × 8,3", bourgogne: "32,4 × 17,2 × 8,4" } },
    { id: "3",   nom: "3 bouteilles",                  court: "3",             bouteilles: 3,
      prix: { peuplier: 6.10, sapin: 7.90,  plexiglass: 9.70 },
      dim:  { bordeaux: "32,4 × 23,9 × 8,3", bourgogne: "32,4 × 26 × 8,4" } },
    { id: "4",   nom: "4 bouteilles",                  court: "4",             bouteilles: 4,
      prix: { peuplier: 7.20, sapin: 9.60,  plexiglass: 10.20 },
      dim:  { bordeaux: "32,4 × 31,7 × 8,3", bourgogne: "32,4 × 34,8 × 8,4" } },
    { id: "6l",  nom: "6 bouteilles côte à côte",      court: "6 en ligne",    bouteilles: 6,
      prix: { peuplier: 8.30, sapin: 12.00, plexiglass: 12.90 },
      dim:  { bordeaux: "32,4 × 47,9 × 8,3", bourgogne: "32,4 × 52,4 × 8,4" } },
    { id: "6c",  nom: "6 bouteilles (2 rangées de 3)", court: "6 en 2 × 3",    bouteilles: 6,
      prix: { peuplier: 9.20, sapin: 10.60, plexiglass: 11.40 },
      dim:  { bordeaux: "32,4 × 25,9 × 16,6", bourgogne: "32,4 × 26 × 16,8" } }
  ],

  // Option poignée en corde écru, par caisse
  poignee: 0.30,

  // Tailles de logo : l'ordre doit correspondre aux colonnes de prix ci-dessous
  tailles: ["Moins de 200 cm²", "Plus de 200 cm²", "Jusqu'à 40 × 40 cm"],

  // Laser (noir, gravé) : prix PAR CAISSE selon la quantité
  // prix = [moins de 200 cm², plus de 200 cm², jusqu'à 40 × 40 cm]
  laser: [
    { de: 1,   a: 10,   prix: [4.40, 6.30, 8.20] },
    { de: 11,  a: 25,   prix: [2.50, 4.40, 6.30] },
    { de: 26,  a: 50,   prix: [1.90, 3.30, 4.70] },
    { de: 51,  a: 100,  prix: [1.20, 1.90, 2.70] },
    { de: 101, a: 200,  prix: [0.70, 1.20, 1.70] },
    { de: 201, a: null, prix: [0.70, 1.00, 1.50] }
  ],

  // Sérigraphie 1 couleur : FORFAIT pour toute la série (× nombre de couleurs)
  // forfait = [moins de 200 cm², plus de 200 cm²]
  serigraphie: [
    { jusqua: 25,   forfait: [140.70, 146.90] },
    { jusqua: 50,   forfait: [162.50, 173.80] },
    { jusqua: 100,  forfait: [172.50, 187.50] },
    { jusqua: 250,  forfait: [278.20, 325.00] },
    { jusqua: 500,  forfait: [400.00, 518.80] },
    { jusqua: 1000, forfait: [617.50, 831.30] }
  ],

  // Quantités pour lesquelles les prix sont valables
  quantite: { min: 10, max: 100 }
};
