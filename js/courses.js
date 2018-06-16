$(document).ready(function(){
  var prevScrollpos = window.pageYOffset;
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  if ($(window).width() <= 380) {  
        $(".navbar-brand").hide();
        $(".jumbotron").show();
        $(".jumbotron").css("width",$(window).width());
}
  $("#departments li").click(function() {
  	var active = $(".course-active");
  	active.hide();
  	active.removeClass('course-active');
  	var id = $(this).attr('value');
  	var depart = $(this).html();
  	$('#'+id).show();
  	 $('#'+id).addClass('course-active');
  	 $('#courses').html(depart);
  }
  	);


  $(window).scroll(function() {
    var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
});

});