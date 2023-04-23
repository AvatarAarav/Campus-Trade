
var searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log(e)


    const searchQuery = e.target[0].value;
    // alert(searchQuery)


    fetch(`http://localhost:3000/api/search_result?search=${searchQuery}`).then(response => {
        if (response.ok) {
            return response.json(); //converting back to object
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        // Call createAdCards function to create ad cards on page load
        let adCardsContain = document.getElementById("ad-cards-container");
        empty(adCardsContain)
        createAdCards(data.data)
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });



});

fetch('http://localhost:3000/api/products').then(response => {
        if (response.ok) {
            return response.json(); //converting back to object
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
    //ads is an array of all ads
    const adCardsContainer = document.getElementById("ad-cards-container");
    ads.forEach(ad => {
        const adBody = document.createElement("div");
        adBody.classList.add("card-body");
        adBody.innerHTML = `
    <h4 class="price" style="font-size:min(20px,2.2vw);"><i class="fa-solid fa-indian-rupee-sign"></i> ${ad.price}</h4>
    <h6 class="card-title" style="font-size:min(20px,2.2vw);">${ad.name}</h6>
    <button class="viewAd" onclick="getAdDetails('${ad._id}')">View Ad</button>
`;
        const adCard = document.createElement("div");
        adCard.classList.add("card");
        // console.log(`'data:${ad.img_type};base64,${ad.img_content.data.toString('base64')}'`)
        adCard.innerHTML = `<img class="card-img-top productpic" src='data:${ad.img_type};base64,${btoa(String.fromCharCode.apply(null,ad.img_content.data))}' alt="Card image" style="width:100%">`;
        adCard.appendChild(adBody);
        adCardsContainer.appendChild(adCard);
    });
};

function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
  }
  
//   let parent = document.getElementById("parent");
//   empty(parent);



var profilephoto = document.getElementById("profilephoto");

function profilepic() {
    if (profilephoto.alt === 'girl') {
        profilephoto.src = 'http://localhost:3000/assets/boy1.png';
        profilephoto.alt = 'boy';
    } else {
        profilephoto.src = 'http://localhost:3000/assets/girl1.png';
        profilephoto.alt = 'girl';
    }
}

var rprofilephoto = document.getElementById("Rprofilephoto");

function Rprofilepic() {
    if (rprofilephoto.alt === 'girl') {
        rprofilephoto.src = 'http://localhost:3000/assets/boy1.png';
        rprofilephoto.alt = 'boy';
    } else {
        rprofilephoto.src = 'http://localhost:3000/assets/girl1.png';
        rprofilephoto.alt = 'girl';
    }
}




