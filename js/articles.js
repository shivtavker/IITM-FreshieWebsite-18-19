$(document).ready(function(){
  var prevScrollpos = window.pageYOffset;
  $(".btn").click(function(){
    id = $(this).attr('value');
    $('.article-summary').hide();
    $("#"+id).show();
    $("#"+id).addClass("slide");
    $(window).scrollTop(0);
    $(".head").hide();
    i = 0;
    $(".back").show();
  }
    );
  if ($(window).width() <= 380) {  
        $(".navbar-brand").hide();
        $(".jumbotron").show();
        $(".jumbotron").css("width",$(window).width());
        $(".slide-left").addClass("slideanim-left");
        $(".slide-left").removeClass("slide-left");
        $(".slide").addClass("slideanim");
        $(".slide").removeClass("slide");
        $(".bg").removeClass("bg");
}


  $(".back").click(function(){
     $(window).scrollTop(0);
    location.reload();  }
    );
  var id = 0;


    var i = 1;
  $(window).scroll(function() {
    var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
    $(".slideanim-right").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide-right");
        }
    });
    $(".slideanim-left").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide-left");
        }
    });

    $(".slideanim-top").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide-top");
        }
    });
    if(i===0){
      $(".rig").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide-right");
        }
    });
    $(".left").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide-left");
        }
    });}

  });
});
