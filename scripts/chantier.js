let chantiers = [
  {
    code: 150,
    nom: "Chantier Touhemi",
    adresse: "Wardia",
  },
];

let chantierList = document.getElementById("chantiers-list");

let addChantierModal = document.getElementById("add-chantier-modal");

let detailsModal = document.getElementById("chantier-details-modal");

function loadChantiers() {
  let content = "";

  chantiers.forEach((chantier) => {
    content += `<tr onclick='toggleDetailsModal(true)'>
                    <td>${chantier.code}</td>
                    <td>${chantier.nom}</td>
                    <td>${chantier.adresse}</td>
                </tr>`;
  });

  chantierList.innerHTML = content;
}

function toggleAddChantier(open) {
  if (open) addChantierModal.style.display = "flex";
  else addChantierModal.style.display = "none";
}

function toggleDetailsModal(open) {
  if (open) detailsModal.style.display = "flex";
  else detailsModal.style.display = "none";
}
