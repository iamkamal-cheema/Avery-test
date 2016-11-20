//Filter Up and Down Toggle

$(function () {
      // Dropdown toggle
      $('.dropdown-toggle').click(function () {
          $(this).next('.dropdown').toggle();
      });
      $(document).click(function (e) {
          e.preventDefault();
          var target = e.target;
          if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
              $('.dropdown').hide();
          }
      });
  });

//Wrap the sidebar into a dropdown panel on mobile devices or smalller viewports
  $(window).on('load, resize', function mobileViewUpdate() {
      var viewportWidth = $(window).width();
      if (viewportWidth < 769) {
          $('.sidetarget').addClass("collapse");
      }
      else {
          $('.sidetarget').removeClass("collapse");
      }
  });