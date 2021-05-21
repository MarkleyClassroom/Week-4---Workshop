 //    Add the jQuery to make the pause and play buttons functional
 $(function () {
    $(".carousel").carousel({ interval: 2000});
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel('cycle');
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
    //show the reservaton modal on click of the Reserve Campsite button
    $("#reserveButton").click(function(){
        $("#reserveModal").modal('show');
    });
    //show the loginModal on click of the login button
    $("#loginButton").click(function(){
        $("#loginModal").modal('show');
    })

})