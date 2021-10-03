export const victimeCategories = [
  {
    name: "appel",
    nextName: "attente",
    label: "Appel",
    questions: [
      {
        type: "radio",
        name: "2.1",
        label: "Est-ce vous qui avez composé un numéro d'urgence ?",
        choices: [
          { value: "oui", label: "Oui" },
          { value: "non", label: "Non" }
        ],
        continueIfValue: "oui"
      },
      {
        type: "radio",
        name: "2.2",
        label: "Quel numéro avez-vous composé ?",
        choices: [
          { value: 18, label: "18" },
          { value: 15, label: "15" },
          { value: 112, label: "112" },
          { value: 17, label: "17" }
        ]
      },
      {
        type: "radio",
        name: "2.3",
        label: "Avez-vous rappelé le numéro composé après le premier appel ?",
        choices: [
          { value: "oui", label: "Oui" },
          { value: "non", label: "Non" }
        ]
      }
    ]
  },
  {
    name: "attente",
    nextName: "prise-en-charge",
    label: "Attente",
    questions: [
      {
        type: "radio",
        name: "3.1",
        label: "Comment évaluez-vous l'attente entre votre appel et l'arrivée des sapeurs-pompiers ?",
        choices: [
          { value: "acceptable", label: "Acceptable" },
          { value: "ameliorer", label: "À améliorer" }
        ]
      }
    ]
  },
  {
    name: "prise-en-charge",
    nextName: "douleur",
    label: "Prise en charge par les pompiers",
    questions: [
      {
        type: "scale",
        name: "4.1",
        label: "Avez-vous compris les explications des sapeurs-pompiers ?",
        from: "Pas du tout",
        to: "Totalement"
      },
      {
        type: "scale",
        name: "4.2",
        label: "Avez-vous eu le sentiment d'être écouté et compris par les sapeurs-pompiers ?",
        from: "Pas du tout",
        to: "Totalement"
      },
      {
        type: "scale",
        name: "4.3",
        label: "Vous-êtes vous senti en sécurité lors de votre prise en charge ?",
        from: "Pas du tout",
        to: "Totalement"
      }
    ]
  },
  {
    name: "douleur",
    nextName: "general",
    label: "Douleur",
    questions: [
      {
        type: "radio",
        name: "5.1",
        label: "Avez-vous ressenti une douleur lors de votre prise en charge par les sapeurs-pompiers ?",
        choices: [
          { value: "oui", label: "Oui" },
          { value: "non", label: "Non" }
        ],
        continueIfValue: "oui"
      },
      {
        type: "radio",
        name: "5.2",
        label: "Comment évaluez-vous l'attente entre votre appel et l'arrivée des sapeurs-pompiers ?",
        choices: [
          { value: "augmente", label: "Elle a augmenté" },
          { value: "aucun", label: "Aucun impact" },
          { value: "diminue", label: "Elle a diminué" }
        ]
      }
    ]
  },
  {
    name: "general",
    nextName: "remarque-temoignage",
    label: "Général",
    questions: [
      {
        type: "radio",
        name: "6.1",
        label: "Pensez-vous que l'intervention des sapeurs-pompiers était indispensable ?",
        choices: [
          { value: "oui", label: "Oui" },
          { value: "none", label: "Non" }
        ]
      },
      {
        type: "radio",
        name: "6.2",
        label: "De manière générale, est-ce que le service apporté par les sapeurs-pompiers a été à la hauteur de vos attentes ?",
        choices: [
          { value: "oui", label: "Oui" },
          { value: "none", label: "Non" }
        ]
      },
      {
        type: "radio",
        name: "6.3",
        label: "Selon vous, les sapeurs-pompiers vous ont :",
        choices: [
          { value: "aide", label: "Aidé" },
          { value: "secours", label: "Secouru" },
          { value: "reconfort", label: "Réconforté" },
          { value: "sauve", label: "Sauvé la vie" }
        ]
      }
    ]
  },
  {
    name: "remarque-temoignage",
    label: "Remarque/Témoignage",
    questions: [
      {
        type: "tags",
        name: "7.1",
        label: "Qu'avez-vous particulièrement apprécié lors de l'intervention des pompiers ?",
        choices: [
          { value: "professionnalisme", label: "Professionnalisme" },
          { value: "efficacite", label: "Efficacité" },
          { value: "rapidite", label: "Rapidité" },
          { value: "securite", label: "Sécurité" }
        ]
      },
      {
        type: "tags",
        name: "7.2",
        label: "Qu'est-ce qui vous a particulièrement déplu lors de l'intervention des pompiers ?",
        choices: [
          { value: "mise-a-lecart", label: "Mise à l'écart" }, // todo
        ]
      },
      {
        type: "text",
        name: "7.3",
        label: "Avez-vous une remarque ou quelque chose que vous aimeriez nous partager ?"
      }
    ]
  }
]

export const temoinCategories = [
  {
    name: "appel",
    nextName: "attente",
    label: "Appel",
    questions: [
      {
        type: "radio",
        name: "2.1",
        label: "Est-ce vous qui avez composé un numéro d'urgence ?",
        choices: [
          { value: "oui", label: "Oui" },
          { value: "non", label: "Non" }
        ],
        continueIfValue: "oui"
      },
      {
        type: "radio",
        name: "2.2",
        label: "Quel numéro avez-vous composé ?",
        choices: [
          { value: 18, label: "18" },
          { value: 15, label: "15" },
          { value: 112, label: "112" },
          { value: 17, label: "17" }
        ]
      },
      {
        type: "radio",
        name: "2.3",
        label: "Avez-vous rappelé le numéro composé après le premier appel ?",
        choices: [
          { value: "oui", label: "Oui" },
          { value: "non", label: "Non" }
        ]
      }
    ]
  },
  {
    name: "attente",
    nextName: "premier-secours",
    label: "Attente",
    questions: [
      {
        type: "radio",
        name: "3.1",
        label: "Comment évaluez-vous l'attente entre votre appel et l'arrivée des sapeurs-pompiers ?",
        choices: [
          { value: "acceptable", label: "Acceptable" },
          { value: "ameliorer", label: "À améliorer" }
        ]
      }
    ]
  },
  {
    name: "premier-secours",
    nextName: "intervention",
    label: "Premiers secours",
    questions: [
      {
        type: "radio",
        name: "4.1",
        label: "Avez-vous effectué des gestes de premiers secours sur la victime ?",
        choices: [
          { value: "oui", label: "Oui" },
          { value: "non", label: "Non" }
        ]
      },
      {
        type: "radio",
        name: "4.2",
        label: "Si oui, lequel ?",
        choices: [
          { value: "pls", label: "Position Latérale de Sécurité" },
          { value: "massage-cardiaque", label: "Massage cardiaque" },
          { value: "arret-saignement", label: "Arrêt d'un saignement" }
        ]
      },
      {
        type: "radio",
        name: "4.3",
        label: "Avez-vous été formé aux premiers secours ?",
        choices: [
          { value: "oui", label: "Oui" },
          { value: "non", label: "Non" }
        ]
      }
    ]
  },
  {
    name: "intervention",
    nextName: "general",
    label: "Intervention des sapeurs-pompiers",
    questions: [
      {
        type: "radio",
        name: "5.1",
        label: "Vous êtes-vous senti mis de côté à l'arrivée des sapeurs-pompiers ?",
        choices: [
          { value: "oui", label: "Oui" },
          { value: "non", label: "Non" }
        ]
      },
      {
        type: "radio",
        name: "5.2",
        label: "Selon vous, la douleur de la victime a été prise en compte par les sapeurs-pompiers :",
        choices: [
          { value: "oui", label: "Oui" },
          { value: "non", label: "Non" }
        ]
      }
    ]
  },
  {
    name: "general",
    nextName: "remarque-temoignage",
    label: "Général",
    questions: [
      {
        type: "radio",
        name: "6.1",
        label: "Pensez-vous que l'intervention des sapeurs-pompiers était indispensable ?",
        choices: [
          { value: "oui", label: "Oui" },
          { value: "non", label: "Non" }
        ]
      },
      {
        type: "radio",
        name: "6.2",
        label: "De manière générale, est-ce que le service apporté par les sapeurs-pompiers a été à la hauteur de vos attentes ?",
        choices: [
          { value: "oui", label: "Oui" },
          { value: "non", label: "Non" }
        ]
      }
    ]
  },
  {
    name: "remarque-temoignage",
    label: "Remarque/Témoignage",
    questions: [
      {
        type: "tags",
        name: "7.1",
        label: "Qu'avez-vous particulièrement apprécié lors de l'intervention des pompiers ?",
        choices: [
          { value: "professionnalisme", label: "Professionnalisme" },
          { value: "efficacite", label: "Efficacité" },
          { value: "rapidite", label: "Rapidité" },
          { value: "securite", label: "Sécurité" }
        ]
      },
      {
        type: "tags",
        name: "7.2",
        label: "Qu'est-ce qui vous a particulièrement déplu lors de l'intervention des pompiers ?",
        choices: [
          { value: "mise-a-lecart", label: "Mise à l'écart" }, // todo
        ]
      },
      {
        type: "text",
        name: "7.3",
        label: "Avez-vous une remarque ou quelque chose que vous aimeriez nous partager ?"
      }
    ]
  }
]

