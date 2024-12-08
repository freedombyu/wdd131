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

// Populate the product dropdown
document.addEventListener('DOMContentLoaded', () => {
  const productSelect = document.getElementById('product');

  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = `${product.name} (Rating: ${product.averageRating}⭐)`;
    productSelect.appendChild(option);
  });

  // Handle form submission
  const reviewForm = document.getElementById('reviewForm');
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(reviewForm);
    const selectedProduct = products.find(p => p.id === formData.get('product'));

    const reviewData = {
      productName: selectedProduct.name,
      rating: formData.get('rating'),
      date: formData.get('date'),
      features: formData.getAll('features'),
      writtenReview: formData.get('review') || 'No written review provided',
      reviewerName: formData.get('name') || 'Anonymous',
    };

    console.log('Review submitted:', reviewData);
    alert(`Thank you for reviewing the ${selectedProduct.name}!`);
    reviewForm.reset();
  });

  // Set current year and last modified date in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('last-modified').textContent = document.lastModified;
});