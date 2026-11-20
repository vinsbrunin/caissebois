# Coffrets bois — calculateur des commerciaux

Appli web de **Les Vins Brunin-Guillier** pour calculer le prix d'un coffret bois garni :
caisse + couvercle + poignée + logo du client + vins → prix par coffret (HTVA / TVAC) et total de la commande.
Le devis s'envoie en un clic par WhatsApp, par e-mail ou par copier-coller.
L'appli s'installe sur le téléphone et marche même sans réseau.

> **Usage interne.** Ne mets jamais de prix d'achat ni le nom du fournisseur dans ce dépôt :
> sur un compte GitHub gratuit, le code et le site sont visibles par toute personne qui a le lien.
> Le site demande aux moteurs de recherche de ne pas l'indexer.

---

## 1. Mettre l'appli en ligne (une seule fois, ± 10 minutes)

1. Crée un compte gratuit sur [github.com](https://github.com) si tu n'en as pas.
2. En haut à droite : **+** → **New repository**.
   - Nom : `coffrets-bois`
   - Visibilité : **Public** (obligatoire pour GitHub Pages sur un compte gratuit)
   - Clique **Create repository**.
3. Sur la page du dépôt vide, clique **uploading an existing file**.
4. Dézippe `coffrets-bois.zip`, ouvre le dossier et **glisse tout son contenu** dans la page
   (`index.html`, `tarif.js`, `sw.js`, `manifest.webmanifest`, `README.md` et le dossier `icons`).
   Clique **Commit changes**.
5. Va dans **Settings** → **Pages** (menu de gauche).
   - *Source* : **Deploy from a branch**
   - *Branch* : **main** et **/ (root)** → **Save**.
6. Attends 1 à 2 minutes et recharge la page : l'adresse de l'appli s'affiche en haut,
   du type `https://ton-nom.github.io/coffrets-bois/`.
7. Envoie ce lien à tes commerciaux (WhatsApp, e-mail).

## 2. Installer l'appli sur le téléphone

- **iPhone (Safari)** : ouvre le lien → bouton **Partager** → **Sur l'écran d'accueil**.
- **Android (Chrome)** : ouvre le lien → bouton **Installer** en haut de l'appli,
  ou menu **⋮** → **Installer l'application**.

L'icône « Coffrets bois » apparaît sur l'écran d'accueil. Après une première ouverture avec du réseau,
l'appli fonctionne aussi hors ligne.

## 3. Changer un prix (ex. nouveau tarif 2027)

1. Sur GitHub, ouvre **`tarif.js`** → icône crayon ✎ (*Edit this file*).
2. Modifie les nombres (avec un **point** comme séparateur : `6.10`, pas `6,10`).
   La règle de calcul de la marge n'est pas dans ce dépôt (public) : elle est dans les notes internes.
3. **Commit changes**.
4. Ouvre **`sw.js`** → crayon → change `v1` en `v2` dans la ligne `VERSION` → **Commit changes**.
   (Ça force les téléphones à prendre le nouveau tarif.)

Le site se met à jour en 1 à 2 minutes. Sur les téléphones, il suffit de rouvrir l'appli avec du réseau.

## Règles de calcul

| Élément | Règle |
|---|---|
| Caisse | Prix selon le modèle et le couvercle (même prix en Bordeaux et Bourgogne) |
| Poignée en corde | Prix fixe par caisse |
| Laser | Prix par caisse selon la quantité (paliers 1-10, 11-25, 26-50, 51-100, 101-200, 201+) |
| Sérigraphie | Forfait pour toute la série × nombre de couleurs, réparti sur les caisses (arrondi au centime supérieur). Entre deux paliers, on prend le forfait du palier supérieur. Au-delà de 1 000 : sur demande |
| TVA | 21 % |

Les avertissements de l'appli : moins de 10 ou plus de 100 caisses, bouteilles manquantes ou en trop,
laser sur plexiglass, grand logo en sérigraphie.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | L'appli (affichage et calculs) |
| `tarif.js` | **Les prix** : le seul fichier à modifier pour changer le tarif |
| `sw.js` | Fonctionnement hors ligne |
| `manifest.webmanifest` | Installation sur téléphone (nom, couleurs, icône) |
| `icons/` | Icônes de l'appli |
