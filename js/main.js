var $hamBtn = $('.ham-btn');
var $panel = $('.panel');

$hamBtn.on('click', function () {
  $panel.toggleClass('js-panel-open');
});
