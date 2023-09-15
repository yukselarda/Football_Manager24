$(".bars").click(function () {
  $("#hamburger-icon").toggleClass('open');
  $("body, html").toggleClass("hidden_time")
  $("body, html,banner").toggleClass("banner_time")
  $("body, html, header").toggleClass("mobile_menu")
})


$('.onceden_satın_cards').slick({
  slidesToShow: 1,
  infinity: true,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: false,
  autoplaySpeed: 0,
  speed: 7000,
  cssEase: "linear",
});

window.onscroll = function () { myFunction() };

function myFunction() {
  if (document.documentElement.scrollTop > 55) {
    document.getElementById("menu").className = "menu_iki";
  } else {
    document.getElementById("menu").className = "";
  }
}

$(".yarim_kare").on("click", function () {
  $(".coukie_class").toggleClass("coukie_class_complated")
});

$(".yarim_kare").on("click", function () {
  $(".golge").toggleClass("tam_golge")
});

$(".yarim_kare").on("click", function () {
  $(".golge").toggleClass("tam_golge")
});


// $(".mobile_menu_topluluk").click(function () {
//   $(".mobile_menu_complated").toggleClass("mobile_menu_byline");
// });





$(".mobile-menu li").click(function(){
  let id = $(this).data("id");

  $("div.drop").each((key, data) => {
    if($(data).attr("id") == id){
      $(data).addClass("active")
    }
  })
})

$(".allahin_cezalari li").click(function(){
  let id = $(this).data("id");

  $("div.drop_iki").each((key, data) => {
    if($(data).attr("id") == id){
      $(data).addClass("active")
    }
  })
})


$(".drop .x").click(function(){
  console.log("asd")
  $(this).closest(".drop").removeClass("active")
})

$(".drop_iki .x").click(function(){
  console.log("asd")
  $(this).closest(".drop_iki").removeClass("active")
})