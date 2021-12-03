
(()=>{

	const	logoNav = document.querySelector("#logoNav"),
			mainNav = document.querySelector("#mainNav"),
			main = document.querySelector("main");

	let toggle = false;


	function toggleNav() {
		if(toggle){
			toggle = false;
			main.style.marginLeft = "0";
			mainNav.style.display = "none";
			mainNav.style.opacity = "0%";
			mainNav.style.width = "0";
		} else {
			toggle = true;
			main.style.marginLeft = "240px";
			mainNav.style.display = "block";
			mainNav.style.opacity = "100%";
			mainNav.style.width = "240px";
		}
	}


	logoNav.addEventListener("click", toggleNav);


})();


