document.querySelector('.delete').addEventListener('click', deleteCard);
function deleteCard() {
   
    var cardToDelete = document.getElementById("cardId");
    
    
    cardToDelete.parentNode.removeChild(cardToDelete);
}