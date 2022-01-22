export default {
    name: "TheVideoComp",

    props: ["compData"],

    template:
    `
    <div>
        <video :src='"video/" + compData.video' controls id="projVideo" class="projVideo"></video>
        <p id="projYear"><span>Year</span> {{ compData.year }}</p>
		<p id="projCategory"><span>Category</span> {{ compData.category }}</p>
		<p id="projRole"><span>Role</span> {{ compData.role }}</p>
	    <p id="projDesc1">{{ compData.descMain }}</p>
        <div id="galleryCon">
            <img :src='"images/" + compData.abbr + "-thumb-1.jpg"' alt="gallery thumbnail" class="galleryThumb">
            <img :src='"images/" + compData.abbr + "-thumb-2.jpg"' alt="gallery thumbnail" class="galleryThumb">
            <img :src='"images/" + compData.abbr + "-thumb-3.jpg"' alt="gallery thumbnail" class="galleryThumb">
            <img :src='"images/" + compData.abbr + "-thumb-4.jpg"' alt="gallery thumbnail" class="galleryThumb">
            <img :src='"images/" + compData.abbr + "-thumb-5.jpg"' alt="gallery thumbnail" class="galleryThumb">
            <img :src='"images/" + compData.abbr + "-thumb-6.jpg"' alt="gallery thumbnail" class="galleryThumb">
        </div>
    </div>
    `
}