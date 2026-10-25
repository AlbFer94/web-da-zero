
// ==========================================
// 1. Dati per le card della sezione Ludoteca ("Come Funziona la Serata")
// ==========================================
const ludotecaSteps = [
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
const carouselGames = [
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

/* Gestione cards Informative (Ludoteca) */

function renderSteps(listaSteps) {

    const cardsContainer = document.getElementById("cards-contenitore");

    let htmlDaLeggere = "";

    for (const thisStep of listaSteps) {
        htmlDaLeggere += getCard(thisStep);
    }

    cardsContainer.innerHTML = htmlDaLeggere;
}

function getCard(item) {
    return `<div class="card bg-dark text-light">
                         <div class="card-body p-3 p-md-4">
                              <div class="d-flex align-items-center gap-3 mb-2">
                                   <span class="badge step-badge">${item.step}</span>
                                   <h3 class="card-title fw-bold mb-0">${item.title}</h3>
                              </div>
                              <p class="card-text mb-0">
                                   ${item.description}
                              </p>
                         </div>
                    </div>`;
}

/* Gestione cards carosello (Giochi più Amati) */

function renderGames(listaGiochi) {
    const gamesContainer = document.getElementById("contenitore-giochi");

    let htmlDaLeggere = "";

    for (let i = 0; i < listaGiochi.length; i++) {
        const thisGame = listaGiochi[i];
        htmlDaLeggere += getGame(thisGame, i === 0);
    }

    gamesContainer.innerHTML = htmlDaLeggere;
}

function getGame(gameItem, isActive = false) {
    const activeClass = isActive ? " active" : "";

    return `<div class="carousel-item${activeClass}">
        <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8">
                <div class="card bg-dark text-light border-0 shadow-lg overflow-hidden">
                    <img src="${gameItem.image}" class="card-img-top object-fit-cover"
                        alt="${gameItem.alt}" style="height: 320px;">
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h3 class="card-title fw-bold mb-0">${gameItem.title}</h3>
                            <span class="badge bg-warning text-dark fw-semibold">${gameItem.badge}</span>
                        </div>
                        <p class="card-text text-secondary mb-0">
                            ${gameItem.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

renderSteps(ludotecaSteps);
renderGames(carouselGames);