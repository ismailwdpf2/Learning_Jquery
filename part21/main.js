$(document).ready(function () {
  $("#btn").click(function () {
    $("h2").siblings().css({
      color: "green",
      border: "2px solid blue",
    });                         //$("h2").siblings("p")            
  });                        //$("h2").nextAll()
});                         //$("h2").prevAll()
