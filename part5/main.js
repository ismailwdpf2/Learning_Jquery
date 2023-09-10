$(document).ready(function () {
  $("#hide").click(function(){
$("p.hs").hide('slow'); //slow/fast/5000/2000/ digit mean miliseconds
  });
  $("#show").click(function(){
    $("p.hs").show('slow'); //slow/fast/5000/2000/ digit mean miliseconds
  });

  $("button.tgl").click(function(){
    $('p.tgl').toggle('slow');
  })
});
