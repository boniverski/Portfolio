$(document).ready(function() {
  const $hiddenColumn = $('section div#column-collapse');
  const $btnCollapse = $('#btn-collapse');
  const $hamburger = $('.nav span.nav-toggle');
  const $navMenu = $('.nav .nav-right.nav-menu');

  // SHOW/HIDE LAST THREE PROJECT TILES ON SMALL SCREENS
  $btnCollapse.on('click', function() {
    $hiddenColumn.toggleClass('is-hidden-mobile');
    //Toggle button text
    $(this).text(function(i, text){
      return text === "Show More" ? "Show Less" : "Show More";
    });
  });

  // SHOW/HIDE NAV MENU ON SMALL SCREENS
  $hamburger.on('click', function(e) {
      $navMenu.toggleClass('is-visible');
      e.stopPropagation();
  });
  // Hiding Nav Menu clicking anywhere on screen
  $(document).click(function(e) {
    if ($(e.target).closest($navMenu).length == 0 ) {
      $navMenu.removeClass('is-visible');
    }
  });
});
