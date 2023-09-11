$(document).ready(function () {
  $(".btn1").click(function () {
    $("#animate1").animate({
      // left: '100px',
      // height: '150px',
      // width: '150px'
      left: "100px",
      height: "+=150px",
      width: "+=150px",
    });
  });
  $(".btn2").click(function () {
    $("#animate2").animate({
      left: "100px",
      height: "-=150px",
      width: "-=150px",
    });
  });
  $(".btn3").click(function () {
    var isamil = $("#animate3");
    isamil.animate({ height: "300px" }, "slow");
    isamil.animate({ width: "300px" }, "slow");
    isamil.animate({ height: "100px" }, "slow");
    isamil.animate({ width: "100px" }, "slow");
  });
  $(".btn4").click(function () {
    var isamil = $("#animate4");
    isamil.animate({ left: "100px"}, "slow");
    isamil.animate({ height: "200px" }, "slow");
    isamil.animate({ width: "300px" }, "slow");
    isamil.animate({ fontSize:"30px" }, "first");
  });
});
