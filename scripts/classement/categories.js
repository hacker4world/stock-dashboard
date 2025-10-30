let categories = [
  {
    id: "0",
    nom: "TPO-FPO",
    famille: "Chantier",
    sousFamille: "Materielles Batiments",
    articles: 10,
  },
];

let categoriesList = document.querySelector("tbody");
let addEntryModal = document.getElementById("add-entry-modal");
let filterModal = document.getElementById("filter-modal");
let sortModal = document.getElementById("sort-modal");
let detailsModal = document.getElementById("category-details-modal");
let categoriesCount = document.getElementById("entry-count");

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

function loadCategories() {
  let content = "";

  categories.forEach((category) => {
    content += `<tr onclick='setCategoryDetailsModal(true, "${category.id}")' >
                    <td>${category.id}</td>
                    <td>${category.nom}</td>
                    <td>${category.famille}</td>
                    <td>${category.sousFamille}</td>
                    <td>${category.articles}</td>
                </tr>`;
  });

  categoriesList.innerHTML = content;
  categoriesCount.innerText = `${entries.length} Categories Affichées`;
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

function setCategoryDetailsModal(open, categoryId) {
  if (open) {
    detailsModal.style.display = "flex";
    let category = categories.find((category) => category.id === categoryId);

    document.getElementById("details-article-name").value = entry.produit;
    document.getElementById("details-actual-stock").value = entry.stock;
    document.getElementById("details-date").value = entry.date;
    document.getElementById("details-category").value = entry.categorie;
    document.getElementById("details-fournisseur").value = entry.fournisseur;
  } else detailsModal.style.display = "none";
}
