import { ludotecaSteps, carouselGames, menuItems } from "./data.js";

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

const caffetteriaList = menuItems.filter(item => item.category === "caffetteria");
const snackList = menuItems.filter(item => item.category === "snack");
const veganList = menuItems.filter(item => item.category === "vegano");

renderMenuSection(caffetteriaList, "nav-caffetteria");
renderMenuSection(snackList, "nav-snack");
renderMenuSection(veganList, "vegan-contenitore");
renderSteps(ludotecaSteps);
renderGames(carouselGames);