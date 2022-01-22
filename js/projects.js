import { getData } from "./components/TheDataMiner.js";
import TheThumbnail from "./components/TheThumbnailComp.js";
import TheProjects from "./components/TheProjectsComp.js";

(()=>{

	const myVue = new Vue({
		el: "#projectCon",

		created: function() {
			getData(null, (data) => this.projectsData = data);
		},

		data: {
			projectsData: [],
			isVisible: false,
			currentProject: {}
		},

		methods: {
			showProjData(item) {
				this.currentProject = item;
				this.isVisible = true;
				console.log(item);
			}
		},

		components: {
			thumb: TheThumbnail,
            projects: TheProjects
		}

	})

    const	logoNav = document.querySelector("#logoNav"),
			mainNav = document.querySelector("#mainNav"),
			main = document.querySelector("main");

	// const	galleryThumb = document.querySelectorAll(".galleryThumb"),
	// 		lightbox = document.querySelector(".galleryLightbox"),
	// 		galleryImg = document.querySelector("#galleryImg"),
	// 		closelb = document.querySelector(".closelb");

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

	// lightbox
	// function popImgLightbox(event) {
	// 	lightbox.classList.add('showLightbox');

	// 	let key = event.target.dataset.gallery;
	// 	galleryImg.src = `images/gallery-img-${key}`;
	// }

	// function closeImgLightbox() {			
	// 	lightbox.classList.remove('showLightbox');
	// }

	logoNav.addEventListener("click", toggleNav);
	
	// galleryThumb.forEach(thumbnail => thumbnail.addEventListener("click", popImgLightbox));
	// closelb.addEventListener("click", closeImgLightbox);

})();