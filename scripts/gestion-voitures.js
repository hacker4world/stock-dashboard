const allCars = [
  {
    id: "0",
    nom: "IMPER Sintofoil RG-1.5 (1,50 m x 30,00 m)",
    categorie: "TPO-FPO",
    fournisseur: "IMPER",
    stockActuel: 400,
    prix: 250,
    stockMin: 100,
    stockMax: 1000,
  },
  {
    id: "1",
    nom: "IMPER Sintofoil RG-1.8 (0,75 m x 30,00 m)",
    categorie: "TPO-FPO",
    fournisseur: "IMPER",
    stockActuel: 350,
    prix: 180,
    stockMin: 80,
    stockMax: 800,
  },
  {
    id: "2",
    nom: "IMPER Sintofoil RG-1.8 (1,50 m x 30,00 m)",
    categorie: "TPO-FPO",
    fournisseur: "IMPER",
    stockActuel: 420,
    prix: 280,
    stockMin: 120,
    stockMax: 1100,
  },
  {
    id: "3",
    nom: "IMPER Sintofoil RG-1.5 (0,75 m x 30,00 m)",
    categorie: "TPO-FPO",
    fournisseur: "IMPER",
    stockActuel: 380,
    prix: 190,
    stockMin: 90,
    stockMax: 850,
  },
  {
    id: "4",
    nom: "SIKA Sarnafil TS77-1.5 (2,00 m x 20,00 m)",
    categorie: "TPO-FPO",
    fournisseur: "SIKA",
    stockActuel: 300,
    prix: 320,
    stockMin: 150,
    stockMax: 1200,
  },
  {
    id: "5",
    nom: "KÔSTER TPO PRO-1.5 (1,50 m x 20,00 m)",
    categorie: "TPO-FPO",
    fournisseur: "KÔSTER",
    stockActuel: 280,
    prix: 270,
    stockMin: 100,
    stockMax: 900,
  },
  {
    id: "6",
    nom: "VIS ETANCO EVDF 4,8 x 65 mm",
    categorie: "VIS",
    fournisseur: "ETANCO",
    stockActuel: 1500,
    prix: 15,
    stockMin: 500,
    stockMax: 3000,
  },
  {
    id: "7",
    nom: "VIS ETANCO EVDF 4,8 x 75 mm",
    categorie: "VIS",
    fournisseur: "ETANCO",
    stockActuel: 1200,
    prix: 18,
    stockMin: 400,
    stockMax: 2500,
  },
  {
    id: "8",
    nom: "VIS ETANCO EVDF 4,8 x 80 mm",
    categorie: "VIS",
    fournisseur: "ETANCO",
    stockActuel: 1100,
    prix: 20,
    stockMin: 350,
    stockMax: 2200,
  },
  {
    id: "9",
    nom: "VIS ETANCO EVDF 4,8 x 100 mm",
    categorie: "VIS",
    fournisseur: "ETANCO",
    stockActuel: 900,
    prix: 25,
    stockMin: 300,
    stockMax: 2000,
  },
  {
    id: "10",
    nom: "VIS ETANCO EVDF 4,8 X 120 mm",
    categorie: "VIS",
    fournisseur: "ETANCO",
    stockActuel: 800,
    prix: 30,
    stockMin: 250,
    stockMax: 1800,
  },
  {
    id: "11",
    nom: "VIS ETANCO EGB 4,8 x 100 mm",
    categorie: "VIS",
    fournisseur: "ETANCO",
    stockActuel: 950,
    prix: 22,
    stockMin: 320,
    stockMax: 1900,
  },
  {
    id: "12",
    nom: "VIS GAURDIEN NOIR 5,8 x 80 mm",
    categorie: "VIS",
    fournisseur: "GAURDIEN",
    stockActuel: 1300,
    prix: 28,
    stockMin: 450,
    stockMax: 2600,
  },
  {
    id: "13",
    nom: "VIS GAURDIEN NOIR 5,8 x 100 mm",
    categorie: "VIS",
    fournisseur: "GAURDIEN",
    stockActuel: 1100,
    prix: 32,
    stockMin: 380,
    stockMax: 2300,
  },
  {
    id: "14",
    nom: "VIS GAUARDIAN GRIS 5,8 x 150 mm",
    categorie: "VIS",
    fournisseur: "GAUARDIAN",
    stockActuel: 700,
    prix: 45,
    stockMin: 200,
    stockMax: 1500,
  },
  {
    id: "15",
    nom: "VIS ALETAS GRIS 5,8 x 80 mm",
    categorie: "VIS",
    fournisseur: "ALETAS",
    stockActuel: 1400,
    prix: 26,
    stockMin: 480,
    stockMax: 2700,
  },
  {
    id: "16",
    nom: "VIS INDEX 20 mm",
    categorie: "VIS",
    fournisseur: "INDEX",
    stockActuel: 2000,
    prix: 8,
    stockMin: 600,
    stockMax: 3500,
  },
  {
    id: "17",
    nom: "RONDRUP 500 VERT",
    categorie: "RONDELLE-PLAQUETTE",
    fournisseur: "RONDRUP",
    stockActuel: 800,
    prix: 12,
    stockMin: 200,
    stockMax: 1500,
  },
  {
    id: "18",
    nom: "PLAQUETTE ETANCO 82 x 40",
    categorie: "RONDELLE-PLAQUETTE",
    fournisseur: "ETANCO",
    stockActuel: 600,
    prix: 35,
    stockMin: 150,
    stockMax: 1200,
  },
  {
    id: "19",
    nom: "PLAQUETTE GRG 82 x 40",
    categorie: "RONDELLE-PLAQUETTE",
    fournisseur: "GRG",
    stockActuel: 550,
    prix: 32,
    stockMin: 140,
    stockMax: 1100,
  },
  {
    id: "20",
    nom: "PLAQUETTE ETANCO 64 x 64",
    categorie: "RONDELLE-PLAQUETTE",
    fournisseur: "ETANCO",
    stockActuel: 450,
    prix: 42,
    stockMin: 120,
    stockMax: 1000,
  },
  {
    id: "21",
    nom: "RONDELLE MODULE ACIER Ø 70 mm²",
    categorie: "RONDELLE-PLAQUETTE",
    fournisseur: "MODULE",
    stockActuel: 900,
    prix: 18,
    stockMin: 250,
    stockMax: 1800,
  },
  {
    id: "22",
    nom: "RONDELLE TPO IMPER",
    categorie: "RONDELLE-PLAQUETTE",
    fournisseur: "IMPER",
    stockActuel: 750,
    prix: 28,
    stockMin: 180,
    stockMax: 1400,
  },
  {
    id: "23",
    nom: "PLAQUETTE ETANCOPLAST 82 x 40",
    categorie: "RONDELLE-PLAQUETTE",
    fournisseur: "ETANCO",
    stockActuel: 500,
    prix: 38,
    stockMin: 130,
    stockMax: 1050,
  },
  {
    id: "24",
    nom: "TÔLE COLAMINÉ TPO - KÔSTER ( 2,00 x 1,00 ) m²",
    categorie: "TÔLE COLAMINÉ",
    fournisseur: "KÔSTER",
    stockActuel: 120,
    prix: 85,
    stockMin: 30,
    stockMax: 300,
  },
  {
    id: "25",
    nom: "TÔLE COLAMINÉ TPO - IMPER ( 2,00 x 1,00 ) m²",
    categorie: "TÔLE COLAMINÉ",
    fournisseur: "IMPER",
    stockActuel: 150,
    prix: 78,
    stockMin: 35,
    stockMax: 320,
  },
  {
    id: "26",
    nom: "TÔLE COLAMINÉ TPO - SIKA ( 2,00 x 1,00 ) m²",
    categorie: "TÔLE COLAMINÉ",
    fournisseur: "SIKA",
    stockActuel: 110,
    prix: 92,
    stockMin: 28,
    stockMax: 280,
  },
  {
    id: "27",
    nom: "TÔLE COLAMINÉ PVC - IMPER ( 2,00 x 1,00 ) m²",
    categorie: "TÔLE COLAMINÉ",
    fournisseur: "IMPER",
    stockActuel: 130,
    prix: 75,
    stockMin: 32,
    stockMax: 290,
  },
  {
    id: "28",
    nom: "EQUERE TPO - IMPER (2 cm/5 cm x 2,00 ml) - EXT",
    categorie: "TÔLE COLAMINÉ",
    fournisseur: "IMPER",
    stockActuel: 85,
    prix: 45,
    stockMin: 20,
    stockMax: 200,
  },
  {
    id: "29",
    nom: "EQUERE TPO - IMPER 5 cm/5 cm x 2,00 ml) - EXT",
    categorie: "TÔLE COLAMINÉ",
    fournisseur: "IMPER",
    stockActuel: 75,
    prix: 52,
    stockMin: 18,
    stockMax: 180,
  },
  {
    id: "30",
    nom: "BANDE TPO - IMPER (3 cm x 2,00 ml)",
    categorie: "TÔLE COLAMINÉ",
    fournisseur: "IMPER",
    stockActuel: 95,
    prix: 38,
    stockMin: 25,
    stockMax: 220,
  },
  {
    id: "31",
    nom: "EQUERE TPO - KÖSTER (5 cm/5cm x 2,00 ml) - EXT",
    categorie: "TÔLE COLAMINÉ",
    fournisseur: "KÖSTER",
    stockActuel: 70,
    prix: 48,
    stockMin: 15,
    stockMax: 170,
  },
  {
    id: "32",
    nom: "EQUERE TPO - KÖSTER (3 cm/7cm x 2,00 ml) - INT",
    categorie: "TÔLE COLAMINÉ",
    fournisseur: "KÖSTER",
    stockActuel: 65,
    prix: 55,
    stockMin: 16,
    stockMax: 160,
  },
  {
    id: "33",
    nom: "EQUERE TPO - KÖSTER (2 cm/3cm x 2,00 ml) - INT",
    categorie: "TÔLE COLAMINÉ",
    fournisseur: "KÖSTER",
    stockActuel: 80,
    prix: 42,
    stockMin: 22,
    stockMax: 190,
  },
  {
    id: "34",
    nom: "BANDE TPO - KÔSTER (3cm x 2,00 ml)",
    categorie: "TÔLE COLAMINÉ",
    fournisseur: "KÔSTER",
    stockActuel: 90,
    prix: 35,
    stockMin: 24,
    stockMax: 210,
  },
  {
    id: "35",
    nom: "DILUANT CELLULOSIQUE 5L",
    categorie: "DILUANT",
    fournisseur: "CELLULOSIQUE",
    stockActuel: 60,
    prix: 28,
    stockMin: 15,
    stockMax: 120,
  },
  {
    id: "36",
    nom: "COLLE Rubberfuse 20 Kg",
    categorie: "COLLE",
    fournisseur: "Rubberfuse",
    stockActuel: 45,
    prix: 120,
    stockMin: 10,
    stockMax: 100,
  },
  {
    id: "37",
    nom: "COLLE KÖSTER 4,5 Kg",
    categorie: "COLLE",
    fournisseur: "KÖSTER",
    stockActuel: 80,
    prix: 65,
    stockMin: 20,
    stockMax: 150,
  },
  {
    id: "38",
    nom: "ASSOFLEX ETANCHE - 18 kg",
    categorie: "ÉTANCHÉITÉ LIQUIDE",
    fournisseur: "ASSOFLEX",
    stockActuel: 35,
    prix: 85,
    stockMin: 8,
    stockMax: 80,
  },
  {
    id: "39",
    nom: "Sikalastic®-560 - 20 kg",
    categorie: "ÉTANCHÉITÉ LIQUIDE",
    fournisseur: "SIKA",
    stockActuel: 40,
    prix: 95,
    stockMin: 10,
    stockMax: 90,
  },
  {
    id: "40",
    nom: "SikaFill®-100 - 18 kg",
    categorie: "ÉTANCHÉITÉ LIQUIDE",
    fournisseur: "SIKA",
    stockActuel: 50,
    prix: 78,
    stockMin: 12,
    stockMax: 100,
  },
  {
    id: "41",
    nom: "Sikalastic® M 640 - 25 kg",
    categorie: "ÉTANCHÉITÉ LIQUIDE",
    fournisseur: "SIKA",
    stockActuel: 30,
    prix: 110,
    stockMin: 6,
    stockMax: 70,
  },
  {
    id: "42",
    nom: "DERBIETANCHE - 16 kg",
    categorie: "ÉTANCHÉITÉ LIQUIDE",
    fournisseur: "DERBIGUM",
    stockActuel: 42,
    prix: 88,
    stockMin: 9,
    stockMax: 85,
  },
  {
    id: "43",
    nom: "DERBILUXE - 16 kg",
    categorie: "ÉTANCHÉITÉ LIQUIDE",
    fournisseur: "DERBIGUM",
    stockActuel: 38,
    prix: 92,
    stockMin: 8,
    stockMax: 80,
  },
  {
    id: "44",
    nom: "FILM POLYANE 80µ",
    categorie: "LAINE DE ROCHE",
    fournisseur: "POLYANE",
    stockActuel: 25,
    prix: 45,
    stockMin: 5,
    stockMax: 60,
  },
  {
    id: "45",
    nom: "ROCKACIER C Nu 60 mm",
    categorie: "LAINE DE ROCHE",
    fournisseur: "ROCKACIER",
    stockActuel: 180,
    prix: 22,
    stockMin: 40,
    stockMax: 350,
  },
  {
    id: "46",
    nom: "COBERLAN C Nu 60 mm",
    categorie: "LAINE DE ROCHE",
    fournisseur: "COBERLAN",
    stockActuel: 160,
    prix: 25,
    stockMin: 35,
    stockMax: 320,
  },
  {
    id: "47",
    nom: "ROCK-UP B SOUDABLE 40 mm",
    categorie: "LAINE DE ROCHE",
    fournisseur: "ROCK-UP",
    stockActuel: 200,
    prix: 28,
    stockMin: 45,
    stockMax: 380,
  },
  {
    id: "48",
    nom: "ROCK-UP B SOUDABLE 60 mm",
    categorie: "LAINE DE ROCHE",
    fournisseur: "ROCK-UP",
    stockActuel: 170,
    prix: 32,
    stockMin: 38,
    stockMax: 340,
  },
  {
    id: "49",
    nom: "GÉOTEXTILE 60gr/m² (1,00 m x 50,00 m)",
    categorie: "GÉOTEXTILE",
    fournisseur: "GÉOTEXTILE",
    stockActuel: 90,
    prix: 65,
    stockMin: 20,
    stockMax: 200,
  },
  {
    id: "50",
    nom: "GÉOTEXTILE 300gr/m² (2,00 m x 50,00 m)",
    categorie: "GÉOTEXTILE",
    fournisseur: "GÉOTEXTILE",
    stockActuel: 60,
    prix: 120,
    stockMin: 15,
    stockMax: 150,
  },
  {
    id: "51",
    nom: "GÉOTEXTILE 200gr/m² (2,00 m x 50,00 m)",
    categorie: "GÉOTEXTILE",
    fournisseur: "GÉOTEXTILE",
    stockActuel: 75,
    prix: 95,
    stockMin: 18,
    stockMax: 180,
  },
  {
    id: "52",
    nom: "GÉOTEXTILE 150gr/m² (2,00 m x 50,00 m)",
    categorie: "GÉOTEXTILE",
    fournisseur: "GÉOTEXTILE",
    stockActuel: 85,
    prix: 85,
    stockMin: 22,
    stockMax: 190,
  },
  {
    id: "53",
    nom: "GÉOTEXTILE 100gr/m² (2,00 m x 50,00 m)",
    categorie: "GÉOTEXTILE",
    fournisseur: "GÉOTEXTILE",
    stockActuel: 95,
    prix: 75,
    stockMin: 25,
    stockMax: 210,
  },
  {
    id: "54",
    nom: "SIKASHIELD® P34 S 4 MM - SABLÉ",
    categorie: "ÉTANCHÉITÉ BITUMINEUSE",
    fournisseur: "SIKA",
    stockActuel: 220,
    prix: 42,
    stockMin: 50,
    stockMax: 450,
  },
  {
    id: "55",
    nom: "SIKASHIELD® P-34 MG EG 4MM - GRAIN VERT",
    categorie: "ÉTANCHÉITÉ BITUMINEUSE",
    fournisseur: "SIKA",
    stockActuel: 190,
    prix: 45,
    stockMin: 45,
    stockMax: 420,
  },
  {
    id: "56",
    nom: "SIKASHIELD® P-36 PE EG 4MM - FILM PE",
    categorie: "ÉTANCHÉITÉ BITUMINEUSE",
    fournisseur: "SIKA",
    stockActuel: 210,
    prix: 48,
    stockMin: 48,
    stockMax: 440,
  },
  {
    id: "57",
    nom: "DERBIGUM SP4 4MM",
    categorie: "ÉTANCHÉITÉ BITUMINEUSE",
    fournisseur: "DERBIGUM",
    stockActuel: 180,
    prix: 52,
    stockMin: 40,
    stockMax: 380,
  },
  {
    id: "58",
    nom: "DERBIGUM GC5 5MM",
    categorie: "ÉTANCHÉITÉ BITUMINEUSE",
    fournisseur: "DERBIGUM",
    stockActuel: 160,
    prix: 58,
    stockMin: 35,
    stockMax: 350,
  },
  {
    id: "59",
    nom: "SIKA® IGOLFLEX®-115 EG",
    categorie: "ÉTANCHÉITÉ BITUMINEUSE",
    fournisseur: "SIKA",
    stockActuel: 140,
    prix: 65,
    stockMin: 30,
    stockMax: 300,
  },
  {
    id: "60",
    nom: "NIROL",
    categorie: "ÉTANCHÉITÉ BITUMINEUSE",
    fournisseur: "NIROL",
    stockActuel: 120,
    prix: 38,
    stockMin: 25,
    stockMax: 250,
  },
  {
    id: "61",
    nom: "DERBICOTE",
    categorie: "ÉTANCHÉITÉ BITUMINEUSE",
    fournisseur: "DERBIGUM",
    stockActuel: 100,
    prix: 72,
    stockMin: 20,
    stockMax: 220,
  },
  {
    id: "62",
    nom: "SIKATOP®-209 RÉSERVOIR - KIT 38 KG",
    categorie: "CUVELAGE",
    fournisseur: "SIKA",
    stockActuel: 25,
    prix: 185,
    stockMin: 5,
    stockMax: 60,
  },
  {
    id: "63",
    nom: "SIKATOP®-145 CUVELAGE - KIT 30 KG",
    categorie: "CUVELAGE",
    fournisseur: "SIKA",
    stockActuel: 35,
    prix: 165,
    stockMin: 8,
    stockMax: 80,
  },
  {
    id: "64",
    nom: "SIKALATEX® - 20 KG",
    categorie: "CUVELAGE",
    fournisseur: "SIKA",
    stockActuel: 45,
    prix: 95,
    stockMin: 10,
    stockMax: 100,
  },
  {
    id: "65",
    nom: "SUPER SIKALITE® - 25 KG",
    categorie: "CUVELAGE",
    fournisseur: "SIKA",
    stockActuel: 30,
    prix: 125,
    stockMin: 6,
    stockMax: 70,
  },
  {
    id: "66",
    nom: "SIKAFLEX® PRO-11 FC",
    categorie: "CUVELAGE",
    fournisseur: "SIKA",
    stockActuel: 55,
    prix: 45,
    stockMin: 12,
    stockMax: 120,
  },
  {
    id: "67",
    nom: "SIKA®-4A - 20L",
    categorie: "CUVELAGE",
    fournisseur: "SIKA",
    stockActuel: 40,
    prix: 88,
    stockMin: 8,
    stockMax: 90,
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
    content += `<tr onclick='setCarDetailsModal(true, "${car.id}")' >
                    <td>${car.nom}</td>
                    <td>${car.categorie}</td>
                    <td>${car.stockActuel}</td>
                    <td>${car.stockMin}</td>
                    <td>${car.stockMax}</td>
                    <td>${car.prix}</td>
                    <td>${car.fournisseur}</td>
                        
                </tr>`;
  });

  carList.innerHTML = content;

  carCount.innerText = `${selectedCars.length} Articles affichés`;
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
  let newArticle = {
    nom: document.getElementById("add-article-name").value,
    stockActuel: document.getElementById("add-actual-stock").value,
    stockMin: document.getElementById("add-min-stock").value,
    stockMax: document.getElementById("add-max-stock").value,
    prix: document.getElementById("add-price").value,
    categorie: document.getElementById("add-category").value,
    fournisseur: document.getElementById("add-fournisseur").value,
    id: String(Number(allCars.at(-1).id) + 1),
  };

  console.log(newArticle);

  allCars.unshift(newArticle);

  renderCars([]);

  addCarModal.style.display = "none";
}

function setCarDetailsModal(open, id) {
  if (open) {
    carDetailsModal.style.display = "flex";

    let car = allCars.find((car) => car.id === id);

    document.getElementById("article-name").value = car.nom;
    document.getElementById("actual-stock").value = car.stockActuel;
    document.getElementById("price").value = car.prix;
    document.getElementById("min-stock").value = car.stockMin;
    document.getElementById("max-stock").value = car.stockMax;
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
