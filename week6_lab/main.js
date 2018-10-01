// $(document).ready(function(){
//     $("#add-item").click(function() { // bind handler for click event
//         var list = $("#grocery-list"); // get the ol list by id
//         var itemInput = $("#new-list-item"); // get the new item input
// 	  // append the input value within an li element
//         list.append("<li>" + itemInput.val() + " <button class='delete-item'>X</button></li>")
//     });
// });

// $(".delete-item").click(function() {
//     $(this).parent().remove();
// });

$(document).on("click", ".delete-item", function() {
    $(this).parent().remove();
});

$(document).on("click", "#add-item", function() {
    var list = $("#grocery-list");
    var itemInput = $("#new-list-item");
    list.append("<li>" + itemInput.val() + " <button class='delete-item'>X</button></li>");
});

