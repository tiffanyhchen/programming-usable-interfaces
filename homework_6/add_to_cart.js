/*** Product Constructors ***/
function Product(name, price, color, size, quantity, image) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.size = size;
    this.quantity = quantity;
    this.image = image;
}



$(document).ready(function() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    
    if (cart === null) 
    {
        cart = [];
    }
    
    $("#add-to-cart").click(function() {
        addToCart(cart);
        console.log(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
    }); 
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
});

function addToCart(cart){
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

        var newCartItem = new Product(productName, price, color, size, quantity, image);
        cart.push(newCartItem);
        $("#cart-item-count").text(getItemCount(cart));
        $("#toast").show().delay(5000).fadeOut();
    }   
}

function getItemCount(cart){
    var itemCount = 0;
    for(var i = 0; i < cart.length; i++){
        itemCount += cart[i].quantity;
    }
    return itemCount;
}