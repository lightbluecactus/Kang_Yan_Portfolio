export default {
    name: "TheFeaturedComp",

    props: ["compData"],

    template:
    `
    <div>
        <video :src='"video/" + compData.video' controls id="projVideo" class="projVideo"></video>
        <p id="projYear"><span>Year</span> {{ compData.year }}</p>
		<p id="projCategory"><span>Category</span> {{ compData.category }}</p>
		<p id="projRole"><span>Role</span> {{ compData.role }}</p>
	    <p id="projDesc1">{{ compData.descMain }}</p>
        <div class="galleryCon" id="galleryFeatured">
            <img :src='"images/" + compData.abbr + "-poster-1.jpg"' data-gallery="1" @click="setLightbox" class="galleryThumb">
            <img :src='"images/" + compData.abbr + "-poster-2.jpg"' data-gallery="2" @click="setLightbox" class="galleryThumb">
            <img :src='"images/" + compData.abbr + "-poster-3.jpg"' data-gallery="3" @click="setLightbox" class="galleryThumb">
        </div>
        <p id="posterDesc">{{ compData.posterDesc }}</p>
        <p id="projChallenge">
            <span>Challenge</span>
            <br>
            {{ compData.desc2 }}
        </p>
        <p id="projSolution">
            <span>Solution</span>
            <br>
            {{ compData.desc3 }}
        </p>
        <div class="galleryCon">
            <img :src='"images/" + compData.abbr + "-thumb-1.jpg"' data-gallery="4" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" >
            <img :src='"images/" + compData.abbr + "-thumb-2.jpg"' data-gallery="5" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" >
            <img :src='"images/" + compData.abbr + "-thumb-3.jpg"' data-gallery="6" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" >
            <img :src='"images/" + compData.abbr + "-thumb-4.jpg"' data-gallery="7" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" >
            <img :src='"images/" + compData.abbr + "-thumb-5.jpg"' data-gallery="8" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" >
            <img :src='"images/" + compData.abbr + "-thumb-6.jpg"' data-gallery="9" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" >
        </div>
        <section class="galleryLightbox">
			<h2 class="hidden">Artworks Viewer</h2>
			<a href="#" class="closelb" @click="closeLightbox">X</a>
			<img src="" alt="artworks" class="galleryImg">
		</section>
    </div>
    `,

    methods: {
        setLightbox(event) {
            let picNum = event.target.dataset.gallery;
            let galleryImg = document.querySelector(".galleryImg");

            galleryImg.src = `images/${this.compData.abbr}-thumb-${picNum}.jpg`;
            console.log("clicked on a pic " + galleryImg.src);

            let galleryLightbox = document.querySelector(".galleryLightbox");
            galleryLightbox.classList.add("showLightbox");
            galleryLightbox.style.top = `${document.documentElement.scrollTop + 100}px`;
           
        },

        closeLightbox() {
            let galleryLightbox = document.querySelector(".galleryLightbox");
            galleryLightbox.classList.remove("showLightbox");
        }
    } 
}