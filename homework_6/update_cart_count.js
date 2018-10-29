// Loads the number of itmes in the cart into the
// navigation bar
$(document).ready(function() {
    var cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"));
    
    if(cartItemCount === null || cartItemCount === 0){
        cartItemCount = 0;
    }
    
    $("#cart-item-count").text(cartItemCount);
}); 
