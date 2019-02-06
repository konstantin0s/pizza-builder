// Write your Pizza Builder JavaScript in this file.
$('.green-pepper').each(function(i){
  $(this).fadeOut(0);
});

$('.btn-pepperonni').on('click', function(e) {
  
  e.preventDefault();

  if ($('#pepperoni').hasClass('active')) {
    $('#pepperoni').removeClass('active');  
   } else {
     ($('#pepperoni').addClass('active'));
   }
     $('.green-pepper').toggle(); 
});


$('.mushroom').each(function(i){
  $(this).fadeOut(0);
});

$('.btn-mushrooms').on('click', function(e) {
  $('.mushroom').toggle(); 
  e.preventDefault();
});

//display none pepperoni.
$('.pep').each(function(i){

  //For Each Instance, grab a child called .something1. Fade It Out.
  $(this).fadeOut(0);
});


$('.btn-green-peppers').on('click', function(e) {

  $('.pep').toggle(); 
  e.preventDefault();
});

$('.sauce').css('display', 'none');
$('.btn-sauce').on('click', function(e) {
  $('.sauce').toggle(); 
  e.preventDefault();
});

//Add remove gluten free crust.
$('#crust').removeClass('crust-gluten-free');
$('.btn-crust').on('click', function(e) {

 e.preventDefault();
 if ($('#crust' ).hasClass('crust-gluten-free')) {
  $( '#crust' ).removeClass('crust-gluten-free');
 } else {
  $( '#crust' ).addClass('crust-gluten-free'); 
 }
  });

  //Remove active class from all buttons
  $( window ).load(function() {
    $('#pepperoni').removeClass('active');
  });

 


