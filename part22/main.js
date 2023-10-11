$(document).ready(function () {
  $("#btn").click(function () {
    $(".container").children().css({
      color: "green",
      border: "2px solid blue",
    });                          //find('ul')
  });
});
