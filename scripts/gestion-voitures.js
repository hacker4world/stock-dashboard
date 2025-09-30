let allCars = [
  {
    matricule: "3654",
    marque: "Peugeot",
    model: "206",
    kilometrage: 4000,
    assurance: "Assurance",
    kmVidange: 120,
    disponible: true,
    dateLimiteAssurance: "2024-06-15",
    dateLimiteVignette: "2024-12-31",
    dateLimiteVisite: "2024-08-20",
  },
  {
    matricule: "2578",
    marque: "Renault",
    model: "Clio",
    kilometrage: 3500,
    assurance: "Assurance",
    kmVidange: 120,
    disponible: false,
    dateLimiteAssurance: "2024-09-10",
    dateLimiteVignette: "2024-11-30",
    dateLimiteVisite: "2024-07-15",
  },
  {
    matricule: "9812 AB",
    marque: "Volkswagen",
    model: "Golf 8",
    kilometrage: 12500,
    assurance: "Assurance Tout Risque",
    kmVidange: 120,
    disponible: true,
    dateLimiteAssurance: "2025-01-20",
    dateLimiteVignette: "2024-10-15",
    dateLimiteVisite: "2024-09-05",
  },
  {
    matricule: "5437 CD",
    marque: "BMW",
    model: "Série 3",
    kilometrage: 28000,
    assurance: "Assurance Tiers",
    kmVidange: 120,
    disponible: true,
    dateLimiteAssurance: "2024-11-30",
    dateLimiteVignette: "2024-08-25",
    dateLimiteVisite: "2024-10-10",
  },
  {
    matricule: "7621 EF",
    marque: "Toyota",
    model: "RAV4",
    kilometrage: 15000,
    assurance: "Assurance",
    kmVidange: 120,
    disponible: false,
    dateLimiteAssurance: "2024-07-01",
    dateLimiteVignette: "2024-09-20",
    dateLimiteVisite: "2024-12-05",
  },
  {
    matricule: "1987 GH",
    marque: "Mercedes-Benz",
    model: "Classe A",
    kilometrage: 7500,
    assurance: "Assurance Tout Risque",
    kmVidange: 120,
    disponible: true,
    dateLimiteAssurance: "2025-03-15",
    dateLimiteVignette: "2024-07-30",
    dateLimiteVisite: "2024-11-12",
  },
  {
    matricule: "4263 IJ",
    marque: "Audi",
    model: "A4",
    kilometrage: 45000,
    assurance: "Assurance",
    kmVidange: 120,
    disponible: false,
    dateLimiteAssurance: "2024-08-25",
    dateLimiteVignette: "2025-02-14",
    dateLimiteVisite: "2024-06-30",
  },
  {
    matricule: "8890 KL",
    marque: "Ford",
    model: "Focus",
    kilometrage: 32000,
    assurance: "Assurance Tiers",
    kmVidange: 120,
    disponible: true,
    dateLimiteAssurance: "2024-12-10",
    dateLimiteVignette: "2024-10-05",
    dateLimiteVisite: "2025-01-15",
  },
  {
    matricule: "1123 MN",
    marque: "Hyundai",
    model: "Tucson",
    kilometrage: 9000,
    assurance: "Assurance",
    kmVidange: 120,
    disponible: true,
    dateLimiteAssurance: "2024-10-30",
    dateLimiteVignette: "2024-07-12",
    dateLimiteVisite: "2024-09-18",
  },
  {
    matricule: "6547 OP",
    marque: "Citroën",
    model: "C3",
    kilometrage: 21000,
    assurance: "Assurance",
    kmVidange: 120,
    disponible: false,
    dateLimiteAssurance: "2025-04-05",
    dateLimiteVignette: "2024-11-08",
    dateLimiteVisite: "2024-08-22",
  },
];
let allCarsButton = document.getElementById("all-cars-select");
let availableCarsButton = document.getElementById("available-cars-select");
let rentedCarsButton = document.getElementById("rented-cars-select");
let carList = document.querySelector("tbody");

let filterModal = document.getElementById("filter-modal");
let addCarModal = document.getElementById("add-car-modal");

let carCount = document.getElementById("car-count");

let errorAlert = document.querySelector(".alert");

let errorMessage = document.querySelector(".alert-message");

let carDetailsModal = document.getElementById("car-details-modal");

let filterAlert = document.querySelector(".filter-alert");

let sortModal = document.getElementById("sort-modal");

let importExportModal = document.getElementById("import-export-modal");

function toggleFilterModal(open) {
  filterModal.style.display = open ? "flex" : "none";
}

function toggleAddCarModal(open) {
  addCarModal.style.display = open ? "flex" : "none";

  if (!open) {
    errorAlert.style.display = "none";
  }
}

function renderCars(cars) {
  let selectedCars = cars.length > 0 ? cars : allCars;

  let content = "";

  selectedCars.forEach((car) => {
    content += `<tr onclick='setCarDetailsModal(true, "${car.matricule}")' >
                    <td>${car.matricule}</td>
                    <td>${car.marque}</td>
                    <td>${car.model}</td>
                    <td>${car.assurance}</td>
                    <td>${car.kilometrage} Km</td>
                    ${
                      car.disponible
                        ? '<td><span class="status-badge status-active">Disponible</span></td>'
                        : '<td><span class="status-badge status-error">Louée</span></td>'
                    }            
                </tr>`;
  });

  carList.innerHTML = content;

  carCount.innerText = `${selectedCars.length} Voitures affichés`;
}

function selectAllCars() {
  filterAlert.style.display = "none";
  allCarsButton.classList.add("button-active");
  availableCarsButton.classList.remove("button-active");
  rentedCarsButton.classList.remove("button-active-red");

  renderCars(allCars);
}

function selectAvailableCars() {
  filterAlert.style.display = "none";
  allCarsButton.classList.remove("button-active");
  availableCarsButton.classList.add("button-active");
  rentedCarsButton.classList.remove("button-active-red");

  renderCars(allCars.filter((car) => car.disponible));
}

function selectRentedCars() {
  filterAlert.style.display = "none";
  allCarsButton.classList.remove("button-active");
  availableCarsButton.classList.remove("button-active");
  rentedCarsButton.classList.add("button-active-red");

  renderCars(allCars.filter((car) => !car.disponible));
}

function addCarSubmit() {
  errorAlert.style.display = "flex";
  errorMessage.innerText = "Matricule obligatoire";
}

function setCarDetailsModal(open, matricule) {
  if (open) {
    carDetailsModal.style.display = "flex";

    let car = allCars.find((car) => car.matricule === matricule);

    document.getElementById("car-details-matricule").value = car.matricule;
    document.getElementById("car-details-marque").value = car.marque;
    document.getElementById("car-details-model").value = car.model;
    document.getElementById("car-details-kilometrage").value = car.kilometrage;
    document.getElementById("car-details-assurance").value = car.assurance;
    document.getElementById("car-details-date-assurance").value =
      car.dateLimiteAssurance;
    document.getElementById("car-details-date-vignette").value =
      car.dateLimiteVignette;
    document.getElementById("car-details-date-visite").value =
      car.dateLimiteVisite;
    document.getElementById("car-details-km-vidange").value = car.kmVidange;
    document.getElementById("car-details-etat").value = car.disponible
      ? "disponible"
      : "loué";
  } else carDetailsModal.style.display = "none";
}

function filterCars() {
  filterModal.style.display = "none";
  filterAlert.style.display = "flex";

  allCarsButton.classList.remove("button-active");
  availableCarsButton.classList.remove("button-active");
  rentedCarsButton.classList.remove("button-active-red");

  renderCars([
    {
      matricule: "3654",
      marque: "Peugeot",
      model: "206",
      kilometrage: 4000,
      assurance: "Assurance",
      kmVidange: 120,
      disponible: true,
      dateLimiteAssurance: "2024-06-15",
      dateLimiteVignette: "2024-12-31",
      dateLimiteVisite: "2024-08-20",
    },
  ]);
}

function removeFilters() {
  filterAlert.style.display = "none";
  selectAllCars();
}

function setSortModal(open) {
  sortModal.style.display = open ? "flex" : "none";
}

function sortCarList() {
  setSortModal(false);
}

function setImportExportModal(open) {
  importExportModal.style.display = open ? "flex" : "none";
}

function setTab(tab) {
  const importTabButton = document.getElementById("import-tab-button");
  const exportTabButton = document.getElementById("export-tab-button");

  const importMenu = document.getElementById("import-menu");
  const exportMenu = document.getElementById("export-menu");

  const importButton = document.getElementById("import-button");
  const exportButton = document.getElementById("export-button");

  if (tab === "import") {
    importMenu.style.display = "flex";
    exportMenu.style.display = "none";
    importTabButton.classList.add("button-active");
    exportTabButton.classList.remove("button-active");
    importButton.style.display = "flex";
    exportButton.style.display = "none";
  } else if (tab === "export") {
    importMenu.style.display = "none";
    exportMenu.style.display = "flex";
    importTabButton.classList.remove("button-active");
    exportTabButton.classList.add("button-active");
    importButton.style.display = "none";
    exportButton.style.display = "flex";
  }
}
