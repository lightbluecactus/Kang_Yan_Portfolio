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
            <img src="images/gallery-thumb-1.jpg" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" data-gallery="1" data-gallerydesc="Field study in Hebei, photography, June 5 2016">
            <img src="images/gallery-thumb-2.jpg" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" data-gallery="2" data-gallerydesc="Ms. Seikai, digital illustration, February, 2021">
            <img src="images/gallery-thumb-3.jpg" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" data-gallery="3" data-gallerydesc="Toronto night view, photography, May 28 2021">
            <img src="images/gallery-thumb-4.jpg" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" data-gallery="4" data-gallerydesc="Original character, digital illustration, July 2021">
            <img src="images/gallery-thumb-5.jpg" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" data-gallery="5" data-gallerydesc="Field study in Hebei, photography, June 6 2016">
            <img src="images/gallery-thumb-6.jpg" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" data-gallery="6" data-gallerydesc="Field study in Hebei, photography, June 6 2016">
            <img src="images/gallery-thumb-7.jpg" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" data-gallery="7" data-gallerydesc="Art Gallery of Ontario, photography, July 23 2021">
            <img src="images/gallery-thumb-8.jpg" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" data-gallery="8" data-gallerydesc="donut modeling using Blender, December 29 2021">
            <img src="images/gallery-thumb-9.jpg" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" data-gallery="9" data-gallerydesc="A dream, digital illustration, August 2022">
            <img src="images/gallery-thumb-10.jpg" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" data-gallery="10" data-gallerydesc="Fanart, digital illustration, June 2022">
            <img src="images/gallery-thumb-11.jpg" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" data-gallery="11" data-gallerydesc="Original world map, digital illustration, September 2021">
            <img src="images/gallery-thumb-12.jpg" @click="setLightbox" class="galleryThumb" alt="gallery thumbnail" data-gallery="12" data-gallerydesc="Field study in Hebei, photography, June 5 2016">
            <section class="galleryLightbox">
			    <h2 class="hidden">Artworks Viewer</h2>
			    <a href="#" class="closelb" @click="closeLightbox">&#10006;</a>
			    <img src="" alt="artworks" class="galleryImg">
                <p class="galleryDesc"></p>
		    </section>
        </div>
    </div>
    `,

    methods: {
        setLightbox(event) {
            let picNum = event.target.dataset.gallery;
            let picDesc = event.target.dataset.gallerydesc;
            let galleryImg = document.querySelector(".galleryImg");
            let galleryDesc = document.querySelector(".galleryDesc");
            
            galleryImg.src = `images/gallery-view-${picNum}.jpg`;
            console.log("clicked on a pic " + galleryImg.src);

            galleryDesc.textContent = picDesc;

            let galleryLightbox = document.querySelector(".galleryLightbox");
            galleryLightbox.classList.add("showLightbox");
            galleryLightbox.style.top = `${document.documentElement.scrollTop + 25}px`;
           
        },

        closeLightbox() {
            let galleryLightbox = document.querySelector(".galleryLightbox");
            galleryLightbox.classList.remove("showLightbox");
        }
    } 
}