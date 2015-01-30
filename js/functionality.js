$("#content").dragend({
	afterInitialize: function() 
	{
		this.container.style.visibility = "visible";
	}, onSwipeEnd: function() 
	{
		var first = this.pages[0],
			last = this.pages[this.pages.length - 1];

		  $(".prev, .next").removeClass("deactivated");
		  $(".nav li").removeClass("active");

		  if (first === this.activeElement) {
			$(".prev").addClass("deactivated")
		  };

		  if (last === this.activeElement) {
			$(".next").addClass("deactivated")
		  }

		  $(".nav li").eq(this.page).addClass("active");

	}
});

$(window).bind('mousewheel DOMMouseScroll', function(event)
{
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) 
    {
        $("#content").dragend("right");
    }
    else 
    {

        $("#content").dragend("left");
    }
});

$(".nav").click(function() {
var page = $(event.target).data("page");

$("#content").dragend({
	scrollToPage: page
});

$(event.target).addClass("active");

	  })


