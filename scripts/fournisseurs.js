let fournisseurs = [
  {
    id: "0",
    nom: "IMPER IMPER IMPER IMPER",
    contact: "22458478",
    adresse: "103 Charguia",
    articles: 70,
    entres: 1,
    sorties: 1,
  },
];

let fournisseursList = document.querySelector("tbody");
let addEntryModal = document.getElementById("add-entry-modal");
let filterModal = document.getElementById("filter-modal");
let sortModal = document.getElementById("sort-modal");
let detailsModal = document.getElementById("fournisseur-details-modal");
let fournisseurCount = document.getElementById("fournisseur-count");

function loadFounisseurs() {
  let content = "";

  fournisseurs.forEach((fournisseur) => {
    content += `<tr onclick='setFournisseurDetailsModal(true, "${fournisseur.id}")' >
                    <td>${fournisseur.nom}</td>
                    <td>${fournisseur.contact}</td>
                    <td>${fournisseur.adresse}</td>
                    <td>${fournisseur.articles}</td>
                    <td>${fournisseur.entres}</td>
                    <td>${fournisseur.sorties}</td>
                    
                </tr>`;
  });

  fournisseursList.innerHTML = content;
  fournisseurCount.innerText = `${fournisseurs.length} Founisseurs Affichées`;
}

function toggleAddEntryModal(open) {
  if (open) {
    addEntryModal.style.display = "flex";
  } else addEntryModal.style.display = "none";
}

function toggleFilterModal(open) {
  filterModal.style.display = open ? "flex" : "none";
}

function setSortModal(open) {
  sortModal.style.display = open ? "flex" : "none";
}

function setFournisseurDetailsModal(open, fournisseurId) {
  if (open) {
    detailsModal.style.display = "flex";
    let fournisseur = fournisseurs.find((f) => f.id === fournisseurId);

    document.getElementById("nom").value = fournisseur.nom;
    document.getElementById("contact").value = fournisseur.contact;
    document.getElementById("adresse").value = fournisseur.adresse;
  } else detailsModal.style.display = "none";
}
