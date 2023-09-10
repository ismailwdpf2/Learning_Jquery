$(document).ready(function () {
$('button').click(function () {
//  $('.box-1').fadeIn('first');
//  $('.box-2').fadeIn('slow'); //display none kore nite hobe
//  $('.box-3').fadeIn(3000);

// $('.box-1').fadeOut('first');
// $('.box-2').fadeOut('slow');
// $('.box-3').fadeOut(2000);

// $('.box-1').fadeToggle('slow');
// $('.box-2').fadeToggle(3000);
// $('.box-3').fadeToggle('slow');

$('.box-1').fadeTo('first',0.3)
$('.box-2').fadeTo('slow',0.5)  //opacity
$('.box-3').fadeTo('slow',0.2)
});
});
