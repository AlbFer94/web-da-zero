import { ludotecaSteps, carouselGames, menuItems, recensioni } from "./data.js";

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

    for (const thisReview of listaReview) {
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

const caffetteriaList = menuItems.filter(item => item.category === "caffetteria");
const snackList = menuItems.filter(item => item.category === "snack");
const veganList = menuItems.filter(item => item.category === "vegano");

renderMenuSection(caffetteriaList, "nav-caffetteria");
renderMenuSection(snackList, "nav-snack");
renderMenuSection(veganList, "vegan-contenitore");
renderSteps(ludotecaSteps);
renderGames(carouselGames);
renderReview(recensioni);