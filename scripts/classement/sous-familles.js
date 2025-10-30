let subCategories = document.getElementById("sub-categories");
let classingIcon = document.getElementById("classing-icon");
let addSubFamilyModal = document.getElementById("add-subfamily-modal");

let subFamilyList = document.getElementById("subfamily-list");

let subFamilyDetailsModal = document.getElementById("subfamily-details-modal");

let filterModal = document.getElementById("filter-modal");

let sortModal = document.getElementById("sort-modal");

let subfamilies = [
  {
    id: 10,
    name: "Materielles Batiments",
    famille: "Chantiers",
    categories: 1,
  },
];

function loadSubFamilies() {
  let content = "";

  subfamilies.forEach((subFamily) => {
    content += `<tr onclick="toggleSubfamilyDetailsModal(true)">
                    <td>${subFamily.id}</td>
                    <td>${subFamily.name}</td>
                    <td>${subFamily.famille}</td>
                    <td>${subFamily.categories}</td>
                </tr>`;
  });

  subFamilyList.innerHTML = content;
}

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

function toggleAddSubfamilyModal(open) {
  if (open) addSubFamilyModal.style.display = "flex";
  else addSubFamilyModal.style.display = "none";
}

function toggleSubfamilyDetailsModal(open) {
  if (open) subFamilyDetailsModal.style.display = "flex";
  else subFamilyDetailsModal.style.display = "none";
}

function toggleFilterModal(open) {
  if (open) filterModal.style.display = "flex";
  else filterModal.style.display = "none";
}

function setSortModal(open) {
  if (open) sortModal.style.display = "flex";
  else sortModal.style.display = "none";
}
