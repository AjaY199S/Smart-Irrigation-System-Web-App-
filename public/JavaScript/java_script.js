
/// Carouse paly And Pause button  script start 
        $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
              $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });
        });
/// Carouse paly And Pause button Script End 

/// Modal script start 
    
        $(document).ready(function(){
		  $("#loginbtn").click(function(){
		    $("#login_modal").modal();
		  });
		  $("#login_home_btn").click(function(){
		    $("#login_modal").modal();
		  });
		  $("#login_signup_btn").click(function(){
		    $("#login_modal").modal("hide");
		    $("#sing_up_modal").modal();
		  });
		  $("#Signup_login_btn").click(function(){
		    $("#login_modal").modal();
		    $("#sing_up_modal").modal("hide");
		  });
		  $("#profile_btn").click(function(){
		    $("#profile_modal").modal();
		  });

		});
 
/// Modal Script End 
