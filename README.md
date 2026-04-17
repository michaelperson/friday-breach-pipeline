THE FRIDAY BREACH — SEMAINE #01
> TRANSMISSION REÇUE :: VENDREDI 17 AVRIL 2026 :: 09h00 CET


"Le réseau est en vie. L'horloge tourne. Tu es connecté ?"



Note de l'Architecte : Ce programme s'adresse à tout le monde — développeurs, formateurs, testeurs, analystes. Peu importe ton niveau. Le seul prérequis : un compte GitHub (gratuit) et 60 minutes de concentration. C'est tout.




MISSION CODENAME : PIPELINE FANTÔME
Secteur : DevOps // Quadrant : GitHub Actions & Automatisation CI/CD
Difficulté : ⭐⭐☆☆☆ — Accessible à tous

LE CONTEXTE
La QA (Quality Assurance) de l'équipe passe ses journées à tester manuellement la même application encore et encore. Chaque fois qu'un développeur pousse du code, quelqu'un doit ouvrir son PC, lancer les tests, et envoyer un email pour dire si ça passe ou non. C'est 2026. Ce travail répétitif appartient aux machines, pas aux humains.

Ta mission : créer un pipeline automatique qui vérifie le code à chaque modification, sans intervention humaine. Quand ça passe → badge vert ✅. Quand ça casse → alerte rouge 🔴. Automatiquement. Toujours.


OBJECTIF — 60 MINUTES CHRONO
À la fin de la mission, tu dois avoir :

Créé le dépôt de départ sur GitHub (code  fourni ci-dessous).
Créé un fichier de workflow GitHub Actions dans le bon dossier.
Poussé une modification de code — le pipeline se déclenche automatiquement.
Vu le résultat (✅ ou ❌) directement dans l'onglet Actions de ton GitHub.
Critères d'acceptation
Le fichier .github/workflows/pipeline.yml existe dans ton dépôt.
Le pipeline se déclenche à chaque push sur la branche main.
Le pipeline installe les dépendances et exécute les tests automatiquement.
Tu vois au moins une exécution réussie (coche verte ✅) dans l'onglet Actions.


STACK TECHNIQUE
Outil
C'est quoi ?
Besoin de l'installer ?
GitHub
Hébergement de code + exécution du pipeline
Non — c'est en ligne
GitHub Actions
Le moteur d'automatisation intégré à GitHub
Non — c'est en ligne
Node.js / Python
Le langage du projet de départ
Non — fourni dans le container GitHub
YAML
Le langage de configuration du pipeline
Non — c'est juste du texte


Tout se passe dans le navigateur. Pas besoin d'installer quoi que ce soit sur ta machine.


GUIDE ÉTAPE PAR ÉTAPE
Étape 1 — Prépare ton terrain (5 min)
Va sur github.com et connecte-toi (ou crée un compte gratuit).
Crée un nouveau dépôt (bouton vert New) — appelle-le friday-breach-pipeline.
Coche "Add a README file" et clique Create repository.


Étape 2 — Ajoute une application de test (10 min)
Dans ton dépôt, clique "Add file" → "Create new file".

Nomme le fichier : app.js

Colle ce contenu :

// app.js — Notre "application" ultra-simple

function additionner(a, b) {

  return a + b;

}

function direBonjour(nom) {

  if (!nom) throw new Error("Un nom est requis !");

  return `Bonjour, ${nom} !`;

}

module.exports = { additionner, direBonjour };

Clique "Commit changes" (bouton vert).





Crée un deuxième fichier nommé app.test.js :

// app.test.js — Les tests automatiques

const { additionner, direBonjour } = require('./app');

// Test 1 : L'addition fonctionne-t-elle ?

test('additionner(2, 3) doit retourner 5', () => {

  expect(additionner(2, 3)).toBe(5);

});

// Test 2 : Le message de bienvenue est-il correct ?

test('direBonjour("Alice") doit retourner "Bonjour, Alice !"', () => {

  expect(direBonjour('Alice')).toBe('Bonjour, Alice !');

});

// Test 3 : La fonction rejette-t-elle un nom vide ?

test('direBonjour() sans argument doit lancer une erreur', () => {

  expect(() => direBonjour()).toThrow('Un nom est requis !');

});

Commite ce fichier aussi.












Crée un fichier package.json :

{

  "name": "friday-breach-pipeline",

  "version": "1.0.0",

  "scripts": {

    "test": "jest"

  },

  "devDependencies": {

    "jest": "^29.0.0"

  }

}

Commite ce fichier.


Étape 3 — Crée le Pipeline (20 min)  C'est ici que la magie opère
Dans ton dépôt, clique "Add file" → "Create new file".

Dans le champ de nom, tape exactement ce chemin :

.github/workflows/pipeline.yml

→ GitHub créera automatiquement les dossiers .github/workflows/ pour toi.

Colle ce contenu en entier :

# Le nom de ton pipeline — visible dans l'onglet Actions

name:  Pipeline Automatique

# DÉCLENCHEUR : Ce pipeline se lance à chaque push sur "main"

on:

  push:

    branches:

      - main

# LES JOBS : Les tâches à exécuter

jobs:

  verifier-le-code:

    name: Tests automatiques

    runs-on: ubuntu-latest   # GitHub fournit une machine Ubuntu gratuite

    steps:

      # Étape 1 : Récupère le code du dépôt

      - name: Récupérer le code

        uses: actions/checkout@v4

      # Étape 2 : Installe Node.js

      - name:  Installer Node.js

        uses: actions/setup-node@v4

        with:

          node-version: '20'

      # Étape 3 : Installe les dépendances (jest, etc.)

      - name: Installer les dépendances

        run: npm install

      # Étape 4 : Lance les tests

      - name: Lancer les tests

        run: npm test

      # Étape 5 : Message de succès

      - name: Mission accomplie

        run: echo "Tous les tests sont au vert. L'Architecte est satisfait."

Clique "Commit changes".


Étape 4 — Observe le Pipeline (5 min)
Clique sur l'onglet "Actions" en haut de ton dépôt.
Tu vois ton pipeline en train de tourner (⏳ cercle orange).
Attends 30-60 secondes... VERT ✅ = Mission réussie.
Clique dessus pour voir le détail de chaque étape.


Étape 5 — Casse volontairement le code (10 min) 🔥 La partie fun
Maintenant qu'on sait que ça marche, on va volontairement introduire un bug pour voir le pipeline échouer (c'est exactement son rôle !).

Édite app.js, change la fonction additionner :

// BUG INTENTIONNEL

function additionner(a, b) {

  return a - b;  // ← On a remplacé + par -  😈

}

Commite la modification. Retourne dans Actions et observe : le pipeline devient ROUGE ❌.

C'est ça, l'intérêt d'un pipeline : attraper les bugs avant qu'ils n'arrivent en production.

Remets a + b, reCommite, et regarde le pipeline redevenir vert. Voilà. Tu viens de comprendre la CI/CD.


BOSS LEVEL — "Le Gardien des Branches"
Pour les opératives qui ont terminé en avance.

Étends ton pipeline pour qu'il :

Se déclenche aussi sur les Pull Requests (pas seulement sur main).
Ajoute une étape de lint avec eslint pour vérifier la qualité du code.
Envoie une notification Slack (ou Teams) quand le pipeline échoue.

# Ajout dans la section "on:" pour couvrir les PR :

on:

  push:

    branches: [ main ]

  pull_request:

    branches: [ main ]


RÉCOMPENSES
Niveau
Réalisation
XP
Badge
Recrue
Pipeline vert ✅ dans l'onglet Actions
+100 XP
🔵 Premier Contact
Opérative
Pipeline vert ✅ + Pipeline rouge ❌ après bug intentionnel
+200 XP
🟣 Le Fantôme du Pipeline
Boss
Boss Level : PR trigger + lint + notification
+400 XP
Architecte des Ombres



PREUVE DE TRAVAIL
Si c'est pas documenté, ça n'existe pas.

Poste dans le canal de l'équipe :

📸 Capture d'écran de l'onglet Actions GitHub montrant une exécution verte ✅ ET une rouge ❌.
🌡️ Note de difficulté — réagis avec :
🟢 1 — Trop facile, j'ai fait ça les yeux fermés
🟡 2 — Bien équilibré
🟠 3 — Quelques blocages mais ça passe
🔴 4 — J'ai galéré, mais j'ai appris
💀 5 — Je repense à ma reconversion en boulanger
💡 Un apprentissage — complète cette phrase : "Avant aujourd'hui je ne savais pas que _______, et ça me servira quand _______ ."


NOTE DU FORMATEUR — Lis ça après avoir fini
Pourquoi GitHub Actions et pas Jenkins / Azure DevOps ? Parce que c'est intégré nativement à GitHub, gratuit pour les dépôts publics, et ça prend 5 minutes à configurer. Jenkins c'était l'outil d'avant-l'ère des conteneurs. Apprends GitHub Actions d'abord, tu comprendras Jenkins naturellement ensuite.

Pourquoi ça change la vie ? Sans CI/CD, un bug peut passer en production et coûter des heures de debug. Avec ce pipeline, le code cassé est bloqué automatiquement avant même d'arriver sur la branche principale. C'est le filet de sécurité de toute équipe professionnelle.

C'est quoi la prochaine étape ? Ce que tu viens de faire est l'intégration continue (CI). La prochaine étape c'est le déploiement continu (CD) : faire en sorte que si les tests passent, le code est automatiquement déployé en production. On y reviendra dans une prochaine mission.


🔒 CHECKLIST SÉCURITÉ / DEVOPS
Les bons réflexes à prendre dès maintenant.

Ne jamais commiter de mots de passe dans le code — utilise les Secrets GitHub (Settings → Secrets).
Protège ta branche main — active la règle "Require status checks to pass" dans les paramètres du dépôt. Personne ne peut merger si les tests échouent.
Nomme tes commits clairement — fix: correction du bug dans additionner vaut mieux que update.
Les pipelines, c'est du code — le fichier .yml doit être relu comme du code. Une faute d'indentation = pipeline cassé.



> MISSION ARMÉE :: BONNE CHANCE, OPERATIVE

> L'ARCHITECTE OBSERVE LES LOGS

> [CONNEXION FERMÉE]



The Friday Breach est un programme hebdomadaire de montée en compétences. Chaque mission est conçue pour un sprint pratique de 60 minutes. Les solutions sont publiées le vendredi suivant.

