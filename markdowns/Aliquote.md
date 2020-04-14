# Suite Aliquote A REVOIR
  Problème
  Les parties aliquotes de n sont ses diviseurs propres, c'est-à-dire tous ses diviseurs sauf lui-même.
  
  Soit S(n) la somme des diviseurs d'un nombre n.
  
  La suite aliquote de n est la suite des nombres formées de la somme aliquote de n, puis de la somme aliquote de ce nombre, puis la somme aliquote de ce nombre, etc.
  
  Cas particuliers
  Les nombres parfaits et sociaux ne seront pas pris en considération dans cet exercice.
  nombre parfait : nombre égal à la somme de ses diviseurs propres
  nombre sociable : un nombre entier strictement positif est sociable d'ordre n si sa suite aliquote est fermée et compte n maillons. Par exemple : 12496 -> 14288 -> 15472 -> 14536 -> 14264 -> 12496
  Les nombres dont l'un des termes de la suite aliquote dépasse 10^6
  
  Exemple
  Par exemple, la suite aliquote de 12 est 16, 15, 9, 4, 3, 1 car :
  
  S(12) = 1 + 2 + 3 + 4 + 6 = 16
  S(16) = 1 + 2 + 4 + 8 = 15
  S(15) = 1 + 3 + 5 = 9
  S(9) = 1 + 3 = 4
  S(4) = 1 + 2 = 3
  S(3) = 1 = 1
  
  suite aliquote(12) -> 12,16,15,9,4,3,1
  
  Défi
  Écrire une fonction qui, étant donné un entier n passé en paramètre, fournie la suite aliquote de n sous forme de tableau.

@[Ecrire l'algorythme.]({ "stubs": ["suite_aliquote.js"], "command": "node_modules/mocha/bin/mocha suite_aliquote.spec.js"})
