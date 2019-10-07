function toHomepage(){
	clearClick()
	homepage.classList.add("home");
}

document.getElementById("m_story").onclick = function() {clickStory()};

function clickStory() {
	clearClick()
	homepage.classList.add("story");
	m_story.classList.add("clickMenu");
}

document.getElementById("m_history").onclick = function() {clickHistory()};

function clickHistory() {
	clearClick()
	homepage.classList.add("history");
	m_history.classList.add("clickMenu");
}

document.getElementById("m_media").onclick = function() {clickMedia()};

function clickMedia() {
	clearClick()
	homepage.classList.add("media");
	m_media.classList.add("clickMenu");
}

document.getElementById("m_artist").onclick = function() {clickArtist()};

function clickArtist() {
	clearClick()
	homepage.classList.add("artist");
	m_artist.classList.add("clickMenu");

function clearClick(){
	m_story.classList.remove("clickMenu");
	m_history.classList.remove("clickMenu");
	m_media.classList.remove("clickMenu");
	m_artist.classList.remove("clickMenu");
	homepage.classList.remove("story");
	homepage.classList.remove("history");
	homepage.classList.remove("media");
	homepage.classList.remove("artist");
}

// function readArtist(){
// 	document.getElementById("b_artist").href = "artist.html";
// }
