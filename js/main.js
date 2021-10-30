	import { getData } from "./components/TheData.js";
	//import TheProjectPanel from "./components/TheProjectPanel.js";

(()=>{

	const	projectNav = document.querySelectorAll(".projectNav");

		function buildData(data) {
		projectInfo = data;
		return projectInfo;
	}

	function showData(event) {

		let	key = event.target.dataset.proj;
		console.log(key);
		console.log(projectInfo);	
		
		debugger;

		let projPic1 = document.querySelector("#projPic1"),
			projTitle = document.querySelector("#projTitle"),
			projYear = document.querySelector("#projYear"),
			projCategory = document.querySelector("#projCategory"),
			projRole = document.querySelector("#projRole"),
			projDesc1 = document.querySelector("#projDesc1"),
			projPic2 = document.querySelector("#projPic2"),
			projDesc2 = document.querySelector("#projDesc2"),
			projPic3 = document.querySelector("#projPic3"),
			projDesc3 = document.querySelector("#projDesc3");

			projPic1.src = `images/${projectInfo[key].pic1}`;
			projTitle.textContent = projectInfo[key].title;
			projYear.textContent = projectInfo[key].year;
			projCategory.textContent = projectInfo[key].category;
			projRole.textContent = projectInfo[key].role;
			projDesc1.textContent = projectInfo[key].desc1;
			projPic2.src = `images/${projectInfo[key].pic2}`;
			projDesc2.textContent = projectInfo[key].desc2;
			projPic3.src = `images/${projectInfo[key].pic3}`;
			projDesc3.textContent = projectInfo[key].desc3;
		
	}

	getData(buildData);

	projectNav.forEach(button => button.addEventListener("click", showData));

})();


