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
			},


			// control lightbox on page loading (projects.html)
			setDefaultLightbox(event) {
				let picNum = event.target.dataset.defaultgallery;
            	console.log("clicked on a pic" + picNum);

				let defaultGalleryImg = document.querySelector(".defaultGalleryImg");
            	defaultGalleryImg.src = `images/apopo-view-${picNum}.jpg`;

            	let defaultGalleryLb = document.querySelector(".defaultGalleryLb");
            	defaultGalleryLb.classList.add("showLightbox");
            	defaultGalleryLb.style.top = `${document.documentElement.scrollTop + 25}px`;
			},

			closeDefaultLightbox() {
				let defaultGalleryLb = document.querySelector(".defaultGalleryLb");
				defaultGalleryLb.classList.remove("showLightbox");
			}
		},

		components: {
			thumb: TheThumbnail,
            projects: TheProjects
		}

	})


	// plain JS - controls nav 

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