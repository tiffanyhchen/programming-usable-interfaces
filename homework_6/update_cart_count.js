$(document).ready(function() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    var itemCount = 0;
    
    if (cart !== null) 
    {
        itemCount = getItemCount(cart);
    }
    
    console.log("itemCount: " + itemCount);
    $("#cart-item-count").text(itemCount);
}); 

function getItemCount(cart){
    var itemCount = 0;
    for(var i = 0; i < cart.length; i++){
        itemCount += cart[i].quantity;
    }
    return itemCount;
}