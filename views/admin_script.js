
var searchForm = document.getElementById("admin_product");
var search_user =document.getElementById("user_search");


search_user.addEventListener("submit", function(e) {
    
    e.preventDefault()
   

    const searchQuery = e.target[0].value;


    fetch(`http://localhost:3000/api/search_admin_user?search=${searchQuery}`).then(response => {
        if (response.ok) {
            return response.json(); //converting back to object
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        // Call createAdCards function to create ad cards on page load
        let adCardsContain = document.getElementById("user_change");
        empty(adCardsContain)
        
        // console.log("hi")
        CreateUser(data.data)
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });



});


searchForm.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log(e)


    const searchQuery = e.target[0].value;
    // alert(searchQuery)


    fetch(`http://localhost:3000/api/admin_product?search=${searchQuery}`).then(response => {
        if (response.ok) {
            return response.json(); //converting back to object
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        // Call createAdCards function to create ad cards on page load
        let adCardsContain = document.getElementById("add-container-1");
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



    fetch('http://localhost:3000/api/allusers').then(response => {
  
    if (response.ok) {
        return response.json(); //converting back to object
    }
    throw new Error('Network response was not ok.');
})
.then(data => {
    // Call createAdCards function to create ad cards on page load
    CreateUser(data.data)
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});


const CreateUser = (users) =>{

const temp = document.getElementById("user_change")


users.forEach(ad =>{
    const link_user = document.createElement('a')
link_user.innerHTML = ad.name
link_user.classList = "list-group-item list-group-item-action"
link_user.href = "#"
temp.appendChild(link_user)

})

}


    function empty(element) {
        while(element.firstElementChild) {
           element.firstElementChild.remove();
        }
      }

// Function to create ad cards dynamically
const createAdCards = (ads) => {
    //ads is an array of all ads
    const adCardsContainer = document.getElementById("add-container-1");
    ads.forEach(ad => {
        const adBody = document.createElement("div");
        adBody.classList.add("c-body");
        adBody.style.cssText = 'background-color: white; width: 100%;';
        adBody.innerHTML = `
        <h3 class="card-title">${ad.name}</h3>
            <p class="card-text"> ${ad.price}</p>
            <button class="viewAd" onclick="getAdDetails('${ad._id}')">View Ad</button>
            
           
`;
        const adCard = document.createElement("div");
        adCard.classList.add("card");
        adCard.style.cssText = "display: inline-block; width:210px; margin: 20px 0 0 20px; border-bottom: 6px solid orangered;"
        // console.log(`''`)
        adCard.innerHTML = `<img class="<img class="card-img-top"
            src="data:${ad.img_type};base64,${btoa(String.fromCharCode.apply(null,ad.img_content.data))}"
            alt="Card image" style="width: 208px;height: 230px;">`;
        adCard.appendChild(adBody);
        adCardsContainer.appendChild(adCard);
    });
};






