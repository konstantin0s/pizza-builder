// Write your Pizza Builder JavaScript in this file.

$('.btn-pepperonni').on('click', function(e) {
  $('.green-pepper').toggle(); //you can list several class names 
  e.preventDefault();

});

$('.btn-mushrooms').on('click', function(e) {
  $('.mushroom').toggle(); //you can list several class names 
  e.preventDefault();
});

$('.btn-green-peppers').on('click', function(e) {
  $('.pep').toggle(); //you can list several class names 
  e.preventDefault();
});

$('.btn-sauce').on('click', function(e) {
  $('.sauce').toggle(); //you can list several class names 
  e.preventDefault();
});


$('.btn-crust').on('click', function(e) {
  $('.crust-gluten-free').toggle(); //you can list several class names 
  e.preventDefault();
});
