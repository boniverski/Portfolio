$(document).ready(function() {

  // FETCH PROJECT FROM PROJECS.JSON
  fetch('http://boskorabrenovic.me/js/projects.json')
    .then(response => response.json())
    .then(data => {

      const projects = data.projects,
            width = $(window).width();
      //First three projects always visible
      for(id = 0; id < 3; id++) {
        const projectTab = `
                            <figure class="column project-tile">
                              <img class="image" src=${projects[id].image} alt="Portfolio project">
                              <div class="overlay">
                                <h3>${projects[id].title}</h3>
                                <div>
                                  ${projects[id].tags.join(" &#8226; ")}
                                </div>
                                <div class="text"></div>
                                <a href="${projects[id].link}">Demo</a>
                              </div>
                            </figure>
                           `
        $('.column-visible').append(projectTab);
      }
      //Last three projects hidden on small screens
      for(id = 3; id < 6; id++) {
        const projectTab = `
                            <figure class="column project-tile">
                              <img class="image" src=${projects[id].image} alt="Portfolio project">
                              <div class="overlay">
                                <h3>${projects[id].title}</h3>
                                <div>
                                  ${projects[id].tags.join(" &#8226; ")}
                                </div>
                                <div class="text"></div>
                              </div>
                            </figure>
                           `
        $('#column-collapse').append(projectTab);
      }
    });

  // SHOW/HIDE LAST THREE PROJECT TILES ON SMALL SCREENS
  const $btnCollapse = $('#btn-collapse'),
        $hiddenColumn = $('section div#column-collapse');

  $btnCollapse.on('click', function() {
    $hiddenColumn.toggleClass('is-hidden-mobile');

    $(this).text(function(i, text){
      return text === "Show More" ? "Show Less" : "Show More";
    });
  });

  // SHOW/HIDE NAV MENU ON SMALL SCREENS
  const $hamburger = $('.nav span.nav-toggle'),
        $navMenu = $('.nav .nav-right.nav-menu');

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

  //SHOW/HIDE CONTACT FORM MODAL
  $('#contact-form-btn').click(function(e) {
    $(this).addClass('to-circle');
    $('.contact-modal').addClass('is-visible-modal');
    setTimeout(function () {
      $('html').addClass('hide-scroll');
    }, 500);
    e.stopPropagation();
  });

  $('#modal-close-btn').click(function() {
    $('#contact-form-btn').removeClass('to-circle');
    $('.contact-modal').removeClass('is-visible-modal');
    setTimeout(function () {
      $('html').removeClass('hide-scroll');
    }, 400);
  });
});
