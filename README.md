# Application Météo

Petite application web pour afficher la météo en temps réel avec l'API OpenWeatherMap.

## Auteurs 

- Mark Karanja

## Objectif du projet

Ce projet a pour seul but de pratiquer le **JavaScript** (requêtes API, asynchronisme, manipulation du DOM et sécurité). 
Le design (CSS) n'était pas l'objectif de ce travail.

## Ce qui a été fait

* **JavaScript Vanilla** : utilisation de `fetch` et `async/await` pour récupérer les données.
* **Mise à jour du DOM** : affichage automatique de la température, de l'humidité, du vent et de la pression.
* **Gestion des erreurs** : messages clairs si la ville n'existe pas ou si la clé API a un problème.

## Sécurité

* La clé API est stockée dans un fichier `config.js`.
* Ce fichier est ignoré par Git (`.gitignore`) pour éviter de publier la clé sur GitHub.
* Gestion du remplacement et de la révocation d'une clé exposée par erreur.

## Lancer le projet

1. Cloner le dépôt Git.
2. Créer un compte gratuit sur [openweathermap.org](https://openweathermap.org/) pour récupérer une clé API.
3. Créer un fichier `config.js` à la racine :
   const OPENWEATHER_API_KEY = "VOTRE_CLE_ICI";
4. Ouvrir `index.html` dans le navigateur.

