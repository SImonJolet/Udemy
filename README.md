# Udemy course

Ce repo contient les exercices du cours Udemy sur **Angular-Ionic**

## withoutAngular

**withoutAngular** est le projet associé au chapitre 4 du cours.
Il a pour but de créer une toute petite application web extrèmement simple qui va nous afficher nos dépenses.

Le but ici est principalement d'apprendre à se servir des principales balises **Ionic** et de voir qu'on peut très bien faire de l'ionic simplement en important la bonne libraire.

On fait donc ça en deux fichier: `index.htlml` et `app.js`. </br>
En moins de 250 lignes, on fait déjà une app' complète et fonctionnelle.

C'est bien sûr très sommaire mais ça éclaire pas mal de chose pour commencer, avec quand même de la mise en cache de valeur et de la récupération d'input, ainsi qu'une addition de valeur encodées et mises en cache.

## chap4

Comme son nom l'indique, **chap4** est le projet associé au chapitre 4, mais il continue sur les chapitres 5 et 6.

On va y faire une petite app' de recette de cuisine, avec une page de listing et une page de détails associée à chaque recette (un peu sur le principe d'un pokédex).

On y voit les bases de la navigation entre deux pages, comment importer des infos sur différentes pages. </br>
On y apprend les bases de l'utilisation d'une modal, la création de page, de services, de component.</br>
On voit comment mettre un peu de style en utilisant les *CSS Utilities* d'Ionic


On voit aussi quelques astuces pour débugger.

## airBnB

*Note: Ce projet est pour l'instant arreté au chapitre 11 pour repasser sur du front-end/intégration*

C'est le projet principal du cours, qui nous suit du chapitre 8 à la fin.</br>
Il s'agit d'une **plateforme de lacation de biens immobiliers** un peu dans l'esprit d'Airbnb.

Le but est de faire un tour assez global et poussé d'Ionic et de tout ce qui est possible de faire avec Angular.

En gros, on va avoir une page d'accueil, possédant 2 onglets: *découvrir* et *offres*.

Dans le premier, on va avoir une page de découverte des biens, qui va lister les biens présent sur la plateforme. </br>
Dans ce premier onglets, on va aussi avoir 2 onglets, le premier avec tous les biens de la plateforme, le second avec uniquement ceux disponibles à la location.

Dans le second, on va avoir la listes des offres qu'on a proposé, de nos biens mis en location.

On va aussi avoir un menu hamburger, qui va venir en side-bar quand on clique dessus. </br>
Ce menu est accessible partout où il n'y a pas de *back-button*. </br>
On y retrouve un lien vers la page d'accueil avec la liste des biens, un lien vers la listes de nos réservation et un bouton de logout.

### Auth

C'est la première page sur laquelle on arrive, la page de login.

Il y a deux champs: email et password, qui sont configurer avec des limitations sur ce qui est accepté comme type de réponse (email, longueur du mot de passe), et le champ password est en caractère caché.</br>
Il y a des messages d'erreur en cas de champs non conforme quand on les quitte, et quand on est conforme, le champs se souligne en vert.

On a ensuite un bouton pour se connecter, et un bouton pour switcher vers une page inscription (pas utile au niveau du Chapitre11). On remarque aussi que le bouton de switch est dynamqiue en fonction de où on est et que le titre de la page est aussi dynamqiue à ce niveau, alors qu'on reste sur la même page, avec un Url qui ne change pas.

### Découvrir.

Il est possible d'accéder à des pages détails pour chaque bien. Et si ils sont disponibles, de les réserver.</br>
On peut réserver soit avec des dates en aléatoires pré-encodées, soit en nous laissant la possibilité de choisir nos dates de vacances (ce qui est quand même mieux pour une plateforme de location de biens immobiliers).

Une fois ce choix fait, on a une page où entrer nos informations, avec des inputs normaux, des inputs date et un sélecteur.</br>
Il y a une vérification pour être sûr que tous est rempli, et un check fait sur la date pour être sur qu'on ne puisse pas sélectionner une date de fin de location antérieure à celle de début.

Enfin, on a un bouton, qui n'est accesible que quand tous les champs sont remplis et valables, pour valider sa réservation.

Une fois la validation faite, on peut aller voir dans la page de nos réservations. </br>
On y voit que cette réservation est mise en cache, et qu'on y a acces.</br>
On peut du coup la supprimer aussi.

### Tech

- Routing
- Ionic component
- Load Spinner
- Passage de data d'une page à l'autre
- Vérification des champs
- Listing d'items
- Facilitation des styles grâce au propriété Ionic.
- ...
- ...
- ...
- ...