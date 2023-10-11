$(document).ready(function () {
$('#btn').click(function(){
  $("div").first().css({"background-color": "red"})  //last() / eq(1)
})
});

// $("div").filter(".classname").css({"background-color": "red"})
// $("div").not(".classname").css({"background-color": "red"})