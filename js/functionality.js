$("#submit_email").click(function(){
	if ($("#email_name_field").val() == "" || $("#email_email_field").val() == "" || $("#email_message_field").val() == "")
	{
		$("#email_message_outcome").html("<div class='information_message'>\
			<h2>Please fill out all fields! X</h2>\
			</div>");
	}
	else
	{
		var rootDir		= "http://intheon.xyz/ed/"
		var from 		= $("#email_name_field").val();
		var email 		= $("#email_email_field").val();
		var msg 		= $("#email_message_field").val();

		$.ajax({
			type				: "POST",
			url                 : rootDir + "php/email.php",
			data 				: 
			{
				from   			: from,
				to 				: "allobon@gmail.com",
				email  			: email,
				msg  			: msg  
			},
			success				: function(response)
			{
				console.log(response);
				$("#email_name_field").val() == "";
				$("#email_email_field").val() == "";
				$("#email_message_field").val() == "";

				$("#email_message_outcome").html("<div class='information_message'>\
					<h2>Thank you for your message! X</h2>\
				</div>");

					$(".information_message").click(function(){
						$(this).fadeOut(function(){
							$(this).hide();
						});
					});

			}
		});
	}

	$(".information_message").click(function(){
		$(this).fadeOut(function(){
			$(this).hide();
		})
	});

});	