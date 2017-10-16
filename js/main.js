new Vue({
  el: '#app',
  data: {
  	showNav: false
  }
});

$(document).ready(function() {
  const $hiddenColumn = $('section div#column-collapse');
  const $btnCollapse = $('#btn-collapse');

  $btnCollapse.on('click', function() {
    $hiddenColumn.toggleClass('is-hidden-mobile');
    //Toggle button text
    $(this).text(function(i, text){
      return text === "Show More" ? "Show Less" : "Show More";
    });
  });

  const $hamburger = $('.nav span.nav-toggle');
  const $navMenu = $('.nav .nav-right.nav-menu');

  $hamburger.on('click', function() {
    $navMenu.toggleClass('is-visible');
    //Toggle button text
    // $(this).text(function(i, text){
    //   return text === "Show More" ? "Show Less" : "Show More";
    // });
  });

});
// $(document).ready(function(){
//   const mqSmall = window.matchMedia( '(max-width: 769px)' );
//   const mqLarge = window.matchMedia( '(min-width: 770px)' );
//   const button = '<button id="button-collapse" class="button">Show More</button>';
//   const $projectContainer = $("#project-container");
//   const $hiddenColumn = $(".hidden-sm");
//
//   // Check media query
//   if(mqSmall.matches) {
//
//     $projectContainer.append(button);
//     // Toggle appended button with id #button-collapse
//     $("#button-collapse").on('click', function(){
//       $hiddenColumn.toggleClass('hidden-sm');
//       //Toggle button text
//       $(this).text(function(i, text){
//         return text === "Show More" ? "Show Less" : "Show More";
//       });
//     });
//
//   } else if (mqLarge.matches) {
//     $("#button-collapse").css("display", "none");
//   }
// });
