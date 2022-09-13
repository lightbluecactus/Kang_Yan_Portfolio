export default {
    name: "TheGalleryComp",

    props: ["compData"],

    // example for the warn: avoid mutating a prop directly ... use a data or computed ...
    // data: function() {
    //     return {
    //         galleryImg: ""
    //     }
    // },

    template:
    `
    <div>
        <img :src='"images/" + compData.heroPic' alt="compData.title" id="projPic1">
	    <p id="projDesc1">{{ compData.descMain }}</p>
        <div class="galleryCon">
            <img src="images/gallery-thumb-1.jpg" alt="gallery thumbnail" data-gallery="1" @click="setLightbox" class="galleryThumb">
            <img src="images/gallery-thumb-2.jpg" alt="gallery thumbnail" data-gallery="2" @click="setLightbox" class="galleryThumb">
            <img src="images/gallery-thumb-3.jpg" alt="gallery thumbnail" data-gallery="3" @click="setLightbox" class="galleryThumb">
            <img src="images/gallery-thumb-4.jpg" alt="gallery thumbnail" data-gallery="4" @click="setLightbox" class="galleryThumb">
            <img src="images/gallery-thumb-5.jpg" alt="gallery thumbnail" data-gallery="5" @click="setLightbox" class="galleryThumb">
            <img src="images/gallery-thumb-6.jpg" alt="gallery thumbnail" data-gallery="6" @click="setLightbox" class="galleryThumb">
            <img src="images/gallery-thumb-7.jpg" alt="gallery thumbnail" data-gallery="7" @click="setLightbox" class="galleryThumb">
            <img src="images/gallery-thumb-8.jpg" alt="gallery thumbnail" data-gallery="8" @click="setLightbox" class="galleryThumb">
            <img src="images/gallery-thumb-9.jpg" alt="gallery thumbnail" data-gallery="9" @click="setLightbox" class="galleryThumb">
            <section class="galleryLightbox">
			    <h2 class="hidden">Artworks Viewer</h2>
			    <a href="#" class="closelb" @click="closeLightbox">X</a>
			    <img src="" alt="artworks" class="galleryImg">
		    </section>
        </div>
    </div>
    `,

    methods: {
        setLightbox(event) {
            let picNum = event.target.dataset.gallery;
            let galleryImg = document.querySelector(".galleryImg");
            
            galleryImg.src = `images/gallery-thumb-${picNum}.jpg`;
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