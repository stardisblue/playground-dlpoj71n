# Somme des termes impairs de la suite de Fibonacci
  Chaque nouveau terme de la suite de Fibonacci est généré en ajoutant les deux termes précédents.
  
  En commençant par 1 et 1, les 10 premiers termes sont les suivants :
  
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
  <br/>En prenant en compte les termes de la suite de Fibonacci dont les valeurs ne dépassent pas N (<= 10 millions), trouver la somme des termes impairs.
  
  Testez votre code
  <br/>L'appel "sommeImpairsFibonacci(10)" génère les valeurs suivantes : 1,1,2,3,5,8
  
  Les calculs s'arrêtent à 8 car la valeur suivante (13) est supérieure à 10.
  
  Les termes pris en compte dans la somme sont uniquement les termes impairs, donc 1+1+3+5 = 10
  
  Le résultat attendu est donc 10.
  
@[Écrire l'algorithme.]({ "stubs": ["fibonacci.js"], "command": "node_modules/mocha/bin/mocha fibonacci.spec.js"})
