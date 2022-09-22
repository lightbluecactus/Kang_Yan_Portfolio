
(()=>{

	const	logoNav = document.querySelector("#logoNav"),
			mainNav = document.querySelector("#mainNav"),
			main = document.querySelector("main"),
			btnPlay = document.querySelector("#btnPlay"),
			lightbox = document.querySelector(".homeLightbox"),
			vid = document.querySelector("video"),
			close = document.querySelector(".close");

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

	// homepage lightbox
	function popLightbox() {
		lightbox.classList.add('show-lightbox');
		vid.play();
	}

	function autoClose() {
		lightbox.classList.remove('show-lightbox');
	}

	function closeVideo() {			
		vid.pause(); 
		vid.currentTime = 0;
		lightbox.classList.remove('show-lightbox');
	}



	logoNav.addEventListener("click", toggleNav);

	btnPlay.addEventListener("click", popLightbox);
	vid.addEventListener("ended", autoClose);
	close.addEventListener("click", closeVideo);



})();


