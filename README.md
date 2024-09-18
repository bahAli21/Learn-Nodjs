# Learn-nodeJS 🌟

## Présentation

Bienvenue dans le projet **Learn-nodeJS** ! Ce dépôt contient le code backend d'un projet développé dans le cadre du cours **"Passez au Full Stack avec Node.js, Express et MongoDB"** d'OpenClassrooms. Je m'appelle **BAH Mamadou** et je suis étudiant à l'école **42**. 🎓

L'objectif de ce projet est de servir de base d'apprentissage pour toutes les personnes souhaitant se familiariser avec Node.js et les technologies associées.

---

## Structure du projet 📁
backend/ ├── controllers/ │ ├── stuff.js │ └── user.js ├── models/ │ ├── Thing.js │ └── User.js ├── routes/ │ ├── stuff.js │ └── user.js ├── middleware/ │ ├── auth.js │ └── multer-config.js ├── images/ ├── app.js ├── server.js ├── package.json └── package-lock.json


---

## Détails des fichiers 📝

### 1. Fichiers à la racine

- **app.js** : Configure l'application, gérant les middlewares et les routes.
- **server.js** : Démarre le serveur Express.
- **package.json** : Liste les dépendances et les scripts de démarrage.
- **package-lock.json** : Assure la cohérence des dépendances installées.

### 2. Dossier `controllers` 🚦

- **stuff.js** : Logique métier pour les objets.
  - `createThing`, `updateOneThing`, `getOneThing`, `deleteOneThing`, `getAllThing`.
- **user.js** : Authentification des utilisateurs.
  - `signup`, `login`.

### 3. Dossier `models` 📊

- **Thing.js** : Schéma MongoDB pour les objets.
- **User.js** : Schéma pour les utilisateurs (email unique, password).

### 4. Dossier `routes` 🚀

- **stuff.js** : Routes pour les objets.
- **user.js** : Routes pour l'authentification des utilisateurs.

### 5. Dossier `middleware` 🔑

- **auth.js** : Vérifie l'authentification via JWT.
- **multer-config.js** : Gère le téléchargement d'images.

---

## Utilisation ⚙️

Pour exécuter ce projet, installez les dépendances :

```bash
npm install
nodemon server

Conclusion 🎉
```
Ce projet est une base solide pour apprendre à travailler avec Node.js, Express et MongoDB. Explorez chaque fichier et expérimentez avec le code. Si vous avez des questions, je serai ravi de vous aider !

Merci d'avoir consulté ce dépôt ! 🌍

