let families = [
  {
    id: 512,
    familyName: "Meubles",
    sousFamilles: 6,
    categories: 10,
  },
];

let subCategories = document.getElementById("sub-categories");
let classingIcon = document.getElementById("classing-icon");

let addFamilyModal = document.getElementById("add-family-modal");

let familyList = document.getElementById("family-list");

let familyDetailsModal = document.getElementById("family-details-modal");

function toggleAddFamilyModal(open) {
  if (open) {
    addFamilyModal.style.display = "flex";
  } else addFamilyModal.style.display = "none";
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

function loadFamilies() {
  let content = "";

  families.forEach((family) => {
    content += `<tr onclick='toggleFamilyDetailsModal(true)'>
                    <td>${family.id}</td>
                    <td>${family.familyName}</td>
                    <td>${family.sousFamilles}</td>
                    <td>${family.categories}</td>
                    
                </tr>`;
  });

  familyList.innerHTML = content;
}

function toggleFamilyDetailsModal(open) {
  if (open) familyDetailsModal.style.display = "flex";
  else familyDetailsModal.style.display = "none";
}
