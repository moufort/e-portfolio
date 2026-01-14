import {projets} from "./projets-data.js";

const modal = document.getElementById("project-modal");

// Fonction pour créer une carte
function createCard(projet) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <img src="${projet.image}" alt=""/>
    <h3>${projet.titre}</h3>`;

    card.addEventListener("click", () => {
      modal.innerHTML = `
        <div class="modal-content">
          <button class="close-btn">×</button>
          <img src="${projet.image}" alt="${projet.title}">
          <h2>${projet.title}</h2>
          <p>${projet.description}</p>
        </div>`;
      modal.classList.remove("hidden");
    });

    return card;
}

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-btn") || e.target === modal) {
    modal.classList.add("hidden");
    modal.innerHTML = "";
  }
});

// Ajout automatique des cartes dans le container
const container = document.getElementById("Projet");
console.log( projets);
    projets.forEach(projet => {
    container.appendChild(createCard(projet));
});