export default {
    name: "TheDetailComp",

    props: ["compData"],

    template:
    `
    <div>
        <div id="projPart2">
		    <img :src='"images/" + compData.animePic' alt="compData.title" id="projPic2">
			<p id="projDesc2">{{ compData.desc2 }}</p>
		</div>
		<div id="projPart3">
            <video :src='"video/" + compData.video' controls id="projVideo"></video>
			<p id="projDesc3">{{ compData.desc3 }}</p>
		</div>
    </div>
    `
}