# On passe en vitesse lumière

Extrait de https://callicode.fr/pydefis/VitesseLumiere/txt

Histoire
Luke, Obi-Wan, Han et Chewbacca sont sur le point de quitter Tatooine et partent pour Aldorande.

Mais ils sont pris en chasse par des croiseurs interstellaires de l'empire.

Le faucon millénium pourra distancer ses poursuivants dès qu'ils sera passé en vitesse lumière.

Obi-Wan et Luke pressent Han de calculer les coordonnées pour passer en vitesse lumière, mais Han leur explique :

Il faut un petit moment, le temps de définir les navi-composantes.
Il suffit d'une petite erreur de calcul et la trajectoire passe à travers une étoile ou bien on frôle une supernova et là, la ballade est terminée.
Calculer les navi-composantes n'est pas si simple.

Étant donné un point d'arrivée souhaité, donné par 3 valeurs x, y et z, le calcul des navi-composantes est fait par l'algorithme suivant (* est la multiplication et % est le reste de la division entière (modulo)):

    initialiser x, y, et z
    tant que 10 * x > y :
        x = (y * z) % 10000
        y = (3 * z) % 10000
        z = (7 * z) % 10000
    afficher les navi-composantes finales : x, y, z
    
Le point d'arrivée (valeurs initiales de x, y et z) est donné en entrée du problème.

Attention
Si le calcul dure plus de 10000 pas de temps, alors les coordonnées du point d'arrivée seront considérées comme inaccessibles. La réponse attendue sera alors (-1,-1,-1).

Défi
Fournissez les navi-composantes obtenues par l'algorithme qui précède pour valider le défi et passer en vitesse lumière.

@[Ecrire l'algorythme.]({ "stubs": ["vitesse_lumiere.js"], "command": "node_modules/mocha/bin/mocha vitesse_lumiere.spec.js --reporter"})
