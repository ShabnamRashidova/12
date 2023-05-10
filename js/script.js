$(function () {
  $(".list-item").click(function () {
    $(this).toggleClass("active");
    $(".list-item").not(this).removeClass("active");
  });

  $(".single-item-header").click(function () {
    var single_body = $(this).next(".single-item-body");
    single_body.slideToggle(200);
    $(".single-item-body").not(single_body).hide();
    $(this).find("i").toggleClass("active");
  });
});
