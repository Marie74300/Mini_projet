# Mini_projet

Commandes de compilation

# expenses

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

Le Mini_Projet est un projet web developpé sous VUE,

l'arborescence du projet:

nous avons décomposé le Mini_Projet deux dossiers principaux
++ Client/expenses 
++ Serveur

nous avons ensuite créer des composants (components)dans le dossier Expenses/src :


@@ BB.VUE qui correspond à la page d'acceuil de notre projet, ce fichier contient une barre de navigation et un carrousel de neuf images affichées au format 3D


@@ MenuRestaurant.VUE correspond a notre fichier d'origine des listes des menus et des plats, nous voulions créer  
deux fichiers .vue séparés, un pour la liste des plats et un autre pour les menus (midi et gastronomique),
et recuperer un à un, 

c'était le seul probleme qu'on a du rencontrer durant le projet;
Finalement nous avons tout remis dans le fichier CarteDesPlats.vue 


@@ CartesDesPlats.VUE ce fichier se compose de trois blocs différents, premiererment la liste complete des plats proposés par le restaurant, 
deuxiememnt le menu formule MIDI comprenant une entrée(Hors d'oeuvre), un plat principal, et un dessert, et finalement le Menu Gastronomique composé 
a son tour d'une entrée(Hors d'oeuvre), un plat principal, et un dessert.


@@ Restaurant.vue le fichier contient l'ensemble des restaurants de notre base de données 


Durant le projet nous avons repartie les taches à realiser comme suit:

    ### Développer la Carte des restaurants grace à l'API Google Maps, Google Place,
    
    ### Procéder de la meme maniere pour generer des photos aléatoires correspondant aux restaurants, 
          nous avons donc utiliser l'API costume Search.
          
    ### Réaliser le design du projet et compléter la partie Front-End.
    
          
les erreurs et Bugs fréquents:

  Concernant les coordonnées géographiques des restaurants, nous avons constaté que selon les coordonnées fournis par la Base de données, 
tous les restaurants se trouvent en Antarctique, et en vérifiant le code source nous avons pu corriger l'erreur,
et inverser les parametres LONG (longitude) ET LAT (latitude) et retrouver la localisation correcte des restaurants.   

  Nous avons rencontré des difficultés avec les cartes plats en effet pour faire de l'aleatoire nous avons du creer une boucle for allant recuperer aleatoirement i elements plats, dessert, hors d'oeuvre et les ajouter a nos cartes et aux listes gastronomiques et midi correspondantes. A notre sortie il faut donc verifier si toutes nos listes ne sont pas nulles, si elles le sont alors il faut retourner chercher des elements.  
  
 Lien de la video demo:
https://youtu.be/TYTb7vBDf4I
 
  les Sources et documentations utilisées et consultées durant le projet 
  https://stackoverflow.com/
  
 







