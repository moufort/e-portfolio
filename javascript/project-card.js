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

// Fonction pour créer une carte
function createCard(projet) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
    <img src="${projet.image}" alt=""/>
    <h3>${projet.titre}</h3>
  `;

    return card;
}

function showCompleteCard(projet){
    
}

// Exemple de "base de données"
const projets = [
{
    titre: "Projet Alpha",
    image: "./image/project_picture/app.png"
},
{
    titre: "Projet Beta",
    image: "./image/project_picture/Chasse_au_monstre.png"
},
{
    titre: "Projet Gamma",
    image: "./image/project_picture/JSAE.png"
}
];

// Ajout automatique des cartes dans le container
const container = document.getElementById("Projet");
    projets.forEach(projet => {
    container.appendChild(createCard(projet));
});