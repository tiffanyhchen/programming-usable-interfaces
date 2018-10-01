checked();

function checked() {
    if(document.querySelector('input[name="size"]:checked') == true){
        var size = document.querySelector('input[name="size"]:checked').id;
        size.style.fontSize = "150%";
    }
}