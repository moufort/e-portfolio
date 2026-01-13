const style = document.createElement('style');
style.textContent = `
  /* Conteneur des cartes */
  #Projet {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    justify-items: center;
    padding: 20px;
  }

  /* Style de la carte */
  .card {
    width: 100%;
    max-width: 20vw;
    height: 380px;
    border: 1px solid #ccc;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    background: transparent;
  }

  .card:hover {
    transform: translateY(-6px);
  }

  .card img {
    width: 100%;
    height: 80%;
    object-fit: fill;
  }

  .card h3 {
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2em;
  }

  /* Mobile */
  @media (max-width: 600px) {
    .card {
      max-width: 90vw;
    }
  }
`;
document.head.appendChild(style);

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

// Exemple de "base de données"
const projets = [
{
    titre: "Projet Alpha",
    image: "./image/project_picture/app.png",
    description: "Description 1"
},
{
    titre: "Projet Beta",
    image: "./image/project_picture/Chasse_au_monstre.png",
    description: "Description 2"
},
{
    titre: "Projet Gamma",
    image: "./image/project_picture/JSAE.png",
    description: "Description 3"
}
];

// Ajout automatique des cartes dans le container
const container = document.getElementById("Projet");
    projets.forEach(projet => {
    container.appendChild(createCard(projet));
});