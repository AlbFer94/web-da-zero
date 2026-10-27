
// ==========================================
// 1. Dati per le card della sezione Ludoteca ("Come Funziona la Serata")
// ==========================================
export const ludotecaSteps = [
    {
        step: "01",
        title: "Scegli la Durata",
        description: "Tavolo riservato da 2 a 4 ore con sedute ergonomiche e spazio dedicato alla plancia."
    },
    {
        step: "02",
        title: "Chiedi al Game Master",
        description: "Niente manuali da 40 pagine: Il nostro sommelier del gioco vi spiega le regole in 5 minuti."
    },
    {
        step: "03",
        title: 'Snack "Salva-Carte"',
        description: "Finger food studiato appositamente per non ungere le carte, con comodi sottobicchieri anti-rovesciamento."
    },
    {
        step: "04",
        title: "Tira i Dadi e Rilassati",
        description: "Luci calde, playlist lo-fi e caffè filtro rifornito regolarmente al tavolo."
    }
];

// ==========================================
// 2. Dati per le card dei giochi nel Carosello ("I Giochi Più Amati")
// ==========================================
export const carouselGames = [
    {
        id: "catan",
        title: "Catan",
        badge: "Strategia & Commercio",
        description: "Commercia, costruisci ed espandi il tuo insediamento davanti a una tazza di specialty coffee.",
        image: "../assets/img/catan.jpg",
        alt: "Clienti che giocano a Catan al bistrò"
    },
    {
        id: "wingspan",
        title: "Wingspan",
        badge: "Engine Building & Relax",
        description: "Attira le specie più affascinanti nella tua riserva naturale sorseggiando un rilassante matcha latte.",
        image: "../assets/img/wingspan.jpg",
        alt: "Clienti che giocano a Wingspan al bistrò"
    },
    {
        id: "ticket-to-ride",
        title: "Ticket to Ride",
        badge: "Avventura su Rotaia",
        description: "Collega le capitali su rotaia e completa i tuoi itinerari segreti tra risate e snack salva-carte.",
        image: "../assets/img/ticket-to-ride.jpg",
        alt: "Clienti che giocano a Ticket to Ride al bistrò"
    },
    {
        id: "terraforming-mars",
        title: "Terraforming Mars",
        badge: "Fantascienza & Strategia",
        description: "Guida una corporazione per rendere abitabile il pianeta rosso in una serata di pura strategia ed espresso d'autore.",
        image: "../assets/img/terraforming-mars.jpg",
        alt: "Clienti che giocano a Terraforming Mars al bistrò"
    },
    {
        id: "codenames",
        title: "Codenames",
        badge: "Party Game a Squadre",
        description: "Sfida gli amici a colpi di intuizione e parole chiave nel party game a squadre più divertente e frenetico.",
        image: "../assets/img/codenames.jpg",
        alt: "Clienti che giocano a Codenames al bistrò"
    }
];

// ==========================================
// 3. Dati per le cards degli elementi del menu ("Caffetteria/snack")
// ==========================================


export const menuItems = [
    // --- CAFFETTERIA ---
    {
        title: "V60 Pour-Over Microlotto",
        price: "€ 4.50",
        badge: "Etiopia Yirgacheffe",
        description: "Note floreali di gelsomino, bergamotto e pesca bianca. Estrazione a caduta lenta.",
        category: "caffetteria"
    },
    {
        title: "Chemex per Due",
        price: "€ 7.50",
        badge: "Da Condividere",
        description: "Caffè da 500ml servita al tavolo con tazze in ceramica artigianale. Colombia Geisha.",
        category: "caffetteria"
    },
    {
        title: "Nitro Cold Brew alla Spina",
        price: "€ 5.00",
        badge: "Crema Vellutata",
        description: "Infusione a freddo 18h montata a carbo-azoto per una consistenza setosa stile stout.",
        category: "caffetteria"
    },
    {
        title: "Espresso Pixel Double",
        price: "€ 2.20",
        badge: "Signature",
        description: "Doppia estrazione bilanciata con sentori di cioccolato fondente 80% e nocciola tostata.",
        category: "caffetteria"
    },
    // --- SNACK ---
    {
        title: "Taralli Pugliesi Tradizionali",
        price: "€ 3.80",
        badge: "No Grease",
        description: "Asciutti, friabili all'olio di oliva evo e semi di finocchietto. Dita sempre immacolate.",
        category: "snack"
    },
    {
        title: "Mix Frutta Secca & Noci",
        price: "€ 4.50",
        badge: "Vegan",
        description: "Mandorle tostate, noci pecan e mirtilli disidratati. Serviti in ciotola di terracotta.",
        category: "snack"
    },
    {
        title: "Bocconcini Focaccia Pulita",
        price: "€ 5.50",
        badge: "No Grease",
        description: "Cubetti one-bite con pomodorini confit caramellati e origano fresco.",
        category: "snack"
    },
    {
        title: "Biscotto Artigianale \"8-Bit\"",
        price: "€ 3.00",
        badge: "Frolla Scura",
        description: "Frolla al cacao crudo con sale di Maldon e intaglio pixellato. Non sbriciola.",
        category: "snack"
    },
    // --- OPZIONI VEGANE ---
    {
        title: "Oat Milk Golden Matcha",
        price: "€ 4.80",
        badge: "Plant-Based Drink",
        description: "Latte d'avena biologico montato a vapore con matcha cerimoniale di Uji e curcuma.",
        category: "vegano"
    },
    {
        title: "Cold Brew Oat Velvet",
        price: "€ 5.20",
        badge: "Cold Specialty",
        description: "Infuso a freddo 14h unito a crema d'avena artigianale e sciroppo d'acero puro grado A.",
        category: "vegano"
    },
    {
        title: "Bocconcini Raw Nocciola & Cacao",
        price: "€ 3.50",
        badge: "Gluten-Free & Raw",
        description: "Senza cottura, con farina di mandorle, nocciole Piemonte IGP e datteri Medjool. Zero briciole.",
        category: "vegano"
    },
    {
        title: "Edamame Tostati al Sale Marino",
        price: "€ 4.00",
        badge: "No Grease & Vegan",
        description: "Fagioli di soia biologici tostati a secco con sale grigio di Guérande. Ricchi di proteine e clean-fingers.",
        category: "vegano"
    }
];

// ==========================================
// 4. Dati per le card delle Recensioni
// ==========================================
export const recensioni = [
    {
        nome: "Matteo & Beatrice",
        badge: "MB",
        stelle: 5,
        text: "Posto fantastico per una serata diversa dal solito. Abbiamo giocato a Catan sorseggiando un Chemex per due spettacolare. Game Master gentilissimo e paziente nelle spiegazioni!"
    },
    {
        nome: "Giulia Rossi",
        badge: "GR",
        stelle: 5,
        text: "La formula dello snack salva-carte è un'idea geniale: niente dita unte sulle carte di Wingspan! E il Nitro Cold Brew alla spina è semplicemente il migliore in città."
    },
    {
        nome: "Luca Moretti",
        badge: "LM",
        stelle: 4,
        text: "Atmosfera rilassata con playlist lo-fi perfetta per concentrarsi sulle partite. Vasta selezione di giochi da tavolo moderni e specialty coffee di altissimo livello."
    },
    {
        nome: "Elena & Sofia",
        badge: "ES",
        stelle: 5,
        text: "Siamo state per una sfida pomeridiana a Codenames. I biscotti artigianali 8-Bit e il matcha latte d'avena hanno reso l'esperienza davvero memorabile. Torneremo sicuramente!"
    },
    {
        nome: "Davide Conti",
        badge: "DC",
        stelle: 5,
        text: "Tavoli ampi ed ergonomici pensati appositamente per le plance giganti come Terraforming Mars. Servizio impeccabile e caffè filtro rifornito con regolarità."
    },
    {
        nome: "Chiara Valenti",
        badge: "CV",
        stelle: 4,
        text: "Consigliatissimo sia per chi è appassionato di giochi da tavolo che per chi vuole solo gustare un espresso d'autore in un ambiente accogliente e giovanile."
    },
    {
        nome: "Marco & Filippo",
        badge: "MF",
        stelle: 5,
        text: "Serata epica a Ticket to Ride! Niente manuali da studiare grazie ai consigli del master: in cinque minuti eravamo già in partita. Un format unico e imperdibile!"
    }
];
