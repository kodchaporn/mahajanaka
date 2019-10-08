function toHomepage(){
	clearClick()
	homepage.classList.add("home");
}

document.getElementById("m_story").onclick = function() {clickStory()};

function clickStory() {
	clearClick()
	homepage.classList.add("story");
	m_story.classList.add("clickMenu");
	m_story.classList.add("lightGreen");
}

document.getElementById("m_history").onclick = function() {clickHistory()};

function clickHistory() {
	clearClick()
	homepage.classList.add("history");
	obj.classList.add("obj-h");
	m_history.classList.add("clickMenu");
	m_history.classList.add("lightOrange");
}

document.getElementById("m_media").onclick = function() {clickMedia()};

function clickMedia() {
	clearClick()
	homepage.classList.add("media");
	m_media.classList.add("clickMenu");
	m_media.classList.add("darkOrange");
}

document.getElementById("m_artist").onclick = function() {clickArtist()};

function clickArtist() {
	clearClick()
	homepage.classList.add("artist");
	m_artist.classList.add("clickMenu");
	m_artist.classList.add("green");
}

function clearClick(){
	m_story.classList.remove("clickMenu");
	m_story.classList.remove("lightGreen");
	m_history.classList.remove("clickMenu");
	m_history.classList.remove("lightOrange");
	m_media.classList.remove("clickMenu");
	m_media.classList.remove("darkOrange");
	m_artist.classList.remove("clickMenu");
	m_artist.classList.remove("green");
	homepage.classList.remove("story");
	homepage.classList.remove("history");
	homepage.classList.remove("media");
	homepage.classList.remove("artist");
	obj.classList.remove("obj-h");
}

// function readArtist(){
// 	document.getElementById("b_artist").href = "artist.html";
// }

document.getElementById("obj").onclick = function() {window.location.href = "history.html";};
