$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newburger")
          .val()
          .trim(),
        devoured: 0
      };
      // send the post request
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("Added new burger");
        location.reload();
      });
    });
  // click event will change the state of the burgers
    $(".eatburger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
      var devouredState = {
        devoured: 1
      };
      // send this put request
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(function() {
        console.log("Burger devoured");
        location.reload();
      });
    });
  // now get rid of the burger 
    $(".trashburger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
      }).then(location.reload());
    });
  });