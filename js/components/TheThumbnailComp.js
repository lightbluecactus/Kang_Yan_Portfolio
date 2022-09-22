export default {
    name: "TheThumbnailComp",

    props: ["piece"],
   
    template: `
		  <div class="thumbnail" @click="showmydata">
			  <img :src='"images/" + piece.thumbPic' alt="piece.title" class="projectNav">
		</div>
    `,

    methods: {
        showmydata(event) {
            this.$emit("showdata", this.piece);

            // marks viewed item
            // only controls one projNav at a time, cannot control all
            event.target.style.filter = "brightness(1.7)";
        }
    }

}