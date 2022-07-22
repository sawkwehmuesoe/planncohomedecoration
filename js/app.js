// console.log("hay");

$(document).ready(function(){
	// console.log("hi");

	// Start Back to Top

	$(".btn-backtotops").hide();
	$(window).scroll(function(){
		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		if(getscrolltop >= 370){
			$(".btn-backtotops").fadeIn(1000);
		}else{
			$(".btn-backtotops").fadeOut(1000);
		}
	});

	// End Back to Top

	// Start Header

	// start nav

	// bugger section

	$(".navbuttons").click(function(){
		$(".navbuttons").toggleClass("crossxs")
	})

	// for nav
	$(window).scroll(function(){

		let getscrolltop = $(this).scrollTop();

		// console.log(getscrolltop);

		if(getscrolltop >= 200){
			$(".navbar").addClass("navmenus")
		}else{
			$(".navbar").removeClass("navmenus")
		}
	})

	// End nav

	// End Header

	// Start properties
// for acctive item
	$(".propertylists").click(function(){
		// $(this).addClass("activeitems");
		// $(this).siblings().removeclass("activeitems");

		$(this).addClass("activeitems").siblings().removeClass("activeitems");



		// for filter

		let getattvalue = $(this).attr("data-filter");
		console.log(getattvalue);

		if(getattvalue === "all"){
			$(".filters").show("slide",1000);
		}else{

			$(".filters").hide();

			$(".filters").not("."+getattvalue).hide("slide",500);

			$(".filters").filter("."+getattvalue).show("slide",500);
		}

		lightbox.option({
			showImageNumberLabel:false
		})

		// End properties



	});


	// Start Adv 

	$(window).scroll(function(){

		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);


		if(getscrolltop >= 900){
			$(".advimages").addClass("fromlefts");
			$(".advtexts").addClass("fromrights");
		}else{
			$(".advimages").removeClass("fromlefts");
			$(".advtexts").removeClass("fromrights");	
		}

	})

	// End Adv

	// Start Footer Section

	const getyear = $("#getyear");
	const getfullyear =new Date().getUTCFullYear();
	getyear.text(getfullyear)

	// End Footer Section

	

});