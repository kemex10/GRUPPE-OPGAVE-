$(document).ready(function(){
	var filterizd = $(".filtr-container").filterizr({});

	$(".filterListItem").on('click',function(){
		$(".filterListItem").removeClass("active");
		$(this).addClass("active");
	});
});
// Banner

function bannerCategoryTøj() {
	document.querySelector(".banner").src="assets/images/banner/tøj-banner.jpg";
}
function bannerCategorySko() {
	document.querySelector(".banner").src="assets/images/banner/hiking-banner.jpg";
}
function bannerCategoryAccessories() {
	document.querySelector(".banner").src="assets/images/banner/ac-banner.jpg";
}
