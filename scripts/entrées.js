let entries = [
  {
    id: "0",
    produit: "IMPER Sintofoil RG-1.5 (1,50 m x 30,00 m)",
    categorie: "TPO-FPO",
    date: "11 Juin 2025",
    stock: 20,
    fournisseur: "IMPER",
  },
];

let entryList = document.querySelector("tbody");
let addEntryModal = document.getElementById("add-entry-modal");
let filterModal = document.getElementById("filter-modal");
let sortModal = document.getElementById("sort-modal");

function loadEntries() {
  let content = "";

  entries.forEach((entry) => {
    content += `<tr onclick='setEntryDetailsModal(true, "${entry.id}")' >
                    <td>${entry.produit}</td>
                    <td>${entry.categorie}</td>
                    <td>${entry.date}</td>
                    <td>${entry.stock}</td>
                    <td>${entry.fournisseur}</td>    
                </tr>`;
  });

  entryList.innerHTML = content;
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
