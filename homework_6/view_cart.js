// Displays cart
$(document).ready(function() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    var cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"));
    
    if (cart === null || cartItemCount === null || cartItemCount == 0) 
    {
        document.querySelector('#cart-items').innerHTML = 
            "<div id='cart-message'>Your cart is empty. Try adding some items to your cart!</div>";
    } else {
        var cartItems = $("#cart-items");
        var subtotal = 0;
        for (var i = 0; i < cart.length; i++){
            var cartItem = cart[i];
            var cartRow = createRow(cartItem);
            
            cartItems.append(cartRow);
            subtotal += cartItem.price * cartItem.quantity;
        }
        
        // Updates all the pricing
        document.querySelector('#subtotal-price').innerHTML = "$" + subtotal.toFixed(2);
        document.querySelector('#subtotal-price-top').innerHTML = "$" + subtotal.toFixed(2);
        
        var tax = subtotal * 0.06;
        document.querySelector('#tax').innerHTML = "$" + tax.toFixed(2);
        
        var total = subtotal + tax + 5;
        document.querySelector('#total-price').innerHTML = "$" + total.toFixed(2);
    }
});  

// Creates a row in the table
function createRow(cartItem){
    return "<table class='cart-item' id='" + cartItem.id + "'><tr><td><img src='"
                + cartItem.image + "'/>"
                + "<div class='item-selection'><div class='color-ball " + cartItem.color 
                + "'></div><span class='size-selection'>"
                + cartItem.size.toUpperCase() + "</span></div></td>" 
                + "<td class='cart-item-details'><div class='cart-item-name'>"
                + cartItem.name + "</div><a class='cart-item-remove' href='javascript:deleteItem(" 
                + cartItem.id +")'>"
                + "Remove from cart</a></td><td class='buffer'></td>"
                + "<td class='cart-quantity'>" + cartItem.quantity + "</td>"
                + "<td class='cart-price'>$" + (cartItem.price * cartItem.quantity).toFixed(2) + "</td>"
                + "</tr></table>";
}

// Deletes row from the cart items table
function deleteItem(identifier){
    var cart = JSON.parse(localStorage.getItem("cart"));
    var cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"));
    var itemId = identifier.id;
    var cartIndex = cart.findIndex(item => item.id == itemId);
    var itemQuantity = cart[cartIndex].quantity;
   
    // Updates cart content and cartItemCount
    // Saves to local storage
    cart.splice(cartIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById(itemId).remove();
    cartItemCount -= itemQuantity;
    localStorage.setItem("cartItemCount", JSON.stringify(cartItemCount));
    
    if(cartItemCount == 0){
        location.reload();
    }
    
    $("#cart-item-count").text(cartItemCount + "");
    $("#toast").show().delay(5000).fadeOut();
}