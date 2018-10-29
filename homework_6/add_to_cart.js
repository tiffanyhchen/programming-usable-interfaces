/*** Product Constructor ***/
function Product(id, name, price, color, size, quantity, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.color = color;
    this.size = size;
    this.quantity = quantity;
    this.image = image;
}

$(document).ready(function() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    var cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"));
    
    // If cart does not exist, create one
    if (cart === null) 
    {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    
    //If cartItemCount does not exist, set it to 0
    if (cartItemCount === null){
        cartItemCount = 0;
        localStorage.setItem("cartItemCount", JSON.stringify(cartItemCount));
        $("#cart-item-count").text(cartItemCount);
    }
    
    // When the add-to-cart button is pressed, calls 
    // addToCart function
    $("#add-to-cart").click(function() {
        var cart = JSON.parse(localStorage.getItem("cart"));
        var cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"));
        addToCart(cart, cartItemCount);
    }); 
});

// Grabs content from page and adds item to cart
function addToCart(cart, cartItemCount){
    var productName = document.getElementById("product-title").textContent;
    var price = document.getElementById("product-price-value").textContent;
    var image = document.getElementById("product-image-src").src;

    if(document.querySelector('input[name="color"]:checked') === null ||
       document.querySelector('input[name="size"]:checked') === null ||
       Number(document.getElementById("quantity").value) < 1 ){
        alert("Please make sure you select a color, size, and input the quantity > 0.");
    } else {
        var color = document.querySelector('input[name="color"]:checked').value;
        var size = document.querySelector('input[name="size"]:checked').value;
        var quantity = Number(document.getElementById("quantity").value);

        var newCartItem = new Product(generateUniqueId(), productName, price, color, size, quantity, image);
        cart.push(newCartItem);
        cartItemCount = quantity + cartItemCount;
        
        // Notification
        $("#cart-item-count").text(cartItemCount);
        $("#toast").show().delay(5000).fadeOut();
        
        // Save to local storage
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("cartItemCount", JSON.stringify(cartItemCount));
    }   
}

// Generates unique ids for products
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
};