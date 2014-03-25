//JQUERY CYCLE PLUGIN
$(document).ready(function() {
		$('#slideshow').cycle({
			fx: 'scrollHorz',
			next: '#next',
			prev: '#prev',
			timeout: 7000,
			// choose your transition type, ex: fade, scrollUp, shuffle, etc...
				});
			});
			

	var hider; // CURRENT DISPLAYED CONTENT
	hider = "#story1";
	var hiderButton;
	cparty = "#boys1";
	//MENU FUNCTIONALITY
	$(document).ready(function(){
			$(".menubtn").hover(
				function(){
						$(this).css({"background-color":"#A67F00","color":"#FFDE73"});
						},
				function(){
					var checker = "#" + $(this).attr('id');
					hiderButton = hider.slice(0,-1);
					if(checker == hiderButton) {
						return;
						}
					else {
					$(this).css({"background-color":"#FFDE73","color":"#A67F00"});
					};
				});
		});
	function navigate(current) {
		var cobject = "#" + $(current).attr('id') + 1;
		if (hider == cobject ) {
			return;
			}
		else if (hider != "#story1")
			{	$(hiderButton).css({"background-color":"#FFDE73","color":"#A67F00"});
				$(hider).hide();
				$(cobject).fadeIn();
				hider = cobject;
			}
		else {
			$(hider).hide();
				$(cobject).fadeIn();
				hider = cobject;
			}
			
		}
	

	
		
		
	//BRIDAL PARTY FUNCTIONALITY
	function partyswitch(party) {
		var switchto = "#" + $(party).attr('id') + 1;
		if (switchto == cparty) {
			return;
			}
		else {
			$(cparty).hide();
			$(switchto).fadeIn();
			cparty = switchto;
		}
		if (cparty == "#girls1") {
			$("#boys").css( "color", "#FFD240");
			$("#girls").css( "color", "#A67F00");
			}
		else {
			$("#boys").css( "color", "#A67F00");
			$("#girls").css( "color", "#FFD240");
			}
		
		}
		
	//NEW WINDOW For LINKS
	function popUp(website) {
		window.open(website, 'open_window','width=1100,height=700');
		}
	//jScrollPane Functions
	function jSp(){
		$('#location1').jScrollPane({verticalDragMinHeight: 30,
			verticalDragMaxHeight: 30,});
			};
	function jInit(){
	$('#registry1').jScrollPane({verticalDragMinHeight: 30,
		verticalDragMaxHeight: 30,});
		};
	function jInit2(){
	$('#rsvp1').jScrollPane({verticalDragMinHeight: 30,
		verticalDragMaxHeight: 30,});
		};
	
	function secureAccess(current) {
		var pw0 = "6152013";
		var pw1 = prompt("Please enter your password:", "");
		if (pw1 == pw0){
			navigate(current);
			jInit2();
			}
		else if (pw1 != "..." && pw1 != null){
			alert("I'm sorry, that didn't match.  Try again.  If you're having trouble, email us at peisandberg@gmail.com"); 
			}
		else {
			return;
			}
		
		}

