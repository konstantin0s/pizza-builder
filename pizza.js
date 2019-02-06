// Write your Pizza Builder JavaScript in this file.

$('.btn-pepperonni').on('click', function(e) {
  $('.green-pepper').toggle();  
  e.preventDefault();

});

$('.btn-mushrooms').on('click', function(e) {
  $('.mushroom').toggle(); 
  e.preventDefault();
});

$('.btn-green-peppers').on('click', function(e) {
  $('.pep').toggle(); 
  e.preventDefault();
});

$('.btn-sauce').on('click', function(e) {
  $('.sauce').toggle(); 
  e.preventDefault();
});

//Add remove gluten free crust.
$('#crust').removeClass('crust-gluten-free');
$('.btn-crust').on('click', function(e) {

 e.preventDefault();
 if ($( "#crust" ).hasClass('crust-gluten-free')) {
  $( "#crust" ).removeClass('crust-gluten-free');
 } else {
  $( "#crust" ).addClass('crust-gluten-free'); 
 }
  });

