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
let detailsModal = document.getElementById("entry-details-modal");
let entryCount = document.getElementById("entry-count");

let subCategories = document.getElementById("sub-categories");
let classingIcon = document.getElementById("classing-icon");

function toggleSubCategories() {
  if (subCategories.style.display != "none") {
    subCategories.style.display = "none";
    classingIcon.classList.remove("fa-caret-up");
    classingIcon.classList.add("fa-caret-down");
  } else {
    subCategories.style.display = "block";
    classingIcon.classList.add("fa-caret-up");
    classingIcon.classList.remove("fa-caret-down");
  }
}

function loadEntries() {
  let content = "";

  entries.forEach((entry) => {
    content += `<tr onclick='setEntryDetailsModal(true, "${entry.id}")' >
                    <td>${entry.id}</td>
                    <td>${entry.produit}</td>
                    <td>${entry.categorie}</td>
                    <td>${entry.date}</td>
                    <td>${entry.stock}</td>
                    <td>${entry.fournisseur}</td>    
                </tr>`;
  });

  entryList.innerHTML = content;
  entryCount.innerText = `${entries.length} Entrées Affichées`;
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

function setEntryDetailsModal(open, entryId) {
  if (open) {
    detailsModal.style.display = "flex";
    let entry = entries.find((entry) => entry.id === entryId);

    document.getElementById("details-article-name").value = entry.produit;
    document.getElementById("details-actual-stock").value = entry.stock;
    document.getElementById("details-date").value = entry.date;
    document.getElementById("details-category").value = entry.categorie;
    document.getElementById("details-fournisseur").value = entry.fournisseur;
  } else detailsModal.style.display = "none";
}
