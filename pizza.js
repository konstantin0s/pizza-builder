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
  if ($('#mushrooms' ).hasClass('active')) {
    $( '#mushrooms' ).removeClass('active');
   } else {
    $( '#mushrooms' ).addClass('active'); 
   }

  $('.mushroom').toggle(); 
  e.preventDefault();
});

//display none pepperoni.
$('.pep').each(function(i){
//For Each Instance, grab a child called .something1. Fade It Out.
 $(this).fadeOut(0);
});

  $('.btn-green-peppers').on('click', function(e) {
      if ($('#green-pepper' ).hasClass('active')) {
        $( '#green-pepper' ).removeClass('active');
       } else {
        $( '#green-pepper' ).addClass('active'); 
       }
     $('.pep').toggle(); 
  e.preventDefault();
});


$('.btn-sauce').on('click', function(e) {
  if ($('#sauce' ).hasClass('active')) {
    $( '#sauce' ).removeClass('active');
   } else {
    $( '#sauce' ).addClass('active'); 
   }
  $('.sauce').toggle(); 
  e.preventDefault();
});

//Add remove gluten free crust.

$('.btn-crust').on('click', function(e) {
   e.preventDefault();
 if ($('#crust' ).hasClass('crust-gluten-free')) {
  $( '#crust' ).removeClass('crust-gluten-free');
 } else {
  $( '#crust' ).addClass('crust-gluten-free'); 
 }

 if ($('#gluten' ).hasClass('active')) {
  $( '#gluten' ).removeClass('active');
 } else {
  $( '#gluten' ).addClass('active'); 
 }
  });

  //Remove active class from all buttons
  $( window ).load(function() {
    $('#pepperoni').removeClass('active');
    $('#crust').removeClass('crust-gluten-free');
    $('#mushrooms').removeClass('active');
    $('#green-pepper').removeClass('active');
    $('#sauce').removeClass('active');
    $('#gluten').removeClass('active');
    $('.sauce').css('display', 'none');
  });

 


