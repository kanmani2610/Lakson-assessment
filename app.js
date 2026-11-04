let allProducts = [];
let selectedCategory = "All";
let searchText = "";

const grid = document.getElementById("grid");
const filters = document.getElementById("filters");
const searchBox = document.getElementById("search");
const modal = document.getElementById("modal");

grid.innerHTML = "<p class='message'>Loading products...</p>";

getProducts()
  .then(function (data) {
    allProducts = data;
    makeFilterButtons();
    showProducts();
  })
  .catch(function () {
    grid.innerHTML =
      "<p class='message'>Unable to load products.</p>";
  });

function makeFilterButtons() {
  const categories = ["All"];

  allProducts.forEach(function (p) {
    if (!categories.includes(p.category)) {
      categories.push(p.category);
    }
  });

  filters.innerHTML = "";

  categories.forEach(function (cat) {
    const btn = document.createElement("button");

    btn.textContent = cat;
    btn.className = "filter-btn";

    if (cat === selectedCategory) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", function () {
      selectedCategory = cat;
      makeFilterButtons();
      showProducts();
    });

    filters.appendChild(btn);
  });
}

function showProducts() {
  const filtered = allProducts.filter(function (p) {
    const categoryMatch =
      selectedCategory === "All" ||
      p.category === selectedCategory;

    const searchMatch =
      p.name.toLowerCase().includes(searchText.toLowerCase());

    return categoryMatch && searchMatch;
  });

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML =
      "<p class='message'>No matching products.</p>";
    return;
  }

  filtered.forEach(function (p) {
    const card = document.createElement("article");
    card.className = "card";

    const top = document.createElement("div");
    top.className = "card-top";

    const category = document.createElement("span");
    category.className = "category";
    category.textContent = p.category;

    const status = document.createElement("span");
    status.className = "status " +
      p.status.toLowerCase().replace(" ", "-");
    status.textContent = p.status;

    top.append(category, status);

    const title = document.createElement("h3");
    title.textContent = p.name;

    const metrics = document.createElement("div");
    metrics.className = "metrics";

    [p.metric1, p.metric2].forEach(function (metric) {
      const item = document.createElement("div");

      const label = document.createElement("small");
      label.textContent = metric.label;

      const value = document.createElement("strong");
      value.textContent = metric.value;

      item.append(label, value);
      metrics.appendChild(item);
    });

    const button = document.createElement("button");
    button.className = "action-btn";
    button.textContent = p.button;

    button.addEventListener("click", function () {
      openModal(p);
    });

    card.append(top, title, metrics, button);
    grid.appendChild(card);
  });
}

function openModal(p) {
  document.getElementById("modal-title").textContent = p.name;
  document.getElementById("modal-desc").textContent = p.description;
  document.getElementById("modal-status").textContent =
    "Status: " + p.status;

  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

document.getElementById("modal-close")
  .addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

searchBox.addEventListener("input", function () {
  searchText = searchBox.value;
  showProducts();
});