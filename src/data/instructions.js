export const contextPrompt = `
Vous allez créer des scénarios fictifs pour un jeu basé sur la prévention du harcèlement sexuel dans un contexte professionnel. Dans ces scénarios, les employés de bureau naviguent dans différentes situations simulées dans un Escape Game éducatif. Ils ne doivent ni être la victime ni l'agresseur dans les situations présentées. Ces situations serviront à éduquer et tester les employés sur leur capacité à identifier et réagir correctement face au harcèlement sexuel dans l'entreprise, sans les mettre dans des situations personnellement inconfortables ou traumatisantes. Il est impératif de créer des scénarios responsables et sensibles au sujet délicat du harcèlement sexuel.
`;

export const userPrompt = (scenario) => `
Générez un scénario fictif basé sur la situation suivante : "${scenario}". Le texte doit être concis, ne dépassant pas 300 mots, et formuler de manière claire sans phrase coupée. Le scénario doit être autonome, sans titre ni description supplémentaire, et doit se terminer par "Que faites-vous ?", invitant ainsi le joueur à choisir une action parmi plusieurs options. Notez bien que le nom "Jessica" ne doit être utilisé pour aucun personnage dans le scénario.

De plus, veuillez générer 4 réponses potentielles que le joueur pourrait choisir en réponse au scénario. Ces réponses doivent être présentées sous la forme d'un objet JSON, où une seule des réponses est correcte et les autres incorrectes et potentiellement risquées. Voici le format requis pour les réponses :
{
  "responses": [
    {
      "is_correct": true,
      "text": "[Insérez le texte de la réponse correcte ici]"
    },
    {
      "is_correct": false,
      "text": "[Insérez le texte de la première réponse incorrecte ici]"
    },
    {
      "is_correct": false,
      "text": "[Insérez le texte de la deuxième réponse incorrecte ici]"
    },
    {
      "is_correct": false,
      "text": "[Insérez le texte de la troisième réponse incorrecte ici]"
    }
  ]
}
Le scénario et les réponses générées devraient aider à éduquer les joueurs sur comment identifier et répondre de manière appropriée au harcèlement sexuel dans un environnement de travail.
`;
