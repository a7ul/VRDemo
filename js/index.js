$('#house-1').click(() => {
  console.log('house1-clicked');
  $('#menu').attr('visible', false);
  $('#photosphere-house').attr('visible', true);
  $('#sky').attr('src', '#house-bg');
});

$('#photosphere-back-button').click(() => {
  console.log('photosphere-back-button-clicked');
  $('#menu').attr('visible', true);
  $('#photosphere-house').attr('visible', false);
  $('#sky').attr('src', '#menu-bg');
});

$('#house-2').click(() => {
  console.log('clicked2');
});
$('#house-3').click(() => {
  console.log('clicked3');
});
$('#photosphere-back-button').click(() => {
  console.log('clicked back');
});

$('#sky').attr('src', '#menu-bg');
