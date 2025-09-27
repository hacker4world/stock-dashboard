let allCars = [
  {
    matricule: "3654",
    marque: "Peugeot",
    model: "206",
    kilometrage: 4000,
    assurance: "Assurance",
    disponible: true,
  },
  {
    matricule: "2578",
    marque: "Renault",
    model: "Clio",
    kilometrage: 3500,
    assurance: "Assurance",
    disponible: false,
  },
  {
    matricule: "9812 AB",
    marque: "Volkswagen",
    model: "Golf 8",
    kilometrage: 12500,
    assurance: "Assurance Tout Risque",
    disponible: true,
  },
  {
    matricule: "5437 CD",
    marque: "BMW",
    model: "Série 3",
    kilometrage: 28000,
    assurance: "Assurance Tiers",
    disponible: true,
  },
  {
    matricule: "7621 EF",
    marque: "Toyota",
    model: "RAV4",
    kilometrage: 15000,
    assurance: "Assurance",
    disponible: false,
  },
  {
    matricule: "1987 GH",
    marque: "Mercedes-Benz",
    model: "Classe A",
    kilometrage: 7500,
    assurance: "Assurance Tout Risque",
    disponible: true,
  },
  {
    matricule: "4263 IJ",
    marque: "Audi",
    model: "A4",
    kilometrage: 45000,
    assurance: "Assurance",
    disponible: false,
  },
  {
    matricule: "8890 KL",
    marque: "Ford",
    model: "Focus",
    kilometrage: 32000,
    assurance: "Assurance Tiers",
    disponible: true,
  },
  {
    matricule: "1123 MN",
    marque: "Hyundai",
    model: "Tucson",
    kilometrage: 9000,
    assurance: "Assurance",
    disponible: true,
  },
  {
    matricule: "6547 OP",
    marque: "Citroën",
    model: "C3",
    kilometrage: 21000,
    assurance: "Assurance",
    disponible: false,
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
    content += `<tr>
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
  allCarsButton.classList.add("button-active");
  availableCarsButton.classList.remove("button-active");
  rentedCarsButton.classList.remove("button-active-red");

  renderCars(allCars);
}

function selectAvailableCars() {
  allCarsButton.classList.remove("button-active");
  availableCarsButton.classList.add("button-active");
  rentedCarsButton.classList.remove("button-active-red");

  let content = "";

  renderCars(allCars.filter((car) => car.disponible));
}

function selectRentedCars() {
  allCarsButton.classList.remove("button-active");
  availableCarsButton.classList.remove("button-active");
  rentedCarsButton.classList.add("button-active-red");

  renderCars(allCars.filter((car) => !car.disponible));
}

function addCarSubmit() {
  errorAlert.style.display = "flex";
  errorMessage.innerText = "Matricule obligatoire";
}
