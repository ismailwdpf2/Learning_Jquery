$(document).ready(function () {
  $("#btn").click(function () {
    $("span").parentsUntil("div").css({
      color: "green",
      border: "2px solid blue",
    });                          //parent/parents/parentsUntil
  });
});
