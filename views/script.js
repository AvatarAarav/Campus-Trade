// Dummy data for ads
fetch('http://localhost:3000/api/products') .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    // Call createAdCards function to create ad cards on page load
    createAdCards(data.data)
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
            
// Function to create ad cards dynamically
const createAdCards = (ads) => {
    const adCardsContainer = document.getElementById("ad-cards-container");
    ads.forEach(ad => {
        const adBody = document.createElement("div");
        adBody.classList.add("card-body");
        adBody.innerHTML = `
    <h4 class="price" style="font-size:min(20px,2.2vw);"><i class="fa-solid fa-indian-rupee-sign"></i> ${ad.price}</h4>
    <h6 class="card-title" style="font-size:min(20px,2.2vw);">${ad.name}</h6>
    <button class="viewAd" onclick="getAdDetails('${ad.name}')">View Ad</button>
`;

        const adCard = document.createElement("div");
        adCard.classList.add("card");
        adCard.innerHTML = `<img class="card-img-top productpic" src=${ad.image_src} alt="Card image" style="width:100%">`;
        adCard.appendChild(adBody);
        adCardsContainer.appendChild(adCard);
    });
};

function getAdDetails(title) {
    location.assign(location.href + `${"ad/"+title}`)
}

