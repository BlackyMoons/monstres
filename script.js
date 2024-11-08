// Listes de traits pour générer des descriptions aléatoires
const types = ["licorne", "dragon", "monstre câlin", "fantôme licorne" , "fantôme", "vampire", "gnome", "leprechaun", "chupacabra", "fée", "vouivre", "dahu", "Licorne galactique", "Dragon des marais", "Monstre câlin","Trtoll des bois", "Phénix de cristal", "Serpent de l’ombre", "Golem de roche", "Spectre étincelant", "Licorne mécanique", "Chat-fantôme", "Oiseau de feu", "Kraken miniature", "Licorne aquatique", "Crocodile rêveur", "Monstre lunaire", "cyclope", "une plante carnivore", "troll", "sirène", "corbeau", "squelette", "une grosse limace", "une momie", "poupée vaudou", "nain de jardin", "monstre des marais", "krepers", "endermans", "un robot", "une citrouille", "dragon", "boss warden", "wither squelette", "pieuvre", "tête de mort", "une chauve-souris", "loup", "hibou", "un pantin", "une licorne zombie", "une licorne chibi", "léviathan", "kappa", "diablotin", "génie", "elfe", "cecaelia", "bigfoot", "satyre", "qilin", "pégase", "ophiotauros", "minotaure", "jackalope", "ichtyocentaure", "hippalectryon", "cuyancua", "catoblépas", "loup-garou", "tatzelwurm", "sphinx", "orthos", "nekomata", "merlion", "manticore", "kludde", "kitsune", "enfield", "cu-sith", "chimère", "cerbère", "aralez", "vouivre", "quetzalcoatl", "naga", "mothman", "méduse", "hydre", "hippocampe", "harpie", "griffon", "cthulhu", "cocatrix", "basilic", "aqrabuamelu"];
     

const tailles = ["minuscule", "gigantesque", "moyen mais trapu", "élancé", "diforme", "bossu", "Immense et imposant", "Minuscule mais effrayant", "De la taille d'un doigt", "Plus grand qu’une maison", "Rondouillard", "Long et serpentin", "Trapus et costauds", "Élancé et majestueux", "En forme de boule", "En forme de nuage", "Gigantesque comme une montagne", "Enveloppé de fumée", "Transparent et éthéré", "En forme de diamant", "poillu", "avec de grand bras", "avec de longue jambe", "effrayant", "plusieurs pattes", "avec des yeux sans pupilles", "de gros yeux", "de grandes oreilles", "un tout petit nez", "un gros nez", "avec de grandes mains", "de grans pieds", "ailes de papillons trouées"];
const couleurs = ["rose à paillettes", "écaille argentée", "arc-en-ciel pastel", "multicolore", "rose bonbons", "en noir et blanc", "Bleu phosphorescent", "Vert écailleux", "Rouge rubis", "Noir de nuit", "Violet mystique", "Arc-en-ciel changeant", "Bronze antique", "Doré scintillant", "Cuivre patiné", "Effet miroir", "Violet électrique", "Rose à paillettes", "Teinté de brume", "Transparent comme le cristal", "Jaune pétillant", "Fumé argenté"];
const emotions = ["joyeux", "mystérieux", "grognon", "rêveur", "Joyeux mais un peu troublant", "Grognon mais attachant", "Curieux et intrépide", "Mystérieux et insondable", "Drôle mais très timide", "Calme et apaisant", "Hypnotisé par les étoiles", "Rêveur et mélancolique", "Protecteur des faibles", "Généreux mais capricieux", "Légèrement sarcastique", "Bavard et rieur", "Malin et taquin", "Courageux mais peureux", "Serein comme un sage"];
const accessoires = ["une corne en spirale", "des sabots dorés", "une queue étoilée", "des ailes en plumes dorées", "chevelure enflammée", "avec un ours en peluche", "des pustules", "une faux", "le nez qui coule", "un balais de sorcière", "Corne en cristal", "Collier d’étoiles", "Queue en forme de fleur", "Plumes scintillantes", "Yeux en diamant", "Griffes de rubis", "Oreilles longues et pointues", "Scintillement d’écailles", "Cape invisible", "Ailes de chauve-souris", "Tache de peinture", "Anneau lumineux autour du cou", "Queue en tire-bouchon", "Petit chapeau de sorcier", "Lanterne suspendue à la corne", "balais de sorcière", "queue de sirène", "tentacules", "queue de serpent", "bonnet de gnome"];



// Fonction pour choisir un élément aléatoire dans un tableau
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Fonction qui génère la description aléatoire
function generateMonsterDescription() {
    const type = getRandomElement(types);
    const taille = getRandomElement(tailles);
    const couleur = getRandomElement(couleurs);
    const emotion = getRandomElement(emotions);
    const accessoire = getRandomElement(accessoires);

    return `Voici un ${type} ${taille} de couleur ${couleur}, qui est toujours ${emotion} et porte ${accessoire}.`;
}

// Action au clic sur le bouton
document.getElementById("generate-button").onclick = () => {
    document.getElementById("monster-description").innerText = generateMonsterDescription();
    
    // Jouer le son
    const sound = document.getElementById("magic-sound");
    sound.volume = 0.3; // Ajuste le volume
    sound.play();
};

