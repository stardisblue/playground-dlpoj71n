# Année bissextile ?
Problème
<br/>Si une année est bissextile alors elle a 366 jours.
<br/>Un moyen simple de déterminer si une année est bissextile est de vérifier :

    si l'année est divisible par 4 et non divisible par 100
    ou si l'année est divisible par 400.
Défi
<br/>Écrire une fonction renvoyant 1 si une année fournie en paramètre est bissextile et 0 sinon.

@[Écrire l'algorithme.]({ "stubs": ["bissextile.js"], "command": "node_modules/mocha/bin/mocha bissextile.spec.js"})
