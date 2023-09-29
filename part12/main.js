$(document).ready(function () {
$('#btn1').click(function () {
  alert("Text: " + $("#lorem").text());

});
$('#btn2').click(function () {
   alert("Text: " + $("#lorem").html());
 
 });
});

$(document).ready(function () {
   $('#btn3').click(function () {
      alert($("#ismail").val());
   });
   $('#btn4').click(function () {
      alert($("#git").attr("href"));
   });
});