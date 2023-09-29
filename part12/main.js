$(document).ready(function () {
$('#btn1').click(function () {
  alert("Text: " + $("#lorem").text());

});
$('#btn2').click(function () {
   alert("Text: " + $("#lorem").html());
 
 });
});
