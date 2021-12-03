export default {
    name: "TheThumbnailComp",

    props: ["piece"],
   
    template: `
		  <div class="thumbnail" @click="showmydata">
			  <img :src='"images/" + piece.thumbPic' alt="piece.title" class="projectNav">
		</div>
    `,

    methods: {
        showmydata() {
            this.$emit("showdata", this.piece);
        }
    }

}