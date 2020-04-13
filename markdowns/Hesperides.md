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