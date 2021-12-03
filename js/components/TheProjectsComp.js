import TheDetail from "./TheDetailComp.js";
import TheGallery from "./TheGalleryComp.js";

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
        <img :src='"images/" + piece.heroPic' alt="piece.title" id="projPic1">
		<h2 id="projTitle">{{ piece.title }}</h2>
		<p id="projYear">{{ piece.year }}</p>
		<p id="projCategory">{{ piece.category }}</p>
		<p id="projRole">{{ piece.role }}</p>
		<p id="projDesc1">{{ piece.descMain }}</p>
        <component 
            v-if="piece.mediaType" 
            :is="activeComponent" 
            :compData="passData" >
        </component>
    </div>
    `,

    components: {
        detail: TheDetail,
        gallery: TheGallery
    }
}