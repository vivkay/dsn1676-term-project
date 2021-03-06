var $hamBtn = $('.ham-btn');
var $panel = $('.panel');
var $tabs = $('.tabs');
var $panels = $('.tab-panel');
var $styled = $('.navy-gradient');

$hamBtn.on('click', function () {
  $panel.toggleClass('js-panel-open');
});

$tabs.on('click', 'a', function (e) {
  e.preventDefault();
  var id = $(this).attr('href');

  $panels.filter('.js-appear').removeClass('js-appear');
  $(id).addClass('js-appear');

  $tabs.find('.js-current').removeClass('js-current');
  $(this).addClass('js-current');
});

$('.top-nav').localScroll();

$('.top-scroll').localScroll();

$('.top-scroll-button').localScroll();

$styled.waypoint (function () {
  $styled.toggleClass('js-active');
}, {offset: '50%'});
