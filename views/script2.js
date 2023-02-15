// Get ad details from local storage
const adDetails = JSON.parse(localStorage.getItem("selectedAd"));

// Populate ad details on ad_details.html page
document.getElementById("ad-title").innerHTML = adDetails.title;
document.getElementById("ad-price").innerHTML = adDetails.price;
document.getElementById("ad-description").innerHTML = adDetails.description;