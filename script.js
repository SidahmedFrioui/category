// JSON data
let translations = {
    "C1": "Électricité",
    "C2": "Plomberie",
    "C3": "Réseau",
    "C4": "Réparation électroménager",
    "C5": "Installateur d'alarme",
    "C6": "Installateur parabole",
    "C7": "Menuiserie",
    "C8": "Ferronnerie",
    "C9": "Paysagiste",
    "C10": "Architecture & conception",
    "C11": "Déménagement",
    "C12": "Installation ascenseur",
    "C13": "Hammam & piscine",
    "C14": "Vitrerie",
    "C15": "Maçonnerie",
    "C16": "Construction maison",
    "C17": "Façade & publicité",
    "C18": "Plâtre",
    "C19": "Peinture & décoration",
    "C20": "Carrelage",
    "C21": "Bricoleur",
    "C22": "Plaques BA13",
    "C23": "Installateur climatiseur",
    "C24": "Chauffage",
    "C25": "Étanchéité",
    "C26": "Rénovation appartement et maison",
    "C27": "Cuisine équipée",
    "C28": "Construction métallique",
    "C29": "Escaliers & rampes",
    "C30": "Dépannage auto",
    "C31": "Mécanicien automobile",
    "C32": "Scanner auto",
    "C33": "Électricien auto",
    "C34": "Photographe professionnel",
    "C35": "Décorateur mariage et évenement",
    "C36": "Couture",
    "C37": "Cuisinier",
    "C38": "Salon de coiffure femme",
    "C39": "Coiffeur",
    "C40": "Societe de nettoyage",
    "C41": "Ponçage et lustrage",
    "C42": "Femme de ménage",
    "C43": "Réparation téléphonee",
    "C44": "Réparation informatique",
    "C45": "Installateur chaudière gaz",
    "C46": "Marbrier",
    "C47": "Installation caméra de surveillance",
    "C48": "Installation interphone et visiophone",
    "C49": "Réparation parabole",
    "C50": "Cuisiniste",
    "C51": "Réparation ascenseur",
    "C52": "Bureau d'étude d'architecture",
    "C53": "Architecte d'intérieur",
    "C54": "Entreprise de construction",
    "C55": "Charpentier bois",
    "C56": "Location engin de chantier",
    "C57": "Location échafaudage",
    "C58": "Location groupe électrogène",
    "C59": "Location nacelle",
    "C60": "Location monte-charge",
    "C61": "Location Manitou",
    "C62": "Jardinier",
    "C63": "Installateur panneaux solaires",
    "C64": "Pergola spécialiste",
    "C65": "Monocouche spécialiste",
    "C66": "Panneaux sandwich",
    "C67": "Alucobond spécialiste",
    "C68": "Menuisier bois",
    "C69": "Menuisier PVC",
    "C70": "Menuisier aluminium",
    "C71": "Soudeur",
    "C72": "Serrurier",
    "C73": "Spécialiste en inox",
    "C74": "Portail et rideau électrique",
    "C75": "Réparation télévision",
    "C76": "Réparation machine à laver",
    "C77": "Réparation climatiseur",
    "C78": "Réparation réfrigérateur",
    "C79": "Réparateur chauffage",
    "C80": "Réparateur four",
    "C81": "Réparation lave-vaisselle",
    "C82": "Réparation chaudière",
    "C83": "Réparation micro-ondes",
    "C84": "Réparation machine à café",
    "C85": "Réparation chauffe-eau",
    "C86": "Installateur lave-vaisselle",
    "C87": "Installateur machine à laver",
    "C88": "Réparateur chauffage",
    "C89": "Technicien froid et climatisation",
    "C90": "Chambre froide spécialiste",
    "C91": "Réparation imprimante",
    "C92": "Réparation PC",
    "C93": "Installateur Windows",
    "C94": "Installateur imprimante",
    "C95": "Installateur réseau informatique",
    "C96": "Réparation iPhone",
    "C97": "Réparation serrure voiture",
    "C98": "Société de déménagement",
    "C99": "Déménageur",
    "C100": "Transporteur",
    "C101": "Location de voiture",
    "C102": "Location de jet-ski",
    "C103": "Location de camion",
    "C104": "Location fourgon",
    "C105": "Location bateau",
    "C106": "Médecin à domicile",
    "C107": "Garde malade",
    "C108": "Infirmier à domicile",
    "C109": "Soins à domicile",
    "C110": "Nounou",
    "C111": "Esthéticienne",
    "C112": "Ongleriste",
    "C113": "Maquilleuse",
    "C114": "Institut de beauté",
    "C115": "Photographie de mariage",
    "C116": "Traiteur",
    "C117": "Traiteur mariage",
    "C118": "Cameraman",
    "C119": "Pâtissier",
    "C120": "Boîte de communication",
    "C121": "Agence de publicité",
    "C122": "Location costume",
    "C123": "Location robes de soirée",
    "C124": "Location tenues traditionnelles",
    "C125": "Location caftan",
    "C126": "Location appartement",
    "C127": "Location studio",
    "C128": "Location villa",
    "C129": "Location local",
    "C130": "Location bungalow",
    "C131": "Location chapiteau",
    "C132": "Location hangar",
    "C133": "Agence immobilière"
};

// Function to handle translation
function translateCategories() {
    const input = document.getElementById("category-code").value.trim();
    const output = document.getElementById("translation-output");

    // Split the input into an array of codes (by space or comma)
    const categoryCodes = input.split(/[\s,]+/);

    // Map each code to its translation or "Introuvable" if not found
    const translationsList = categoryCodes.map(code => {
        code = code.toUpperCase()
        if (translations[code]) {
            return `${code}: ${translations[code]}`;
        } else if (code == '' || code == ' ') {
            return;
        } else {
            return `${code}: Introuvable`;
        }
    });

    // Join the translations into a single string with line breaks and display it
    output.textContent = translationsList.join("\n");
    output.style.color = "black";
    output.style.fontWeight = "bold";
}

// Event listener for the button
document.getElementById("translate-btn").addEventListener("click", translateCategories);

// Event listener for the clear button
document.getElementById("clear-btn").addEventListener("click", () => {
    document.getElementById("category-code").value = ""; // Clear input field
    document.getElementById("translation-output").innerHTML = ""; // Clear output
});

// Restrict input to only "C", numbers, spaces, and commas
document.getElementById("category-code").addEventListener("input", (e) => {
    const inputField = e.target;

    // Replace any character that is not "C", digits, spaces, or commas
    inputField.value = inputField.value.replace(/[^C0-9, ]/gi, "");
});

// Event listener for Enter key press
document.getElementById("category-code").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        translateCategories();
    }
});