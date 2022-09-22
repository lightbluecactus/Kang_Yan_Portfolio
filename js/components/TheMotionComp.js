export default {
    name: "TheMotionComp",

    props: ["compData"],

    template:
    `
    <div>
        <video :src='"video/" + compData.video' controls id="projVideo" class="projVideo"></video>
        <p id="projYear"><span>Year</span> {{ compData.year }}</p>
		<p id="projCategory"><span>Category</span> {{ compData.category }}</p>
		<p id="projRole"><span>Role</span> {{ compData.role }}</p>
	    <p id="projDesc1">{{ compData.descMain }}</p>
        <div class="galleryCon">
            <img :src='"images/" + compData.abbr + "-thumb-1.jpg"' data-gallery="1" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail">
            <img :src='"images/" + compData.abbr + "-thumb-2.jpg"' data-gallery="2" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail">
            <img :src='"images/" + compData.abbr + "-thumb-3.jpg"' data-gallery="3" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail">
            <img :src='"images/" + compData.abbr + "-thumb-4.jpg"' data-gallery="4" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail">
            <img :src='"images/" + compData.abbr + "-thumb-5.jpg"' data-gallery="5" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail">
            <img :src='"images/" + compData.abbr + "-thumb-6.jpg"' data-gallery="6" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail">
        </div>
        <section class="galleryLightbox">
			<h2 class="hidden">Artworks Viewer</h2>
			<a href="#" class="closelb" @click="closeLightbox">&#10006;</a>
			<img src="" alt="artworks" class="galleryImg">
		</section>
    </div>
    `,

    methods: {
        setLightbox(event) {
            let picNum = event.target.dataset.gallery;
            let galleryImg = document.querySelector(".galleryImg");
            let galleryCon = document.querySelector(".galleryCon");
            
            galleryImg.src = `images/${this.compData.abbr}-view-${picNum}.jpg`;
            console.log("clicked on a pic " + galleryImg.src);

            let galleryLightbox = document.querySelector(".galleryLightbox");
            galleryLightbox.classList.add("showLightbox");
            galleryLightbox.style.top = `${document.documentElement.scrollTop + 25}px`;

            galleryCon.style.paddingBottom = "100vh";

           
        },

        closeLightbox() {
            let galleryLightbox = document.querySelector(".galleryLightbox");
            let galleryImg = document.querySelector(".galleryImg");

            galleryLightbox.classList.remove("showLightbox");
            galleryImg.src = "";
        }
    }
}