# L'algorithme du professeur Guique

Extrait de https://callicode.fr/pydefis/Algorithme/txt

    les valeurs a, b et c sont fournies en paramètre à l'algorithme.

initialiser k et n respectivement à 1 et 0
répéter tant que k est strictement inférieur à 1000-n
a <- b
b <- c + a
c <- 3\*c + 4\*a - b
n <- a + b
augmenter k de 1
fin répéter
Défi
Ecrire la fonction qui, étant donné les valeurs de a, b et c renvoie la valeur de c à la fin de l'algorithme.

@[Professeur Guique.]({ "stubs": ["professeur_guique.js"], "command": "node_modules/mocha/bin/mocha professeur_guique.spec.js --reporter"})

    Check out the markdown file [`welcome.md`](https://github.com/TechDotIO/nodejs-template/blob/master/markdowns/welcome.md) to see how this exercise is injected into the template.

# Manipulation de nombres A REVOIR SUR TOUT L'AFFICHAGE

Considérons l’algorithme suivant :

    Soit un entier naturel A.
    
Tant que A est différent de 1, exécuter les instructions suivantes :

    Si A est impair, alors remplacer A par 3 x A + 1
    Sinon remplacer A par A/2
    Afficher A

@[Ecrire l'algorythme.]({ "stubs": ["manipulation_de_nombres.js"], "command": "node_modules/mocha/bin/mocha manipulation_de_nombres.spec.js --reporter"})

# Herculito XI

Extrait de https://callicode.fr/pydefis/Herculito11Pommes/txt

Histoire
Les Hespérides, filles d'Atlas, habitaient un merveilleux jardin dont les pommiers donnaient des pommes en or.

Pour son 11e travail, Eurysthée demanda à Hercule de ramener ces pommes.

Une fois atteint le jardin merveilleux, l'oracle Nérée apprit à Hercule qu'il pourrait repartir avec une partie des pommes... à condition qu'il montre ses facultés en calcul mental.

Nérée lui tint ce propos manipulation_de_nombres:

J'ai empilé les pommes d'or pour toi, sous la forme d'une pyramide.
L'étage le plus haut ne contient qu'une pomme.
L'étage juste en dessous forme un carré 2x2 (contenant 4 pommes), l'étage juste en dessous forme un carré 3x3 (contenant 9 pommes).
La pyramide que tu vois contient 50 étages. L'étage de base contient donc 2 500 pommes...
Je suis d'accord pour te laisser partir avec les pommes contenues dans certains étages.
Précisément, si un étage contient un nombre de pommes multiple de 3, tu peux l'emporter.
Si tu m'annonces combien de pommes tu emporteras au total, je te laisserai partir avec les pommes...
Pour relever ce défi, vous devez aider Hercule en lui indiquant le nombre de pommes qu'il pourra emporter.

Exemple

Par exemple, si la pyramide n'avait compté que 6 étages comme indiqué sur la figure suivante, chaque étage aurait été composé de : 1, 4, 9, 16, 25 et 36 pommes.

Hercule aurait pu emporter les 9 pommes de l'étage 3 (car 9 est un multiple de 3) et les 36 pommes de l'étage 6 (car 36 est un multiple de 3).

Au total il aurait donc emporté 45 pommes.

Défi
Ecrire la fonction permettant à Hercule de calculer le nombre de pommes pouvant être emportées étant donné le nombre d'étage

@[Ecrire l'algorythme.]({ "stubs": ["le_jardin_des_hesperides.js"], "command": "node_modules/mocha/bin/mocha le_jardin_des_hesperides.spec.js --reporter"})

# Désamorçage à la Tony Stark
  Un moyen mnémotechnique mais pas forcément pratique...
  
  Extrait de https://callicode.fr/pydefis/SpymasterBomb/txt
  
  Tony Stark a l'habitude de placer une porte dérobée dans toutes ses armes : une sorte de code qui lui permet de les désactiver dans le cas où les armes seraient retournées contre lui.
  
  Ainsi, quand le Spymaster, après avoir dérobé une bombe puissante à Stark Industries, la plaça en plein cœur d'une métropole dans l'espoir de détruire Iron-Man, il ne savait pas que ce dernier possédait un code particulier pour la désamorcer.
  
  Toutefois, entre deux soirées mondaines, Tony Stark a une fâcheuse tendance à oublier les codes de secours de ses appareils.
  
  Il utilise donc généralement un moyen mnémotechnique pour les retrouver... plus ou moins rapidement.
  
  Tout ce dont il se souvient, c'est que le code à entrer est la somme de tous les nombres qui sont multiples de 3 ou de 5, et qui sont strictement inférieurs à un autre nombre.
  
  Cet autre nombre est gravé sur la bombe.
  
  Défi
  Ecrire une fonction qui, étant donné le nombre gravé sur la bombe, calcule le code désamorçage.

@[Ecrire l'algorythme.]({ "stubs": ["tony_stark.js"], "command": "node_modules/mocha/bin/mocha tony_stark.spec.js --reporter"})

# Un peu de calculs

Considérons la fonction f(n) définit de la manière suivante :
  
    f(0) = 2
    f(1) = 3
    f(n) = 2f(n-1) + f(n-2) si n est pair et n >= 2
    f(n) = f(n-1) - f(n-2) si n est impair et n >= 2

Ecrire la fonction permettant de calculer la valeur de f pour n fourni en paramètre.

@[Ecrire l'algorythme.]({ "stubs": ["un_peu_de_calcul.js"], "command": "node_modules/mocha/bin/mocha un_peu_de_calcul.spec.js --reporter"})

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

# Année bissextile ?
Problème
Si une année est bissextile alors elle a 366 jours. Un moyen simple de déterminer si une année est bissextile est de vérifier :

si l'année est divisible par 4 et non divisible par 100
ou si l'année est divisible par 400.
Défi
Ecrire une fonction renvoyant 1 si une année fournie en paramètre est bissextile et 0 sinon.

@[Ecrire l'algorythme.]({ "stubs": ["bissextile.js"], "command": "node_modules/mocha/bin/mocha bissextile.spec.js --reporter"})

# Un second test
    ```
@[Launch the server]({ "stubs": ["map/index.html"], "command": "node server.js" })
```

renders as:

@[Launch the server]({ "stubs": ["map/index.html"], "command": "node server.js" })


# Template Resources

    [`markdowns/welcome.md`](https://github.com/TechDotIO/nodejs-template/blob/master/markdowns/welcome.md)
What you are reading here is generated by this file. Tech.io uses the [Markdown syntax](https://tech.io/doc/reference-markdowns) to render text, media and to inject programming exercises.

                                                                                            [`nodejs-project`](https://github.com/TechDotIO/nodejs-template/tree/master/nodejs-project)
                                                                                                                   A simple Nodejs project dedicated to run the programming exercise above. A project relies on a Docker image to run. You can find images on the [Docker Hub](https://hub.docker.com/explore/) or you can even [build your own](https://tech.io/doc/reference-runner).

                                                                                                                                                                                                                                                                                   [`techio.yml`](https://github.com/TechDotIO/nodejs-template/blob/master/techio.yml)
                                                                                                                                                                                                                                                                                                      This _mandatory_ file describes both the table of content and the programming project(s). The file path should not be changed.

    # Visual and Interactive Content

Tech.io provides all the tools to embed visual and interactive content like a Web app or a Unix terminal within your contribution. Please refer to the [documentation](https://tech.io/doc) to learn more about the viewer integrations.
