export default {
    name: "TheDefaultComp",

    props: ["compData"],

    template:
    `
    <div>
        <img :src='"images/" + compData.heroPic' alt="compData.title" id="projPic1">
		<p id="projYear"><span>Year</span> {{ compData.year }}</p>
		<p id="projCategory"><span>Category</span> {{ compData.category }}</p>
		<p id="projRole"><span>Role</span> {{ compData.role }}</p>
		<p id="projDesc1">{{ compData.descMain }}</p>
        <div id="projPart2">
		    <img :src='"images/" + compData.animePic' alt="compData.title" id="projPic2">
			<p id="projDesc2">{{ compData.desc2 }}</p>
		</div>
		<div id="projPart3">
            <video :src='"video/" + compData.video' controls class="projVideo"></video>
			<p id="projDesc3">{{ compData.desc3 }}</p>
		</div>
    </div>
    `
}