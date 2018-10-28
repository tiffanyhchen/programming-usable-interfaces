
// Displays cart
$(document).ready(function() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    
    if (cart === null || cart.length == 0) 
    {
        document.querySelector('#cart-items').innerHTML = 
            "<div id='cart-message'>Your cart is empty. Try adding some items to your cart!</div>";
    } else {
        var cartItems = $("#cart-items");
        var subtotal = 0;
        for (var i = 0; i < cart.length; i++){
            var cartItem = cart[i];
            var cartRow = createRow(cartItem, i);
            
            cartItems.append(cartRow);
            subtotal += cartItem.price * cartItem.quantity;
        }
        document.querySelector('#subtotal-price').innerHTML = "$" + subtotal.toFixed(2);
        
        var tax = subtotal * 0.06;
        document.querySelector('#tax').innerHTML = "$" + tax.toFixed(2);
        
        var total = subtotal + tax + 5;
        document.querySelector('#total-price').innerHTML = "$" + total.toFixed(2);
    }
});  

function createRow(cartItem, index){
    return "<table class='cart-item' id='" + index + "'><tr><td><img src='"
                + cartItem.image + "'/></td>" 
                + "<td class='cart-item-details'><div class='cart-item-name'>"
                + cartItem.name + "</div><a class='cart-item-remove' href='javascript:deleteItem(" 
                + index + ")'>"
                + "Remove from cart</a></td><td class='buffer'></td>"
                + "<td class='cart-quantity'>" + cartItem.quantity + "</td>"
                + "<td class='cart-price'>$" + (cartItem.price * cartItem.quantity).toFixed(2) + "</td>"
                + "</tr></table>";
}

function deleteItem(index){
    var cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    
    document.getElementById(index + "").remove();
    if(cart.length == 0){
        location.reload();
    }
    $("#cart-item-count").text(getItemCount(cart));
    $("#toast").show().delay(5000).fadeOut();
}

function getItemCount(cart){
    var itemCount = 0;
    for(var i = 0; i < cart.length; i++){
        itemCount += cart[i].quantity;
    }
    return itemCount;
}