// Write your Pizza Builder JavaScript in this file.
var currentValue = 21;
//  currentValue = parseInt($("#total").text(13),10);
// console.log(currentValue);


$('.green-pepper').each(function(i){
  $(this).fadeOut(0);
});



$('.btn-pepperonni').on('click', function(e) {
  e.preventDefault();
  if (!$('#pepperoni').hasClass('active')) {
    $('#pepperoni').addClass('active');  
    //update price when active.
    currentValue += 1;
    $("#total").text(currentValue);
    $('.pepPr').show();
    $('.pep').css('display', 'block');
} else {
    $('#pepperoni').removeClass('active');
    currentValue -= 1;
    $("#total").text(currentValue);
    $('.pep').css('display', 'none');
    $('.pepPr').hide();
    // newValue = currentValue;
    // $("#total").text(newValue);
    // $('#total').hide();
   }
});


$('.mushroom').each(function(i){
  $(this).fadeOut(0);
});
$('.btn-mushrooms').on('click', function(e) {
  if (!$('#mushrooms' ).hasClass('active')) {
    $( '#mushrooms' ).addClass('active');
    $('.mushPr').show();
    $('.mushroom').show();
    currentValue += 1;
    $("#total").text(currentValue);
   } else {
    $( '#mushrooms' ).removeClass('active');
    $('.mushPr').hide(); 
    $('.mushroom').hide();
  currentValue -= 1;
    $("#total").text(currentValue);
   }
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
        $('.greenPr').hide();
        $('.green-pepper').hide();
        currentValue -= 1;
        $("#total").text(currentValue);
       } else {
        $( '#green-pepper' ).addClass('active'); 
        currentValue += 1;
        $("#total").text(currentValue);
        $('.greenPr').show();
        $('.green-pepper').show();
       }
    //  $('.green-pepper').toggle(); 

  e.preventDefault();
});

currentValue -=3;
$("#total").text(currentValue);
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
    currentValue += 3;
    $("#total").text(currentValue);
   }
  $('.sauce').toggle(); 
  e.preventDefault();
});

//Add remove gluten free crust.
currentValue -= 5;
$("#total").text(currentValue);
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
  currentValue += 5;
  $("#total").text(currentValue);
 }

 if ($('#gluten' ).hasClass('active')) { 
  $('.glutenPr').css('display','block');
}  else {
  $('.glutenPr').hide();
}
  });

  //Remove active class from all buttons
  $( window ).load(function() {
    $('.pep').css('display', 'block');
    $('#crust').removeClass('crust-gluten-free');
    $('.mushroom').show();
    $('.green-pepper').show();
    // $('#green-pepper').removeClass('active');
    $('#sauce').removeClass('active');
    $('#gluten').removeClass('active');
    $('.sauce').css('display', 'none');
    $('.whitePr').hide();
    $('.glutenPr').hide();
  });


$('btn-crust').trigger('click');
$('btn-sauce').trigger('click');