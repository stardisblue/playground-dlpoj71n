# Insaisissable matrice
  Inspiré de https://callicode.fr/pydefis/AlgoMat/txt
  
  On considère la matrice suivante : M=\[24,83,38,59,48,30,42,40,24,22,14,45,81,100,44,30,59]
  
  Cette matrice va évoluer au cours du temps, et le contenu k d'une case est transformé, à chaque étape en (11k+4)%37
  
  Rappelons que a%b donne le reste de la division entière de a par b.
  
  À chaque étape de calcul, tous les nombres de la matrice sont simultanément modifiés.
  
  La fonction a écrire prend en paramètre deux variables :
  
  la première est la matrice à manipuler
  la deuxième est le nombre d'étapes à appliquer
  Vous devez répondre en donnant la somme des valeurs contenues dans la matrice après application de toutes les étapes.
  
  Testez votre code
  si le nombre d'étapes à appliquer est égal à 1, alors la somme des valeurs obtenues vaut 245
  si le nombre d'étapes à appliquer est égal à 10, alors la somme des valeurs obtenues vaut 289
  si le nombre d'étapes à appliquer est égal à 23, alors la somme des valeurs obtenues vaut 287
  
@[Ecrire l'algorythme.]({ "stubs": ["insaisissable.js"], "command": "node_modules/mocha/bin/mocha insaisissable.spec.js"})
