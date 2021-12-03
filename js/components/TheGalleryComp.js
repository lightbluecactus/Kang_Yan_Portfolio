export default {
    name: "TheGalleryComp",

    props: ["compData"],

    template:
    `
    <div id="galleryCon">
        <img src="images/gallery-thumb-1.jpg" alt="gallery thumbnail" data-gallery="1">
        <img src="images/gallery-thumb-2.jpg" alt="gallery thumbnail" data-gallery="2">
        <img src="images/gallery-thumb-3.jpg" alt="gallery thumbnail" data-gallery="3">
        <img src="images/gallery-thumb-4.jpg" alt="gallery thumbnail" data-gallery="4">
        <img src="images/gallery-thumb-5.jpg" alt="gallery thumbnail" data-gallery="5">
        <img src="images/gallery-thumb-6.jpg" alt="gallery thumbnail" data-gallery="6">
        <img src="images/gallery-thumb-7.jpg" alt="gallery thumbnail" data-gallery="7">
        <img src="images/gallery-thumb-8.jpg" alt="gallery thumbnail" data-gallery="8">
        <img src="images/gallery-thumb-9.jpg" alt="gallery thumbnail" data-gallery="9">
    </div>
    `
}