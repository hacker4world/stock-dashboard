let fabriquants = [
  {
    code: 150,
    nom: "Jbal Lwest",
    adresse: "Jbal el West",
    articles: 10,
  },
];

let fabriquantsList = document.getElementById("fabriquant-list");

let addFabriquantModal = document.getElementById("add-fabriquant-modal");

let fabriquantDetailsModal = document.getElementById(
  "fabriquant-details-modal"
);

let filterModal = document.getElementById("filter-modal");

let sortModal = document.getElementById("sort-modal");

function loadFabriquants() {
  let content = "";

  fabriquants.forEach((fabriquant) => {
    content += `<tr onclick="toggleDetailsModal(open)">
                    <td>${fabriquant.code}</td>
                    <td>${fabriquant.nom}</td>
                    <td>${fabriquant.adresse}</td>
                    <td>${fabriquant.articles}</td>
                </tr>`;
  });

  fabriquantsList.innerHTML = content;
}

function toggleAddFabriquantModal(open) {
  if (open) addFabriquantModal.style.display = "flex";
  else addFabriquantModal.style.display = "none";
}

function toggleDetailsModal(open) {
  if (open) fabriquantDetailsModal.style.display = "flex";
  else fabriquantDetailsModal.style.display = "none";
}

function toggleFilterModal(open) {
  if (open) filterModal.style.display = "flex";
  else filterModal.style.display = "none";
}

function setSortModal(open) {
  if (open) sortModal.style.display = "flex";
  else sortModal.style.display = "none";
}
