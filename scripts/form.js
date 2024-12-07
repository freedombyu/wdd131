const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  

  const productDropdown = document.getElementById("productName");
  const form = document.getElementById("reviewForm");
  const confirmationMessage = document.getElementById("confirmationMessage");
  const reviewCountSpan = document.getElementById("reviewCount");
  let reviewCount = 0;
  
  // Populate product dropdown
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productDropdown.appendChild(option);
  });
  
  // Form submission handler
  form.addEventListener("submit", event => {
    event.preventDefault();
    reviewCount++;
    reviewCountSpan.textContent = reviewCount;
    confirmationMessage.classList.remove("hidden");
    form.reset();
  });
  