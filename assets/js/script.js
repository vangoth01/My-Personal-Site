//collapse hamburger on click
$(".navbar-nav li a").click(function(event){
        var toggle = $(".navbar-collapse").hasClass("show");
        if(toggle){
                $(".navbar-toggler").click();
        }
});