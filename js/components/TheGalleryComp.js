export default {
    name: "TheGalleryComp",

    props: ["compData"],

    template:
    `
    <div>
        <img :src='"images/" + compData.heroPic' alt="compData.title" id="projPic1">
	    <p id="projDesc1">{{ compData.descMain }}</p>
        <div class="galleryCon">
            <img src="images/gallery-thumb-1.jpg" alt="gallery thumbnail" class="galleryThumb" data-gallery="1">
            <img src="images/gallery-thumb-2.jpg" alt="gallery thumbnail" class="galleryThumb" data-gallery="2">
            <img src="images/gallery-thumb-3.jpg" alt="gallery thumbnail" class="galleryThumb" data-gallery="3">
            <img src="images/gallery-thumb-4.jpg" alt="gallery thumbnail" class="galleryThumb" data-gallery="4">
            <img src="images/gallery-thumb-5.jpg" alt="gallery thumbnail" class="galleryThumb" data-gallery="5">
            <img src="images/gallery-thumb-6.jpg" alt="gallery thumbnail" class="galleryThumb" data-gallery="6">
            <img src="images/gallery-thumb-7.jpg" alt="gallery thumbnail" class="galleryThumb" data-gallery="7">
            <img src="images/gallery-thumb-8.jpg" alt="gallery thumbnail" class="galleryThumb" data-gallery="8">
            <img src="images/gallery-thumb-9.jpg" alt="gallery thumbnail" class="galleryThumb" data-gallery="9">
            <section class="galleryLightbox">
			    <h2 class="hidden">Additional Artworks container</h2>
			    <a href="#" class="closelb">X</a>
			    <img src="" alt="artworks" id="galleryImg">
		    </section>
        </div>
    </div>
    `
}