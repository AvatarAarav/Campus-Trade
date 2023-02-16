// Dummy data for ads
const ads = [
    {
      title: "Samsung Galaxy S21 Ultra",
      price: "$900",
      description: "Samsung Galaxy S21 Ultra 5G with 12GB RAM and 256GB storage. Brand new and sealed in box."
    },
    {
      title: "Macbook Pro 16 inch",
      price: "$1500",
      description: "Macbook Pro 16 inch with 16GB RAM and 512GB storage. Like new condition with no scratches or dents."
    },
    {
      title: "Bose QuietComfort 35 II",
      price: "$350",
      description: "Bose QuietComfort 35 II wireless headphones in pristine condition. Comes with original box and accessories."
    }
  ];

  // Function to create ad cards dynamically
  const createAdCards = (ads) => {
    const adCardsContainer = document.getElementById("ad-cards-container");
    ads.forEach(ad => {
      const adCard = document.createElement("div");
      adCard.classList.add("ad-card");
      adCard.innerHTML = `
        <h3>${ad.title}</h3>
        <p>${ad.price}</p>
        <p>${ad.description}</p>
        <button onclick="getAdDetails('${ad.title}')">View Ad</button>
      `;
      adCardsContainer.appendChild(adCard);
    });
  };
  function getAdDetails(title){
    location.assign(location.href+`${"ad/"+title}`)
  }
  
  
  // Call createAdCards function to create ad cards on page load
  createAdCards(ads);
  