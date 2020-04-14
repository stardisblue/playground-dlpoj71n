# Constante de Champernowne
  Extrait de https://callicode.fr/pydefis/Champernowne/txt
  
  La constante de Champernowne est un nombre compris entre 0 et 1, dont le dévelopopement décimal est obtenu en écrivant successivement les nombre entiers. Elle commence ainsi : 0,12345678910111213141515171819202122...
  
  Numérotons les chiffres situés après la virgule.
  
  Le chiffre 1 est 1, le chiffre 9 est 9, le chiffre 10 est 1 et le chiffre 11 est 0 etc...
  
  Deux entiers n1 et n2 sont donnés en entrée de ce problème.
  
  Vous devez donner la somme des chiffres n1 à n2 inclus.
  
  Par exemple, si n1=11 et n2=21, il faut sommer ces chiffres :
  
      0 , 12345678910111213141516171819202122 ...
                    |         |
                    11        21
  La réponse à donner serait alors : 0 + 1 + 1 + 1 + 2 + 1 + 3 + 1 + 4 + 1 + 5 = 20
  
@[Professeur Guique.]({ "stubs": ["champernowne.js"], "command": "node_modules/mocha/bin/mocha champernowne.spec.js"})