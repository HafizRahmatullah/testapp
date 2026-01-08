const mcqData = {
 // Pre-Medical
 Biology: [
  {
    question: "Which organelle is known as the powerhouse of the cell?",
    options: ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
    answerIndex: 0
  },
  {
    question: "Which biomolecule is the primary source of energy?",
    options: ["Proteins", "Lipids", "Carbohydrates", "Nucleic acids"],
    answerIndex: 2
  },
  {
    question: "The basic structural and functional unit of life is:",
    options: ["Tissue", "Organ", "Cell", "Organ system"],
    answerIndex: 2
  },
  {
    question: "Which blood cells are responsible for oxygen transport?",
    options: ["White blood cells", "Platelets", "Red blood cells", "Plasma"],
    answerIndex: 2
  },
  {
    question: "Which vitamin is produced in human skin by sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    answerIndex: 3
  },

  {
    question: "DNA replication occurs during which phase of the cell cycle?",
    options: ["G1 phase", "S phase", "G2 phase", "M phase"],
    answerIndex: 1
  },
  {
    question: "Which enzyme is responsible for breaking down starch into maltose?",
    options: ["Pepsin", "Amylase", "Trypsin", "Lipase"],
    answerIndex: 1
  },
  {
    question: "Which part of the brain controls balance and coordination?",
    options: ["Cerebrum", "Medulla oblongata", "Cerebellum", "Pons"],
    answerIndex: 2
  },
  {
    question: "The functional unit of kidney is:",
    options: ["Neuron", "Nephron", "Alveolus", "Glomerulus"],
    answerIndex: 1
  },
  {
    question: "What is the main function of xylem tissue?",
    options: ["Food transport", "Water transport", "Photosynthesis", "Gas exchange"],
    answerIndex: 1
  },

  {
    question: "Crossing over occurs during which stage of meiosis?",
    options: ["Prophase I", "Metaphase I", "Anaphase I", "Telophase I"],
    answerIndex: 0
  },
  {
    question: "Which hormone regulates blood sugar level?",
    options: ["Thyroxine", "Adrenaline", "Insulin", "Estrogen"],
    answerIndex: 2
  },
  {
    question: "Which structure connects muscles to bones?",
    options: ["Ligament", "Tendon", "Cartilage", "Joint"],
    answerIndex: 1
  },
  {
    question: "Which gas is released during photosynthesis?",
    options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
    answerIndex: 2
  },
  {
    question: "What type of blood group is known as universal donor?",
    options: ["A", "B", "AB", "O"],
    answerIndex: 3
  },

  {
    question: "Which scientist proposed the theory of natural selection?",
    options: ["Lamarck", "Darwin", "Mendel", "Watson"],
    answerIndex: 1
  },
  {
    question: "Which organ is primarily responsible for detoxification?",
    options: ["Kidney", "Liver", "Lung", "Pancreas"],
    answerIndex: 1
  },
  {
    question: "The opening and closing of stomata is regulated by:",
    options: ["Epidermal cells", "Guard cells", "Xylem", "Phloem"],
    answerIndex: 1
  },
  {
    question: "Which part of eye controls the amount of light entering?",
    options: ["Retina", "Lens", "Iris", "Cornea"],
    answerIndex: 2
  },
  {
    question: "Which macromolecule forms enzymes?",
    options: ["Carbohydrates", "Lipids", "Proteins", "Vitamins"],
    answerIndex: 2
  },

  {
    question: "Which process maintains internal balance in organisms?",
    options: ["Metabolism", "Homeostasis", "Respiration", "Excretion"],
    answerIndex: 1
  },
  {
    question: "Which nitrogenous base is found only in RNA?",
    options: ["Adenine", "Guanine", "Cytosine", "Uracil"],
    answerIndex: 3
  },
  {
    question: "Which layer of heart is responsible for contraction?",
    options: ["Pericardium", "Epicardium", "Myocardium", "Endocardium"],
    answerIndex: 2
  },
  {
    question: "Which type of immunity is obtained from mother to child?",
    options: ["Active", "Artificial", "Passive", "Natural"],
    answerIndex: 2
  },
  {
    question: "Which part of flower becomes fruit?",
    options: ["Ovule", "Ovary", "Sepal", "Petal"],
    answerIndex: 1
  },

  {
    question: "The movement of water across a semi-permeable membrane is called:",
    options: ["Diffusion", "Osmosis", "Active transport", "Translocation"],
    answerIndex: 1
  },
  {
    question: "Which blood vessels carry blood away from the heart?",
    options: ["Veins", "Capillaries", "Arteries", "Venules"],
    answerIndex: 2
  },
  {
    question: "Which stage of mitosis shows chromosomes aligned at equator?",
    options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    answerIndex: 1
  },
  {
    question: "Which organ produces bile?",
    options: ["Gall bladder", "Pancreas", "Liver", "Stomach"],
    answerIndex: 2
  },
  {
    question: "Which ecological relationship benefits both organisms?",
    options: ["Parasitism", "Commensalism", "Mutualism", "Predation"],
    answerIndex: 2
  },

  {
    question: "Which part of neuron receives impulses?",
    options: ["Axon", "Dendrite", "Node of Ranvier", "Myelin sheath"],
    answerIndex: 1
  },
  {
    question: "Which component of blood helps in clotting?",
    options: ["Plasma", "RBCs", "WBCs", "Platelets"],
    answerIndex: 3
  },
  {
    question: "Which plant hormone promotes cell elongation?",
    options: ["Auxin", "Cytokinin", "Ethylene", "Abscisic acid"],
    answerIndex: 0
  },
  {
    question: "Which organ is affected by hepatitis?",
    options: ["Heart", "Kidney", "Liver", "Lung"],
    answerIndex: 2
  },
  {
    question: "Which structure protects the spinal cord?",
    options: ["Skull", "Ribs", "Vertebral column", "Pelvis"],
    answerIndex: 2
  },

  {
    question: "Which process forms gametes?",
    options: ["Mitosis", "Binary fission", "Meiosis", "Budding"],
    answerIndex: 2
  },
  {
    question: "Which kingdom includes bacteria?",
    options: ["Plantae", "Animalia", "Protista", "Monera"],
    answerIndex: 3
  },
  {
    question: "Which part of ear is responsible for hearing?",
    options: ["Cochlea", "Eustachian tube", "Semicircular canals", "Auditory nerve"],
    answerIndex: 0
  }
],
// ---------------------------------------------------------------------------------------------------------
 Chemistry: [
  {
    question: "What is the atomic number of carbon?",
    options: ["4", "6", "12", "14"],
    answerIndex: 1
  },
  {
    question: "Which particle has a negative charge?",
    options: ["Proton", "Neutron", "Electron", "Nucleus"],
    answerIndex: 2
  },
  {
    question: "The pH value of pure water is:",
    options: ["5", "6", "7", "8"],
    answerIndex: 2
  },
  {
    question: "Which gas is released during photosynthesis?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answerIndex: 1
  },
  {
    question: "What is the chemical formula of water?",
    options: ["H₂O", "H₂O₂", "HO", "OH₂"],
    answerIndex: 0
  },

  {
    question: "Which element is a noble gas?",
    options: ["Oxygen", "Nitrogen", "Neon", "Hydrogen"],
    answerIndex: 2
  },
  {
    question: "Avogadro’s number is approximately:",
    options: ["6.02 × 10²¹", "6.02 × 10²²", "6.02 × 10²³", "6.02 × 10²⁴"],
    answerIndex: 2
  },
  {
    question: "Which bond is formed by sharing of electrons?",
    options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
    answerIndex: 1
  },
  {
    question: "Which acid is present in lemon?",
    options: ["Acetic acid", "Citric acid", "Lactic acid", "Oxalic acid"],
    answerIndex: 1
  },
  {
    question: "Which state of matter has definite volume but no definite shape?",
    options: ["Solid", "Liquid", "Gas", "Plasma"],
    answerIndex: 1
  },

  {
    question: "Which metal is liquid at room temperature?",
    options: ["Iron", "Mercury", "Sodium", "Aluminum"],
    answerIndex: 1
  },
  {
    question: "What is the valency of oxygen?",
    options: ["1", "2", "3", "4"],
    answerIndex: 1
  },
  {
    question: "Which process is used to separate salt from seawater?",
    options: ["Filtration", "Distillation", "Evaporation", "Sublimation"],
    answerIndex: 2
  },
  {
    question: "Which element is the main component of natural gas?",
    options: ["Ethane", "Propane", "Methane", "Butane"],
    answerIndex: 2
  },
  {
    question: "The chemical formula of calcium carbonate is:",
    options: ["CaCO₃", "CaO", "CaSO₄", "CaCl₂"],
    answerIndex: 0
  },

  {
    question: "Which property measures the ability of an atom to attract electrons?",
    options: ["Atomic size", "Electronegativity", "Ionization energy", "Electron affinity"],
    answerIndex: 1
  },
  {
    question: "Which indicator turns red in acidic solution?",
    options: ["Phenolphthalein", "Methyl orange", "Litmus", "Universal indicator"],
    answerIndex: 2
  },
  {
    question: "What is the oxidation state of oxygen in H₂O?",
    options: ["0", "-1", "-2", "+1"],
    answerIndex: 2
  },
  {
    question: "Which law states that mass is conserved in a chemical reaction?",
    options: ["Law of multiple proportions", "Law of definite proportions", "Law of conservation of mass", "Avogadro’s law"],
    answerIndex: 2
  },
  {
    question: "Which type of reaction releases heat?",
    options: ["Endothermic", "Exothermic", "Reversible", "Neutralization"],
    answerIndex: 1
  },

  {
    question: "The smallest unit of an element that retains its properties is:",
    options: ["Molecule", "Atom", "Ion", "Compound"],
    answerIndex: 1
  },
  {
    question: "Which element has the symbol Na?",
    options: ["Nitrogen", "Neon", "Sodium", "Nickel"],
    answerIndex: 2
  },
  {
    question: "What is the molar mass of oxygen (O₂)?",
    options: ["16 g/mol", "24 g/mol", "32 g/mol", "48 g/mol"],
    answerIndex: 2
  },
  {
    question: "Which compound is an alkali?",
    options: ["NaOH", "HCl", "CO₂", "NaCl"],
    answerIndex: 0
  },
  {
    question: "Which gas is commonly known as laughing gas?",
    options: ["NO₂", "N₂O", "CO", "SO₂"],
    answerIndex: 1
  },

  {
    question: "Which type of change involves formation of a new substance?",
    options: ["Physical change", "Chemical change", "Reversible change", "Temporary change"],
    answerIndex: 1
  },
  {
    question: "Which element is essential for rusting of iron?",
    options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
    answerIndex: 1
  },
  {
    question: "What is the pH of a basic solution?",
    options: ["Less than 7", "Equal to 7", "Greater than 7", "Zero"],
    answerIndex: 2
  },
  {
    question: "Which gas is used in the manufacture of ammonia?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answerIndex: 1
  },
  {
    question: "Which substance is used as a drying agent?",
    options: ["Water", "Silica gel", "Sodium chloride", "Sugar"],
    answerIndex: 1
  },

  {
    question: "Which element has the highest electronegativity?",
    options: ["Oxygen", "Nitrogen", "Fluorine", "Chlorine"],
    answerIndex: 2
  },
  {
    question: "Which process converts solid directly into gas?",
    options: ["Evaporation", "Condensation", "Sublimation", "Fusion"],
    answerIndex: 2
  },
  {
    question: "Which acid is present in vinegar?",
    options: ["Citric acid", "Lactic acid", "Acetic acid", "Formic acid"],
    answerIndex: 2
  },
  {
    question: "The main ore of aluminum is:",
    options: ["Hematite", "Bauxite", "Galena", "Magnetite"],
    answerIndex: 1
  },
  {
    question: "Which substance speeds up a chemical reaction without being consumed?",
    options: ["Reactant", "Product", "Catalyst", "Inhibitor"],
    answerIndex: 2
  },

  {
    question: "Which compound is used in photography?",
    options: ["NaCl", "AgBr", "CaCO₃", "NH₄Cl"],
    answerIndex: 1
  },
  {
    question: "The chemical formula of sulfuric acid is:",
    options: ["H₂SO₃", "H₂SO₄", "HCl", "HNO₃"],
    answerIndex: 1
  },
  {
    question: "Which type of bond exists in NaCl?",
    options: ["Covalent", "Metallic", "Hydrogen", "Ionic"],
    answerIndex: 3
  }
], 
//  ---------------------------------------------------------------------------------------------------------
 Physics: [
  {
    question: "What is the SI unit of force?",
    options: ["Dyne", "Newton", "Joule", "Watt"],
    answerIndex: 1
  },
  {
    question: "Which physical quantity is a vector?",
    options: ["Speed", "Mass", "Temperature", "Velocity"],
    answerIndex: 3
  },
  {
    question: "What is the acceleration due to gravity on Earth (approx.)?",
    options: ["9.8 m/s²", "8.9 m/s²", "10 m/s²", "9.0 m/s²"],
    answerIndex: 0
  },
  {
    question: "Which instrument is used to measure electric current?",
    options: ["Voltmeter", "Galvanometer", "Ammeter", "Ohmmeter"],
    answerIndex: 2
  },
  {
    question: "The unit of work is:",
    options: ["Newton", "Watt", "Joule", "Pascal"],
    answerIndex: 2
  },

  {
    question: "Which law states that every action has an equal and opposite reaction?",
    options: ["First law of motion", "Second law of motion", "Third law of motion", "Law of gravitation"],
    answerIndex: 2
  },
  {
    question: "What type of energy is stored in a stretched spring?",
    options: ["Kinetic energy", "Thermal energy", "Potential energy", "Electrical energy"],
    answerIndex: 2
  },
  {
    question: "Speed is defined as:",
    options: ["Distance × Time", "Distance / Time", "Time / Distance", "Velocity × Time"],
    answerIndex: 1
  },
  {
    question: "Which device converts electrical energy into mechanical energy?",
    options: ["Generator", "Transformer", "Electric motor", "Battery"],
    answerIndex: 2
  },
  {
    question: "What is the unit of electric charge?",
    options: ["Ampere", "Volt", "Coulomb", "Ohm"],
    answerIndex: 2
  },

  {
    question: "The resistance of a conductor depends on:",
    options: ["Length only", "Area only", "Material only", "Length, area, and material"],
    answerIndex: 3
  },
  {
    question: "What happens to resistance if the length of a wire is doubled?",
    options: ["Becomes half", "Remains same", "Becomes double", "Becomes zero"],
    answerIndex: 2
  },
  {
    question: "Which mirror is used as a shaving mirror?",
    options: ["Plane mirror", "Convex mirror", "Concave mirror", "None"],
    answerIndex: 2
  },
  {
    question: "The phenomenon of bending of light is called:",
    options: ["Reflection", "Refraction", "Dispersion", "Diffraction"],
    answerIndex: 1
  },
  {
    question: "What is the unit of power?",
    options: ["Joule", "Newton", "Watt", "Volt"],
    answerIndex: 2
  },

  {
    question: "Which electromagnetic wave has the shortest wavelength?",
    options: ["Radio waves", "X-rays", "Infrared", "Microwaves"],
    answerIndex: 1
  },
  {
    question: "What is the frequency of AC supply in Pakistan?",
    options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
    answerIndex: 0
  },
  {
    question: "Which law relates voltage, current, and resistance?",
    options: ["Faraday’s law", "Ohm’s law", "Coulomb’s law", "Lenz’s law"],
    answerIndex: 1
  },
  {
    question: "Which quantity remains constant in uniform circular motion?",
    options: ["Velocity", "Acceleration", "Speed", "Direction"],
    answerIndex: 2
  },
  {
    question: "The image formed by a plane mirror is:",
    options: ["Real and inverted", "Virtual and inverted", "Real and erect", "Virtual and erect"],
    answerIndex: 3
  },

  {
    question: "What is the unit of pressure?",
    options: ["Pascal", "Newton", "Joule", "Watt"],
    answerIndex: 0
  },
  {
    question: "Which factor does not affect gravitational force?",
    options: ["Mass", "Distance", "Medium", "None"],
    answerIndex: 2
  },
  {
    question: "Sound cannot travel through:",
    options: ["Solid", "Liquid", "Gas", "Vacuum"],
    answerIndex: 3
  },
  {
    question: "Which type of lens is used to correct myopia?",
    options: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
    answerIndex: 1
  },
  {
    question: "The unit of magnetic field strength is:",
    options: ["Tesla", "Weber", "Ampere", "Volt"],
    answerIndex: 0
  },

  {
    question: "Which color of light has the highest frequency?",
    options: ["Red", "Yellow", "Green", "Violet"],
    answerIndex: 3
  },
  {
    question: "The work done is zero when force is:",
    options: ["Parallel to displacement", "Perpendicular to displacement", "Opposite to displacement", "Same as displacement"],
    answerIndex: 1
  },
  {
    question: "What happens to kinetic energy if velocity is doubled?",
    options: ["Doubles", "Becomes half", "Becomes four times", "Remains same"],
    answerIndex: 2
  },
  {
    question: "Which device stores electric charge?",
    options: ["Resistor", "Capacitor", "Inductor", "Transformer"],
    answerIndex: 1
  },
  {
    question: "The speed of light in vacuum is approximately:",
    options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10⁵ m/s", "3 × 10⁷ m/s"],
    answerIndex: 1
  },

  {
    question: "Which particle has no electric charge?",
    options: ["Electron", "Proton", "Neutron", "Alpha particle"],
    answerIndex: 2
  },
  {
    question: "What type of current is produced by a battery?",
    options: ["Alternating current", "Direct current", "Pulsating current", "Random current"],
    answerIndex: 1
  },
  {
    question: "The SI unit of momentum is:",
    options: ["kg m/s", "kg m/s²", "N s", "Both A and C"],
    answerIndex: 3
  },
  {
    question: "Which phenomenon explains the blue color of the sky?",
    options: ["Reflection", "Refraction", "Dispersion", "Scattering"],
    answerIndex: 3
  },
  {
    question: "The focal length of a plane mirror is:",
    options: ["Zero", "Finite", "Infinite", "Negative"],
    answerIndex: 2
  },

  {
    question: "Which law states that induced current opposes the change producing it?",
    options: ["Faraday’s law", "Ohm’s law", "Lenz’s law", "Newton’s law"],
    answerIndex: 2
  },
  {
    question: "Heat transfer in solids mainly occurs by:",
    options: ["Conduction", "Convection", "Radiation", "Evaporation"],
    answerIndex: 0
  },
  {
    question: "Which quantity is conserved in an isolated system?",
    options: ["Velocity", "Acceleration", "Momentum", "Force"],
    answerIndex: 2
  }
], 
// ----------------------------------------------------------------------------------------------------
 English: [
  {
    question: "Choose the correct synonym of the word 'Happy'.",
    options: ["Sad", "Joyful", "Angry", "Tired"],
    answerIndex: 1
  },
  {
    question: "Choose the correct antonym of the word 'Ancient'.",
    options: ["Old", "Modern", "Historic", "Past"],
    answerIndex: 1
  },
  {
    question: "Fill in the blank: She ___ to school every day.",
    options: ["go", "goes", "gone", "going"],
    answerIndex: 1
  },
  {
    question: "Choose the correct spelling:",
    options: ["Definately", "Definetely", "Definitely", "Definatly"],
    answerIndex: 2
  },
  {
    question: "Which word is a noun?",
    options: ["Run", "Quickly", "Happiness", "Beautiful"],
    answerIndex: 2
  },

  {
    question: "Choose the correct sentence.",
    options: [
      "He don’t like tea.",
      "He doesn’t likes tea.",
      "He doesn’t like tea.",
      "He didn’t liked tea."
    ],
    answerIndex: 2
  },
  {
    question: "Choose the correct plural of 'Child'.",
    options: ["Childs", "Childrens", "Children", "Childes"],
    answerIndex: 2
  },
  {
    question: "Identify the adjective in the sentence: 'She has a beautiful dress.'",
    options: ["She", "Has", "Beautiful", "Dress"],
    answerIndex: 2
  },
  {
    question: "Fill in the blank: I have been living here ___ five years.",
    options: ["since", "for", "from", "by"],
    answerIndex: 1
  },
  {
    question: "Choose the correct meaning of the idiom: 'Once in a blue moon'.",
    options: ["Very often", "Rarely", "Always", "Never"],
    answerIndex: 1
  },

  {
    question: "Choose the correct passive voice: 'He wrote a letter.'",
    options: [
      "A letter is written by him.",
      "A letter was written by him.",
      "A letter has written by him.",
      "A letter is being wrote by him."
    ],
    answerIndex: 1
  },
  {
    question: "Which word is an adverb?",
    options: ["Slow", "Slowness", "Slowly", "Slower"],
    answerIndex: 2
  },
  {
    question: "Choose the correct preposition: He is good ___ mathematics.",
    options: ["in", "on", "at", "for"],
    answerIndex: 2
  },
  {
    question: "Choose the correct indirect speech: He said, 'I am tired.'",
    options: [
      "He said that he is tired.",
      "He said that he was tired.",
      "He says that he was tired.",
      "He said he tired."
    ],
    answerIndex: 1
  },
  {
    question: "Which sentence is in future tense?",
    options: [
      "She writes a letter.",
      "She wrote a letter.",
      "She is writing a letter.",
      "She will write a letter."
    ],
    answerIndex: 3
  },

  {
    question: "Choose the correct synonym of 'Rapid'.",
    options: ["Slow", "Fast", "Weak", "Lazy"],
    answerIndex: 1
  },
  {
    question: "Choose the correct article: He is ___ honest man.",
    options: ["a", "an", "the", "no article"],
    answerIndex: 1
  },
  {
    question: "Identify the conjunction in the sentence: 'I wanted to go, but it was raining.'",
    options: ["wanted", "go", "but", "was"],
    answerIndex: 2
  },
  {
    question: "Choose the correct form: Neither Ali nor his friends ___ present.",
    options: ["is", "was", "are", "has"],
    answerIndex: 2
  },
  {
    question: "Choose the correct spelling:",
    options: ["Occasion", "Ocassion", "Occassion", "Ocasian"],
    answerIndex: 0
  },

  {
    question: "What is the comparative degree of 'Good'?",
    options: ["Gooder", "More good", "Better", "Best"],
    answerIndex: 2
  },
  {
    question: "Choose the correct meaning of 'Ambiguous'.",
    options: ["Clear", "Confusing", "Simple", "Short"],
    answerIndex: 1
  },
  {
    question: "Fill in the blank: If he ___ harder, he would have passed.",
    options: ["works", "worked", "had worked", "will work"],
    answerIndex: 2
  },
  {
    question: "Which sentence is grammatically correct?",
    options: [
      "She has less books.",
      "She has fewer books.",
      "She has fewest books.",
      "She has lesser books."
    ],
    answerIndex: 1
  },
  {
    question: "Choose the correct word: He is senior ___ me.",
    options: ["than", "to", "from", "with"],
    answerIndex: 1
  },

  {
    question: "Choose the correct antonym of 'Expand'.",
    options: ["Increase", "Grow", "Extend", "Contract"],
    answerIndex: 3
  },
  {
    question: "Which part of speech is the word 'Quickly'?",
    options: ["Noun", "Verb", "Adjective", "Adverb"],
    answerIndex: 3
  },
  {
    question: "Choose the correct sentence (punctuation).",
    options: [
      "Lets eat, grandma.",
      "Lets eat grandma.",
      "Let's eat grandma.",
      "Let's eat, grandma."
    ],
    answerIndex: 3
  },
  {
    question: "Identify the correct reported speech: She said, 'I can do it.'",
    options: [
      "She said that she can do it.",
      "She said that she could do it.",
      "She says she could do it.",
      "She said she can do it."
    ],
    answerIndex: 1
  },
  {
    question: "Choose the correct word: He was accused ___ theft.",
    options: ["for", "with", "of", "by"],
    answerIndex: 2
  },

  {
    question: "Choose the correct synonym of 'Eloquent'.",
    options: ["Silent", "Fluent", "Weak", "Angry"],
    answerIndex: 1
  },
  {
    question: "Which sentence is in present perfect tense?",
    options: [
      "She eats food.",
      "She is eating food.",
      "She has eaten food.",
      "She ate food."
    ],
    answerIndex: 2
  },
  {
    question: "Choose the correct word: He is capable ___ doing this work.",
    options: ["for", "of", "to", "with"],
    answerIndex: 1
  },
  {
    question: "Choose the correct meaning of the idiom: 'Break the ice'.",
    options: ["To stop something", "To make people comfortable", "To end a relationship", "To start a fight"],
    answerIndex: 1
  },
  {
    question: "Choose the correct form: No sooner ___ he arrived than it started raining.",
    options: ["has", "had", "did", "was"],
    answerIndex: 1
  },

  {
    question: "Which sentence is correct?",
    options: [
      "Each of the students have a book.",
      "Each of the students has a book.",
      "Each of the student have a book.",
      "Each student have books."
    ],
    answerIndex: 1
  },
  {
    question: "Choose the correct antonym of 'Generous'.",
    options: ["Kind", "Selfish", "Helpful", "Polite"],
    answerIndex: 1
  }
], 
//  ----------------------------------------------------------------------------------------------------
"Verbal Reasoning": [
  {
    question: "Choose the word that is most nearly the SAME in meaning to 'Abundant'.",
    options: ["Scarce", "Plentiful", "Rare", "Limited"],
    answerIndex: 1
  },
  {
    question: "Choose the word that is OPPOSITE in meaning to 'Brief'.",
    options: ["Short", "Quick", "Lengthy", "Sudden"],
    answerIndex: 2
  },
  {
    question: "Book is to Reading as Fork is to ____.",
    options: ["Drawing", "Writing", "Eating", "Cooking"],
    answerIndex: 2
  },
  {
    question: "Choose the correctly spelled word.",
    options: ["Recieve", "Receive", "Receeve", "Receve"],
    answerIndex: 1
  },
  {
    question: "Complete the analogy: Teacher : School :: Doctor : ____.",
    options: ["Medicine", "Hospital", "Patient", "Nurse"],
    answerIndex: 1
  },

  {
    question: "Choose the word that best completes the sentence: He was tired ___ working all day.",
    options: ["from", "of", "by", "with"],
    answerIndex: 1
  },
  {
    question: "Find the odd one out.",
    options: ["Apple", "Banana", "Carrot", "Mango"],
    answerIndex: 2
  },
  {
    question: "Choose the word most similar in meaning to 'Reluctant'.",
    options: ["Eager", "Unwilling", "Happy", "Ready"],
    answerIndex: 1
  },
  {
    question: "Cat is to Kitten as Dog is to ____.",
    options: ["Puppy", "Calf", "Foal", "Cub"],
    answerIndex: 0
  },
  {
    question: "Choose the word opposite in meaning to 'Increase'.",
    options: ["Grow", "Expand", "Reduce", "Raise"],
    answerIndex: 2
  },

  {
    question: "Choose the word that best fits: He has a great ___ of humor.",
    options: ["scene", "sense", "sound", "sight"],
    answerIndex: 1
  },
  {
    question: "Find the odd one out.",
    options: ["Circle", "Triangle", "Square", "Cube"],
    answerIndex: 3
  },
  {
    question: "Choose the correct analogy: Pen : Write :: Knife : ____.",
    options: ["Cut", "Eat", "Sharp", "Hold"],
    answerIndex: 0
  },
  {
    question: "Choose the synonym of 'Fragile'.",
    options: ["Strong", "Delicate", "Hard", "Solid"],
    answerIndex: 1
  },
  {
    question: "Choose the antonym of 'Victory'.",
    options: ["Win", "Success", "Defeat", "Achievement"],
    answerIndex: 2
  },

  {
    question: "Complete the series: Day, Night, Day, Night, ____.",
    options: ["Evening", "Morning", "Day", "Afternoon"],
    answerIndex: 2
  },
  {
    question: "Choose the word that does NOT belong to the group.",
    options: ["Chair", "Table", "Sofa", "Bed"],
    answerIndex: 3
  },
  {
    question: "Select the best meaning of the idiom: 'Hit the nail on the head'.",
    options: ["Make a mistake", "Speak loudly", "Be exactly right", "Start a fight"],
    answerIndex: 2
  },
  {
    question: "Choose the correct pair with the same relationship: Eye : See :: Ear : ____.",
    options: ["Hear", "Sound", "Listen", "Noise"],
    answerIndex: 0
  },
  {
    question: "Choose the synonym of 'Cautious'.",
    options: ["Careless", "Alert", "Reckless", "Lazy"],
    answerIndex: 1
  },

  {
    question: "Find the odd one out.",
    options: ["Red", "Blue", "Green", "Sweet"],
    answerIndex: 3
  },
  {
    question: "Choose the word opposite in meaning to 'Accept'.",
    options: ["Receive", "Admit", "Reject", "Take"],
    answerIndex: 2
  },
  {
    question: "Complete the analogy: Bird : Fly :: Fish : ____.",
    options: ["Swim", "Jump", "Crawl", "Run"],
    answerIndex: 0
  },
  {
    question: "Choose the word that best completes the sentence: She is fond ___ music.",
    options: ["in", "of", "on", "for"],
    answerIndex: 1
  },
  {
    question: "Choose the synonym of 'Obvious'.",
    options: ["Hidden", "Clear", "Secret", "Complex"],
    answerIndex: 1
  },

  {
    question: "Find the odd one out.",
    options: ["Gold", "Silver", "Iron", "Plastic"],
    answerIndex: 3
  },
  {
    question: "Choose the antonym of 'Flexible'.",
    options: ["Soft", "Elastic", "Rigid", "Smooth"],
    answerIndex: 2
  },
  {
    question: "Complete the analogy: Fire : Hot :: Ice : ____.",
    options: ["Cool", "Cold", "Warm", "Dry"],
    answerIndex: 1
  },
  {
    question: "Choose the correct word: He succeeded ___ hard work.",
    options: ["by", "with", "through", "from"],
    answerIndex: 2
  },
  {
    question: "Choose the synonym of 'Assist'.",
    options: ["Help", "Stop", "Refuse", "Delay"],
    answerIndex: 0
  },

  {
    question: "Find the odd one out.",
    options: ["Run", "Walk", "Jump", "Think"],
    answerIndex: 3
  },
  {
    question: "Choose the antonym of 'Permanent'.",
    options: ["Lasting", "Fixed", "Temporary", "Stable"],
    answerIndex: 2
  },
  {
    question: "Complete the analogy: Lion : Pride :: Wolf : ____.",
    options: ["Pack", "Herd", "Flock", "Group"],
    answerIndex: 0
  },
  {
    question: "Choose the word most similar in meaning to 'Silent'.",
    options: ["Noisy", "Quiet", "Loud", "Harsh"],
    answerIndex: 1
  },
  {
    question: "Choose the correct meaning of the idiom: 'Burn the midnight oil'.",
    options: ["Waste time", "Work late at night", "Sleep early", "Feel tired"],
    answerIndex: 1
  },

  {
    question: "Choose the word that best completes the sentence: He apologized ___ his mistake.",
    options: ["of", "for", "to", "with"],
    answerIndex: 1
  },
  {
    question: "Find the odd one out.",
    options: ["January", "February", "Sunday", "March"],
    answerIndex: 2
  }
],
// ------------------------------------------------------------------------------------------------------
"Quantitative Reasoning": [
  {
    question: "What is 25% of 200?",
    options: ["25", "50", "75", "100"],
    answerIndex: 1
  },
  {
    question: "Simplify: 8 + 12 ÷ 4",
    options: ["5", "11", "14", "20"],
    answerIndex: 1
  },
  {
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "14"],
    answerIndex: 2
  },
  {
    question: "If x = 5, what is the value of 3x − 2?",
    options: ["10", "13", "15", "18"],
    answerIndex: 1
  },
  {
    question: "Which of the following is a prime number?",
    options: ["21", "29", "39", "51"],
    answerIndex: 1
  },

  {
    question: "Find the average of 4, 8, and 12.",
    options: ["6", "8", "10", "12"],
    answerIndex: 1
  },
  {
    question: "Convert 0.75 into a fraction.",
    options: ["1/4", "1/2", "3/4", "4/3"],
    answerIndex: 2
  },
  {
    question: "If a rectangle has length 10 and width 4, its area is:",
    options: ["14", "20", "40", "80"],
    answerIndex: 2
  },
  {
    question: "What is the value of 7² − 5²?",
    options: ["14", "24", "26", "49"],
    answerIndex: 1
  },
  {
    question: "If the ratio of boys to girls is 3:5 and there are 40 students, how many are girls?",
    options: ["15", "20", "25", "30"],
    answerIndex: 2
  },

  {
    question: "Solve: 2x + 7 = 19",
    options: ["5", "6", "7", "8"],
    answerIndex: 0
  },
  {
    question: "What is the LCM of 6 and 8?",
    options: ["12", "18", "24", "48"],
    answerIndex: 2
  },
  {
    question: "A shopkeeper buys an item for Rs. 800 and sells it for Rs. 1000. What is the profit?",
    options: ["Rs. 100", "Rs. 150", "Rs. 200", "Rs. 250"],
    answerIndex: 2
  },
  {
    question: "If a car travels 180 km in 3 hours, its speed is:",
    options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
    answerIndex: 2
  },
  {
    question: "What is the cube of 3?",
    options: ["6", "9", "27", "81"],
    answerIndex: 2
  },

  {
    question: "If 5 pens cost Rs. 50, how much do 12 pens cost?",
    options: ["Rs. 100", "Rs. 110", "Rs. 120", "Rs. 130"],
    answerIndex: 2
  },
  {
    question: "Find the value of x: 4x − 9 = 23",
    options: ["6", "7", "8", "9"],
    answerIndex: 1
  },
  {
    question: "The perimeter of a square is 32 cm. Find the length of one side.",
    options: ["6 cm", "7 cm", "8 cm", "9 cm"],
    answerIndex: 2
  },
  {
    question: "What is the probability of getting a head when a coin is tossed?",
    options: ["0", "1/4", "1/2", "1"],
    answerIndex: 2
  },
  {
    question: "Simplify: (3/4) × (8/3)",
    options: ["1", "2", "3", "4"],
    answerIndex: 1
  },

  {
    question: "If the selling price is Rs. 900 and loss is Rs. 100, what is the cost price?",
    options: ["Rs. 800", "Rs. 900", "Rs. 1000", "Rs. 1100"],
    answerIndex: 2
  },
  {
    question: "How many degrees are there in a straight angle?",
    options: ["90°", "120°", "180°", "360°"],
    answerIndex: 2
  },
  {
    question: "Find the mean of 5, 10, 15, 20.",
    options: ["10", "12.5", "15", "20"],
    answerIndex: 1
  },
  {
    question: "If y = 3x and x = 4, what is y?",
    options: ["7", "10", "12", "15"],
    answerIndex: 2
  },
  {
    question: "Which number is divisible by 9?",
    options: ["234", "342", "421", "512"],
    answerIndex: 1
  },

  {
    question: "The sum of first 10 natural numbers is:",
    options: ["45", "50", "55", "60"],
    answerIndex: 2
  },
  {
    question: "If the radius of a circle is 7 cm, what is its diameter?",
    options: ["7 cm", "10 cm", "14 cm", "21 cm"],
    answerIndex: 2
  },
  {
    question: "Solve: |−15|",
    options: ["−15", "0", "15", "30"],
    answerIndex: 2
  },
  {
    question: "What is the value of log₁₀1?",
    options: ["0", "1", "10", "Undefined"],
    answerIndex: 0
  },
  {
    question: "If 20% of a number is 40, what is the number?",
    options: ["100", "150", "200", "250"],
    answerIndex: 2
  },

  {
    question: "The slope of a horizontal line is:",
    options: ["0", "1", "Undefined", "Infinity"],
    answerIndex: 0
  },
  {
    question: "What is the next number in the sequence: 2, 6, 12, 20, ___?",
    options: ["28", "30", "32", "36"],
    answerIndex: 1
  },
  {
    question: "If the area of a square is 49 cm², what is the length of its side?",
    options: ["6 cm", "7 cm", "8 cm", "9 cm"],
    answerIndex: 1
  },
  {
    question: "How many real solutions does the equation x² = 16 have?",
    options: ["0", "1", "2", "3"],
    answerIndex: 2
  },
  {
    question: "If a train covers 300 km in 5 hours, what is its average speed?",
    options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    answerIndex: 2
  },

  {
    question: "The probability of an impossible event is:",
    options: ["0", "1/2", "1", "Undefined"],
    answerIndex: 0
  },
  {
    question: "If f(x) = 2x + 3, find f(5).",
    options: ["10", "11", "13", "15"],
    answerIndex: 2
  }
], 
// ------------------------------------------------------------------------------------------------------


// Pre-Engineering 
// --------------------------------------------------------------------------------------------------------
Mathematics: [
  {
    question: "What is the value of 7 × 8?",
    options: ["54", "56", "64", "58"],
    answerIndex: 1
  },
  {
    question: "Solve: 15 − 9 ÷ 3",
    options: ["2", "12", "6", "10"],
    answerIndex: 1
  },
  {
    question: "What is the square of 12?",
    options: ["124", "144", "132", "156"],
    answerIndex: 1
  },
  {
    question: "Which of the following is an even number?",
    options: ["13", "21", "28", "35"],
    answerIndex: 2
  },
  {
    question: "What is the value of π (approx.)?",
    options: ["3.12", "3.14", "3.41", "3.24"],
    answerIndex: 1
  },

  {
    question: "Solve: 2x = 14, find x.",
    options: ["5", "6", "7", "8"],
    answerIndex: 2
  },
  {
    question: "What is the LCM of 4 and 6?",
    options: ["8", "10", "12", "24"],
    answerIndex: 2
  },
  {
    question: "If a triangle has sides 3 cm, 4 cm, and 5 cm, it is a:",
    options: ["Isosceles triangle", "Right triangle", "Equilateral triangle", "Obtuse triangle"],
    answerIndex: 1
  },
  {
    question: "Simplify: 5² − 3²",
    options: ["4", "16", "25", "34"],
    answerIndex: 1
  },
  {
    question: "What is the value of 0.25 as a fraction?",
    options: ["1/2", "1/3", "1/4", "3/4"],
    answerIndex: 2
  },

  {
    question: "Solve: x + 7 = 20",
    options: ["11", "12", "13", "14"],
    answerIndex: 2
  },
  {
    question: "What is the area of a rectangle with length 8 and width 5?",
    options: ["13", "40", "26", "80"],
    answerIndex: 1
  },
  {
    question: "What is the next prime number after 11?",
    options: ["12", "13", "15", "17"],
    answerIndex: 1
  },
  {
    question: "Convert 3/5 into decimal.",
    options: ["0.3", "0.5", "0.6", "0.8"],
    answerIndex: 2
  },
  {
    question: "Which angle is greater than 90° but less than 180°?",
    options: ["Acute", "Right", "Obtuse", "Straight"],
    answerIndex: 2
  },

  {
    question: "Find the value of x: 3x − 5 = 16",
    options: ["5", "6", "7", "8"],
    answerIndex: 1
  },
  {
    question: "The perimeter of a square is 36 cm. Find one side.",
    options: ["6 cm", "8 cm", "9 cm", "12 cm"],
    answerIndex: 2
  },
  {
    question: "If sin θ = 1, then θ equals:",
    options: ["0°", "30°", "60°", "90°"],
    answerIndex: 3
  },
  {
    question: "What is the HCF of 18 and 24?",
    options: ["6", "12", "18", "24"],
    answerIndex: 0
  },
  {
    question: "Simplify: (2³ × 2²)",
    options: ["8", "16", "32", "64"],
    answerIndex: 2
  },

  {
    question: "If the radius of a circle is 7 cm, find its diameter.",
    options: ["7 cm", "10 cm", "14 cm", "21 cm"],
    answerIndex: 2
  },
  {
    question: "Which of the following is a quadratic equation?",
    options: ["x + 2 = 0", "x² + 3x + 2 = 0", "2x − 1 = 0", "x³ − 1 = 0"],
    answerIndex: 1
  },
  {
    question: "The sum of angles of a triangle is:",
    options: ["90°", "180°", "270°", "360°"],
    answerIndex: 1
  },
  {
    question: "Find the mean of 2, 4, 6, 8.",
    options: ["4", "5", "6", "8"],
    answerIndex: 1
  },
  {
    question: "What is the value of log₁₀1?",
    options: ["0", "1", "10", "Undefined"],
    answerIndex: 0
  },

  {
    question: "If x:y = 3:4 and y = 16, find x.",
    options: ["8", "10", "12", "14"],
    answerIndex: 2
  },
  {
    question: "What is the distance between points (0,0) and (3,4)?",
    options: ["5", "6", "7", "4"],
    answerIndex: 0
  },
  {
    question: "Solve: |−9|",
    options: ["−9", "0", "9", "18"],
    answerIndex: 2
  },
  {
    question: "Which number is a multiple of both 3 and 5?",
    options: ["10", "12", "15", "18"],
    answerIndex: 2
  },
  {
    question: "If a = 2 and b = 3, find a² + b².",
    options: ["9", "10", "11", "13"],
    answerIndex: 3
  },

  {
    question: "The slope of a horizontal line is:",
    options: ["0", "1", "Undefined", "∞"],
    answerIndex: 0
  },
  {
    question: "What is the value of (−2)³?",
    options: ["−6", "−8", "8", "6"],
    answerIndex: 1
  },
  {
    question: "If P = 1000, R = 10%, T = 2 years, find simple interest.",
    options: ["100", "200", "300", "400"],
    answerIndex: 1
  },
  {
    question: "Which of the following represents a straight line?",
    options: ["x² + y² = 1", "y = mx + c", "xy = 1", "x³ = y"],
    answerIndex: 1
  },
  {
    question: "The probability of a sure event is:",
    options: ["0", "1/2", "1", "Undefined"],
    answerIndex: 2
  },

  {
    question: "How many real solutions does x² = 9 have?",
    options: ["0", "1", "2", "3"],
    answerIndex: 2
  },
  {
    question: "Which trigonometric ratio is equal to opposite/hypotenuse?",
    options: ["cos θ", "tan θ", "sin θ", "sec θ"],
    answerIndex: 2
  },
  {
    question: "If f(x) = x + 2, find f(3).",
    options: ["3", "4", "5", "6"],
    answerIndex: 3
  }
], 
// -------------------------------------------------------------------------------------------------
"Physics (Eng)": [
  {
    question: "What is the SI unit of force?",
    options: ["Dyne", "Newton", "Joule", "Watt"],
    answerIndex: 1
  },
  {
    question: "Which of the following is a vector quantity?",
    options: ["Speed", "Distance", "Time", "Velocity"],
    answerIndex: 3
  },
  {
    question: "What is the acceleration due to gravity on Earth?",
    options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11.8 m/s²"],
    answerIndex: 1
  },
  {
    question: "Which law states that for every action there is an equal and opposite reaction?",
    options: ["Newton’s First Law", "Newton’s Second Law", "Newton’s Third Law", "Law of Gravitation"],
    answerIndex: 2
  },
  {
    question: "The unit of work is:",
    options: ["Newton", "Watt", "Joule", "Pascal"],
    answerIndex: 2
  },

  {
    question: "What is the formula of kinetic energy?",
    options: ["mv", "mgh", "½mv²", "mgv"],
    answerIndex: 2
  },
  {
    question: "Which instrument is used to measure electric current?",
    options: ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"],
    answerIndex: 1
  },
  {
    question: "What is the SI unit of power?",
    options: ["Joule", "Newton", "Watt", "Ampere"],
    answerIndex: 2
  },
  {
    question: "The rate of change of velocity is called:",
    options: ["Speed", "Displacement", "Acceleration", "Momentum"],
    answerIndex: 2
  },
  {
    question: "Which physical quantity is measured in Pascal?",
    options: ["Force", "Pressure", "Energy", "Power"],
    answerIndex: 1
  },

  {
    question: "Ohm’s law is represented by:",
    options: ["V = IR", "P = IV", "F = ma", "E = mc²"],
    answerIndex: 0
  },
  {
    question: "The momentum of a body is equal to:",
    options: ["mv", "ma", "m/v", "v/m"],
    answerIndex: 0
  },
  {
    question: "Which type of lens is used to correct myopia?",
    options: ["Convex lens", "Concave lens", "Cylindrical lens", "Plano lens"],
    answerIndex: 1
  },
  {
    question: "The unit of electric charge is:",
    options: ["Ampere", "Volt", "Coulomb", "Ohm"],
    answerIndex: 2
  },
  {
    question: "What is the dimensional formula of force?",
    options: ["MLT⁻²", "ML²T⁻²", "ML⁻¹T⁻²", "M²LT⁻¹"],
    answerIndex: 0
  },

  {
    question: "A body is said to be in equilibrium if:",
    options: ["Net force is zero", "Velocity is zero", "Acceleration is maximum", "Momentum is constant"],
    answerIndex: 0
  },
  {
    question: "Which wave does not require a medium to travel?",
    options: ["Sound wave", "Water wave", "Electromagnetic wave", "Seismic wave"],
    answerIndex: 2
  },
  {
    question: "What happens to resistance when temperature of a conductor increases?",
    options: ["Decreases", "Remains same", "Increases", "Becomes zero"],
    answerIndex: 2
  },
  {
    question: "The unit of frequency is:",
    options: ["Second", "Hertz", "Watt", "Joule"],
    answerIndex: 1
  },
  {
    question: "The area under velocity-time graph represents:",
    options: ["Acceleration", "Displacement", "Speed", "Force"],
    answerIndex: 1
  },

  {
    question: "The escape velocity from Earth depends on:",
    options: ["Mass of object", "Shape of object", "Mass and radius of Earth", "Time of flight"],
    answerIndex: 2
  },
  {
    question: "Which quantity remains conserved in elastic collision?",
    options: ["Momentum only", "Energy only", "Both momentum and kinetic energy", "Force"],
    answerIndex: 2
  },
  {
    question: "What is the value of g on the Moon compared to Earth?",
    options: ["Same", "Double", "One-sixth", "Half"],
    answerIndex: 2
  },
  {
    question: "Which circuit element stores electric charge?",
    options: ["Resistor", "Inductor", "Capacitor", "Diode"],
    answerIndex: 2
  },
  {
    question: "The focal length of a plane mirror is:",
    options: ["Zero", "Equal to radius", "Infinity", "Half of radius"],
    answerIndex: 2
  },

  {
    question: "What is the SI unit of magnetic flux?",
    options: ["Tesla", "Weber", "Henry", "Gauss"],
    answerIndex: 1
  },
  {
    question: "The slope of distance-time graph gives:",
    options: ["Acceleration", "Velocity", "Force", "Momentum"],
    answerIndex: 1
  },
  {
    question: "Which law explains the working of transformers?",
    options: ["Ohm’s law", "Faraday’s law", "Newton’s law", "Coulomb’s law"],
    answerIndex: 1
  },
  {
    question: "The time period of a pendulum depends on:",
    options: ["Mass of bob", "Length of string", "Amplitude", "Material of bob"],
    answerIndex: 1
  },
  {
    question: "Which quantity is a scalar?",
    options: ["Velocity", "Acceleration", "Force", "Energy"],
    answerIndex: 3
  },

  {
    question: "What is the unit of electric potential difference?",
    options: ["Ampere", "Ohm", "Volt", "Watt"],
    answerIndex: 2
  },
  {
    question: "The product of force and displacement is:",
    options: ["Power", "Energy", "Momentum", "Pressure"],
    answerIndex: 1
  },
  {
    question: "Which device converts mechanical energy into electrical energy?",
    options: ["Motor", "Generator", "Transformer", "Battery"],
    answerIndex: 1
  },
  {
    question: "What type of mirror is used in vehicles as rear-view mirror?",
    options: ["Plane mirror", "Convex mirror", "Concave mirror", "Parabolic mirror"],
    answerIndex: 1
  },
  {
    question: "The SI unit of mass density is:",
    options: ["kg/m³", "g/cm³", "kg/m²", "N/m³"],
    answerIndex: 0
  },

  {
    question: "Which physical quantity has unit Tesla?",
    options: ["Electric field", "Magnetic field", "Electric flux", "Magnetic flux"],
    answerIndex: 1
  },
  {
    question: "What happens to the pressure of a gas when volume decreases at constant temperature?",
    options: ["Decreases", "Increases", "Remains same", "Becomes zero"],
    answerIndex: 1
  }
],
// ------------------------------------------------------------------------------------------------- 
"Chemistry (Eng)": [
  {
    question: "Which of the following is a noble gas?",
    options: ["Oxygen", "Nitrogen", "Argon", "Chlorine"],
    answerIndex: 2
  },
  {
    question: "Avogadro’s number is approximately:",
    options: ["6.02 × 10²¹", "6.02 × 10²²", "6.02 × 10²³", "6.02 × 10²⁴"],
    answerIndex: 2
  },
  {
    question: "The pH of a neutral solution at 25°C is:",
    options: ["6", "7", "8", "9"],
    answerIndex: 1
  },
  {
    question: "Which of the following is an ionic compound?",
    options: ["H₂O", "NaCl", "CO₂", "CH₄"],
    answerIndex: 1
  },
  {
    question: "Which acid is present in vinegar?",
    options: ["Acetic acid", "Citric acid", "Lactic acid", "Sulfuric acid"],
    answerIndex: 0
  },

  {
    question: "The gas used in the Haber process is:",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answerIndex: 1
  },
  {
    question: "Which element has the highest electronegativity?",
    options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
    answerIndex: 1
  },
  {
    question: "The chemical formula of calcium carbonate is:",
    options: ["CaCO₃", "CaO", "CaCl₂", "CaSO₄"],
    answerIndex: 0
  },
  {
    question: "Which of the following is used as a catalyst in the hydrogenation of vegetable oils?",
    options: ["Nickel", "Copper", "Iron", "Zinc"],
    answerIndex: 0
  },
  {
    question: "Which is a polar molecule?",
    options: ["CO₂", "CH₄", "H₂O", "O₂"],
    answerIndex: 2
  },

  {
    question: "Which element is used in the manufacture of semiconductors?",
    options: ["Silicon", "Aluminum", "Iron", "Copper"],
    answerIndex: 0
  },
  {
    question: "The molar mass of H₂SO₄ is:",
    options: ["98 g/mol", "100 g/mol", "96 g/mol", "92 g/mol"],
    answerIndex: 0
  },
  {
    question: "Which compound is commonly known as baking soda?",
    options: ["NaCl", "NaHCO₃", "CaCO₃", "KOH"],
    answerIndex: 1
  },
  {
    question: "Which of the following is amphoteric in nature?",
    options: ["NaOH", "HCl", "Al₂O₃", "CO₂"],
    answerIndex: 2
  },
  {
    question: "The reaction 2H₂ + O₂ → 2H₂O is an example of:",
    options: ["Decomposition", "Combination", "Displacement", "Double displacement"],
    answerIndex: 1
  },

  {
    question: "Which type of bond is present in Cl₂?",
    options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
    answerIndex: 1
  },
  {
    question: "Which element is most reactive in the halogen group?",
    options: ["Fluorine", "Chlorine", "Bromine", "Iodine"],
    answerIndex: 0
  },
  {
    question: "Which of the following is an endothermic process?",
    options: ["Freezing of water", "Condensation", "Melting of ice", "Combustion of gas"],
    answerIndex: 2
  },
  {
    question: "Which is the main component of natural gas?",
    options: ["Methane", "Ethane", "Propane", "Butane"],
    answerIndex: 0
  },
  {
    question: "Which element has the symbol Fe?",
    options: ["Fluorine", "Iron", "Fermium", "Francium"],
    answerIndex: 1
  },

  {
    question: "The unit of molar concentration is:",
    options: ["g/L", "mol/L", "mol/kg", "kg/L"],
    answerIndex: 1
  },
  {
    question: "Which of the following is an oxidizing agent?",
    options: ["H₂O₂", "Na", "Ca", "Mg"],
    answerIndex: 0
  },
  {
    question: "The process of converting a solid directly into gas is called:",
    options: ["Evaporation", "Sublimation", "Condensation", "Deposition"],
    answerIndex: 1
  },
  {
    question: "Which element is used in making nuclear reactors?",
    options: ["Uranium", "Lead", "Copper", "Aluminum"],
    answerIndex: 0
  },
  {
    question: "Which type of reaction is represented by AB → A + B?",
    options: ["Combination", "Decomposition", "Displacement", "Redox"],
    answerIndex: 1
  },

  {
    question: "Which gas is commonly known as laughing gas?",
    options: ["CO₂", "N₂O", "SO₂", "NO₂"],
    answerIndex: 1
  },
  {
    question: "Which element is essential for the formation of ozone?",
    options: ["Oxygen", "Nitrogen", "Hydrogen", "Helium"],
    answerIndex: 0
  },
  {
    question: "Which of the following is an example of a strong acid?",
    options: ["HCl", "CH₃COOH", "HF", "H₂CO₃"],
    answerIndex: 0
  },
  {
    question: "Which type of intermolecular force exists in HCl?",
    options: ["Hydrogen bond", "Van der Waals", "Dipole-dipole", "Ionic bond"],
    answerIndex: 2
  },
  {
    question: "Which metal is liquid at room temperature?",
    options: ["Mercury", "Sodium", "Iron", "Aluminum"],
    answerIndex: 0
  },

  {
    question: "Which is used as a drying agent?",
    options: ["Water", "Silica gel", "Ethanol", "Acetone"],
    answerIndex: 1
  },
  {
    question: "Which compound is used in photography?",
    options: ["AgBr", "NaCl", "CaCO₃", "KNO₃"],
    answerIndex: 0
  },
  {
    question: "Which is the main ore of aluminum?",
    options: ["Bauxite", "Hematite", "Galena", "Magnetite"],
    answerIndex: 0
  },
  {
    question: "Which compound is used as an antacid?",
    options: ["NaOH", "CaCO₃", "HCl", "H₂SO₄"],
    answerIndex: 1
  },
  {
    question: "Which gas is released when acids react with metals?",
    options: ["O₂", "H₂", "CO₂", "N₂"],
    answerIndex: 1
  },

  {
    question: "Which element is used as a standard for measuring atomic masses?",
    options: ["Carbon-12", "Oxygen-16", "Hydrogen-1", "Nitrogen-14"],
    answerIndex: 0
  },
  {
    question: "Which element is most abundant in the Earth's crust?",
    options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
    answerIndex: 0
  }
], 
// ---------------------------------------------------------------------------------------------------
"English (Eng)": [
  {
    question: "Choose the correct synonym of 'Innovative'.",
    options: ["Creative", "Ordinary", "Simple", "Lazy"],
    answerIndex: 0
  },
  {
    question: "Choose the antonym of 'Precise'.",
    options: ["Exact", "Accurate", "Vague", "Correct"],
    answerIndex: 2
  },
  {
    question: "Select the correctly punctuated sentence.",
    options: [
      "Engineers need precision, skill and patience.",
      "Engineers need precision skill, and patience.",
      "Engineers need precision, skill, and patience.",
      "Engineers need precision skill and patience."
    ],
    answerIndex: 2
  },
  {
    question: "Fill in the blank: The engineer is responsible ___ designing the bridge.",
    options: ["for", "to", "at", "with"],
    answerIndex: 0
  },
  {
    question: "Choose the correct meaning of the idiom: 'Cut corners'.",
    options: ["Do something quickly or cheaply", "Follow all rules", "Increase cost", "Work carefully"],
    answerIndex: 0
  },

  {
    question: "Which of the following sentences is in passive voice?",
    options: [
      "The engineer solved the problem.",
      "The problem was solved by the engineer.",
      "The engineer is solving the problem.",
      "The engineer will solve the problem."
    ],
    answerIndex: 1
  },
  {
    question: "Choose the correct form: Neither the manager nor the engineers ___ available.",
    options: ["is", "are", "was", "be"],
    answerIndex: 1
  },
  {
    question: "Select the correctly spelled word:",
    options: ["Accomodate", "Acommodate", "Accommodate", "Acomadate"],
    answerIndex: 2
  },
  {
    question: "Choose the synonym of 'Feasible'.",
    options: ["Impossible", "Practical", "Unlikely", "Dangerous"],
    answerIndex: 1
  },
  {
    question: "Choose the antonym of 'Complex'.",
    options: ["Complicated", "Difficult", "Simple", "Advanced"],
    answerIndex: 2
  },

  {
    question: "Choose the word that best fits: Engineers should work ___ deadlines.",
    options: ["under", "on", "in", "at"],
    answerIndex: 0
  },
  {
    question: "Identify the part of speech of the word 'Efficient' in: 'She is an efficient engineer.'",
    options: ["Noun", "Verb", "Adjective", "Adverb"],
    answerIndex: 2
  },
  {
    question: "Choose the correct comparative form: This design is ___ than the previous one.",
    options: ["efficient", "more efficient", "most efficient", "efficiency"],
    answerIndex: 1
  },
  {
    question: "Fill in the blank: If the prototype ___ successful, the project will continue.",
    options: ["is", "was", "will be", "been"],
    answerIndex: 0
  },
  {
    question: "Choose the synonym of 'Analyze'.",
    options: ["Examine", "Ignore", "Simplify", "Forget"],
    answerIndex: 0
  },

  {
    question: "Choose the correct sentence:",
    options: [
      "The team of engineers are working efficiently.",
      "The team of engineers is working efficiently.",
      "The team of engineer are working efficiently.",
      "The team of engineers working efficiently."
    ],
    answerIndex: 1
  },
  {
    question: "Choose the correct word: He is capable ___ handling complex tasks.",
    options: ["for", "of", "to", "with"],
    answerIndex: 1
  },
  {
    question: "Choose the antonym of 'Durable'.",
    options: ["Strong", "Weak", "Sturdy", "Resilient"],
    answerIndex: 1
  },
  {
    question: "Select the correctly punctuated sentence:",
    options: [
      "Safety is important; engineers must follow rules.",
      "Safety is important engineers must follow rules.",
      "Safety is important, engineers must follow rules",
      "Safety is important engineers; must follow rules."
    ],
    answerIndex: 0
  },
  {
    question: "Choose the correct meaning of the idiom: 'Think outside the box'.",
    options: [
      "Follow instructions literally",
      "Be creative and innovative",
      "Ignore problems",
      "Work in a group"
    ],
    answerIndex: 1
  },

  {
    question: "Choose the correct form of the verb: The engineers ___ the system thoroughly before launch.",
    options: ["test", "tests", "tested", "testing"],
    answerIndex: 2
  },
  {
    question: "Choose the synonym of 'Optimize'.",
    options: ["Improve", "Worsen", "Reduce", "Ignore"],
    answerIndex: 0
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "The specifications of the machine are precise and accurate.",
      "The specifications of the machine is precise and accurate.",
      "The specifications of the machine were precise and accurately.",
      "The specifications of the machine was precise and accurately."
    ],
    answerIndex: 0
  },
  {
    question: "Choose the word that best fits: Engineers must work ___ collaboration.",
    options: ["in", "on", "at", "with"],
    answerIndex: 0
  },
  {
    question: "Select the correctly spelled word:",
    options: ["Maintenance", "Maintanance", "Maintnance", "Maintenence"],
    answerIndex: 0
  },

  {
    question: "Choose the synonym of 'Accurate'.",
    options: ["Exact", "Wrong", "Approximate", "Incorrect"],
    answerIndex: 0
  },
  {
    question: "Choose the correct word: He was promoted due ___ his excellent performance.",
    options: ["for", "to", "of", "with"],
    answerIndex: 0
  },
  {
    question: "Choose the antonym of 'Reliable'.",
    options: ["Trustworthy", "Uncertain", "Dependable", "Safe"],
    answerIndex: 1
  },
  {
    question: "Choose the correct meaning of the idiom: 'By the book'.",
    options: ["Randomly", "Exactly according to rules", "Carelessly", "Quickly"],
    answerIndex: 1
  },
  {
    question: "Choose the correct word: The engineers decided to ___ the design for better performance.",
    options: ["revise", "reduce", "reject", "retain"],
    answerIndex: 0
  },

  {
    question: "Choose the correct comparative: This software is ___ than the previous version.",
    options: ["efficient", "more efficient", "most efficient", "efficiently"],
    answerIndex: 1
  },
  {
    question: "Select the correctly punctuated sentence:",
    options: [
      "Research, development, and testing are important in engineering.",
      "Research development and testing are important in engineering.",
      "Research development, and testing are important in engineering.",
      "Research, development and, testing are important in engineering."
    ],
    answerIndex: 0
  },
  {
    question: "Choose the correct form: Had he ___ the issue earlier, the problem could have been avoided.",
    options: ["noticed", "notices", "notice", "noticing"],
    answerIndex: 0
  },
  {
    question: "Choose the synonym of 'Implement'.",
    options: ["Execute", "Delay", "Forget", "Neglect"],
    answerIndex: 0
  },
  {
    question: "Choose the correct word: The design must meet all safety ___.",
    options: ["standard", "standards", "standart", "standards'"],
    answerIndex: 1
  },
  {
    question: "Choose the correct word: The project manager emphasized the importance of ___ work.",
    options: ["team", "teams", "teaming", "teamwork"],
    answerIndex: 3
  },
  {
    question: "Choose the antonym of 'Innovative'.",
    options: ["Creative", "Original", "Conventional", "Advanced"],
    answerIndex: 2
  },
  {
    question: "Choose the correct meaning of idiom: 'Ahead of schedule'.",
    options: ["Late", "On time", "Early", "Delayed"],
    answerIndex: 2
  },
  {
    question: "Select the correctly spelled word:",
    options: ["Technician", "Technision", "Technicien", "Technisian"],
    answerIndex: 0
  }
]
, 
// ---------------------------------------------------------------------------------------------------
"Verbal Reasoning (Eng)": [
  {
    question: "Choose the word that is most similar to 'Analytical'.",
    options: ["Logical", "Confused", "Creative", "Emotional"],
    answerIndex: 0
  },
  {
    question: "Choose the antonym of 'Complex'.",
    options: ["Difficult", "Complicated", "Simple", "Intricate"],
    answerIndex: 2
  },
  {
    question: "Find the odd one out: Circuit, Resistor, Capacitor, Table",
    options: ["Circuit", "Resistor", "Capacitor", "Table"],
    answerIndex: 3
  },
  {
    question: "Select the correct analogy: Engineer : Design :: Doctor : ?",
    options: ["Treat", "Operate", "Research", "Prescribe"],
    answerIndex: 0
  },
  {
    question: "Choose the best meaning of 'Feasible'.",
    options: ["Impossible", "Practical", "Dangerous", "Unlikely"],
    answerIndex: 1
  },

  {
    question: "Choose the antonym of 'Accurate'.",
    options: ["Exact", "Correct", "Wrong", "Precise"],
    answerIndex: 2
  },
  {
    question: "Find the word that does not belong: Voltage, Current, Resistance, Gravity",
    options: ["Voltage", "Current", "Resistance", "Gravity"],
    answerIndex: 3
  },
  {
    question: "Select the analogy: Screw : Thread :: Bolt : ?",
    options: ["Nut", "Hammer", "Wrench", "Nail"],
    answerIndex: 0
  },
  {
    question: "Choose the word that best fits: Engineers must work ___ deadlines.",
    options: ["under", "at", "on", "with"],
    answerIndex: 0
  },
  {
    question: "Choose the word most opposite in meaning to 'Conventional'.",
    options: ["Traditional", "Unusual", "Customary", "Standard"],
    answerIndex: 1
  },

  {
    question: "Find the odd one out: Atom, Molecule, Ion, Electron, Car",
    options: ["Atom", "Molecule", "Ion", "Electron", "Car"],
    answerIndex: 4
  },
  {
    question: "Select the analogy: Kilogram : Mass :: Ampere : ?",
    options: ["Current", "Voltage", "Power", "Energy"],
    answerIndex: 0
  },
  {
    question: "Choose the correct synonym of 'Precise'.",
    options: ["Accurate", "Approximate", "Vague", "Erratic"],
    answerIndex: 0
  },
  {
    question: "Find the word that does not belong: Fuse, Switch, Motor, Resistor",
    options: ["Fuse", "Switch", "Motor", "Resistor"],
    answerIndex: 2
  },
  {
    question: "Select the analogy: Solar : Sun :: Lunar : ?",
    options: ["Moon", "Earth", "Star", "Planet"],
    answerIndex: 0
  },

  {
    question: "Choose the antonym of 'Efficient'.",
    options: ["Productive", "Ineffective", "Competent", "Capable"],
    answerIndex: 1
  },
  {
    question: "Find the odd one out: Tension, Compression, Shear, Density",
    options: ["Tension", "Compression", "Shear", "Density"],
    answerIndex: 3
  },
  {
    question: "Select the analogy: Conductor : Electricity :: Pipe : ?",
    options: ["Water", "Air", "Gas", "Heat"],
    answerIndex: 0
  },
  {
    question: "Choose the word most opposite in meaning to 'Transparent'.",
    options: ["Clear", "Opaque", "Translucent", "Thin"],
    answerIndex: 1
  },
  {
    question: "Find the odd one out: Voltage, Ohm, Watt, Newton",
    options: ["Voltage", "Ohm", "Watt", "Newton"],
    answerIndex: 3
  },

  {
    question: "Select the correct analogy: Bridge : Connect :: Dam : ?",
    options: ["Store", "Stop", "Release", "Divide"],
    answerIndex: 0
  },
  {
    question: "Choose the synonym of 'Innovative'.",
    options: ["Creative", "Ordinary", "Simple", "Lazy"],
    answerIndex: 0
  },
  {
    question: "Find the word that does not belong: Iron, Steel, Copper, Photon",
    options: ["Iron", "Steel", "Copper", "Photon"],
    answerIndex: 3
  },
  {
    question: "Select the analogy: Engineer : Blueprint :: Architect : ?",
    options: ["Design", "Hammer", "Concrete", "Plan"],
    answerIndex: 3
  },
  {
    question: "Choose the antonym of 'Rigid'.",
    options: ["Flexible", "Strong", "Hard", "Solid"],
    answerIndex: 0
  },

  {
    question: "Find the odd one out: Algorithm, Program, Code, Brick",
    options: ["Algorithm", "Program", "Code", "Brick"],
    answerIndex: 3
  },
  {
    question: "Select the correct analogy: Centimeter : Length :: Celsius : ?",
    options: ["Temperature", "Volume", "Time", "Mass"],
    answerIndex: 0
  },
  {
    question: "Choose the word that best fits: Engineers solve problems ___ logic.",
    options: ["with", "at", "on", "in"],
    answerIndex: 0
  },
  {
    question: "Choose the synonym of 'Optimize'.",
    options: ["Improve", "Worsen", "Reduce", "Ignore"],
    answerIndex: 0
  },
  {
    question: "Find the odd one out: Voltage, Current, Power, Happiness",
    options: ["Voltage", "Current", "Power", "Happiness"],
    answerIndex: 3
  },

  {
    question: "Select the analogy: Energy : Work :: Force : ?",
    options: ["Acceleration", "Mass", "Momentum", "Displacement"],
    answerIndex: 3
  },
  {
    question: "Choose the antonym of 'Practical'.",
    options: ["Useful", "Theoretical", "Applicable", "Functional"],
    answerIndex: 1
  },
  {
    question: "Find the odd one out: Resistor, Capacitor, Inductor, Programmer",
    options: ["Resistor", "Capacitor", "Inductor", "Programmer"],
    answerIndex: 3
  },
  {
    question: "Select the correct analogy: Pilot : Plane :: Captain : ?",
    options: ["Ship", "Army", "Train", "Bus"],
    answerIndex: 0
  },
  {
    question: "Choose the word most opposite in meaning to 'Explicit'.",
    options: ["Clear", "Vague", "Obvious", "Precise"],
    answerIndex: 1
  },

  {
    question: "Choose the correct synonym of 'Integrate'.",
    options: ["Combine", "Separate", "Divide", "Remove"],
    answerIndex: 0
  },
  {
    question: "Find the odd one out: Circuit, Voltage, Resistance, Dog",
    options: ["Circuit", "Voltage", "Resistance", "Dog"],
    answerIndex: 3
  },
  {
    question: "Select the analogy: Engineer : Problem Solving :: Doctor : ?",
    options: ["Treatment", "Diagnosis", "Prescription", "Surgery"],
    answerIndex: 1
  },
  {
    question: "Choose the antonym of 'Reliable'.",
    options: ["Trustworthy", "Uncertain", "Dependable", "Safe"],
    answerIndex: 1
  }
],
// ------------------------------------------------------------------------------------------------------
"Quantitative Reasoning (Eng)": [
  {
    question: "If x + 5 = 12, what is the value of x?",
    options: ["5", "7", "12", "17"],
    answerIndex: 1
  },
  {
    question: "Simplify: 3 × (4 + 5) – 6",
    options: ["21", "27", "15", "33"],
    answerIndex: 0
  },
  {
    question: "If a = 2 and b = 3, find the value of 2a + 3b.",
    options: ["13", "12", "11", "10"],
    answerIndex: 0
  },
  {
    question: "Solve for y: 2y – 7 = 9",
    options: ["6", "7", "8", "9"],
    answerIndex: 2
  },
  {
    question: "A train travels 120 km in 2 hours. What is its speed?",
    options: ["60 km/h", "50 km/h", "70 km/h", "80 km/h"],
    answerIndex: 0
  },

  {
    question: "If the area of a square is 49 cm², find its side length.",
    options: ["7 cm", "14 cm", "49 cm", "21 cm"],
    answerIndex: 0
  },
  {
    question: "What is 25% of 200?",
    options: ["25", "50", "100", "75"],
    answerIndex: 1
  },
  {
    question: "If 3x = 12, then x = ?",
    options: ["2", "3", "4", "6"],
    answerIndex: 2
  },
  {
    question: "A rectangle has length 10 cm and width 5 cm. Its area is:",
    options: ["50 cm²", "15 cm²", "25 cm²", "30 cm²"],
    answerIndex: 0
  },
  {
    question: "The sum of angles in a triangle is:",
    options: ["180°", "90°", "360°", "270°"],
    answerIndex: 0
  },

  {
    question: "If 5x – 10 = 15, find x.",
    options: ["4", "5", "6", "7"],
    answerIndex: 2
  },
  {
    question: "Simplify: 2² × 3³",
    options: ["54", "36", "72", "48"],
    answerIndex: 0
  },
  {
    question: "If a = 5, b = 2, find the value of a² + b²",
    options: ["25", "29", "27", "24"],
    answerIndex: 1
  },
  {
    question: "A car covers 180 km in 3 hours. Its average speed is:",
    options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    answerIndex: 2
  },
  {
    question: "The perimeter of a square with side 6 cm is:",
    options: ["24 cm", "36 cm", "12 cm", "18 cm"],
    answerIndex: 0
  },

  {
    question: "If 4x + 3 = 19, find x.",
    options: ["3", "4", "5", "6"],
    answerIndex: 2
  },
  {
    question: "Simplify: (5 × 3)²",
    options: ["225", "64", "40", "75"],
    answerIndex: 0
  },
  {
    question: "The HCF of 12 and 18 is:",
    options: ["6", "3", "12", "18"],
    answerIndex: 0
  },
  {
    question: "The LCM of 4 and 5 is:",
    options: ["20", "10", "15", "25"],
    answerIndex: 0
  },
  {
    question: "If a:b = 3:4, and a + b = 28, find a.",
    options: ["12", "16", "10", "14"],
    answerIndex: 0
  },

  {
    question: "Solve for x: x/5 = 7",
    options: ["30", "35", "25", "40"],
    answerIndex: 1
  },
  {
    question: "The area of a circle with radius 7 cm is (π = 22/7):",
    options: ["154 cm²", "49 cm²", "44 cm²", "100 cm²"],
    answerIndex: 0
  },
  {
    question: "If x² = 49, then x = ?",
    options: ["7", "-7", "Both 7 and -7", "None"],
    answerIndex: 2
  },
  {
    question: "A man spends 1/3 of his salary on rent and 1/4 on food. Fraction left?",
    options: ["5/12", "7/12", "2/3", "1/2"],
    answerIndex: 1
  },
  {
    question: "Simplify: 15 ÷ (3 × 5) + 2",
    options: ["3", "5", "4", "2"],
    answerIndex: 2
  },

  {
    question: "If 7x – 3 = 25, find x.",
    options: ["4", "5", "6", "7"],
    answerIndex: 2
  },
  {
    question: "The sum of first 10 natural numbers is:",
    options: ["55", "45", "50", "60"],
    answerIndex: 0
  },
  {
    question: "The product of 0.5 × 0.2 is:",
    options: ["0.1", "0.01", "0.2", "0.5"],
    answerIndex: 0
  },
  {
    question: "If 5 pens cost $10, cost of 8 pens is:",
    options: ["$16", "$15", "$18", "$20"],
    answerIndex: 0
  },
  {
    question: "Solve for x: 3(x – 2) = 9",
    options: ["3", "5", "6", "7"],
    answerIndex: 0
  },

  {
    question: "If the ratio of boys to girls is 3:5 and total 64 students, number of boys?",
    options: ["24", "36", "28", "40"],
    answerIndex: 0
  },
  {
    question: "If 20% of x = 40, find x.",
    options: ["160", "200", "180", "150"],
    answerIndex: 1
  },
  {
    question: "Simplify: (2³ × 2⁴)",
    options: ["128", "16", "32", "64"],
    answerIndex: 3
  },
  {
    question: "A tank can fill 120 liters in 3 minutes. Rate of filling per minute?",
    options: ["30 L/min", "40 L/min", "25 L/min", "35 L/min"],
    answerIndex: 0
  },
  {
    question: "The volume of a cube with side 5 cm is:",
    options: ["125 cm³", "25 cm³", "100 cm³", "150 cm³"],
    answerIndex: 0
  },

  {
    question: "The simple interest on $1000 at 5% per year for 2 years is:",
    options: ["$100", "$110", "$120", "$150"],
    answerIndex: 2
  },
  {
    question: "Solve: √81 × √16",
    options: ["36", "40", "32", "48"],
    answerIndex: 0
  }
], 

// --------------------------------------------------------------------------------------------------------
// Computer Science 
// --------------------------------------------------------------------------------------------------------
"Computer Science": [
  {
    question: "Which of the following is a high-level programming language?",
    options: ["Assembly", "C", "Machine code", "Binary"],
    answerIndex: 1
  },
  {
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Central Programming Unit", "Control Processing Unit", "Computer Processing Unit"],
    answerIndex: 0
  },
  {
    question: "Which data structure uses LIFO principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answerIndex: 1
  },
  {
    question: "What is the binary equivalent of decimal 10?",
    options: ["1010", "1100", "1001", "1110"],
    answerIndex: 0
  },
  {
    question: "Which of the following is an operating system?",
    options: ["Linux", "Python", "HTML", "Java"],
    answerIndex: 0
  },

  {
    question: "Which of the following is used to define a web page structure?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answerIndex: 0
  },
  {
    question: "Which logic gate outputs 1 only if both inputs are 1?",
    options: ["OR", "AND", "NOT", "XOR"],
    answerIndex: 1
  },
  {
    question: "Which of the following is a loop structure in programming?",
    options: ["if", "for", "switch", "case"],
    answerIndex: 1
  },
  {
    question: "What does RAM stand for?",
    options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Rapid Access Memory"],
    answerIndex: 0
  },
  {
    question: "Which of the following is non-volatile memory?",
    options: ["RAM", "ROM", "Cache", "Registers"],
    answerIndex: 1
  },

  {
    question: "Which of the following sorting algorithms has the best average-case time complexity?",
    options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
    answerIndex: 2
  },
  {
    question: "Which of the following is a relational database?",
    options: ["MySQL", "MongoDB", "Redis", "Cassandra"],
    answerIndex: 0
  },
  {
    question: "Which of the following is NOT a programming paradigm?",
    options: ["Object-Oriented", "Functional", "Procedural", "Linear Algebra"],
    answerIndex: 3
  },
  {
    question: "Which of the following is used for version control?",
    options: ["Git", "Docker", "Jenkins", "Kubernetes"],
    answerIndex: 0
  },
  {
    question: "What is the main function of DNS?",
    options: ["Translate domain names to IP addresses", "Store website data", "Encrypt network traffic", "Provide email services"],
    answerIndex: 0
  },

  {
    question: "Which is the smallest unit of data in a computer?",
    options: ["Byte", "Bit", "Nibble", "Word"],
    answerIndex: 1
  },
  {
    question: "Which of the following is used for parallel computing?",
    options: ["CPU", "GPU", "RAM", "ROM"],
    answerIndex: 1
  },
  {
    question: "Which of the following represents true logic in binary?",
    options: ["0", "1", "-1", "2"],
    answerIndex: 1
  },
  {
    question: "Which of the following is a dynamically typed programming language?",
    options: ["C", "C++", "Python", "Java"],
    answerIndex: 2
  },
  {
    question: "Which of the following is a NoSQL database?",
    options: ["MongoDB", "Oracle", "MySQL", "SQL Server"],
    answerIndex: 0
  },

  {
    question: "Which of the following is used to style web pages?",
    options: ["HTML", "CSS", "Python", "Java"],
    answerIndex: 1
  },
  {
    question: "Which of the following is a backend web framework?",
    options: ["Django", "React", "Angular", "Bootstrap"],
    answerIndex: 0
  },
  {
    question: "Which of the following is used to prevent unauthorized access to a network?",
    options: ["Firewall", "Compiler", "Interpreter", "Router"],
    answerIndex: 0
  },
  {
    question: "Which of the following data structures is used in BFS traversal of a graph?",
    options: ["Queue", "Stack", "Heap", "Tree"],
    answerIndex: 0
  },
  {
    question: "Which of the following is an example of cloud computing?",
    options: ["AWS", "Linux", "Python", "GitHub"],
    answerIndex: 0
  },

  {
    question: "Which of the following is used to prevent SQL injection?",
    options: ["Input Validation", "CSS", "HTML", "JavaScript animation"],
    answerIndex: 0
  },
  {
    question: "Which of the following is used for asynchronous web programming?",
    options: ["AJAX", "HTML", "CSS", "Python"],
    answerIndex: 0
  },
  {
    question: "Which of the following is a symmetric encryption algorithm?",
    options: ["AES", "RSA", "DSA", "ECC"],
    answerIndex: 0
  },
  {
    question: "Which is the time complexity of binary search on a sorted array?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    answerIndex: 1
  },
  {
    question: "Which of the following is used to convert source code into machine code?",
    options: ["Compiler", "Interpreter", "Debugger", "IDE"],
    answerIndex: 0
  },

  {
    question: "Which of the following is used for handling exceptions in programming?",
    options: ["try-catch", "for-loop", "if-else", "switch-case"],
    answerIndex: 0
  },
  {
    question: "Which of the following is an immutable data type in Python?",
    options: ["List", "Dictionary", "Tuple", "Set"],
    answerIndex: 2
  },
  {
    question: "Which of the following is a version control hosting platform?",
    options: ["GitHub", "Docker", "Jenkins", "Kubernetes"],
    answerIndex: 0
  },
  {
    question: "Which of the following is a markup language?",
    options: ["HTML", "C++", "Python", "JavaScript"],
    answerIndex: 0
  },
  {
    question: "Which of the following is used for inter-process communication?",
    options: ["Semaphore", "Loop", "Array", "Function"],
    answerIndex: 0
  },

  {
    question: "Which of the following is a hash function commonly used in cryptography?",
    options: ["SHA-256", "AES", "RSA", "ECC"],
    answerIndex: 0
  },
  {
    question: "Which of the following is a network topology?",
    options: ["Star", "Heap", "Stack", "Queue"],
    answerIndex: 0
  },
  {
    question: "Which of the following is used to make websites responsive?",
    options: ["Bootstrap", "Python", "C++", "Java"],
    answerIndex: 0
  },
  {
    question: "Which of the following is an example of machine learning library in Python?",
    options: ["Scikit-learn", "Django", "Flask", "NumPy"],
    answerIndex: 0
  },
  {
    question: "Which of the following describes the smallest addressable unit of memory?",
    options: ["Byte", "Bit", "Word", "Nibble"],
    answerIndex: 1
  }
], 
// --------------------------------------------------------------------------------------------------------
"Mathematics (CS)": [
  {
    question: "Evaluate: 2 + 3 × 4",
    options: ["14", "20", "24", "12"],
    answerIndex: 0
  },
  {
    question: "Solve for x: 5x – 15 = 0",
    options: ["3", "0", "5", "15"],
    answerIndex: 0
  },
  {
    question: "If f(x) = 2x + 5, find f(3)",
    options: ["11", "6", "9", "8"],
    answerIndex: 0
  },
  {
    question: "Simplify: (3² × 2³)",
    options: ["72", "36", "64", "48"],
    answerIndex: 0
  },
  {
    question: "Solve for y: 2y + 7 = 15",
    options: ["3", "4", "5", "6"],
    answerIndex: 1
  },

  {
    question: "The sum of first 20 natural numbers is:",
    options: ["210", "200", "190", "220"],
    answerIndex: 0
  },
  {
    question: "What is 30% of 250?",
    options: ["75", "70", "80", "60"],
    answerIndex: 0
  },
  {
    question: "If x = 2, y = 3, find x² + y²",
    options: ["13", "12", "14", "15"],
    answerIndex: 0
  },
  {
    question: "The area of a rectangle with length 10 and width 5 is:",
    options: ["50", "30", "25", "15"],
    answerIndex: 0
  },
  {
    question: "Find the value of log₂8",
    options: ["2", "3", "8", "4"],
    answerIndex: 1
  },

  {
    question: "Simplify: (5 × 3)²",
    options: ["225", "40", "75", "125"],
    answerIndex: 0
  },
  {
    question: "Solve for x: x/4 = 5",
    options: ["20", "15", "25", "10"],
    answerIndex: 0
  },
  {
    question: "If a:b = 3:5 and a + b = 64, find a",
    options: ["24", "36", "30", "28"],
    answerIndex: 0
  },
  {
    question: "The sum of angles in a triangle is:",
    options: ["180°", "90°", "360°", "270°"],
    answerIndex: 0
  },
  {
    question: "Simplify: 2³ × 2²",
    options: ["32", "16", "8", "64"],
    answerIndex: 0
  },

  {
    question: "The HCF of 18 and 24 is:",
    options: ["6", "12", "3", "18"],
    answerIndex: 0
  },
  {
    question: "The LCM of 6 and 8 is:",
    options: ["24", "48", "12", "16"],
    answerIndex: 0
  },
  {
    question: "Solve: 3(x – 4) = 9",
    options: ["7", "6", "5", "4"],
    answerIndex: 1
  },
  {
    question: "The sum of first 15 even numbers is:",
    options: ["240", "210", "150", "120"],
    answerIndex: 0
  },
  {
    question: "The product of 0.5 × 0.4 is:",
    options: ["0.2", "0.1", "0.5", "0.6"],
    answerIndex: 1
  },

  {
    question: "Solve for x: 7x + 3 = 31",
    options: ["4", "5", "6", "7"],
    answerIndex: 2
  },
  {
    question: "If 20% of x = 50, find x",
    options: ["250", "200", "150", "300"],
    answerIndex: 1
  },
  {
    question: "Simplify: √64 × √16",
    options: ["32", "36", "16", "48"],
    answerIndex: 0
  },
  {
    question: "If a = 3, b = 4, find √(a² + b²)",
    options: ["5", "6", "7", "4"],
    answerIndex: 0
  },
  {
    question: "The volume of a cube with side 4 is:",
    options: ["64", "16", "32", "48"],
    answerIndex: 0
  },

  {
    question: "If x² = 49, find x",
    options: ["7", "-7", "Both 7 and -7", "0"],
    answerIndex: 2
  },
  {
    question: "A man spends 1/4 of his salary on rent, 1/5 on food. Fraction left?",
    options: ["11/20", "12/20", "9/20", "10/20"],
    answerIndex: 0
  },
  {
    question: "Simplify: 15 ÷ (3 × 5) + 2",
    options: ["3", "4", "2", "5"],
    answerIndex: 1
  },
  {
    question: "The probability of getting a head in a coin toss is:",
    options: ["1/2", "1/4", "1/3", "1/5"],
    answerIndex: 0
  },
  {
    question: "The sum of interior angles of a hexagon is:",
    options: ["720°", "540°", "360°", "600°"],
    answerIndex: 1
  },

  {
    question: "Simplify: (2³)²",
    options: ["64", "16", "32", "8"],
    answerIndex: 2
  },
  {
    question: "Find the next number in series: 2, 4, 8, 16, ?",
    options: ["32", "24", "20", "40"],
    answerIndex: 0
  },
  {
    question: "Solve for x: 5x – 10 = 15",
    options: ["3", "4", "5", "6"],
    answerIndex: 2
  },
  {
    question: "If f(x) = x² – 2x, find f(3)",
    options: ["3", "3", "3", "3"], 
    answerIndex: 0
  },
  {
    question: "The sum of first 12 odd numbers is:",
    options: ["144", "144", "156", "132"],
    answerIndex: 0
  },

  {
    question: "If a = 2, b = 3, c = 4, find a + b × c",
    options: ["20", "14", "18", "10"],
    answerIndex: 1
  },
  {
    question: "Solve: |–7 + 5|",
    options: ["2", "–2", "12", "0"],
    answerIndex: 0
  },
  {
    question: "Simplify: 3² + 4²",
    options: ["25", "12", "24", "7"],
    answerIndex: 0
  },
  {
    question: "If 3x + 2 = 11, find x",
    options: ["3", "2", "4", "5"],
    answerIndex: 0
  },
  {
    question: "If 6^x = 216, find x",
    options: ["3", "2", "4", "5"],
    answerIndex: 0
  }
],
// -------------------------------------------------------------------------------------------------------- 
"Physics (CS)": [
  {
    question: "What is the SI unit of force?",
    options: ["Newton", "Joule", "Pascal", "Watt"],
    answerIndex: 0
  },
  {
    question: "Which of the following is a scalar quantity?",
    options: ["Velocity", "Force", "Speed", "Acceleration"],
    answerIndex: 2
  },
  {
    question: "If a body has mass 5 kg and acceleration 2 m/s², the force applied is:",
    options: ["10 N", "7 N", "5 N", "12 N"],
    answerIndex: 0
  },
  {
    question: "The work done when a force of 10 N moves an object 5 m is:",
    options: ["50 J", "15 J", "5 J", "100 J"],
    answerIndex: 0
  },
  {
    question: "What is the unit of electric current?",
    options: ["Ampere", "Volt", "Ohm", "Coulomb"],
    answerIndex: 0
  },

  {
    question: "Ohm’s law is expressed as:",
    options: ["V = IR", "P = VI", "E = mc²", "F = ma"],
    answerIndex: 0
  },
  {
    question: "A capacitor stores energy in the form of:",
    options: ["Electric field", "Magnetic field", "Heat", "Kinetic energy"],
    answerIndex: 0
  },
  {
    question: "Which of the following is an example of kinetic energy?",
    options: ["Moving car", "Stretched spring", "Compressed gas", "Elevated weight"],
    answerIndex: 0
  },
  {
    question: "The resistance of a conductor increases with:",
    options: ["Temperature", "Voltage", "Current", "Time"],
    answerIndex: 0
  },
  {
    question: "Power in an electrical circuit is given by:",
    options: ["P = VI", "P = IR", "P = V/R", "P = I²/R"],
    answerIndex: 0
  },

  {
    question: "Which of the following is a vector quantity?",
    options: ["Speed", "Distance", "Displacement", "Energy"],
    answerIndex: 2
  },
  {
    question: "The momentum of an object is given by:",
    options: ["p = mv", "p = m/a", "p = ma", "p = mv²"],
    answerIndex: 0
  },
  {
    question: "Frequency of a wave is measured in:",
    options: ["Hertz", "Newton", "Joule", "Watt"],
    answerIndex: 0
  },
  {
    question: "The acceleration due to gravity on Earth is approximately:",
    options: ["9.8 m/s²", "10 m/s²", "9 m/s²", "8 m/s²"],
    answerIndex: 0
  },
  {
    question: "The work done by a force perpendicular to displacement is:",
    options: ["0", "Maximum", "Equal to force", "Equal to displacement"],
    answerIndex: 0
  },

  {
    question: "A 2 kg mass is moving at 3 m/s. Its kinetic energy is:",
    options: ["9 J", "6 J", "18 J", "12 J"],
    answerIndex: 2
  },
  {
    question: "A spring with constant k is stretched by x. Potential energy stored:",
    options: ["½ kx²", "kx", "kx²", "2kx²"],
    answerIndex: 0
  },
  {
    question: "Which of the following is NOT a fundamental force?",
    options: ["Friction", "Gravitational", "Electromagnetic", "Weak nuclear"],
    answerIndex: 0
  },
  {
    question: "The SI unit of magnetic flux is:",
    options: ["Weber", "Tesla", "Ampere", "Henry"],
    answerIndex: 0
  },
  {
    question: "Current in a resistor of 10 Ω connected to 5 V is:",
    options: ["0.5 A", "0.2 A", "2 A", "5 A"],
    answerIndex: 0
  },

  {
    question: "The density of an object is given by:",
    options: ["ρ = m/V", "ρ = V/m", "ρ = m×V", "ρ = m²/V"],
    answerIndex: 0
  },
  {
    question: "The escape velocity from Earth is approximately:",
    options: ["11.2 km/s", "9.8 m/s²", "10 km/s", "12.5 km/s"],
    answerIndex: 0
  },
  {
    question: "Which law states: current in a circuit is proportional to voltage?",
    options: ["Ohm’s law", "Faraday’s law", "Newton’s law", "Coulomb’s law"],
    answerIndex: 0
  },
  {
    question: "Work done is zero when force is:",
    options: ["Perpendicular to displacement", "Along displacement", "Opposite to displacement", "None"],
    answerIndex: 0
  },
  {
    question: "The SI unit of energy is:",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    answerIndex: 0
  },

  {
    question: "The wavelength of a wave is 2 m, frequency 50 Hz. Speed of wave?",
    options: ["100 m/s", "50 m/s", "200 m/s", "150 m/s"],
    answerIndex: 0
  },
  {
    question: "Newton’s third law states:",
    options: ["Action = Reaction", "F = ma", "Energy is conserved", "Momentum is conserved"],
    answerIndex: 0
  },
  {
    question: "Which of the following is a unit of pressure?",
    options: ["Pascal", "Newton", "Joule", "Watt"],
    answerIndex: 0
  },
  {
    question: "The relation between charge, current, and time is:",
    options: ["Q = It", "Q = I/t", "Q = I²t", "Q = I+t"],
    answerIndex: 0
  },
  {
    question: "The speed of light in vacuum is approximately:",
    options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁵ m/s", "3 × 10⁷ m/s"],
    answerIndex: 0
  },

  {
    question: "A resistor of 5 Ω has 2 A current. Voltage across it?",
    options: ["10 V", "5 V", "2.5 V", "20 V"],
    answerIndex: 0
  },
  {
    question: "If a body is in free fall for 3 s, distance covered:",
    options: ["44.1 m", "29.4 m", "30 m", "45 m"],
    answerIndex: 0
  },
  {
    question: "Which of the following is a vector quantity?",
    options: ["Displacement", "Speed", "Distance", "Energy"],
    answerIndex: 0
  },
  {
    question: "An electron has charge:",
    options: ["–1.6 × 10⁻¹⁹ C", "+1.6 × 10⁻¹⁹ C", "0", "–1 C"],
    answerIndex: 0
  },
  {
    question: "Power dissipated in a resistor: 10 Ω, current 2 A?",
    options: ["40 W", "20 W", "10 W", "50 W"],
    answerIndex: 0
  },

  {
    question: "Acceleration of a body from rest at 2 m/s² for 5 s is:",
    options: ["10 m/s", "5 m/s", "15 m/s", "20 m/s"],
    answerIndex: 0
  },
  {
    question: "The momentum of a 4 kg object moving at 3 m/s is:",
    options: ["12 kg·m/s", "7 kg·m/s", "9 kg·m/s", "15 kg·m/s"],
    answerIndex: 0
  },
  {
    question: "Gravitational potential energy: mass 2 kg, height 5 m (g=10 m/s²)?",
    options: ["100 J", "50 J", "10 J", "200 J"],
    answerIndex: 0
  },
  {
    question: "A current of 3 A flows for 2 s. Charge passed?",
    options: ["6 C", "5 C", "3 C", "2 C"],
    answerIndex: 0
  }
], 
// --------------------------------------------------------------------------------------------------------
"English (CS)": [
  {
    question: "Choose the correctly spelled word:",
    options: ["Acomodate", "Accommodate", "Acommodate", "Accomodate"],
    answerIndex: 1
  },
  {
    question: "Select the synonym of 'Innovative':",
    options: ["Traditional", "Creative", "Old", "Simple"],
    answerIndex: 1
  },
  {
    question: "Select the antonym of 'Efficient':",
    options: ["Competent", "Capable", "Ineffective", "Productive"],
    answerIndex: 2
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "He go to school every day.",
      "He goes to school every day.",
      "He going to school every day.",
      "He gone to school every day."
    ],
    answerIndex: 1
  },
  {
    question: "Identify the noun in the sentence: 'The computer processes data quickly.'",
    options: ["computer", "processes", "quickly", "data"],
    answerIndex: 0
  },

  {
    question: "Choose the correct plural form of 'Analysis':",
    options: ["Analysises", "Analysis", "Analyses", "Analysiseses"],
    answerIndex: 2
  },
  {
    question: "Select the correct meaning of 'Algorithm':",
    options: ["Step-by-step procedure", "Error message", "Computer hardware", "Programming language"],
    answerIndex: 0
  },
  {
    question: "Choose the sentence with correct subject-verb agreement:",
    options: [
      "The team are winning the match.",
      "The team is winning the match.",
      "The team were winning the match.",
      "The team be winning the match."
    ],
    answerIndex: 1
  },
  {
    question: "Choose the synonym of 'Debug':",
    options: ["Test", "Correct", "Remove errors", "Compile"],
    answerIndex: 2
  },
  {
    question: "Select the correct use of apostrophe:",
    options: [
      "The computers fan is broken.",
      "The computer's fan is broken.",
      "The computers' fan is broken.",
      "The computer fan's is broken."
    ],
    answerIndex: 1
  },

  {
    question: "Choose the word which best fits: 'He has great ___ in coding.'",
    options: ["skills", "skils", "skillz", "skil"],
    answerIndex: 0
  },
  {
    question: "Select the correct past tense of 'Compile':",
    options: ["Compiled", "Compilled", "Compail", "Compiling"],
    answerIndex: 0
  },
  {
    question: "Choose the correctly punctuated sentence:",
    options: [
      "He said 'I will come'.",
      "He said, 'I will come.'",
      "He said 'I will come.'",
      "He said I will come."
    ],
    answerIndex: 1
  },
  {
    question: "Select the antonym of 'Artificial':",
    options: ["Synthetic", "Natural", "Fake", "Man-made"],
    answerIndex: 1
  },
  {
    question: "Choose the correctly spelled programming term:",
    options: ["Funcation", "Function", "Funktion", "Fuction"],
    answerIndex: 1
  },

  {
    question: "Identify the adverb in the sentence: 'The program runs efficiently.'",
    options: ["program", "runs", "efficiently", "The"],
    answerIndex: 2
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "She don't like bugs.",
      "She doesn't like bugs.",
      "She not like bugs.",
      "She isn't likes bugs."
    ],
    answerIndex: 1
  },
  {
    question: "Select the synonym of 'Optimize':",
    options: ["Improve", "Break", "Delete", "Debug"],
    answerIndex: 0
  },
  {
    question: "Select the antonym of 'Virtual':",
    options: ["Digital", "Artificial", "Physical", "Simulated"],
    answerIndex: 2
  },
  {
    question: "Choose the correct comparative form: 'fast'",
    options: ["Fastest", "More fast", "Faster", "Most fast"],
    answerIndex: 2
  },

  {
    question: "Identify the subject in: 'Data structures are fundamental for programmers.'",
    options: ["Data structures", "are", "fundamental", "programmers"],
    answerIndex: 0
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "He and I is working on the project.",
      "He and I are working on the project.",
      "He and I was working on the project.",
      "He and I be working on the project."
    ],
    answerIndex: 1
  },
  {
    question: "Select the correct meaning of 'Compile':",
    options: ["Convert code to machine language", "Run code", "Write code", "Test code"],
    answerIndex: 0
  },
  {
    question: "Choose the word that fits: 'The software is ___ for analysis.'",
    options: ["useful", "useless", "use", "usedly"],
    answerIndex: 0
  },
  {
    question: "Identify the correct plural: 'Mouse' (computer accessory)",
    options: ["Mouses", "Mice", "Mices", "Mousies"],
    answerIndex: 1
  },

  {
    question: "Choose the sentence with correct tense:",
    options: [
      "She codes every day.",
      "She coded every day.",
      "She coding every day.",
      "She code every day."
    ],
    answerIndex: 0
  },
  {
    question: "Select the antonym of 'Secure':",
    options: ["Safe", "Unsafe", "Protected", "Encrypted"],
    answerIndex: 1
  },
  {
    question: "Choose the correctly spelled computer hardware:",
    options: ["Keyboard", "Keybord", "Keybaord", "Keyborde"],
    answerIndex: 0
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "Every programmer have a laptop.",
      "Every programmer has a laptop.",
      "Every programmer had a laptop.",
      "Every programmer having a laptop."
    ],
    answerIndex: 1
  },
  {
    question: "Select the synonym of 'Execute':",
    options: ["Run", "Write", "Debug", "Edit"],
    answerIndex: 0
  },

  {
    question: "Choose the word that fits: 'Python is ___ language.'",
    options: ["a programming", "an programming", "programming", "the programming"],
    answerIndex: 0
  },
  {
    question: "Select the antonym of 'Efficient':",
    options: ["Productive", "Inefficient", "Capable", "Effective"],
    answerIndex: 1
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "I have wrote the code.",
      "I have written the code.",
      "I has written the code.",
      "I writing the code."
    ],
    answerIndex: 1
  },
  {
    question: "Select the synonym of 'Bug':",
    options: ["Error", "Feature", "Program", "Code"],
    answerIndex: 0
  },
  {
    question: "Choose the correctly spelled database term:",
    options: ["Relational", "Relationel", "Relashonal", "Relasionel"],
    answerIndex: 0
  },

  {
    question: "Identify the noun in: 'Programming improves logic.'",
    options: ["Programming", "improves", "logic", "improves logic"],
    answerIndex: 0
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "There is many errors in code.",
      "There are many errors in code.",
      "There be many errors in code.",
      "There was many errors in code."
    ],
    answerIndex: 1
  }
], 
// --------------------------------------------------------------------------------------------------------
"Verbal Reasoning (CS)": [
  {
    question: "Choose the word most similar to 'Algorithm':",
    options: ["Procedure", "Bug", "Variable", "Loop"],
    answerIndex: 0
  },
  {
    question: "Choose the word opposite in meaning to 'Efficient':",
    options: ["Productive", "Inefficient", "Competent", "Optimized"],
    answerIndex: 1
  },
  {
    question: "Select the pair that is most similar in relationship: Code : Program :: Data : ?",
    options: ["Database", "Bit", "File", "Function"],
    answerIndex: 0
  },
  {
    question: "Find the word that completes the analogy: Compiler : Code :: Interpreter : ?",
    options: ["Instructions", "Execution", "Machine", "Program"],
    answerIndex: 1
  },
  {
    question: "Select the word that does not belong: CPU, RAM, Hard Drive, Python",
    options: ["CPU", "RAM", "Hard Drive", "Python"],
    answerIndex: 3
  },

  {
    question: "Choose the word opposite to 'Artificial':",
    options: ["Synthetic", "Natural", "Digital", "Simulated"],
    answerIndex: 1
  },
  {
    question: "Which word is closest in meaning to 'Debug'?",
    options: ["Test", "Remove errors", "Write", "Run"],
    answerIndex: 1
  },
  {
    question: "Select the word that is most similar: 'Function' is to 'Method' as 'Array' is to ?",
    options: ["List", "Variable", "Object", "Loop"],
    answerIndex: 0
  },
  {
    question: "Choose the word opposite in meaning to 'Virtual':",
    options: ["Physical", "Digital", "Artificial", "Simulated"],
    answerIndex: 0
  },
  {
    question: "Find the odd one out: Loop, Variable, Conditional, Inheritance",
    options: ["Loop", "Variable", "Conditional", "Inheritance"],
    answerIndex: 3
  },

  {
    question: "Select the word most similar to 'Optimize':",
    options: ["Improve", "Delete", "Break", "Compile"],
    answerIndex: 0
  },
  {
    question: "Choose the word opposite to 'Encrypted':",
    options: ["Decrypted", "Secured", "Protected", "Encoded"],
    answerIndex: 0
  },
  {
    question: "Find the relationship: CPU : Computer :: Brain : ?",
    options: ["Body", "Neuron", "Mind", "Heart"],
    answerIndex: 0
  },
  {
    question: "Select the synonym of 'Execute':",
    options: ["Run", "Write", "Debug", "Compile"],
    answerIndex: 0
  },
  {
    question: "Choose the odd one out: Syntax, Semantics, Loop, Grammar",
    options: ["Syntax", "Semantics", "Loop", "Grammar"],
    answerIndex: 2
  },

  {
    question: "Find the word most similar: 'Network' is to 'Internet' as 'Database' is to ?",
    options: ["SQL", "Server", "Data", "Storage"],
    answerIndex: 1
  },
  {
    question: "Choose the word opposite to 'Secure':",
    options: ["Unsafe", "Encrypted", "Protected", "Strong"],
    answerIndex: 0
  },
  {
    question: "Select the word that does not belong: Python, Java, C++, HTML",
    options: ["Python", "Java", "C++", "HTML"],
    answerIndex: 3
  },
  {
    question: "Find the synonym of 'Compile':",
    options: ["Convert", "Run", "Debug", "Test"],
    answerIndex: 0
  },
  {
    question: "Choose the word opposite to 'Manual':",
    options: ["Automatic", "Hand-operated", "Physical", "Traditional"],
    answerIndex: 0
  },

  {
    question: "Select the pair that is most similar: Loop : Iteration :: Function : ?",
    options: ["Call", "Execution", "Definition", "Variable"],
    answerIndex: 1
  },
  {
    question: "Find the odd one out: RAM, ROM, Cache, Compiler",
    options: ["RAM", "ROM", "Cache", "Compiler"],
    answerIndex: 3
  },
  {
    question: "Choose the word most similar to 'Variable':",
    options: ["Placeholder", "Function", "Loop", "Constant"],
    answerIndex: 0
  },
  {
    question: "Select the antonym of 'Debug':",
    options: ["Introduce errors", "Test", "Run", "Execute"],
    answerIndex: 0
  },
  {
    question: "Find the word that does not belong: Stack, Queue, Heap, Class",
    options: ["Stack", "Queue", "Heap", "Class"],
    answerIndex: 3
  },

  {
    question: "Select the synonym of 'Binary':",
    options: ["Two-based", "Digital", "Decimal", "Octal"],
    answerIndex: 0
  },
  {
    question: "Choose the odd one out: HTML, CSS, JavaScript, Python",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answerIndex: 3
  },
  {
    question: "Select the word opposite in meaning to 'Static':",
    options: ["Dynamic", "Fixed", "Constant", "Stationary"],
    answerIndex: 0
  },
  {
    question: "Find the relationship: Server : Client :: Provider : ?",
    options: ["User", "Consumer", "Network", "Database"],
    answerIndex: 1
  },
  {
    question: "Choose the word most similar to 'Iteration':",
    options: ["Repetition", "Execution", "Variable", "Function"],
    answerIndex: 0
  },

  {
    question: "Select the antonym of 'Optimized':",
    options: ["Inefficient", "Improved", "Enhanced", "Fast"],
    answerIndex: 0
  },
  {
    question: "Find the odd one out: Object, Class, Method, CPU",
    options: ["Object", "Class", "Method", "CPU"],
    answerIndex: 3
  },
  {
    question: "Choose the word most similar to 'Algorithmic':",
    options: ["Stepwise", "Random", "Looped", "Variable"],
    answerIndex: 0
  },
  {
    question: "Select the word opposite to 'Digital':",
    options: ["Analog", "Binary", "Programming", "Electronic"],
    answerIndex: 0
  },
  {
    question: "Choose the word that does not belong: Python, Java, C++, Loop",
    options: ["Python", "Java", "C++", "Loop"],
    answerIndex: 3
  },

  {
    question: "Select the synonym of 'Encapsulation':",
    options: ["Data hiding", "Execution", "Looping", "Iteration"],
    answerIndex: 0
  },
  {
    question: "Choose the antonym of 'Visible':",
    options: ["Invisible", "Apparent", "Clear", "Noticeable"],
    answerIndex: 0
  }
],
// --------------------------------------------------------------------------------------------------------
"Quantitative Reasoning (CS)": [
  {
    question: "Simplify: 5 + 3 × 2",
    options: ["11", "16", "10", "13"],
    answerIndex: 0
  },
  {
    question: "Solve for x: 2x + 7 = 15",
    options: ["3", "4", "5", "6"],
    answerIndex: 1
  },
  {
    question: "If a = 2 and b = 3, find a² + b²",
    options: ["13", "12", "11", "14"],
    answerIndex: 0
  },
  {
    question: "Simplify: (4³ ÷ 2²)",
    options: ["8", "16", "4", "32"],
    answerIndex: 0
  },
  {
    question: "Find x: 5x – 10 = 15",
    options: ["3", "4", "5", "6"],
    answerIndex: 2
  },

  {
    question: "The sum of first 10 natural numbers is:",
    options: ["55", "50", "45", "60"],
    answerIndex: 0
  },
  {
    question: "30% of 200 is:",
    options: ["60", "50", "70", "80"],
    answerIndex: 0
  },
  {
    question: "The area of a rectangle with length 8 and width 5 is:",
    options: ["40", "30", "35", "45"],
    answerIndex: 0
  },
  {
    question: "If log₂8 = ?",
    options: ["2", "3", "8", "4"],
    answerIndex: 1
  },
  {
    question: "Simplify: (3 × 5)²",
    options: ["225", "75", "30", "90"],
    answerIndex: 0
  },

  {
    question: "Solve for y: y/4 = 5",
    options: ["15", "20", "25", "10"],
    answerIndex: 1
  },
  {
    question: "If a:b = 2:3 and a + b = 25, find a",
    options: ["10", "15", "12", "13"],
    answerIndex: 0
  },
  {
    question: "Sum of angles in a triangle is:",
    options: ["180°", "90°", "360°", "270°"],
    answerIndex: 0
  },
  {
    question: "Simplify: 2³ × 2²",
    options: ["32", "64", "16", "8"],
    answerIndex: 0
  },
  {
    question: "HCF of 18 and 24 is:",
    options: ["6", "12", "3", "18"],
    answerIndex: 0
  },

  {
    question: "LCM of 6 and 8 is:",
    options: ["24", "48", "12", "16"],
    answerIndex: 0
  },
  {
    question: "Sum of first 15 even numbers is:",
    options: ["240", "210", "150", "180"],
    answerIndex: 0
  },
  {
    question: "Multiply: 0.5 × 0.4",
    options: ["0.2", "0.1", "0.5", "0.6"],
    answerIndex: 1
  },
  {
    question: "Solve: 7x + 3 = 31",
    options: ["4", "5", "6", "7"],
    answerIndex: 2
  },
  {
    question: "20% of x = 50, find x",
    options: ["200", "250", "150", "300"],
    answerIndex: 1
  },

  {
    question: "Simplify: √64 × √16",
    options: ["32", "48", "24", "16"],
    answerIndex: 0
  },
  {
    question: "If a = 3, b = 4, find √(a² + b²)",
    options: ["5", "6", "7", "4"],
    answerIndex: 0
  },
  {
    question: "Volume of cube with side 4 is:",
    options: ["64", "16", "32", "48"],
    answerIndex: 0
  },
  {
    question: "x² = 49, find x",
    options: ["7", "-7", "Both 7 and -7", "0"],
    answerIndex: 2
  },
  {
    question: "A man spends 1/4 on rent, 1/5 on food. Fraction left?",
    options: ["11/20", "12/20", "9/20", "10/20"],
    answerIndex: 0
  },

  {
    question: "Simplify: 15 ÷ (3 × 5) + 2",
    options: ["3", "4", "2", "5"],
    answerIndex: 1
  },
  {
    question: "Probability of getting head in coin toss:",
    options: ["1/2", "1/3", "1/4", "1/5"],
    answerIndex: 0
  },
  {
    question: "Sum of interior angles of hexagon:",
    options: ["720°", "540°", "360°", "600°"],
    answerIndex: 1
  },
  {
    question: "Simplify: (2³)²",
    options: ["64", "16", "32", "8"],
    answerIndex: 2
  },
  {
    question: "Next number: 2, 4, 8, 16, ?",
    options: ["32", "24", "20", "40"],
    answerIndex: 0
  },

  {
    question: "Solve: 3x + 2 = 11",
    options: ["2", "3", "4", "5"],
    answerIndex: 1
  },
  {
    question: "Sum of first 12 odd numbers is:",
    options: ["144", "132", "156", "120"],
    answerIndex: 0
  },
  {
    question: "a = 2, b = 3, c = 4, find a + b × c",
    options: ["14", "18", "20", "10"],
    answerIndex: 0
  },
  {
    question: "Solve |–7 + 5|",
    options: ["2", "-2", "12", "0"],
    answerIndex: 0
  },
  {
    question: "Simplify: 3² + 4²",
    options: ["25", "12", "24", "7"],
    answerIndex: 0
  },

  {
    question: "If 6^x = 216, find x",
    options: ["3", "2", "4", "5"],
    answerIndex: 0
  },
  {
    question: "The mean of 5, 10, 15, 20 is:",
    options: ["12.5", "10", "15", "20"],
    answerIndex: 0
  },
  {
    question: "Median of 2, 5, 9, 12, 15 is:",
    options: ["9", "5", "12", "8"],
    answerIndex: 0
  },
  {
    question: "Solve for x: 4x – 7 = 9",
    options: ["4", "5", "6", "7"],
    answerIndex: 1
  },
  {
    question: "If a sequence is 2, 4, 8, 16, 32, the nth term is:",
    options: ["2^n", "2^(n–1)", "2^(n+1)", "n²"],
    answerIndex: 1
  }
],

// --------------------------------------------------------------------------------------------------------
// Arts & Humanities
// -------------------------------------------------------------------------------------------------------- 
"General Knowledge": [
  {
    question: "Who is known as the 'Father of Computer'?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    answerIndex: 0
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Canberra", "Melbourne", "Perth"],
    answerIndex: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answerIndex: 1
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
    answerIndex: 0
  },
  {
    question: "Which gas is essential for human respiration?",
    options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
    answerIndex: 2
  },

  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Osmium", "Oxygen", "Gold", "Iron"],
    answerIndex: 1
  },
  {
    question: "In which continent is Egypt located?",
    options: ["Asia", "Europe", "Africa", "Australia"],
    answerIndex: 2
  },
  {
    question: "Who discovered gravity when an apple fell on his head?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
    answerIndex: 1
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answerIndex: 3
  },
  {
    question: "Which country hosted the 2020 Summer Olympics?",
    options: ["China", "Japan", "Brazil", "UK"],
    answerIndex: 1
  },

  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Yen", "Won", "Dollar"],
    answerIndex: 1
  },
  {
    question: "Which organ filters blood in the human body?",
    options: ["Heart", "Liver", "Kidney", "Lungs"],
    answerIndex: 2
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent Van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    answerIndex: 1
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answerIndex: 0
  },
  {
    question: "Which is the smallest unit of life?",
    options: ["Atom", "Cell", "Molecule", "Organ"],
    answerIndex: 1
  },

  {
    question: "Who invented the telephone?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    answerIndex: 0
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "South Korea"],
    answerIndex: 1
  },
  {
    question: "Which planet has rings around it?",
    options: ["Earth", "Saturn", "Mars", "Jupiter"],
    answerIndex: 1
  },
  {
    question: "Who wrote 'The Theory of Relativity'?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
    answerIndex: 1
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "100°C", "80°C", "120°C"],
    answerIndex: 1
  },

  {
    question: "Which gas is used in electric bulbs to prevent filament from burning?",
    options: ["Neon", "Oxygen", "Nitrogen", "Argon"],
    answerIndex: 3
  },
  {
    question: "Who is the first Prime Minister of Pakistan?",
    options: ["Muhammad Ali Jinnah", "Liaquat Ali Khan", "Benazir Bhutto", "Imran Khan"],
    answerIndex: 1
  },
  {
    question: "Which vitamin is produced when human skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    answerIndex: 3
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    answerIndex: 1
  },
  {
    question: "What is the chemical symbol of Gold?",
    options: ["Ag", "Au", "Gd", "Go"],
    answerIndex: 1
  },

  {
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answerIndex: 1
  },
  {
    question: "Which country is known for the Eiffel Tower?",
    options: ["Italy", "France", "Germany", "Spain"],
    answerIndex: 1
  },
  {
    question: "Which organ pumps blood throughout the human body?",
    options: ["Kidney", "Heart", "Lungs", "Liver"],
    answerIndex: 1
  },
  {
    question: "Who was the first man to step on the Moon?",
    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
    answerIndex: 1
  },
  {
    question: "Which is the largest desert in the world?",
    options: ["Sahara", "Gobi", "Kalahari", "Thar"],
    answerIndex: 0
  },

  {
    question: "Which is the fastest land animal?",
    options: ["Tiger", "Cheetah", "Lion", "Leopard"],
    answerIndex: 1
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answerIndex: 1
  },
  {
    question: "Who is known as the 'Father of Modern Physics'?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
    answerIndex: 1
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    answerIndex: 1
  },
  {
    question: "Which is the largest continent by area?",
    options: ["Africa", "Asia", "Europe", "North America"],
    answerIndex: 1
  },

  {
    question: "Who wrote the book '1984'?",
    options: ["George Orwell", "J.K. Rowling", "Mark Twain", "Ernest Hemingway"],
    answerIndex: 0
  },
  {
    question: "Which element has atomic number 1?",
    options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
    answerIndex: 1
  }
], 
// --------------------------------------------------------------------------------------------------------
"Pakistan Affairs": [
  {
    question: "Who was the first Governor-General of Pakistan?",
    options: ["Liaquat Ali Khan", "Muhammad Ali Jinnah", "Iskander Mirza", "Khawaja Nazimuddin"],
    answerIndex: 1
  },
  {
    question: "In which year Pakistan gained independence?",
    options: ["1946", "1947", "1948", "1950"],
    answerIndex: 1
  },
  {
    question: "What is the capital city of Pakistan?",
    options: ["Karachi", "Islamabad", "Lahore", "Peshawar"],
    answerIndex: 1
  },
  {
    question: "Which Pakistani city is known as the 'City of Lights'?",
    options: ["Lahore", "Karachi", "Islamabad", "Quetta"],
    answerIndex: 1
  },
  {
    question: "Who was the first Prime Minister of Pakistan?",
    options: ["Muhammad Ali Jinnah", "Liaquat Ali Khan", "Khawaja Nazimuddin", "Benazir Bhutto"],
    answerIndex: 1
  },

  {
    question: "Which Pakistani national symbol is on its flag?",
    options: ["Crescent and Star", "Sun and Moon", "Tiger", "Eagle"],
    answerIndex: 0
  },
  {
    question: "Which province is the largest by area in Pakistan?",
    options: ["Punjab", "Sindh", "Balochistan", "Khyber Pakhtunkhwa"],
    answerIndex: 2
  },
  {
    question: "Who is known as the 'Father of the Nation' in Pakistan?",
    options: ["Liaquat Ali Khan", "Muhammad Ali Jinnah", "Allama Iqbal", "Benazir Bhutto"],
    answerIndex: 1
  },
  {
    question: "Pakistan shares its eastern border with which country?",
    options: ["Iran", "India", "Afghanistan", "China"],
    answerIndex: 1
  },
  {
    question: "The national language of Pakistan is:",
    options: ["Punjabi", "Sindhi", "Urdu", "Pashto"],
    answerIndex: 2
  },

  {
    question: "Which Pakistani city is known as the 'City of Gardens'?",
    options: ["Islamabad", "Karachi", "Lahore", "Multan"],
    answerIndex: 2
  },
  {
    question: "Who was the first Chief of Army Staff of Pakistan?",
    options: ["Ayub Khan", "Tikka Khan", "Frank Messervy", "Muhammad Musa"],
    answerIndex: 2
  },
  {
    question: "Which is the highest peak in Pakistan?",
    options: ["Nanga Parbat", "K2", "Rakaposhi", "Gasherbrum I"],
    answerIndex: 1
  },
  {
    question: "Which Pakistani city is the financial hub of the country?",
    options: ["Lahore", "Karachi", "Islamabad", "Faisalabad"],
    answerIndex: 1
  },
  {
    question: "The official currency of Pakistan is:",
    options: ["Rupee", "Dollar", "Taka", "Dirham"],
    answerIndex: 0
  },

  {
    question: "Who was the first female Prime Minister of Pakistan?",
    options: ["Benazir Bhutto", "Fatima Jinnah", "Hina Rabbani Khar", "Malala Yousafzai"],
    answerIndex: 0
  },
  {
    question: "Pakistan's eastern border was defined by which line after independence?",
    options: ["Durand Line", "Radcliffe Line", "McMahon Line", "Line of Control"],
    answerIndex: 1
  },
  {
    question: "Which Pakistani city is famous for its shrines and Sufi culture?",
    options: ["Lahore", "Multan", "Karachi", "Islamabad"],
    answerIndex: 1
  },
  {
    question: "Pakistan became a republic in which year?",
    options: ["1947", "1956", "1962", "1971"],
    answerIndex: 1
  },
  {
    question: "The Indus River originates in which country?",
    options: ["India", "China", "Pakistan", "Afghanistan"],
    answerIndex: 1
  },

  {
    question: "Which Pakistani city is known as the 'City of Saints'?",
    options: ["Multan", "Lahore", "Karachi", "Islamabad"],
    answerIndex: 0
  },
  {
    question: "Who wrote the national anthem of Pakistan?",
    options: ["Hafeez Jullundhri", "Allama Iqbal", "Faiz Ahmed Faiz", "Ahmad Faraz"],
    answerIndex: 0
  },
  {
    question: "Which Pakistani province has the largest population?",
    options: ["Sindh", "Punjab", "Balochistan", "Khyber Pakhtunkhwa"],
    answerIndex: 1
  },
  {
    question: "Which line separates Pakistan-administered Kashmir from India?",
    options: ["Line of Control", "Durand Line", "Radcliffe Line", "McMahon Line"],
    answerIndex: 0
  },
  {
    question: "The largest port of Pakistan is located in which city?",
    options: ["Karachi", "Gwadar", "Port Qasim", "Bin Qasim"],
    answerIndex: 0
  },

  {
    question: "Who was the first President of Pakistan?",
    options: ["Iskander Mirza", "Ayub Khan", "Muhammad Ali Jinnah", "Zia-ul-Haq"],
    answerIndex: 0
  },
  {
    question: "Pakistan shares its northern border with which country?",
    options: ["Afghanistan", "China", "India", "Iran"],
    answerIndex: 1
  },
  {
    question: "Which Pakistani city is famous for its IT and software industry?",
    options: ["Lahore", "Islamabad", "Karachi", "Peshawar"],
    answerIndex: 1
  },
  {
    question: "Which mountain range runs along the northern border of Pakistan?",
    options: ["Himalayas", "Karakoram", "Hindu Kush", "Sulaiman"],
    answerIndex: 1
  },
  {
    question: "Which Pakistani festival is celebrated on 23rd March?",
    options: ["Independence Day", "Pakistan Day", "Defense Day", "Iqbal Day"],
    answerIndex: 1
  },

  {
    question: "The national sport of Pakistan is:",
    options: ["Cricket", "Hockey", "Football", "Squash"],
    answerIndex: 1
  },
  {
    question: "Which Pakistani city is the provincial capital of Sindh?",
    options: ["Karachi", "Hyderabad", "Sukkur", "Larkana"],
    answerIndex: 0
  },
  {
    question: "Who is called the 'Poet of the East' and inspired Pakistan's creation?",
    options: ["Allama Iqbal", "Faiz Ahmed Faiz", "Mirza Ghalib", "Ahmed Faraz"],
    answerIndex: 0
  },
  {
    question: "Which Pakistani dam is the largest by water storage?",
    options: ["Tarbela Dam", "Mangla Dam", "Warsak Dam", "Hub Dam"],
    answerIndex: 0
  },
  {
    question: "Which treaty established the western border of Pakistan with Afghanistan?",
    options: ["Durand Line Agreement", "Radcliffe Line", "Tashkent Agreement", "Shimla Agreement"],
    answerIndex: 0
  },

  {
    question: "Which Pakistani city is known as the 'Heart of Pakistan'?",
    options: ["Lahore", "Multan", "Islamabad", "Karachi"],
    answerIndex: 1
  },
  {
    question: "The currency of Pakistan is called:",
    options: ["Rupee", "Dollar", "Pound", "Taka"],
    answerIndex: 0
  }
], 
// --------------------------------------------------------------------------------------------------------
"Islamic Studies": [
  {
    question: "Who is the last prophet in Islam?",
    options: ["Prophet Isa (AS)", "Prophet Musa (AS)", "Prophet Muhammad (SAW)", "Prophet Ibrahim (AS)"],
    answerIndex: 2
  },
  {
    question: "In which city was Prophet Muhammad (SAW) born?",
    options: ["Medina", "Mecca", "Jerusalem", "Ta’if"],
    answerIndex: 1
  },
  {
    question: "Which is the first pillar of Islam?",
    options: ["Salah", "Shahadah", "Zakat", "Hajj"],
    answerIndex: 1
  },
  {
    question: "How many Surahs are there in the Holy Quran?",
    options: ["114", "120", "99", "100"],
    answerIndex: 0
  },
  {
    question: "Which month is Ramadan observed?",
    options: ["Muharram", "Shawwal", "Ramadan", "Dhual-Hijjah"],
    answerIndex: 2
  },

  {
    question: "Which is the first battle in Islamic history?",
    options: ["Battle of Badr", "Battle of Uhud", "Battle of Khandaq", "Battle of Hunayn"],
    answerIndex: 0
  },
  {
    question: "What is the Islamic term for charity?",
    options: ["Zakat", "Sadaqah", "Khums", "Fidyah"],
    answerIndex: 0
  },
  {
    question: "How many daily prayers (Salah) are obligatory for Muslims?",
    options: ["3", "4", "5", "6"],
    answerIndex: 2
  },
  {
    question: "Who was the first Caliph after Prophet Muhammad (SAW)?",
    options: ["Umar ibn al-Khattab", "Abu Bakr Siddiq", "Ali ibn Abi Talib", "Uthman ibn Affan"],
    answerIndex: 1
  },
  {
    question: "Which is the holiest mosque in Islam?",
    options: ["Al-Masjid an-Nabawi", "Al-Aqsa Mosque", "Masjid al-Haram", "Quba Mosque"],
    answerIndex: 2
  },

  {
    question: "What is the meaning of 'Islam'?",
    options: ["Peace and Submission", "Prayer", "Faith", "Pilgrimage"],
    answerIndex: 0
  },
  {
    question: "Which angel brought revelation to Prophet Muhammad (SAW)?",
    options: ["Angel Israfil", "Angel Jibreel (Gabriel)", "Angel Mikael", "Angel Malik"],
    answerIndex: 1
  },
  {
    question: "Which Surah is known as 'The Heart of the Quran'?",
    options: ["Surah Yaseen", "Surah Al-Fatiha", "Surah Al-Baqarah", "Surah Ar-Rahman"],
    answerIndex: 0
  },
  {
    question: "How many Rakats are there in Fajr prayer?",
    options: ["2", "4", "3", "1"],
    answerIndex: 0
  },
  {
    question: "Which city is known as the city of the Prophet?",
    options: ["Mecca", "Medina", "Kufa", "Damascus"],
    answerIndex: 1
  },

  {
    question: "What is the term for the Islamic law?",
    options: ["Hadith", "Shariah", "Fiqh", "Sunnah"],
    answerIndex: 1
  },
  {
    question: "Which Prophet was swallowed by a whale?",
    options: ["Prophet Yunus (AS)", "Prophet Musa (AS)", "Prophet Isa (AS)", "Prophet Ibrahim (AS)"],
    answerIndex: 0
  },
  {
    question: "Which night is better than a thousand months?",
    options: ["Laylat al-Qadr", "Isra and Miraj", "Lailat-ul-Miraj", "Shab-e-Barat"],
    answerIndex: 0
  },
  {
    question: "What is the meaning of 'Tawheed'?",
    options: ["Oneness of Allah", "Prophethood", "Prayer", "Charity"],
    answerIndex: 0
  },
  {
    question: "Who compiled the Holy Quran in written form?",
    options: ["Abu Bakr Siddiq", "Umar ibn al-Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib"],
    answerIndex: 2
  },

  {
    question: "Which Surah starts with 'Alhamdulillahi Rabbil Aalameen'?",
    options: ["Surah Al-Baqarah", "Surah Al-Fatiha", "Surah Yaseen", "Surah Ar-Rahman"],
    answerIndex: 1
  },
  {
    question: "Which Prophet built the Kaaba?",
    options: ["Prophet Ibrahim (AS)", "Prophet Muhammad (SAW)", "Prophet Ismail (AS)", "Prophet Nuh (AS)"],
    answerIndex: 0
  },
  {
    question: "The Hijri calendar was established in which year?",
    options: ["622 AD", "610 AD", "632 AD", "624 AD"],
    answerIndex: 0
  },
  {
    question: "Which is the largest Surah in the Quran?",
    options: ["Surah Al-Baqarah", "Surah Al-Imran", "Surah An-Nisa", "Surah Al-Mulk"],
    answerIndex: 0
  },
  {
    question: "Which city was the first Qibla for Muslims?",
    options: ["Mecca", "Jerusalem", "Medina", "Kufa"],
    answerIndex: 1
  },

  {
    question: "Who is known as 'Khatam-un-Nabiyyin'?",
    options: ["Prophet Musa (AS)", "Prophet Muhammad (SAW)", "Prophet Isa (AS)", "Prophet Ibrahim (AS)"],
    answerIndex: 1
  },
  {
    question: "How many chapters were revealed in Mecca before Hijrah?",
    options: ["86", "90", "50", "114"],
    answerIndex: 0
  },
  {
    question: "Which month is Hajj performed in?",
    options: ["Shawwal", "Dhul-Qadah", "Dhul-Hijjah", "Muharram"],
    answerIndex: 2
  },
  {
    question: "Which prophet is known for patience?",
    options: ["Prophet Ayyub (AS)", "Prophet Yunus (AS)", "Prophet Musa (AS)", "Prophet Isa (AS)"],
    answerIndex: 0
  },
  {
    question: "Which day is considered the weekly holiday for Muslims?",
    options: ["Friday", "Saturday", "Sunday", "Thursday"],
    answerIndex: 0
  },

  {
    question: "Which angel is the guardian of Hell?",
    options: ["Mikael", "Israfil", "Malik", "Jibreel"],
    answerIndex: 2
  },
  {
    question: "Which chapter is called 'The Opening'?",
    options: ["Surah Yaseen", "Surah Al-Fatiha", "Surah Al-Baqarah", "Surah Al-Ikhlas"],
    answerIndex: 1
  },
  {
    question: "Which Prophet was known for building the Ark?",
    options: ["Prophet Nuh (AS)", "Prophet Musa (AS)", "Prophet Ibrahim (AS)", "Prophet Isa (AS)"],
    answerIndex: 0
  },
  {
    question: "Which act is obligatory once in a lifetime for those who can afford it?",
    options: ["Zakat", "Hajj", "Salah", "Fasting"],
    answerIndex: 1
  },
  {
    question: "Which is the last Surah of the Quran?",
    options: ["Surah Al-Falaq", "Surah An-Nas", "Surah Al-Ikhlas", "Surah Al-Masad"],
    answerIndex: 1
  },

  {
    question: "Which companion of Prophet Muhammad (SAW) was known as 'Siddiq'?",
    options: ["Abu Bakr", "Umar ibn al-Khattab", "Ali ibn Abi Talib", "Uthman ibn Affan"],
    answerIndex: 0
  },
  {
    question: "Which Surah was revealed entirely in Medina?",
    options: ["Surah Al-Baqarah", "Surah Al-Fatiha", "Surah Yaseen", "Surah Al-Mulk"],
    answerIndex: 0
  }
], 
// --------------------------------------------------------------------------------------------------------
Civics: [
  {
    question: "What is the primary function of the legislature?",
    options: ["To enforce laws", "To make laws", "To interpret laws", "To adjudicate disputes"],
    answerIndex: 1
  },
  {
    question: "Who is considered the 'Father of the Nation' in Pakistan?",
    options: ["Liaquat Ali Khan", "Allama Iqbal", "Muhammad Ali Jinnah", "Benazir Bhutto"],
    answerIndex: 2
  },
  {
    question: "Which branch of government interprets the laws?",
    options: ["Legislative", "Executive", "Judiciary", "Federal Cabinet"],
    answerIndex: 2
  },
  {
    question: "What is the supreme law of Pakistan?",
    options: ["Pakistan Penal Code", "Constitution of Pakistan", "National Assembly Rules", "Election Act"],
    answerIndex: 1
  },
  {
    question: "Who has the power to dissolve the National Assembly?",
    options: ["Prime Minister", "President", "Supreme Court", "Chief Election Commissioner"],
    answerIndex: 1
  },

  {
    question: "Which article of the Constitution of Pakistan guarantees freedom of speech?",
    options: ["Article 19", "Article 25", "Article 37", "Article 4"],
    answerIndex: 0
  },
  {
    question: "Who is the head of the provincial government in Pakistan?",
    options: ["Governor", "Chief Minister", "President", "Speaker"],
    answerIndex: 1
  },
  {
    question: "What type of government does Pakistan have?",
    options: ["Monarchy", "Parliamentary Republic", "Federal Republic", "Presidential Republic"],
    answerIndex: 2
  },
  {
    question: "Which body supervises elections in Pakistan?",
    options: ["Election Commission of Pakistan", "Supreme Court", "Federal Cabinet", "National Assembly"],
    answerIndex: 0
  },
  {
    question: "Who appoints the Chief Justice of Pakistan?",
    options: ["President", "Prime Minister", "National Assembly", "Judicial Commission"],
    answerIndex: 0
  },

  {
    question: "Which house of the Parliament represents the provinces?",
    options: ["National Assembly", "Senate", "Provincial Assembly", "Cabinet"],
    answerIndex: 1
  },
  {
    question: "The term of the National Assembly is:",
    options: ["3 years", "4 years", "5 years", "6 years"],
    answerIndex: 2
  },
  {
    question: "Which article deals with Fundamental Rights in Pakistan?",
    options: ["Article 1-10", "Article 8-28", "Article 19-25", "Article 2-10"],
    answerIndex: 1
  },
  {
    question: "Who presides over the sessions of the National Assembly?",
    options: ["Prime Minister", "Speaker", "President", "Chief Justice"],
    answerIndex: 1
  },
  {
    question: "Which is the highest court in Pakistan?",
    options: ["High Court", "Supreme Court", "District Court", "Federal Shariat Court"],
    answerIndex: 1
  },

  {
    question: "Which body can impeach the President of Pakistan?",
    options: ["National Assembly", "Senate", "Both Houses of Parliament", "Supreme Court"],
    answerIndex: 2
  },
  {
    question: "What is the minimum age for election as Prime Minister in Pakistan?",
    options: ["25 years", "30 years", "35 years", "40 years"],
    answerIndex: 2
  },
  {
    question: "Which is the basic unit of local government in Pakistan?",
    options: ["Union Council", "Provincial Assembly", "Tehsil", "District Court"],
    answerIndex: 0
  },
  {
    question: "What is the role of the President of Pakistan in a parliamentary system?",
    options: ["Head of State", "Head of Government", "Chief Justice", "Speaker of National Assembly"],
    answerIndex: 0
  },
  {
    question: "Which amendment of the Constitution of Pakistan restored the parliamentary system in 2010?",
    options: ["18th Amendment", "17th Amendment", "19th Amendment", "21st Amendment"],
    answerIndex: 0
  },

  {
    question: "Which article of the Constitution defines Pakistan as an Islamic Republic?",
    options: ["Article 1", "Article 2", "Article 3", "Article 4"],
    answerIndex: 1
  },
  {
    question: "The Constitution of Pakistan was first adopted in:",
    options: ["1947", "1956", "1962", "1973"],
    answerIndex: 1
  },
  {
    question: "Who has the authority to grant pardon in Pakistan?",
    options: ["Prime Minister", "President", "Supreme Court", "Parliament"],
    answerIndex: 1
  },
  {
    question: "Which body is responsible for making federal laws in Pakistan?",
    options: ["National Assembly", "Senate", "Both National Assembly and Senate", "Cabinet"],
    answerIndex: 2
  },
  {
    question: "Who heads the provincial judiciary in Pakistan?",
    options: ["Chief Justice of Pakistan", "Chief Minister", "Chief Justice of High Court", "Governor"],
    answerIndex: 2
  },

  {
    question: "Which fundamental right guarantees equality before the law in Pakistan?",
    options: ["Article 25", "Article 19", "Article 14", "Article 38"],
    answerIndex: 0
  },
  {
    question: "What is the term of office for the President of Pakistan?",
    options: ["4 years", "5 years", "6 years", "3 years"],
    answerIndex: 1
  },
  {
    question: "Which institution ensures transparency and accountability in Pakistan?",
    options: ["National Accountability Bureau", "Election Commission", "Supreme Court", "Federal Cabinet"],
    answerIndex: 0
  },
  {
    question: "Which house of Parliament is directly elected by the people?",
    options: ["Senate", "National Assembly", "Provincial Assembly", "Cabinet"],
    answerIndex: 1
  },
  {
    question: "Who can dissolve the Provincial Assembly in Pakistan?",
    options: ["Governor", "Chief Minister", "President", "Prime Minister"],
    answerIndex: 0
  },

  {
    question: "Which principle is the foundation of Pakistan’s government?",
    options: ["Islamic Principles", "Democracy", "Socialism", "Monarchy"],
    answerIndex: 1
  },
  {
    question: "Which amendment declared Pakistan an Islamic Republic?",
    options: ["2nd Amendment", "8th Amendment", "18th Amendment", "1st Amendment"],
    answerIndex: 0
  },
  {
    question: "Who is responsible for formulating foreign policy in Pakistan?",
    options: ["Prime Minister", "President", "Foreign Minister", "Cabinet"],
    answerIndex: 0
  },
  {
    question: "Which body approves the federal budget in Pakistan?",
    options: ["National Assembly", "Senate", "President", "Supreme Court"],
    answerIndex: 0
  },
  {
    question: "Which article ensures freedom of religion in Pakistan?",
    options: ["Article 20", "Article 19", "Article 22", "Article 18"],
    answerIndex: 0
  },

  {
    question: "Which office is responsible for managing civil services in Pakistan?",
    options: ["Federal Public Service Commission", "Prime Minister Secretariat", "Cabinet Division", "Supreme Court"],
    answerIndex: 0
  },
  {
    question: "Which amendment introduced the concurrent list in Pakistan?",
    options: ["7th Amendment", "18th Amendment", "17th Amendment", "8th Amendment"],
    answerIndex: 0
  }
],
// --------------------------------------------------------------------------------------------------------
"Basic Math": [
  {
    question: "What is 25 + 17?",
    options: ["42", "43", "41", "44"],
    answerIndex: 0
  },
  {
    question: "What is 9 × 8?",
    options: ["72", "81", "64", "69"],
    answerIndex: 0
  },
  {
    question: "What is the square of 12?",
    options: ["144", "124", "132", "142"],
    answerIndex: 0
  },
  {
    question: "What is 56 ÷ 7?",
    options: ["6", "8", "7", "9"],
    answerIndex: 1
  },
  {
    question: "What is the value of 2³ × 2²?",
    options: ["16", "32", "8", "64"],
    answerIndex: 1
  },

  {
    question: "If x + 5 = 12, what is x?",
    options: ["5", "6", "7", "8"],
    answerIndex: 2
  },
  {
    question: "What is 15% of 200?",
    options: ["25", "30", "35", "40"],
    answerIndex: 1
  },
  {
    question: "Which of the following is a prime number?",
    options: ["21", "19", "25", "27"],
    answerIndex: 1
  },
  {
    question: "What is the LCM of 12 and 18?",
    options: ["36", "54", "72", "48"],
    answerIndex: 0
  },
  {
    question: "What is the HCF of 24 and 36?",
    options: ["6", "12", "18", "24"],
    answerIndex: 1
  },

  {
    question: "Solve: 3x + 7 = 16",
    options: ["3", "2", "4", "5"],
    answerIndex: 1
  },
  {
    question: "What is 0.25 as a fraction?",
    options: ["1/2", "1/4", "1/5", "1/3"],
    answerIndex: 1
  },
  {
    question: "Which number is divisible by 9?",
    options: ["234", "256", "289", "278"],
    answerIndex: 0
  },
  {
    question: "What is √81?",
    options: ["9", "8", "7", "6"],
    answerIndex: 0
  },
  {
    question: "What is the value of 7² - 5²?",
    options: ["12", "24", "16", "36"],
    answerIndex: 1
  },

  {
    question: "If 5x = 35, then x = ?",
    options: ["5", "6", "7", "8"],
    answerIndex: 2
  },
  {
    question: "What is the sum of the angles in a triangle?",
    options: ["180°", "90°", "360°", "270°"],
    answerIndex: 0
  },
  {
    question: "If a rectangle has length 8 and width 5, its area is:",
    options: ["40", "30", "35", "45"],
    answerIndex: 0
  },
  {
    question: "The perimeter of a square with side 6 is:",
    options: ["24", "18", "36", "12"],
    answerIndex: 0
  },
  {
    question: "Which fraction is the largest?",
    options: ["2/3", "3/4", "5/8", "7/10"],
    answerIndex: 1
  },

  {
    question: "If 3/4 of a number is 18, the number is:",
    options: ["24", "20", "22", "26"],
    answerIndex: 0
  },
  {
    question: "Convert 0.75 to percentage:",
    options: ["7.5%", "75%", "0.75%", "70%"],
    answerIndex: 1
  },
  {
    question: "What is 20 × 0.5?",
    options: ["5", "10", "15", "20"],
    answerIndex: 1
  },
  {
    question: "What is 2/5 + 3/10?",
    options: ["5/10", "7/10", "1/2", "3/5"],
    answerIndex: 1
  },
  {
    question: "If a = 4 and b = 5, then a² + b² = ?",
    options: ["41", "42", "40", "43"],
    answerIndex: 0
  },

  {
    question: "Which number is a perfect cube?",
    options: ["27", "16", "25", "20"],
    answerIndex: 0
  },
  {
    question: "Find the next number: 2, 4, 8, 16, ?",
    options: ["30", "32", "24", "36"],
    answerIndex: 1
  },
  {
    question: "What is the mean of 2, 4, 6, 8, 10?",
    options: ["6", "5", "7", "8"],
    answerIndex: 0
  },
  {
    question: "What is the median of 3, 7, 9, 12, 15?",
    options: ["9", "7", "12", "10"],
    answerIndex: 0
  },
  {
    question: "What is the mode of 2, 4, 4, 5, 6?",
    options: ["2", "4", "5", "6"],
    answerIndex: 1
  },

  {
    question: "If a number is increased by 20%, the new number becomes 120. Original number is:",
    options: ["100", "96", "110", "105"],
    answerIndex: 0
  },
  {
    question: "Solve: 5x - 3 = 12",
    options: ["3", "4", "5", "6"],
    answerIndex: 3
  },
  {
    question: "If the ratio of boys to girls is 3:2 and there are 30 boys, how many girls?",
    options: ["10", "15", "20", "25"],
    answerIndex: 1
  },
  {
    question: "The probability of getting heads in a single coin toss is:",
    options: ["1/2", "1/3", "1/4", "1/5"],
    answerIndex: 0
  },
  {
    question: "Which number is divisible by both 4 and 6?",
    options: ["12", "18", "20", "24"],
    answerIndex: 3
  },

  {
    question: "What is 15² - 10²?",
    options: ["125", "175", "200", "225"],
    answerIndex: 1
  },
  {
    question: "The sum of first 10 natural numbers is:",
    options: ["50", "55", "60", "45"],
    answerIndex: 1
  },
  {
    question: "A car travels 60 km in 1 hour. Its speed in m/s is:",
    options: ["16.67", "15.5", "18", "17.5"],
    answerIndex: 0
  },
  {
    question: "The simple interest on $1000 at 5% per annum for 2 years is:",
    options: ["100", "150", "200", "250"],
    answerIndex: 2
  }
],
// --------------------------------------------------------------------------------------------------------


// Economics 
// --------------------------------------------------------------------------------------------------------
"Microeconomics (Basics)": [
  {
    question: "What does Microeconomics primarily study?",
    options: ["The whole economy", "Individual markets and consumers", "Government policies", "International trade"],
    answerIndex: 1
  },
  {
    question: "Law of Demand states that, ceteris paribus, as price increases:",
    options: ["Quantity demanded increases", "Quantity demanded decreases", "Supply increases", "Income increases"],
    answerIndex: 1
  },
  {
    question: "If a good has many substitutes, its demand is said to be:",
    options: ["Elastic", "Inelastic", "Unitary", "Perfectly inelastic"],
    answerIndex: 0
  },
  {
    question: "Total revenue is calculated as:",
    options: ["Price × Quantity", "Cost × Quantity", "Profit × Quantity", "Price + Quantity"],
    answerIndex: 0
  },
  {
    question: "What is the term for the next best alternative foregone?",
    options: ["Opportunity cost", "Explicit cost", "Sunk cost", "Marginal cost"],
    answerIndex: 0
  },

  {
    question: "A demand curve generally slopes:",
    options: ["Upwards", "Downwards", "Horizontally", "Vertically"],
    answerIndex: 1
  },
  {
    question: "The point where demand equals supply is called:",
    options: ["Equilibrium", "Surplus", "Shortage", "Market failure"],
    answerIndex: 0
  },
  {
    question: "Price elasticity of demand measures:",
    options: ["Change in supply", "Responsiveness of quantity demanded to price change", "Income effect", "Substitution effect"],
    answerIndex: 1
  },
  {
    question: "If the price of a product rises and demand does not change, demand is:",
    options: ["Elastic", "Inelastic", "Unitary elastic", "Perfectly elastic"],
    answerIndex: 1
  },
  {
    question: "A normal good is one where:",
    options: ["Demand decreases as income rises", "Demand increases as income rises", "Supply decreases as income rises", "Price falls as income rises"],
    answerIndex: 1
  },

  {
    question: "Which of the following is a fixed cost?",
    options: ["Raw materials", "Rent of factory", "Wages of daily labor", "Electricity bill"],
    answerIndex: 1
  },
  {
    question: "Marginal cost is defined as:",
    options: ["Cost per unit", "Change in total cost due to one more unit produced", "Average cost", "Total revenue minus total cost"],
    answerIndex: 1
  },
  {
    question: "Perfect competition is characterized by:",
    options: ["Few sellers", "Many buyers and sellers, identical products", "Price setting firms", "Product differentiation"],
    answerIndex: 1
  },
  {
    question: "Monopoly exists when:",
    options: ["Many sellers produce similar products", "A single firm controls the market", "Firms produce differentiated goods", "Supply equals demand"],
    answerIndex: 1
  },
  {
    question: "Which curve shows total satisfaction from consuming a good?",
    options: ["Demand curve", "Utility curve", "Supply curve", "Cost curve"],
    answerIndex: 1
  },

  {
    question: "Which of the following is an example of complementary goods?",
    options: ["Tea and coffee", "Cars and petrol", "Shirts and trousers", "Bread and butter"],
    answerIndex: 3
  },
  {
    question: "Which of the following is an example of substitute goods?",
    options: ["Tea and coffee", "Pen and ink", "Shoes and socks", "Bread and butter"],
    answerIndex: 0
  },
  {
    question: "Consumer surplus is:",
    options: ["Difference between what consumer is willing to pay and what they actually pay", "Total revenue", "Total cost", "Profit"],
    answerIndex: 0
  },
  {
    question: "Law of diminishing marginal utility states that:",
    options: ["Total utility decreases with more consumption", "Marginal utility decreases as consumption increases", "Price increases with utility", "Utility is constant"],
    answerIndex: 1
  },
  {
    question: "Which of the following is NOT a factor of production?",
    options: ["Land", "Labor", "Capital", "Revenue"],
    answerIndex: 3
  },

  {
    question: "In the short run, which cost is variable?",
    options: ["Rent", "Salaries of permanent staff", "Raw material cost", "Insurance"],
    answerIndex: 2
  },
  {
    question: "Cross elasticity of demand measures:",
    options: ["Effect of price change on own demand", "Effect of price change of another good on demand", "Effect of income change on demand", "Effect of supply change on demand"],
    answerIndex: 1
  },
  {
    question: "Income elasticity of demand measures:",
    options: ["Responsiveness of demand to income changes", "Responsiveness of supply to price changes", "Elasticity of substitutes", "Change in total cost"],
    answerIndex: 0
  },
  {
    question: "A Giffen good is one where demand:",
    options: ["Increases as price falls", "Decreases as price rises", "Increases as price rises", "Remains constant"],
    answerIndex: 2
  },
  {
    question: "Average cost is calculated as:",
    options: ["Total cost ÷ Quantity", "Total revenue ÷ Quantity", "Total cost × Quantity", "Profit ÷ Quantity"],
    answerIndex: 0
  },

  {
    question: "Which market structure features product differentiation and many firms?",
    options: ["Perfect competition", "Monopolistic competition", "Oligopoly", "Monopoly"],
    answerIndex: 1
  },
  {
    question: "Which of the following is a characteristic of oligopoly?",
    options: ["Single seller", "Few large firms dominating the market", "Many small firms", "Price takers"],
    answerIndex: 1
  },
  {
    question: "Price takers are typically found in which market?",
    options: ["Monopoly", "Perfect competition", "Monopolistic competition", "Oligopoly"],
    answerIndex: 1
  },
  {
    question: "Which of the following is an implicit cost?",
    options: ["Rent paid to landlord", "Foregone salary of owner", "Wages of workers", "Raw material costs"],
    answerIndex: 1
  },
  {
    question: "A movement along the demand curve is caused by:",
    options: ["Change in consumer income", "Change in price of the good", "Change in consumer preferences", "Change in price of related goods"],
    answerIndex: 1
  },

  {
    question: "Which of the following is considered a luxury good?",
    options: ["Bread", "Car", "Rice", "Salt"],
    answerIndex: 1
  },
  {
    question: "When supply exceeds demand, the market experiences:",
    options: ["Shortage", "Equilibrium", "Surplus", "Inflation"],
    answerIndex: 2
  },
  {
    question: "Which of the following is a characteristic of a normal good?",
    options: ["Demand decreases as income increases", "Demand increases as income increases", "Demand remains constant", "Demand is unrelated to income"],
    answerIndex: 1
  },
  {
    question: "Short run in production is the period when:",
    options: ["All factors are variable", "At least one factor is fixed", "No factor is fixed", "Production is constant"],
    answerIndex: 1
  },
  {
    question: "Which curve shows minimum cost of production at each output level?",
    options: ["Average cost curve", "Total cost curve", "Marginal cost curve", "Supply curve"],
    answerIndex: 0
  },

  {
    question: "Perfectly inelastic demand means:",
    options: ["Quantity demanded changes with price", "Quantity demanded does not change with price", "Demand is highly responsive", "Demand increases as price rises"],
    answerIndex: 1
  },
  {
    question: "A firm earns normal profit when:",
    options: ["Total revenue > Total cost", "Total revenue = Total cost", "Total revenue < Total cost", "Profit is maximized"],
    answerIndex: 1
  }
],
// --------------------------------------------------------------------------------------------------------
"Macroeconomics (Basics)": [
  {
    question: "Macroeconomics primarily studies:",
    options: ["Individual markets", "The whole economy", "Consumer preferences", "Firm behavior"],
    answerIndex: 1
  },
  {
    question: "GDP stands for:",
    options: ["Gross Domestic Product", "General Domestic Price", "Government Debt Policy", "Gross Development Plan"],
    answerIndex: 0
  },
  {
    question: "Which component is included in GDP?",
    options: ["Intermediate goods", "Final goods and services", "Used goods", "Transfer payments"],
    answerIndex: 1
  },
  {
    question: "Unemployment rate measures:",
    options: ["Percentage of working age population without work but seeking", "Number of retired people", "Total labor force", "Population growth rate"],
    answerIndex: 0
  },
  {
    question: "Inflation refers to:",
    options: ["Decrease in general price level", "Increase in general price level", "Decrease in demand", "Increase in supply"],
    answerIndex: 1
  },

  {
    question: "Which organization measures inflation in most countries?",
    options: ["Central Bank", "National Statistics Office", "Ministry of Finance", "International Monetary Fund"],
    answerIndex: 1
  },
  {
    question: "Fiscal policy involves:",
    options: ["Government spending and taxation", "Interest rate changes", "Exchange rate adjustments", "Private investment decisions"],
    answerIndex: 0
  },
  {
    question: "Monetary policy is primarily implemented by:",
    options: ["Government", "Central Bank", "Private banks", "Supreme Court"],
    answerIndex: 1
  },
  {
    question: "A budget deficit occurs when:",
    options: ["Government revenue > Government spending", "Government spending > Government revenue", "Revenue = Spending", "Private investment < Public investment"],
    answerIndex: 1
  },
  {
    question: "Which of the following is a leakage from the circular flow of income?",
    options: ["Consumption", "Investment", "Taxes", "Exports"],
    answerIndex: 2
  },

  {
    question: "Aggregate demand consists of:",
    options: ["Consumption only", "Investment only", "Consumption + Investment + Government spending + Net exports", "Government spending only"],
    answerIndex: 2
  },
  {
    question: "A recession is defined as:",
    options: ["Increasing GDP for 2 consecutive quarters", "Declining GDP for 2 consecutive quarters", "High inflation", "Full employment"],
    answerIndex: 1
  },
  {
    question: "Which type of unemployment is caused by technological change?",
    options: ["Cyclical", "Structural", "Frictional", "Seasonal"],
    answerIndex: 1
  },
  {
    question: "Full employment does NOT mean zero unemployment because of:",
    options: ["Structural and frictional unemployment", "Cyclical unemployment only", "Seasonal unemployment only", "None of the above"],
    answerIndex: 0
  },
  {
    question: "Real GDP differs from nominal GDP because it is adjusted for:",
    options: ["Inflation", "Population", "Exports", "Imports"],
    answerIndex: 0
  },

  {
    question: "Which of the following is a tool of monetary policy?",
    options: ["Income tax", "Government spending", "Open market operations", "Trade tariffs"],
    answerIndex: 2
  },
  {
    question: "Expansionary fiscal policy aims to:",
    options: ["Reduce inflation", "Increase aggregate demand", "Decrease employment", "Balance the budget"],
    answerIndex: 1
  },
  {
    question: "The Consumer Price Index (CPI) measures:",
    options: ["Total GDP", "Price changes of a fixed basket of goods", "Government spending", "National income"],
    answerIndex: 1
  },
  {
    question: "Which type of unemployment rises during a recession?",
    options: ["Frictional", "Structural", "Cyclical", "Seasonal"],
    answerIndex: 2
  },
  {
    question: "Which sector contributes the largest portion to GDP in most developed economies?",
    options: ["Agriculture", "Industry", "Services", "Mining"],
    answerIndex: 2
  },

  {
    question: "Supply-side policies aim to:",
    options: ["Increase aggregate demand", "Improve production and efficiency", "Control inflation", "Reduce exports"],
    answerIndex: 1
  },
  {
    question: "The unemployment caused by people changing jobs is called:",
    options: ["Cyclical unemployment", "Frictional unemployment", "Structural unemployment", "Seasonal unemployment"],
    answerIndex: 1
  },
  {
    question: "The natural rate of unemployment includes:",
    options: ["Frictional + Structural unemployment", "Cyclical unemployment only", "Seasonal unemployment only", "Total unemployment"],
    answerIndex: 0
  },
  {
    question: "Which of the following is NOT included in GDP?",
    options: ["New cars", "Used furniture", "Government spending", "Exports"],
    answerIndex: 1
  },
  {
    question: "Stagflation is:",
    options: ["High inflation + high unemployment", "Low inflation + low unemployment", "High growth + low inflation", "Low growth + low unemployment"],
    answerIndex: 0
  },

  {
    question: "Net exports are calculated as:",
    options: ["Exports + Imports", "Exports - Imports", "Imports - Exports", "Exports × Imports"],
    answerIndex: 1
  },
  {
    question: "Which policy reduces inflation by decreasing money supply?",
    options: ["Expansionary fiscal policy", "Contractionary monetary policy", "Expansionary monetary policy", "Subsidy policy"],
    answerIndex: 1
  },
  {
    question: "GDP deflator is used to measure:",
    options: ["Economic growth", "Price level changes in the economy", "Unemployment", "Government deficit"],
    answerIndex: 1
  },
  {
    question: "Which of the following increases aggregate demand?",
    options: ["Decrease in government spending", "Increase in taxes", "Increase in consumer confidence", "Increase in interest rates"],
    answerIndex: 2
  },
  {
    question: "Which is a short-term effect of monetary expansion?",
    options: ["Higher interest rates", "Increased investment and consumption", "Reduced aggregate demand", "Reduced government spending"],
    answerIndex: 1
  },

  {
    question: "Depression is:",
    options: ["Mild economic slowdown", "Severe and prolonged recession", "Rapid economic growth", "Inflationary period"],
    answerIndex: 1
  },
  {
    question: "Which type of policy is used to stabilize the economy?",
    options: ["Counter-cyclical policy", "Pro-cyclical policy", "Laissez-faire policy", "Monopolistic policy"],
    answerIndex: 0
  },
  {
    question: "If nominal GDP rises faster than real GDP, the economy is experiencing:",
    options: ["Inflation", "Deflation", "Recession", "Full employment"],
    answerIndex: 0
  },
  {
    question: "Automatic stabilizers in an economy include:",
    options: ["Taxes and welfare programs", "Interest rate adjustments", "Open market operations", "Government investment projects"],
    answerIndex: 0
  },
  {
    question: "Which of the following measures national output over time?",
    options: ["CPI", "GDP", "PPI", "Unemployment rate"],
    answerIndex: 1
  },

  {
    question: "Monetary policy targets:",
    options: ["Tax rates", "Money supply and interest rates", "Government spending", "Trade deficits"],
    answerIndex: 1
  },
  {
    question: "Expansionary monetary policy usually involves:",
    options: ["Increasing interest rates", "Selling government bonds", "Lowering interest rates", "Increasing taxes"],
    answerIndex: 2
  },
  {
    question: "The balance of payments records:",
    options: ["Government budget only", "All economic transactions with foreign countries", "Total GDP", "Consumer spending"],
    answerIndex: 1
  },
  {
    question: "Which of the following is a macroeconomic goal?",
    options: ["Maximizing firm profit", "Price optimization of a single good", "Full employment and economic growth", "Minimizing production cost"],
    answerIndex: 2
  }
],
// --------------------------------------------------------------------------------------------------------
"Mathematics (Econ)": [
  {
    question: "If demand function is Qd = 50 - 2P, what is the quantity demanded when price is 10?",
    options: ["30", "20", "25", "40"],
    answerIndex: 0
  },
  {
    question: "If supply function is Qs = 3P - 6, what is quantity supplied at price P = 8?",
    options: ["18", "24", "20", "16"],
    answerIndex: 1
  },
  {
    question: "Find equilibrium price if Qd = 50 - 2P and Qs = 3P - 10.",
    options: ["12", "10", "8", "14"],
    answerIndex: 1
  },
  {
    question: "What is the slope of a straight-line demand curve Q = 100 - 4P?",
    options: ["-4", "4", "-25", "1/4"],
    answerIndex: 0
  },
  {
    question: "If a function is Y = 3X + 7, the marginal change in Y per unit change in X is:",
    options: ["7", "3", "1", "10"],
    answerIndex: 1
  },

  {
    question: "A consumer has a budget of $100. If the price of good X is $10 and good Y is $5, the budget line equation is:",
    options: ["10X + 5Y = 100", "5X + 10Y = 100", "X + Y = 100", "10X + 10Y = 100"],
    answerIndex: 0
  },
  {
    question: "Total cost function is TC = 50 + 5Q. What is marginal cost (MC)?",
    options: ["50", "5", "55", "5Q"],
    answerIndex: 1
  },
  {
    question: "Total revenue TR = P × Q. If P = 10 and Q = 20, TR is:",
    options: ["200", "100", "210", "220"],
    answerIndex: 0
  },
  {
    question: "If demand function is Q = 60 - 3P, price elasticity at P = 10 is:",
    options: ["0.5", "1", "1.5", "2"],
    answerIndex: 2
  },
  {
    question: "A production function is Q = L^0.5 K^0.5. What is the marginal product of labor (MPL)?",
    options: ["0.5 L^(-0.5) K^0.5", "L^0.5 K^0.5", "K^0.5", "L^(-0.5) K^0.5"],
    answerIndex: 0
  },

  {
    question: "If utility function U = X^0.5 Y^0.5, the marginal utility of X (MUx) is:",
    options: ["0.5 X^-0.5 Y^0.5", "X^0.5 Y^0.5", "Y^0.5", "X^-0.5 Y^0.5"],
    answerIndex: 0
  },
  {
    question: "A firm’s total cost function is TC = 100 + 10Q + 2Q^2. Marginal cost (MC) is:",
    options: ["10 + 2Q", "10 + 4Q", "2 + 4Q", "10 + 2Q^2"],
    answerIndex: 1
  },
  {
    question: "If Q = 20 - 2P, inverse demand function is:",
    options: ["P = 10 - 0.5Q", "P = 10 + 0.5Q", "P = 20 - 2Q", "P = 2 - 0.5Q"],
    answerIndex: 0
  },
  {
    question: "If marginal cost MC = 5 and price P = 8, profit-maximizing output condition is:",
    options: ["MC = P", "MC < P", "MC > P", "MC = 0"],
    answerIndex: 0
  },
  {
    question: "Consumer equilibrium occurs when:",
    options: ["MUx/Px = MUy/Py", "MUx = MUy", "Px = Py", "Total utility is maximum"],
    answerIndex: 0
  },

  {
    question: "If a linear supply function is Qs = 2P - 4, the supply elasticity at P = 6 is:",
    options: ["1.5", "2", "0.8", "1.2"],
    answerIndex: 3
  },
  {
    question: "If a firm’s total revenue is TR = 50Q - Q^2, marginal revenue MR is:",
    options: ["50 - 2Q", "50 + 2Q", "50 - Q", "50 + Q"],
    answerIndex: 0
  },
  {
    question: "Cobb-Douglas production function: Q = L^0.4 K^0.6. Returns to scale are:",
    options: ["Increasing", "Decreasing", "Constant", "Cannot be determined"],
    answerIndex: 0
  },
  {
    question: "If Qd = 100 - 4P and Qs = 20 + 2P, equilibrium price is:",
    options: ["10", "12", "15", "14"],
    answerIndex: 1
  },
  {
    question: "If price of good rises by 10% and demand falls by 20%, price elasticity of demand is:",
    options: ["0.5", "2", "1", "1.5"],
    answerIndex: 1
  },

  {
    question: "If the budget line is 4X + 2Y = 40, the intercept on X-axis is:",
    options: ["10", "5", "8", "12"],
    answerIndex: 0
  },
  {
    question: "A firm’s average cost is AC = TC/Q. If TC = 50 + 5Q, AC at Q = 10 is:",
    options: ["10", "10.5", "5", "15"],
    answerIndex: 1
  },
  {
    question: "Total profit is calculated as:",
    options: ["TR + TC", "TR - TC", "TR × TC", "TC - TR"],
    answerIndex: 1
  },
  {
    question: "If Qd = 60 - P and Qs = 2P, equilibrium quantity is:",
    options: ["20", "30", "25", "15"],
    answerIndex: 1
  },
  {
    question: "If MR = MC at Q = 10, the firm is:",
    options: ["Maximizing profit", "Minimizing cost", "Breaking even", "At loss"],
    answerIndex: 0
  },

  {
    question: "If U = XY, marginal rate of substitution (MRS) is:",
    options: ["Y/X", "X/Y", "XY", "X + Y"],
    answerIndex: 0
  },
  {
    question: "A production function Q = 5L^0.5 K^0.5. If L doubles, holding K constant, output:",
    options: ["Increases by √2 times", "Doubles", "Increases by 4 times", "Remains same"],
    answerIndex: 0
  },
  {
    question: "Slope of budget line depends on:",
    options: ["Prices of goods only", "Income only", "Utility", "Quantity demanded"],
    answerIndex: 0
  },
  {
    question: "Marginal product of capital (MPK) is:",
    options: ["Change in output/change in labor", "Change in output/change in capital", "Total output/capital", "Price of capital"],
    answerIndex: 1
  },
  {
    question: "If price elasticity of demand = 1, demand is called:",
    options: ["Elastic", "Inelastic", "Unitary elastic", "Perfectly inelastic"],
    answerIndex: 2
  },

  {
    question: "If total cost TC = 20 + 4Q + Q^2, what is average cost AC at Q = 5?",
    options: ["10", "9", "8", "11"],
    answerIndex: 1
  },
  {
    question: "If a firm faces perfectly elastic demand, price elasticity of demand is:",
    options: ["0", "1", "∞", "Between 0 and 1"],
    answerIndex: 2
  },
  {
    question: "If total revenue TR = 100, total cost TC = 80, profit is:",
    options: ["20", "180", "80", "100"],
    answerIndex: 0
  },
  {
    question: "If demand is Q = 50 - 2P, and price rises from 10 to 12, change in quantity demanded is:",
    options: ["4", "6", "2", "8"],
    answerIndex: 1
  }
], 
// --------------------------------------------------------------------------------------------------------
"English (Econ)": [
  {
    question: "The term 'inflation' in economics refers to:",
    options: ["A general increase in prices", "A decrease in unemployment", "A rise in GDP", "A decline in imports"],
    answerIndex: 0
  },
  {
    question: "GDP stands for:",
    options: ["Gross Domestic Product", "General Domestic Price", "Government Debt Policy", "Global Demand Projection"],
    answerIndex: 0
  },
  {
    question: "Which of the following is the best synonym for 'liquidity'?",
    options: ["Availability of cash", "Economic growth", "Government deficit", "Trade balance"],
    answerIndex: 0
  },
  {
    question: "A 'budget deficit' occurs when:",
    options: ["Government spending exceeds revenue", "Revenue exceeds spending", "Taxes are zero", "Imports exceed exports"],
    answerIndex: 0
  },
  {
    question: "The phrase 'opportunity cost' means:",
    options: ["The next best alternative foregone", "Total expenses", "Total revenue", "Profit earned"],
    answerIndex: 0
  },

  {
    question: "The word 'equilibrium' in economics usually refers to:",
    options: ["Market balance where supply equals demand", "Economic growth", "Government spending", "Inflation rate"],
    answerIndex: 0
  },
  {
    question: "Which word best describes a 'monopoly'?",
    options: ["Single seller", "Many sellers", "High competition", "Consumer choice"],
    answerIndex: 0
  },
  {
    question: "The term 'aggregate demand' includes:",
    options: ["Total demand in the economy", "Demand for a single product", "Government expenditure only", "Exports only"],
    answerIndex: 0
  },
  {
    question: "Which term describes 'an increase in the general price level'?",
    options: ["Deflation", "Inflation", "Recession", "Equilibrium"],
    answerIndex: 1
  },
  {
    question: "The phrase 'fiscal policy' refers to:",
    options: ["Government spending and taxation", "Interest rate changes", "Exchange rate adjustments", "Private investment decisions"],
    answerIndex: 0
  },

  {
    question: "The word 'subsidy' means:",
    options: ["Financial aid provided by government", "High taxes", "Loan from bank", "Price increase mechanism"],
    answerIndex: 0
  },
  {
    question: "The term 'recession' is best defined as:",
    options: ["Decline in economic activity", "High growth period", "Increase in government revenue", "Price stability"],
    answerIndex: 0
  },
  {
    question: "The phrase 'opportunity cost' is closest in meaning to:",
    options: ["Lost benefit from the next best alternative", "Total production cost", "Market price", "Government deficit"],
    answerIndex: 0
  },
  {
    question: "Which word best describes a 'Giffen good'?",
    options: ["Demand rises as price rises", "Demand falls as price rises", "Luxury good", "Inferior good"],
    answerIndex: 0
  },
  {
    question: "The phrase 'marginal cost' means:",
    options: ["Cost of producing one additional unit", "Total cost divided by units", "Fixed cost", "Profit per unit"],
    answerIndex: 0
  },

  {
    question: "The word 'elasticity' in economics refers to:",
    options: ["Responsiveness of quantity demanded or supplied to changes in price", "Firm's profit", "Government expenditure", "Total revenue"],
    answerIndex: 0
  },
  {
    question: "The term 'utility' means:",
    options: ["Satisfaction derived from consuming a good or service", "Total revenue", "Production cost", "Investment income"],
    answerIndex: 0
  },
  {
    question: "The phrase 'market failure' describes:",
    options: ["Situation where market does not allocate resources efficiently", "High profits for firms", "Balanced government budget", "Low inflation"],
    answerIndex: 0
  },
  {
    question: "Which term describes 'all economic transactions with foreign countries'?",
    options: ["GDP", "Balance of payments", "Inflation", "Fiscal policy"],
    answerIndex: 1
  },
  {
    question: "The word 'oligopoly' means:",
    options: ["Market dominated by few large firms", "Many small firms", "Single seller", "Perfect competition"],
    answerIndex: 0
  },

  {
    question: "The phrase 'consumer surplus' is:",
    options: ["Difference between what a consumer is willing to pay and what they actually pay", "Total revenue minus total cost", "Profit of firm", "Government subsidy"],
    answerIndex: 0
  },
  {
    question: "The term 'deflation' refers to:",
    options: ["Decrease in general price level", "Increase in unemployment", "Economic growth", "Government deficit"],
    answerIndex: 0
  },
  {
    question: "The phrase 'aggregate supply' means:",
    options: ["Total supply of goods and services in the economy", "Supply of a single good", "Government revenue", "Exports only"],
    answerIndex: 0
  },
  {
    question: "The word 'monetary policy' refers to:",
    options: ["Central bank actions to control money supply and interest rates", "Government taxation policy", "Trade regulations", "Consumer choice"],
    answerIndex: 0
  },
  {
    question: "Which term describes 'increase in total output of goods and services'?",
    options: ["Economic growth", "Inflation", "Recession", "Deflation"],
    answerIndex: 0
  },

  {
    question: "The phrase 'structural unemployment' refers to:",
    options: ["Unemployment caused by mismatch of skills and jobs", "Temporary job change", "Cyclical unemployment", "Seasonal unemployment"],
    answerIndex: 0
  },
  {
    question: "The word 'scarcity' in economics means:",
    options: ["Limited resources for unlimited wants", "High prices", "Full employment", "Economic growth"],
    answerIndex: 0
  },
  {
    question: "The phrase 'trade-off' in economics means:",
    options: ["Giving up one thing to get another", "Increasing government spending", "Reducing prices", "Maximizing profit"],
    answerIndex: 0
  },
  {
    question: "The word 'substitute' good refers to:",
    options: ["A good that can replace another", "A complementary good", "Luxury good", "Inferior good"],
    answerIndex: 0
  },
  {
    question: "The phrase 'price ceiling' means:",
    options: ["Maximum legal price set by government", "Minimum legal price", "Equilibrium price", "Market-determined price"],
    answerIndex: 0
  },

  {
    question: "The term 'opportunity loss' refers to:",
    options: ["Benefit lost from not choosing the best alternative", "Production cost", "Government deficit", "Profit earned"],
    answerIndex: 0
  },
  {
    question: "Which word is closest in meaning to 'marginal revenue'?",
    options: ["Revenue from selling one extra unit", "Total cost", "Profit per unit", "Fixed cost"],
    answerIndex: 0
  },
  {
    question: "The phrase 'full employment' means:",
    options: ["All available resources are utilized efficiently", "Zero unemployment", "High inflation", "Balanced budget"],
    answerIndex: 0
  },
  {
    question: "The word 'tariff' means:",
    options: ["Tax on imports", "Subsidy for exports", "Government expenditure", "Price control"],
    answerIndex: 0
  },
  {
    question: "The phrase 'fiscal stimulus' refers to:",
    options: ["Government actions to increase aggregate demand", "Interest rate hike", "Inflation control", "Price ceiling"],
    answerIndex: 0
  },

  {
    question: "The term 'cyclical unemployment' refers to:",
    options: ["Unemployment due to economic downturns", "Job change", "Mismatch of skills", "Seasonal job variation"],
    answerIndex: 0
  },
  {
    question: "The phrase 'price elasticity' means:",
    options: ["Responsiveness of quantity demanded or supplied to price change", "Total revenue", "Government spending", "Profit per unit"],
    answerIndex: 0
  },
  {
    question: "The word 'inferior good' means:",
    options: ["Demand decreases as income rises", "Demand increases as income rises", "High quality good", "Substitute good"],
    answerIndex: 0
  },
  {
    question: "Which term describes 'government intervention to stabilize economy'?",
    options: ["Counter-cyclical policy", "Pro-cyclical policy", "Monopoly control", "Price floor"],
    answerIndex: 0
  },
  {
    question: "The phrase 'aggregate expenditure' refers to:",
    options: ["Total spending in an economy", "Government spending only", "Exports only", "Consumption only"],
    answerIndex: 0
  }
],
// --------------------------------------------------------------------------------------------------------
Statistics: [
  {
    question: "Mean of the numbers 2, 4, 6, 8, 10 is:",
    options: ["6", "5", "7", "8"],
    answerIndex: 0
  },
  {
    question: "Median of 3, 7, 9, 12, 15 is:",
    options: ["9", "7", "12", "10"],
    answerIndex: 0
  },
  {
    question: "Mode of 2, 4, 4, 5, 7 is:",
    options: ["4", "2", "5", "7"],
    answerIndex: 0
  },
  {
    question: "Range of 3, 8, 15, 7, 10 is:",
    options: ["12", "8", "15", "10"],
    answerIndex: 0
  },
  {
    question: "Variance measures:",
    options: ["Spread of data", "Central value", "Mode", "Sum of data"],
    answerIndex: 0
  },
  {
    question: "Standard deviation is the square root of:",
    options: ["Variance", "Mean", "Median", "Range"],
    answerIndex: 0
  },
  {
    question: "If probability of an event is 0.2, the probability of its complement is:",
    options: ["0.8", "0.2", "0.5", "1.2"],
    answerIndex: 0
  },
  {
    question: "A histogram represents:",
    options: ["Frequency distribution", "Scatter plot", "Correlation", "Probability"],
    answerIndex: 0
  },
  {
    question: "The correlation coefficient r ranges between:",
    options: ["-1 to 1", "0 to 1", "-2 to 2", "-0.5 to 0.5"],
    answerIndex: 0
  },
  {
    question: "Which measure is not affected by extreme values?",
    options: ["Median", "Mean", "Range", "Standard deviation"],
    answerIndex: 0
  },

  {
    question: "The sum of probabilities for all outcomes in sample space is:",
    options: ["1", "0", "Probability of event", "Depends on distribution"],
    answerIndex: 0
  },
  {
    question: "A box plot shows:",
    options: ["Quartiles and outliers", "Mean only", "Frequency table", "Probability distribution"],
    answerIndex: 0
  },
  {
    question: "In normal distribution, mean = median =:",
    options: ["Mode", "Variance", "Standard deviation", "Skewness"],
    answerIndex: 0
  },
  {
    question: "The probability of mutually exclusive events A and B is:",
    options: ["P(A) + P(B)", "P(A) * P(B)", "P(A) - P(B)", "P(A)/P(B)"],
    answerIndex: 0
  },
  {
    question: "The sum of deviations from the mean is always:",
    options: ["0", "1", "Mean", "Variance"],
    answerIndex: 0
  },

  {
    question: "Coefficient of variation is defined as:",
    options: ["Standard deviation / Mean", "Mean / Standard deviation", "Variance / Mean", "Range / Mean"],
    answerIndex: 0
  },
  {
    question: "If two events are independent, then:",
    options: ["P(A ∩ B) = P(A) × P(B)", "P(A ∩ B) = 0", "P(A ∪ B) = P(A) + P(B)", "P(A|B) = 0"],
    answerIndex: 0
  },
  {
    question: "Skewness measures:",
    options: ["Asymmetry of distribution", "Spread", "Central tendency", "Correlation"],
    answerIndex: 0
  },
  {
    question: "Kurtosis measures:",
    options: ["Peakedness of distribution", "Spread", "Mean", "Median"],
    answerIndex: 0
  },
  {
    question: "For a standard normal distribution, mean = 0 and standard deviation =:",
    options: ["1", "0", "Mean", "Variance"],
    answerIndex: 0
  },

  {
    question: "Z-score represents:",
    options: ["Number of standard deviations from mean", "Median value", "Mode", "Range"],
    answerIndex: 0
  },
  {
    question: "Probability density function applies to:",
    options: ["Continuous random variables", "Discrete random variables", "Both", "None"],
    answerIndex: 0
  },
  {
    question: "The expected value of a random variable is:",
    options: ["Weighted average of all outcomes", "Median", "Mode", "Variance"],
    answerIndex: 0
  },
  {
    question: "A sample is:",
    options: ["Subset of population", "Whole population", "All possible outcomes", "Random variable"],
    answerIndex: 0
  },
  {
    question: "Population variance is denoted by:",
    options: ["σ²", "s²", "μ", "x̄"],
    answerIndex: 0
  },

  {
    question: "Sample variance is denoted by:",
    options: ["s²", "σ²", "μ", "x̄"],
    answerIndex: 0
  },
  {
    question: "Probability of at least one event happening = 1 -",
    options: ["Probability of none occurring", "Probability of all occurring", "Probability of single event", "None of the above"],
    answerIndex: 0
  },
  {
    question: "Which is a discrete probability distribution?",
    options: ["Binomial", "Normal", "Exponential", "Uniform (continuous)"],
    answerIndex: 0
  },
  {
    question: "Which is a continuous probability distribution?",
    options: ["Normal", "Binomial", "Poisson", "Geometric"],
    answerIndex: 0
  },
  {
    question: "Covariance measures:",
    options: ["Relationship between two variables", "Variance", "Mean", "Skewness"],
    answerIndex: 0
  },

  {
    question: "A 95% confidence interval means:",
    options: ["95% probability true mean lies within interval", "Mean = 95", "95% chance of sample mean", "None of above"],
    answerIndex: 0
  },
  {
    question: "Type I error occurs when:",
    options: ["Null hypothesis is rejected although true", "Null hypothesis accepted although false", "Correct decision", "Alternative hypothesis true"],
    answerIndex: 0
  },
  {
    question: "Type II error occurs when:",
    options: ["Null hypothesis accepted although false", "Null hypothesis rejected although true", "Correct decision", "Probability of success"],
    answerIndex: 0
  },
  {
    question: "P-value is:",
    options: ["Probability of obtaining result at least as extreme given null hypothesis is true", "Probability null is true", "Mean of data", "Variance of sample"],
    answerIndex: 0
  },
  {
    question: "A 2×2 contingency table is used for:",
    options: ["Categorical variables", "Continuous variables", "Regression analysis", "Z-test"],
    answerIndex: 0
  },

  {
    question: "A Poisson distribution is used for:",
    options: ["Count of events in fixed interval", "Continuous measurements", "Mean calculation", "Correlation analysis"],
    answerIndex: 0
  },
  {
    question: "Which measure of central tendency is best for skewed data?",
    options: ["Median", "Mean", "Mode", "Range"],
    answerIndex: 0
  },
  {
    question: "In a uniform distribution, all outcomes are:",
    options: ["Equally likely", "Not equally likely", "Increasing", "Decreasing"],
    answerIndex: 0
  },
  {
    question: "Cumulative frequency distribution helps in:",
    options: ["Finding percentiles", "Mean only", "Variance only", "Correlation only"],
    answerIndex: 0
  },
  {
    question: "Probability of independent events A and B occurring together is:",
    options: ["P(A) × P(B)", "P(A) + P(B)", "P(A) / P(B)", "P(A) - P(B)"],
    answerIndex: 0
  }
], 
// --------------------------------------------------------------------------------------------------------
"Verbal Reasoning (Econ)": [
  {
    question: "Which word is closest in meaning to 'scarcity'?",
    options: ["Limited resources", "High prices", "Economic growth", "Full employment"],
    answerIndex: 0
  },
  {
    question: "The term 'opportunity cost' refers to:",
    options: ["Next best alternative foregone", "Total profit", "Government spending", "Market equilibrium"],
    answerIndex: 0
  },
  {
    question: "A synonym for 'inflation' is:",
    options: ["Rising prices", "Economic slowdown", "Government deficit", "High unemployment"],
    answerIndex: 0
  },
  {
    question: "The word 'monopoly' means:",
    options: ["Single seller dominating the market", "Many small competitors", "Price competition", "Free market equilibrium"],
    answerIndex: 0
  },
  {
    question: "The phrase 'aggregate demand' best describes:",
    options: ["Total demand in an economy", "Demand for a single product", "Government expenditure only", "Exports only"],
    answerIndex: 0
  },

  {
    question: "Which term is closest to 'elasticity' in economics?",
    options: ["Responsiveness to price changes", "Total profit", "Government spending", "Income level"],
    answerIndex: 0
  },
  {
    question: "The word 'recession' refers to:",
    options: ["Decline in economic activity", "High growth", "Price stability", "Government surplus"],
    answerIndex: 0
  },
  {
    question: "A 'budget deficit' occurs when:",
    options: ["Government spending exceeds revenue", "Revenue exceeds spending", "Taxes are zero", "Exports exceed imports"],
    answerIndex: 0
  },
  {
    question: "The phrase 'fiscal policy' is about:",
    options: ["Government taxation and spending", "Central bank interest rates", "Private investment", "Consumer preferences"],
    answerIndex: 0
  },
  {
    question: "Which word means 'financial support from the government'?",
    options: ["Subsidy", "Tariff", "Loan", "Debt"],
    answerIndex: 0
  },

  {
    question: "Which term is closest to 'equilibrium price'?",
    options: ["Price where quantity demanded equals quantity supplied", "Maximum price allowed", "Minimum wage", "Government tax rate"],
    answerIndex: 0
  },
  {
    question: "A synonym for 'unemployment' is:",
    options: ["Joblessness", "Inflation", "Economic growth", "Profit maximization"],
    answerIndex: 0
  },
  {
    question: "The word 'deflation' refers to:",
    options: ["Decrease in general price level", "Increase in GDP", "Government revenue", "Market surplus"],
    answerIndex: 0
  },
  {
    question: "Which term describes 'benefit lost from not choosing the best alternative'?",
    options: ["Opportunity cost", "Total cost", "Consumer surplus", "Price ceiling"],
    answerIndex: 0
  },
  {
    question: "The phrase 'market failure' means:",
    options: ["Market cannot allocate resources efficiently", "Prices are rising", "Government revenue is high", "Exports exceed imports"],
    answerIndex: 0
  },

  {
    question: "The word 'tariff' refers to:",
    options: ["Tax on imports", "Subsidy for exports", "Government spending", "Price ceiling"],
    answerIndex: 0
  },
  {
    question: "The phrase 'full employment' means:",
    options: ["All available resources are efficiently utilized", "Zero unemployment", "High inflation", "Balanced budget"],
    answerIndex: 0
  },
  {
    question: "Which word describes 'government actions to increase spending and reduce taxes to stimulate economy'?",
    options: ["Fiscal stimulus", "Monetary tightening", "Price ceiling", "Trade barrier"],
    answerIndex: 0
  },
  {
    question: "The phrase 'cyclical unemployment' means:",
    options: ["Unemployment due to economic downturns", "Seasonal job variation", "Mismatch of skills", "Temporary job change"],
    answerIndex: 0
  },
  {
    question: "A synonym for 'utility' is:",
    options: ["Satisfaction or benefit from consuming a good", "Total revenue", "Profit", "Cost of production"],
    answerIndex: 0
  },

  {
    question: "Which term refers to 'demand for one good increases when price of another rises'?",
    options: ["Substitute good", "Complementary good", "Luxury good", "Inferior good"],
    answerIndex: 0
  },
  {
    question: "Which word means 'revenue from selling one extra unit'?",
    options: ["Marginal revenue", "Total revenue", "Profit", "Price"],
    answerIndex: 0
  },
  {
    question: "The term 'aggregate supply' means:",
    options: ["Total goods and services produced in economy", "Supply of single good", "Exports only", "Government expenditure only"],
    answerIndex: 0
  },
  {
    question: "The phrase 'price ceiling' is:",
    options: ["Maximum legal price set by government", "Minimum legal price", "Equilibrium price", "Market price"],
    answerIndex: 0
  },
  {
    question: "The word 'inferior good' means:",
    options: ["Demand falls as income rises", "Demand rises as income rises", "Luxury product", "Complementary good"],
    answerIndex: 0
  },

  {
    question: "Which term means 'market dominated by few large firms'?",
    options: ["Oligopoly", "Monopoly", "Perfect competition", "Monopsony"],
    answerIndex: 0
  },
  {
    question: "The phrase 'consumer surplus' refers to:",
    options: ["Difference between willingness to pay and actual price", "Total cost", "Profit per unit", "Government tax revenue"],
    answerIndex: 0
  },
  {
    question: "A synonym for 'trade-off' is:",
    options: ["Giving up one thing to gain another", "Maximizing revenue", "Reducing cost", "Increasing output"],
    answerIndex: 0
  },
  {
    question: "Which word refers to 'price responsiveness of quantity demanded'?",
    options: ["Price elasticity", "Profit margin", "Revenue", "Fiscal deficit"],
    answerIndex: 0
  },
  {
    question: "The phrase 'structural unemployment' means:",
    options: ["Unemployment caused by mismatch of skills and jobs", "Temporary job change", "Seasonal job variation", "Cyclical unemployment"],
    answerIndex: 0
  },

  {
    question: "The word 'stimulus' in economics refers to:",
    options: ["Government policy to boost economic activity", "Interest rate hike", "Price reduction", "Trade restriction"],
    answerIndex: 0
  },
  {
    question: "The phrase 'opportunity loss' refers to:",
    options: ["Benefit lost from not choosing the best alternative", "Total production cost", "Government revenue", "Profit earned"],
    answerIndex: 0
  },
  {
    question: "Which term is closest to 'natural rate of unemployment'?",
    options: ["Unemployment from frictional and structural causes", "Zero unemployment", "Cyclical unemployment only", "Seasonal unemployment only"],
    answerIndex: 0
  },
  {
    question: "The phrase 'perfectly elastic demand' means:",
    options: ["Quantity demanded changes infinitely with price", "No change in quantity demanded", "Demand rises with price", "Demand falls slightly with price"],
    answerIndex: 0
  },
  {
    question: "A synonym for 'marginal cost' is:",
    options: ["Cost of producing one extra unit", "Total cost", "Average cost", "Fixed cost"],
    answerIndex: 0
  },

  {
    question: "The phrase 'balance of payments' refers to:",
    options: ["All economic transactions with foreign countries", "Government budget", "GDP only", "Consumer expenditure"],
    answerIndex: 0
  },
  {
    question: "The term 'subsidy' refers to:",
    options: ["Government financial support to producers or consumers", "High taxation", "Loan from private banks", "Trade deficit"],
    answerIndex: 0
  },
  {
    question: "Which word is closest in meaning to 'profit maximization'?",
    options: ["Firm’s goal to earn highest profit", "Reducing costs only", "Increasing output only", "Minimizing taxes"],
    answerIndex: 0
  },
  {
    question: "The phrase 'counter-cyclical policy' refers to:",
    options: ["Government measures to stabilize economy", "Pro-cyclical policy", "Market regulation", "Trade policy"],
    answerIndex: 0
  }
],
// --------------------------------------------------------------------------------------------------------
 
};

export const mcqsBySubject = (subjectName = "Subject") => {
  const questions = mcqData[subjectName];
  if (questions && questions.length > 0) {
    return questions.map((q, i) => ({
      id: i + 1,
      ...q,
    }));
  }

 
};
