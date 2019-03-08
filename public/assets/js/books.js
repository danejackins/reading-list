// Make sure we wait to attach our handlers until the DOM is fully loaded
$(function() {
  $(".change-has-read").on("click", function(event) {
    var id = $(this).data("id");
    console.log("id ", id);
    var newHasRead = $(this).data("newHasRead");

    var newHasRead = {
      hasRead: newHasRead
    };

    // Send the PUT request
    $.ajax("/api/books/" + id, {
      type: "PUT",
      data: newHasRead
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload():
      }
    )
  });


  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBook = {
      name: $("#ca").val().trim(),
      hasRead: $("[name=has-read]:checked").val()
    };

    console.log("newbook ", newBook);

    // Send the POST request
    $.ajax("/api/books", {
      type: "POST",
      data: newBook
    }).then(
      function() {
        console.log("add another book");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-book").on("click", function(event) {
    var id = $(this).data("id");

    // Send the delete request
    $.ajax("/api/books" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted book ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});