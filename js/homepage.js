const root = document.documentElement;
const marqueeElementDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);


/* this code will make sure the youtube videos will repeat, 
not having to hard code for each youtube video to repeat in the scroll */
for (let i=0; i<marqueeElementDisplayed; i++){
	marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));

}