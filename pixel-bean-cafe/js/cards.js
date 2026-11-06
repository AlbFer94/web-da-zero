import { ludotecaSteps, carouselGames, menuItems, recensioni as defaultReviews, iscritti as defaultIscritti, prenotazioni as defaultPrenotazioni, prenotazioni } from "./data.js";
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
                            <span class="badge bg-warning text-dark fw-semibold mx-2">${gameItem.badge}</span>
                        </div>
                        <p class="card-text mb-0">
                            ${gameItem.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

/* Gestione cards del menù */

function getMenuCard(item) {
    const borderClass = item.category === "vegano" ? " border-success" : "";

    return `<div class="card bg-dark text-light${borderClass}">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-baseline gap-2 mb-2">
                <h3 class="card-title fw-bold mb-0">${item.title}</h3>
                <span class="badge text-warning fs-4 fw-bold p-0">${item.price}</span>
            </div>
            <span class="badge bg-secondary mb-2 origin">${item.badge}</span>
            <p class="card-text">
                <i>${item.description}</i>
            </p>
        </div>
    </div>`;
}

function renderMenuSection(items, containerId) {
    const container = document.getElementById(containerId);
    let htmlContent = "";
    for (const item of items) {
        htmlContent += getMenuCard(item);
    }
    container.innerHTML = htmlContent;
}

/* Gestione cards di recensione */

function renderReview(listaReview) {
    const reviewContainer = document.getElementById("recensioni-contenitore");

    let htmlDaScrivere = "";

    for (let i = 0; i < 4; i++) {
        const thisReview = listaReview[i];
        htmlDaScrivere += getReviewCard(thisReview);
    }

    reviewContainer.innerHTML = htmlDaScrivere;
}

function getReviewCard(reviewItem) {
    const starSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>`;

    return `<div class="card bg-dark text-light">
        <div class="card-body p-3 p-md-4">
            <div class="d-flex justify-content-between align-items-baseline gap-2 mb-2">
                <div class="header d-flex align-items-center gap-3 mb-2">
                    <span class="badge step-badge">${reviewItem.badge}</span>
                    <h3 class="card-title fw-bold mb-0">${reviewItem.nome}</h3>
                </div>
                <div class="rating-star text-warning d-flex gap-1">
                    ${starSvg.repeat(reviewItem.stelle)}
                </div>
            </div>
            <p class="card-text mb-0">
                ${reviewItem.text}
            </p>
        </div>
    </div>`;
}

function renderMoreReviews(listaReview) {
    const containerCards = document.getElementById("more-reviews");

    let htmlDaScrivere = "";

    for (let i = 4; i < listaReview.length; i++) {
        const thisCard = listaReview[i];
        htmlDaScrivere += getReviewCard(thisCard);
    }

    containerCards.innerHTML = htmlDaScrivere;
}

function saveReviewsToStorage(list) {
    const datoSerializzato = JSON.stringify(list);
    localStorage.setItem("reviews", datoSerializzato);
}

function loadReviews() {
    const datoserializzato = localStorage.getItem("reviews");

    if (!datoserializzato) return null;
    try {
        return JSON.parse(datoserializzato);
    } catch (e) {
        return null;
    }

}

/* Gestione invio nuova recensione */

function onFormSubmit(event) {
    event.preventDefault();

    const nomeField = document.getElementById("reviewNome");
    const valutazioneField = document.getElementById("reviewValutazione");
    const testoField = document.getElementById("reviewTesto");

    const nuovoNome = nomeField.value.trim();
    const nuovaValutazione = valutazioneField.value;
    const nuovoTesto = testoField.value.trim();

    if (!nuovoNome || !nuovaValutazione || !nuovoTesto) {
        alert("Tutti i campi sono obbligatori.");
        return;
    }

    const newReview = {
        nome: nuovoNome,
        badge: nuovoNome.slice(0, 2).toUpperCase(),
        stelle: Number(nuovaValutazione),
        text: nuovoTesto,
    };

    recensioni.unshift(newReview); // Aggiunge in cima all'array

    saveReviewsToStorage(recensioni);

    // Aggiorna la pagina con la nuova recensione
    renderReview(recensioni);
    renderMoreReviews(recensioni);


    event.target.reset();

    // Chiude il modale Bootstrap
    const modalEl = document.getElementById("recensioneModal");
    if (window.bootstrap && modalEl) {
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) {
            modalInstance.hide();
        }
    }
}

const caffetteriaList = menuItems.filter(item => item.category === "caffetteria");
const snackList = menuItems.filter(item => item.category === "snack");
const veganList = menuItems.filter(item => item.category === "vegano");
const form = document.getElementById("formRecensione");
if (form) {
    form.addEventListener("submit", onFormSubmit);
}

/* gestione form newsletter */
const subscriptionForm = document.getElementById("newsletter-form");
subscriptionForm.addEventListener("submit", onSubscription);



function onSubscription(event) {
    event.preventDefault();
    const dialog = document.getElementById("newsletterDialog");

    const emailField = document.getElementById("newsletter-email");
    const newEmail = emailField.value;
    let isSubscribed = false;

    const userEmail = normalizeEmail(newEmail);

    if (iscritti.includes(userEmail)) {
        isSubscribed = true;
        renderFeedback(isSubscribed, userEmail);
        dialog.showModal();
        return;
    }

    iscritti.push(userEmail);
    saveSubscription(iscritti);

    renderFeedback(isSubscribed, userEmail);
    dialog.showModal();
    event.target.reset();
}

function normalizeEmail(email) {
    if (!email || typeof email !== 'string') {
        return '';
    }

    /* rimuove gli spazi vuoti */
    email = email.trim();

    /* converte l'intero indirizzo in minuscolo */
    email = email.toLowerCase();

    return email;
}

function renderFeedback(giaIscritto, input) {
    let dialog = document.getElementById("newsletterDialog");
    if (giaIscritto === false) {
        dialog.innerHTML = `               <div class="dialog-header">
               <h2 class="dialog-title" id="dialog-title">
                    <i class="bi bi-check-circle-fill me-2" aria-hidden="true"></i>Sei nella lista dei tavoli!
               </h2>
               <button type="button" class="btn-close" commandfor="newsletterDialog" command="close"
                    aria-label="Chiudi"></button>
          </div>
          <div class="dialog-body">
               <p>
                    Abbiamo registrato <strong>${input}</strong>.
                    Da ora riceverai in anteprima tornei, serate a tema e i nuovi arrivi della ludoteca.
               </p>
               <p class="mb-0">Al massimo una email a settimana, e ti cancelli quando vuoi.</p>
               <p class="dialog-note">Progetto dimostrativo: nessuna email verrà davvero inviata.</p>
          </div>
          <div class="dialog-footer">
               <button type="button" class="btn btn-warning" commandfor="newsletterDialog"
                    command="close">Chiudi</button>
          </div>`;
    } else {
        dialog.innerHTML = `          <div class="dialog-header">
               <h2 class="dialog-title" id="dialog-title">
                    <i class="bi bi-exclamation-triangle-fill me-2" aria-hidden="true"></i>Iscrizione non riuscita
               </h2>
               <button type="button" class="btn-close" commandfor="newsletterDialog" command="close"
                    aria-label="Chiudi"></button>
          </div>
          <div class="dialog-body">               
               <p class="mb-0">
                Questo indirizzo: ${input} è già nella nostra lista: riceverai le prossime novità senza fare altro.
               </p>
          </div>
          <div class="dialog-footer">
               <button type="button" class="btn btn-warning fw-semibold" commandfor="newsletterDialog"
                    command="close">Correggi l'email</button>
          </div>`;
    }
}

/* gestione localStorage iscritti newsletter */

function saveSubscription(list) {
    const datoSerializzato = JSON.stringify(list);
    localStorage.setItem("subscriptions", datoSerializzato);
}

function loadSubscriptions() {
    const datoserializzato = localStorage.getItem("subscriptions");

    if (!datoserializzato) return null;
    try {
        return JSON.parse(datoserializzato);
    } catch (e) {
        return null;
    }
}

/* gestione form di prenotazioni */

const formPrenotazioni = document.getElementById("formPrenotazione");
formPrenotazioni.addEventListener("submit", onBookingSubmit);

function onBookingSubmit(event) {
    event.preventDefault();

    const nomeField = document.getElementById("bookingNome");
    const emailField = document.getElementById("bookingEmail");
    const telefonoField = document.getElementById("bookingTelefono");
    const ospitiField = document.getElementById("bookingOspiti");
    const dataOraField = document.getElementById("bookingDataOra");
    const giocoField = document.getElementById("bookingGioco");

    const nome = nomeField.value;
    const email = emailField.value;
    const telefono = telefonoField.value;
    const ospiti = Number(ospitiField.value);
    const dataPrenotazione = new Date(dataOraField.value); // converto il valore dell'input in un Date
    const gioco = giocoField.value;

    const newBooking = {
        nome: nome,
        email: email,
        tel: telefono,
        ospiti: ospiti,
        data: dataPrenotazione.toLocaleString("it-IT"), //gestisco il Date con localeString per stampare la data in formato italiano
        gioco: gioco
    };

    prenotazioni.push(newBooking);

    event.target.reset();

    // Chiude il modale Bootstrap
    const modalEl = document.getElementById("prenotazioniModal");
    if (window.bootstrap && modalEl) {
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) {
            modalInstance.hide();
        }
    }


}


/* Page init */

renderMenuSection(caffetteriaList, "nav-caffetteria");
renderMenuSection(snackList, "nav-snack");
renderMenuSection(veganList, "vegan-contenitore");
renderSteps(ludotecaSteps);
renderGames(carouselGames);

// Carica recensioni da localStorage oppure usa i dati di default
let recensioni = loadReviews();

if (recensioni === null) {
    recensioni = [...defaultReviews];
    saveReviewsToStorage(recensioni);
}

renderReview(recensioni);
renderMoreReviews(recensioni);

/* Carica gli iscritti alla newsletter */

let iscritti = loadSubscriptions();

if (iscritti === null) {
    iscritti = [...defaultIscritti];
    saveSubscription(iscritti);
} 
