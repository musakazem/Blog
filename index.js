	


		if($(window).width() > 720)
	{

		function openNav() {
		    document.getElementById("mySidenav").style.width = "250px";
		    document.getElementById("myList").style.height = "200px";
		}

		function closeNav() {
		    document.getElementById("mySidenav").style.width = "0";
		    document.getElementById("myList").style.height = "0";
		}

		
	}
		
		 else {

			function openNav() {
			document.getElementById("mySidenav").style.width = "100%";
			document.getElementById("myList").style.height = "200px";

		}

		function closeNav() {
			document.getElementById("mySidenav").style.width = "0";
			document.getElementById("myList").style.height = "0";
		}

	}





