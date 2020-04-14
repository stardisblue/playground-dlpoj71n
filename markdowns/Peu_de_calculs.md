# Un peu de calculs

Considérons la fonction f(n) définit de la manière suivante :
  
    f(0) = 2
    f(1) = 3
    f(n) = 2f(n-1) + f(n-2) si n est pair et n >= 2
    f(n) = f(n-1) - f(n-2) si n est impair et n >= 2

Ecrire la fonction permettant de calculer la valeur de f pour n fourni en paramètre.

@[Ecrire l'algorythme.]({ "stubs": ["un_peu_de_calcul.js"], "command": "node_modules/mocha/bin/mocha un_peu_de_calcul.spec.js"})
