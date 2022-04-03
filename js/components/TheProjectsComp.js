import TheWebsite from "./TheWebsiteComp.js";
import TheGallery from "./TheGalleryComp.js";
import TheMotion from "./TheMotionComp.js";
import TheFeatured from "./TheFeaturedComp.js";

export default {
    name: "TheProjectsComp",

    props: ["piece"],

    computed: {
        activeComponent: function() {
            return this.piece.mediaType;
        },
       passData: function() {
            // return the data and bind it to props in Default/GalleryComp below
            return this.piece;
        }
    },

    template: 
    `
    <div>
		<h2 id="projTitle">{{ piece.title }}</h2>
        <component 
            v-if="piece.mediaType" 
            :is="activeComponent" 
            :compData="passData" >
        </component>
    </div>
    `,

    components: {
        website: TheWebsite,
        gallery: TheGallery,
        motion: TheMotion,
        featured: TheFeatured
    }
}