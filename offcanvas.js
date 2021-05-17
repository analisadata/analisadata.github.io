$(function () {
  "use strict";

  $('[data-toggle="offcanvas"]').on("click", function () {
    $(".offcanvas-collapse").toggleClass("open");
  });
});

$(function () {
  "use strict";

  $(".nav-link").on("click", function () {
    $(this).addClass("active");
    $(this).siblings(".nav-link").removeClass("active");
    $(".offcanvas-collapse").removeClass("open");
  });
});
