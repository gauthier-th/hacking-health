export const victimeCategories = [
  {
    name: "introduction",
    nextName: "appel",
    label: "Introduction",
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
    name: "appel",
    nextName: "prise-en-charge",
    label: "Appel",
    questions: []
  },
  {
    name: "prise-en-charge",
    nextName: "",
    label: "Prise en charge par les pompiers",
    questions: [
      {
        type: "scale",
        name: "4.1",
        label: "Avez-vous compris les explications des sapeurs-pompiers ?",
        from: "Difficilement",
        to: "Totalement"
      }
    ]
  }
]
