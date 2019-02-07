// Write your Pizza Builder JavaScript in this file.
$('.green-pepper').each(function(i){
  $(this).fadeOut(0);
});



$('.btn-pepperonni').on('click', function(e) {
  e.preventDefault();
  if (!$('#pepperoni').hasClass('active')) {
    $('#pepperoni').addClass('active');  
    $('.pep').css('display', 'block');
} else {
  $('#pepperoni').removeClass('active');
  $('.pep').css('display', 'none');
   }
// $('#pepperoni').toggleClass('active');
    //  $('.green-pepper').toggleClass(); 
    //  $('.pep').toggle(); 
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
     $('.green-pepper').toggle(); 

  e.preventDefault();
});


$('.btn-sauce').on('click', function(e) {
  if ($('#white-sauce').css('display') == 'block'){ 
    $('.whitePr').text('$3 white sauce'); 
 }  
   if ($('#white-sauce').css('display') == 'block') {
  $('.whitePr').hide();
 } if ($('#white-sauce').css('display') == 'none') {
  $('.whitePr').show();
 }
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

 if ($('#gluten' ).hasClass('active')) { 
  $('.glutenPr').css('display','block');
}  else {
  $('.glutenPr').hide();

}

  });

  //Remove active class from all buttons
  $( window ).load(function() {
    // $('#pepperoni').toggleClass('active');
    $('.pep').css('display', 'block');
    $('#crust').removeClass('crust-gluten-free');
    $('#mushrooms').removeClass('active');
    $('#green-pepper').removeClass('active');
    $('#sauce').removeClass('active');
    $('#gluten').removeClass('active');
    $('.sauce').css('display', 'none');
    $('.whitePr').hide();
    $('.glutenPr').hide();
  });

 


