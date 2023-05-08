$(function(){
    $(".list-item").click(function() {
        $(this).toggleClass("active");
        $(".list-item").not(this).removeClass("active");
      });
   $(".single-item-header").click(function(){
    $(this).next(".single-item-body").slideToggle();
    $(this).find("i").toggleClass('active');
   })
   
})